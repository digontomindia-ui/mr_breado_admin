import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusBadge, r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
import { S as ServerTable } from "./server-table-wEPThqL2.mjs";
import { k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { a as useQuery, u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Plus, T as Tag, y as Pencil, z as Trash2 } from "../_libs/lucide-react.mjs";
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
const couponsService = {
  list: (params = {}) => request({
    url: endpoints.admin.coupons,
    method: "GET",
    params: { page: params.page ?? 1, perPage: params.perPage ?? 20 }
  }),
  create: (body) => request({
    url: endpoints.admin.coupons,
    method: "POST",
    data: body
  }),
  update: (id, body) => request({
    url: endpoints.admin.couponById(id),
    method: "PUT",
    data: body
  }),
  remove: (id) => request({
    url: endpoints.admin.couponById(id),
    method: "DELETE"
  }),
  setStatus: (id, enabled) => request({
    url: endpoints.admin.couponStatus(id),
    method: "PATCH",
    data: { enabled }
  })
};
const couponKeys = {
  all: ["coupons"],
  list: (q) => ["coupons", "list", q]
};
function useCoupons(query) {
  return useQuery({
    queryKey: couponKeys.list(query),
    queryFn: () => couponsService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function useCreateCoupon() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body) => couponsService.create(body),
    onSuccess: () => {
      toast.success("Coupon created");
      qc.invalidateQueries({ queryKey: couponKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useUpdateCoupon() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => couponsService.update(id, body),
    onSuccess: () => {
      toast.success("Coupon updated");
      qc.invalidateQueries({ queryKey: couponKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useDeleteCoupon() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => couponsService.remove(id),
    onSuccess: () => {
      toast.success("Coupon deleted");
      qc.invalidateQueries({ queryKey: couponKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useToggleCouponStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, enabled }) => couponsService.setStatus(id, enabled),
    onSuccess: () => qc.invalidateQueries({ queryKey: couponKeys.all }),
    onError: (e) => toast.error(e.message)
  });
}
function CouponsPage() {
  const [page, setPage] = reactExports.useState(1);
  const [editing, setEditing] = reactExports.useState(null);
  const [isNew, setIsNew] = reactExports.useState(false);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useCoupons({
    page,
    perPage: 20
  });
  const create = useCreateCoupon();
  const update = useUpdateCoupon();
  const del = useDeleteCoupon();
  const toggle = useToggleCouponStatus();
  const items = data?.items ?? [];
  const cols = [{
    key: "code",
    header: "Code",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-primary/10 px-2 py-0.5 font-mono text-primary", children: r.code })
  }, {
    key: "title",
    header: "Title",
    render: (r) => r.title || "—"
  }, {
    key: "type",
    header: "Type",
    render: (r) => r.type || "—"
  }, {
    key: "value",
    header: "Value",
    render: (r) => Number(r.value ?? 0).toFixed(2)
  }, {
    key: "min",
    header: "Min Order",
    render: (r) => `₹${Number(r.minOrderAmount ?? 0).toFixed(2)}`
  }, {
    key: "used",
    header: "Used",
    render: (r) => `${r.usedCount ?? 0}/${r.usageLimit ?? "∞"}`
  }, {
    key: "expires",
    header: "Expires",
    render: (r) => r.expiresAt ? new Date(r.expiresAt).toLocaleDateString() : "—"
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle.mutate({
      id: r.id,
      enabled: !r.enabled
    }), disabled: toggle.isPending, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.enabled ? "Active" : "Inactive" }) })
  }, {
    key: "actions",
    header: "Actions",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setEditing(r);
        setIsNew(false);
      }, className: "rounded p-1.5 text-primary hover:bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        if (window.confirm("Delete this coupon?")) del.mutate(r.id);
      }, disabled: del.isPending, className: "rounded p-1.5 text-destructive hover:bg-destructive/10 disabled:opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Coupons", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Offer Management"
    }, {
      label: "Coupons"
    }], actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setEditing({
        id: 0,
        code: "",
        value: 0
      });
      setIsNew(true);
    }, className: "inline-flex items-center gap-1.5 rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      " Add Coupon"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServerTable, { title: `${data?.total ?? 0} coupons`, columns: cols, items, page, totalPages: data?.total_pages ?? 1, total: data?.total ?? 0, isLoading, isFetching, error, onPageChange: setPage, rowKey: (r) => r.id }),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx(CouponDialog, { coupon: editing, isNew, submitting: create.isPending || update.isPending, onClose: () => setEditing(null), onSubmit: (body) => {
      const action = isNew ? create.mutateAsync(body) : update.mutateAsync({
        id: editing.id,
        body
      });
      action.then(() => setEditing(null)).catch(() => {
      });
    } })
  ] });
}
function CouponDialog({
  coupon,
  isNew,
  onClose,
  onSubmit,
  submitting
}) {
  const [form, setForm] = reactExports.useState({
    code: coupon.code || "",
    title: coupon.title || "",
    description: coupon.description || "",
    type: coupon.type || "PERCENT",
    value: coupon.value ?? 0,
    minOrderAmount: coupon.minOrderAmount ?? 0,
    maxDiscountAmount: coupon.maxDiscountAmount ?? 0,
    usageLimit: coupon.usageLimit ?? 0,
    perUserLimit: coupon.perUserLimit ?? 0,
    expiresAt: coupon.expiresAt,
    enabled: coupon.enabled ?? true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-xl border border-border bg-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: isNew ? "New Coupon" : "Edit Coupon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Code (e.g. SAVE10)", value: form.code, onChange: (e) => setForm({
        ...form,
        code: e.target.value.toUpperCase()
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Title", value: form.title || "", onChange: (e) => setForm({
        ...form,
        title: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-md border border-border bg-background px-3 py-2 text-sm", value: form.type || "PERCENT", onChange: (e) => setForm({
          ...form,
          type: e.target.value
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PERCENT", children: "PERCENT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "FLAT", children: "FLAT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DELIVERY", children: "DELIVERY" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Value", value: form.value, onChange: (e) => setForm({
          ...form,
          value: Number(e.target.value)
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Min order", value: form.minOrderAmount ?? 0, onChange: (e) => setForm({
          ...form,
          minOrderAmount: Number(e.target.value)
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Max discount", value: form.maxDiscountAmount ?? 0, onChange: (e) => setForm({
          ...form,
          maxDiscountAmount: Number(e.target.value)
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Usage limit", value: form.usageLimit ?? 0, onChange: (e) => setForm({
          ...form,
          usageLimit: Number(e.target.value)
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Per user limit", value: form.perUserLimit ?? 0, onChange: (e) => setForm({
          ...form,
          perUserLimit: Number(e.target.value)
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "datetime-local", className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", value: form.expiresAt ? form.expiresAt.slice(0, 16) : "", onChange: (e) => setForm({
        ...form,
        expiresAt: e.target.value ? new Date(e.target.value).toISOString() : void 0
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: !!form.enabled, onChange: (e) => setForm({
          ...form,
          enabled: e.target.checked
        }) }),
        "Enabled"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-md border border-border px-3 py-1.5 text-sm", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting || !form.code, onClick: () => onSubmit(form), className: "rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:opacity-50", children: submitting ? "Saving…" : "Save" })
    ] })
  ] }) });
}
export {
  CouponsPage as component
};
