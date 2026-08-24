import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useProducts, f as useDeleteProduct, g as useToggleProductAvailability, h as useCreateProduct, i as useUpdateProduct, P as PageHeader, p as productsService, S as StatusBadge } from "./router-CKeaDZpC.mjs";
import "../_libs/sonner.mjs";
import { P as Plus, F as FileSpreadsheet, D as Download, e as Utensils, w as LoaderCircle, x as Star, y as Pencil, z as Trash2, E as ChevronLeft, u as ChevronRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
function FoodsPage({
  title,
  source = "admin"
}) {
  const [page, setPage] = reactExports.useState(1);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useProducts({
    page,
    perPage: 20,
    source
  });
  const del = useDeleteProduct();
  const toggle = useToggleProductAvailability();
  const create = useCreateProduct();
  const update = useUpdateProduct();
  const items = data?.items ?? [];
  const totalPages = data?.total_pages ?? 1;
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const blankForm = {
    title: "",
    subtitle: "",
    description: "",
    price: "",
    discountPrice: "",
    categoryName: "",
    foodType: "",
    stockQuantity: "",
    isVeg: true,
    isAvailable: true,
    isBestseller: false,
    smallSizeExtra: "",
    mediumSizeExtra: "",
    largeSizeExtra: "",
    cake500gmExtra: "",
    cake1kgExtra: "",
    cake15kgExtra: "",
    cake2kgExtra: "",
    cakeMessageEnabled: false,
    cakeMessageCharge: "",
    customWeightEnabled: false,
    variantType: "STANDARD",
    image: null
  };
  const [form, setForm] = reactExports.useState(blankForm);
  reactExports.useEffect(() => {
    if (editing) {
      setForm({
        ...blankForm,
        title: editing.title ?? editing.name ?? "",
        subtitle: editing.subtitle ?? "",
        description: editing.description ?? "",
        price: String(editing.price ?? ""),
        discountPrice: String(editing.discountPrice ?? editing.discount_price ?? ""),
        categoryName: editing.categoryName ?? editing.category_name ?? editing.category ?? "",
        foodType: editing.foodType ?? editing.food_type ?? "",
        stockQuantity: String(editing.stockQuantity ?? editing.stock_quantity ?? ""),
        isVeg: Boolean(editing.isVeg ?? editing.veg ?? editing.is_veg ?? true),
        isAvailable: Boolean(editing.isAvailable ?? editing.available ?? editing.is_available ?? true),
        isBestseller: Boolean(editing.isBestseller ?? editing.bestseller ?? editing.is_bestseller ?? false),
        smallSizeExtra: String(editing.smallSizeExtra ?? editing.small_size_extra ?? ""),
        mediumSizeExtra: String(editing.mediumSizeExtra ?? editing.medium_size_extra ?? ""),
        largeSizeExtra: String(editing.largeSizeExtra ?? editing.large_size_extra ?? ""),
        cake500gmExtra: String(editing.cake500gmExtra ?? editing.cake_500gm_extra ?? ""),
        cake1kgExtra: String(editing.cake1kgExtra ?? editing.cake_1kg_extra ?? ""),
        cake15kgExtra: String(editing.cake15kgExtra ?? editing.cake1_5kgExtra ?? editing.cake_1_5kg_extra ?? ""),
        cake2kgExtra: String(editing.cake2kgExtra ?? editing.cake_2kg_extra ?? ""),
        cakeMessageEnabled: Boolean(editing.cakeMessageEnabled ?? editing.cake_message_enabled ?? false),
        cakeMessageCharge: String(editing.cakeMessageCharge ?? editing.cake_message_charge ?? ""),
        customWeightEnabled: Boolean(editing.customWeightEnabled ?? editing.custom_weight_enabled ?? false),
        variantType: editing.variantType ?? editing.variant_type ?? "STANDARD",
        image: null
      });
    } else {
      setForm(blankForm);
    }
  }, [editing]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Menu Management"
    }, {
      label: title
    }], actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setEditing(null);
        setShowForm(true);
      }, className: "inline-flex items-center gap-1.5 rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Item"
      ] }),
      source === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => productsService.downloadTemplate(), className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
        "Template"
      ] }),
      source === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => productsService.exportAdminProducts(), className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
        "Export"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold", children: [
        data?.total ?? 0,
        " products ",
        isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "ml-1 inline h-3 w-3 animate-spin" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-background/40 text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Food" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Restaurant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Availability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: isLoading ? Array.from({
          length: 6
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-full animate-pulse rounded bg-primary/10" }) }) }, i)) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-16 text-center text-destructive", children: error.message }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-16 text-center text-muted-foreground", children: "No products yet" }) }) : items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 hover:bg-accent/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, className: "h-10 w-10 rounded-lg object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-accent", children: "🍽️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                p.title,
                " ",
                p.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800", children: "Featured" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                "#",
                p.id
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: typeof p.restaurant === "object" ? p.restaurant?.name ?? "—" : p.restaurant ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-semibold", children: [
            "₹",
            Number(p.effectivePrice ?? p.effective_price ?? p.price ?? 0).toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle.mutate({
            id: p.id,
            isAvailable: !p.isAvailable,
            source
          }), disabled: toggle.isPending, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: p.isAvailable ? "Active" : "Inactive" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            source !== "seller" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => update.mutate({
              id: p.id,
              payload: {
                featured: !p.isFeatured
              },
              source
            }), className: "rounded p-1.5 text-amber-600 hover:bg-amber-100", title: p.isFeatured ? "Unfeature" : "Mark as featured", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded p-1.5 text-primary hover:bg-primary/10", onClick: () => {
              setEditing(p);
              setShowForm(true);
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
            source !== "seller" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              if (window.confirm(`Delete "${p.title}"?`)) del.mutate({
                id: p.id,
                source
              });
            }, disabled: del.isPending, className: "rounded p-1.5 text-destructive hover:bg-destructive/10 disabled:opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] }) })
        ] }, p.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Page ",
          data?.page ?? page,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: page === 1 || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: page >= totalPages || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalForm, { open: showForm, onClose: () => {
      setShowForm(false);
      setEditing(null);
    }, form, setForm, editing, source, onSave: async () => {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value === void 0 || value === null || value === "") return;
        if (key === "image" && value) fd.append("image", value);
        else if (key !== "image") {
          fd.append(key, String(value));
          const snake = key.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
          if (snake !== key) fd.append(snake, String(value));
        }
      });
      try {
        if (editing) {
          await update.mutateAsync({
            id: editing.id,
            payload: fd,
            source
          });
        } else {
          await create.mutateAsync({
            payload: fd,
            source
          });
        }
        setShowForm(false);
        setEditing(null);
      } catch (e) {
        console.error(e);
      }
    } })
  ] });
}
function ModalForm({
  open,
  onClose,
  form,
  setForm,
  onSave,
  editing,
  source
}) {
  if (!open) return null;
  const isSeller = source === "seller";
  const disabled = isSeller && !!editing;
  const set = (key, value) => setForm((s) => ({
    ...s,
    [key]: value
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl rounded-xl border border-border bg-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: editing ? isSeller ? "Edit Stock" : "Edit Food" : "Add Item" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", value: form.title, onChange: (v) => set("title", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subtitle", value: form.subtitle, onChange: (v) => set("subtitle", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", value: form.categoryName, onChange: (v) => set("categoryName", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Food Type", value: form.foodType, onChange: (v) => set("foodType", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Price", value: form.price, onChange: (v) => set("price", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Discount Price", value: form.discountPrice, onChange: (v) => set("discountPrice", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Stock Quantity", value: form.stockQuantity, onChange: (v) => set("stockQuantity", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
        "Quantity / Variant Type",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.variantType, onChange: (e) => set("variantType", e.target.value), disabled, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 disabled:opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "STANDARD", children: "Standard (Single Unit / Pieces)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PIZZA", children: "Pizza (Sizes: Small, Medium, Large)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CAKE", children: "Cake (Weights: 500gm, 1kg, 1.5kg, 2kg)" })
        ] })
      ] }),
      form.variantType === "PIZZA" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Small Size Extra", value: form.smallSizeExtra, onChange: (v) => set("smallSizeExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Medium Size Extra", value: form.mediumSizeExtra, onChange: (v) => set("mediumSizeExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Large Size Extra", value: form.largeSizeExtra, onChange: (v) => set("largeSizeExtra", v), disabled })
      ] }),
      form.variantType === "CAKE" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 500gm Extra", value: form.cake500gmExtra, onChange: (v) => set("cake500gmExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 1kg Extra", value: form.cake1kgExtra, onChange: (v) => set("cake1kgExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 1.5kg Extra", value: form.cake15kgExtra, onChange: (v) => set("cake15kgExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 2kg Extra", value: form.cake2kgExtra, onChange: (v) => set("cake2kgExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake Message Charge", value: form.cakeMessageCharge, onChange: (v) => set("cakeMessageCharge", v), disabled })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
        "Image",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => set("image", e.target.files?.[0] ?? null), disabled, className: "mt-1 w-full rounded-md border border-input px-3 py-2 disabled:opacity-60" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-3 block text-sm font-medium", children: [
      "Description",
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.description, onChange: (e) => set("description", e.target.value), disabled, className: "mt-1 min-h-24 w-full rounded-md border border-input px-3 py-2 disabled:opacity-60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Veg", value: form.isVeg, onChange: (v) => set("isVeg", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Available", value: form.isAvailable, onChange: (v) => set("isAvailable", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Bestseller", value: form.isBestseller, onChange: (v) => set("isBestseller", v), disabled }),
      form.variantType === "CAKE" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Cake Message", value: form.cakeMessageEnabled, onChange: (v) => set("cakeMessageEnabled", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Custom Weight", value: form.customWeightEnabled, onChange: (v) => set("customWeightEnabled", v), disabled })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-md border border-border px-4 py-2 text-sm hover:bg-accent", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSave, className: "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground", children: "Save" })
    ] })
  ] }) });
}
function Field({
  label,
  value,
  onChange,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value ?? "", onChange: (e) => onChange(e.target.value), disabled, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 disabled:opacity-60" })
  ] });
}
function Toggle({
  label,
  value,
  onChange,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-lg border border-border p-3 text-sm font-medium disabled:opacity-60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: !!value, onChange: (e) => onChange(e.target.checked), disabled })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(FoodsPage, { title: "Foods", source: "seller" });
export {
  FoodsPage,
  SplitComponent as component
};
