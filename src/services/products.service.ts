import { downloadBlob, request, saveBlob } from "@/api/client";
import { endpoints } from "@/api/endpoints";
import type { PageResponse, ProductResponse } from "@/types";

export interface ProductsQuery {
  page?: number;
  perPage?: number;
  search?: string;
  source?: "seller" | "admin";
}

function toFormData(payload: Record<string, unknown> | FormData): FormData {
  if (payload instanceof FormData) return payload;
  const fd = new FormData();
  Object.entries(payload).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    if (v instanceof File || v instanceof Blob) fd.append(k, v);
    else fd.append(k, typeof v === "string" ? v : JSON.stringify(v));
  });
  return fd;
}

const isAdmin = (source?: string) => source === "admin";

export const productsService = {
  list: (params: ProductsQuery = {}) => {
    if (params.source === "seller") {
      return request<PageResponse<ProductResponse>>({
        url: "/seller/products",
        method: "GET",
        params: {
          search: params.search || undefined,
        },
      });
    }
    return request<PageResponse<ProductResponse>>({
      url: isAdmin(params.source) ? endpoints.admin.mrBreado.products : endpoints.admin.products,
      method: "GET",
      params: {
        page: params.page ?? 1,
        per_page: params.perPage ?? 20,
        perPage: params.perPage ?? 20,
        search: params.search || undefined,
      },
    });
  },

  detail: (id: number | string, source?: "seller" | "admin") =>
    request<ProductResponse>({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productById(id) : endpoints.admin.productDetails(id),
      method: "GET",
    }),

  create: (payload: Record<string, unknown> | FormData, source: "seller" | "admin" = "admin") =>
    request<ProductResponse>({
      url: source === "seller" ? "/seller/products" : (isAdmin(source) ? endpoints.admin.mrBreado.products : endpoints.admin.products),
      method: "POST",
      data: toFormData(payload),
      headers: { "Content-Type": "multipart/form-data" },
    }),

  update: (id: number | string, payload: Record<string, unknown> | FormData, source: "seller" | "admin" = "admin") => {
    if (source === "seller") {
      let stockQuantity: number | string = 0;
      if (payload instanceof FormData) {
        stockQuantity = payload.get("stockQuantity") || payload.get("stock") || 0;
      } else {
        stockQuantity = payload.stockQuantity || payload.stock || 0;
      }
      return request<ProductResponse>({
        url: `/seller/products/${id}`,
        method: "PUT",
        data: { stockQuantity: Number(stockQuantity) },
      });
    }
    return request<ProductResponse>({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productById(id) : endpoints.admin.productById(id),
      method: "PUT",
      data: toFormData(payload),
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  remove: (id: number | string, source: "seller" | "admin" = "admin") => {
    if (source === "seller") {
      throw new Error("Sellers are not allowed to delete products");
    }
    return request<null>({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productById(id) : endpoints.admin.productById(id),
      method: "DELETE",
    });
  },

  setAvailability: (id: number | string, isAvailable: boolean, source: "seller" | "admin" = "admin") => {
    if (source === "seller") {
      return request<ProductResponse>({
        url: `/seller/products/${id}/availability`,
        method: "PATCH",
        data: { available: isAvailable },
      });
    }
    return request<ProductResponse>({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productAvailability(id) : endpoints.admin.productStock(id),
      method: "PATCH",
      data: { isAvailable, inStock: isAvailable, in_stock: isAvailable },
    });
  },

  downloadTemplate: async () => {
    const blob = await downloadBlob({ url: endpoints.admin.mrBreado.template, method: "GET" });
    saveBlob(blob, "mr-breado-products-template.xlsx");
  },

  exportAdminProducts: async () => {
    const blob = await downloadBlob({ url: endpoints.admin.mrBreado.export, method: "GET" });
    saveBlob(blob, "mr-breado-products.csv");
  },
};
