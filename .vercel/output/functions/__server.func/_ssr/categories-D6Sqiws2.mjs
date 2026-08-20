import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusBadge, r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
import { D as DataTable } from "./data-table-CCv8g25V.mjs";
import { a as useQuery, u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Plus, h as Layers, T as Tag, y as Pencil, z as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
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
const categoriesService = {
  list: (page = 1, perPage = 50) => request({
    url: endpoints.admin.categories,
    method: "GET",
    params: { page, per_page: perPage, perPage }
  }),
  summary: () => request({
    url: endpoints.admin.categorySummary,
    method: "GET"
  }),
  subCategories: (page = 1, perPage = 50) => request({
    url: endpoints.admin.publicSubCategories,
    method: "GET",
    params: { page, per_page: perPage, perPage }
  }),
  foodCategories: (page = 1, perPage = 50) => request({
    url: endpoints.admin.foodCategoriesAdmin,
    method: "GET",
    params: { page, per_page: perPage, perPage }
  }),
  create: (payload) => request({
    url: endpoints.admin.categories,
    method: "POST",
    data: payload
  }),
  update: (id, payload) => request({
    url: endpoints.admin.categoryById(id),
    method: "PUT",
    data: payload
  }),
  remove: (id) => request({
    url: endpoints.admin.categoryById(id),
    method: "DELETE"
  }),
  setStatus: (id, status) => request({
    url: endpoints.admin.categoryStatus(id),
    method: "PATCH",
    data: { status, active: status === "ACTIVE", enabled: status === "ACTIVE" }
  })
};
const categoryKeys = {
  all: ["categories"],
  list: (p) => ["categories", "list", p],
  summary: () => ["categories", "summary"]
};
function useCategories(page = 1, perPage = 50) {
  return useQuery({
    queryKey: categoryKeys.list({ page, perPage }),
    queryFn: () => categoriesService.list(page, perPage),
    staleTime: 3e4
  });
}
function useCategorySummary() {
  return useQuery({
    queryKey: categoryKeys.summary(),
    queryFn: categoriesService.summary,
    staleTime: 3e4
  });
}
function useCreateCategory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => categoriesService.create(payload),
    onSuccess: () => {
      toast.success("Category created");
      qc.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useUpdateCategory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => categoriesService.update(id, payload),
    onSuccess: () => {
      toast.success("Category updated");
      qc.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useDeleteCategory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => categoriesService.remove(id),
    onSuccess: () => {
      toast.success("Category deleted");
      qc.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useToggleCategoryStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => categoriesService.setStatus(id, status),
    onSuccess: () => {
      toast.success("Category status updated");
      qc.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function CategoriesPage() {
  const {
    data,
    isLoading,
    error
  } = useCategories();
  const {
    data: summary
  } = useCategorySummary();
  const items = data?.items ?? [];
  const del = useDeleteCategory();
  const toggle = useToggleCategoryStatus();
  const create = useCreateCategory();
  const update = useUpdateCategory();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [title, setTitle] = reactExports.useState("");
  const [icon, setIcon] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("ACTIVE");
  const cols = [{
    key: "img",
    header: "Image",
    render: (r) => r.image && String(r.image).startsWith("http") ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image, className: "h-10 w-10 rounded-lg object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-xl", children: r.icon ?? r.image ?? "🍽️" })
  }, {
    key: "name",
    header: "Name",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.title ?? r.name })
  }, {
    key: "sub",
    header: "Sub Categories",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-info/15 px-2 py-0.5 text-xs text-info", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
      r.subCategoryCount ?? r.productCount ?? 0
    ] })
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status })
  }, {
    key: "actions",
    header: "Action",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex cursor-pointer items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: r.status === "ACTIVE" || r.active === true || r.enabled === true, onChange: (e) => toggle.mutate({
          id: r.id,
          status: e.target.checked ? "ACTIVE" : "INACTIVE"
        }), className: "peer sr-only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-5 w-9 rounded-full bg-muted transition peer-checked:bg-primary after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setEditing(r);
        setTitle(r.title ?? r.name ?? "");
        setIcon(r.icon ?? r.image ?? "");
        setStatus(r.status ?? "ACTIVE");
        setIsOpen(true);
      }, className: "rounded p-1.5 text-primary hover:bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del.mutate(r.id), className: "rounded p-1.5 text-destructive hover:bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Categories", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Categories"
    }], actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setEditing(null);
      setTitle("");
      setIcon("");
      setStatus("ACTIVE");
      setIsOpen(true);
    }, className: "inline-flex items-center gap-1.5 rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      " Add Category"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [{
      label: "Total Categories",
      value: summary?.totalCategories ?? data?.total ?? items.length,
      color: "bg-primary/15 text-primary"
    }, {
      label: "Active",
      value: summary?.activeCategories ?? items.filter((i) => i.active || i.enabled || i.status === "ACTIVE").length,
      color: "bg-success/15 text-success"
    }, {
      label: "Inactive",
      value: summary?.inactiveCategories ?? items.filter((i) => i.status === "INACTIVE" || i.active === false || i.enabled === false).length,
      color: "bg-destructive/15 text-destructive"
    }, {
      label: "Sub Categories",
      value: summary?.totalSubCategories ?? items.reduce((sum, i) => sum + Number(i.subCategoryCount ?? i.productCount ?? 0), 0),
      color: "bg-info/15 text-info"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-lg ${s.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: s.value })
      ] })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { data: items, columns: cols, searchableKeys: ["name"], title: "All Categories", subtitle: `${data?.total ?? 0} categories`, loading: isLoading }),
    isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: editing ? "Edit Category" : "Add Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
          "Name",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: title, onChange: (e) => setTitle(e.target.value), className: "mt-1 w-full rounded border px-2 py-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
          "Icon / Image",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: icon, onChange: (e) => setIcon(e.target.value), className: "mt-1 w-full rounded border px-2 py-1", placeholder: "emoji or url" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
          "Status",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "mt-1 w-full rounded border px-2 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ACTIVE", children: "ACTIVE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "INACTIVE", children: "INACTIVE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsOpen(false), className: "rounded-md px-3 py-1", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            const payload = {
              title,
              name: title,
              icon,
              image: icon,
              status,
              active: status === "ACTIVE",
              enabled: status === "ACTIVE"
            };
            if (editing) {
              update.mutate({
                id: editing.id,
                payload
              });
            } else {
              create.mutate(payload);
            }
            setIsOpen(false);
          }, className: "rounded-md bg-primary px-3 py-1 text-white", children: "Save" })
        ] })
      ] })
    ] }) }) : null
  ] });
}
export {
  CategoriesPage as component
};
