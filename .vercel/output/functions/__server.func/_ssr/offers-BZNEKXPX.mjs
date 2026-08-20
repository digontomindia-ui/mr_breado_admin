import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
import { k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { a as useQuery, u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Plus, j as Gift, w as LoaderCircle, y as Pencil, z as Trash2, E as ChevronLeft, u as ChevronRight } from "../_libs/lucide-react.mjs";
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
const offersService = {
  list: (params = {}) => request({
    url: endpoints.admin.offers,
    method: "GET",
    params: { page: params.page ?? 1, perPage: params.perPage ?? 20 }
  }),
  create: (body) => request({
    url: endpoints.admin.offers,
    method: "POST",
    data: body
  }),
  update: (id, body) => request({
    url: endpoints.admin.offerById(id),
    method: "PUT",
    data: body
  }),
  remove: (id) => request({
    url: endpoints.admin.offerById(id),
    method: "DELETE"
  }),
  toggleStatus: (id) => request({
    url: endpoints.admin.offerStatus(id),
    method: "PATCH"
  })
};
const offerKeys = {
  all: ["offers"],
  list: (q) => ["offers", "list", q]
};
function useOffers(query) {
  return useQuery({
    queryKey: offerKeys.list(query),
    queryFn: () => offersService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function useCreateOffer() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body) => offersService.create(body),
    onSuccess: () => {
      toast.success("Offer created");
      qc.invalidateQueries({ queryKey: offerKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useUpdateOffer() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => offersService.update(id, body),
    onSuccess: () => {
      toast.success("Offer updated");
      qc.invalidateQueries({ queryKey: offerKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useDeleteOffer() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => offersService.remove(id),
    onSuccess: () => {
      toast.success("Offer deleted");
      qc.invalidateQueries({ queryKey: offerKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useToggleOfferStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => offersService.toggleStatus(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: offerKeys.all }),
    onError: (e) => toast.error(e.message)
  });
}
function OffersPage() {
  const [page, setPage] = reactExports.useState(1);
  const [editing, setEditing] = reactExports.useState(null);
  const [isNew, setIsNew] = reactExports.useState(false);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useOffers({
    page,
    perPage: 12
  });
  const create = useCreateOffer();
  const update = useUpdateOffer();
  const del = useDeleteOffer();
  const toggle = useToggleOfferStatus();
  const raw = data;
  const items = Array.isArray(raw) ? raw : raw?.items ?? [];
  const totalPages = raw?.total_pages ?? 1;
  const total = raw?.total ?? items.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Offers", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Offer Management"
    }, {
      label: "Offers"
    }], actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setEditing({
        id: 0
      });
      setIsNew(true);
    }, className: "inline-flex items-center gap-1.5 rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      " Add Offer"
    ] }) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: Array.from({
      length: 8
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 animate-pulse rounded-xl bg-primary/5" }, i)) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-destructive/40 bg-destructive/5 p-6 text-destructive", children: error.message }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      isFetching && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "inline h-3 w-3 animate-spin" }),
        " Refreshing…"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full rounded-xl border border-border bg-card p-10 text-center text-muted-foreground", children: "No offers yet" }) : items.map((o) => {
        const img = o.imageUrl || o.image || o.banner;
        const enabled = o.enabled ?? o.active ?? true;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-card shadow-card", children: [
          img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: o.title || o.name || "", className: "h-32 w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 items-center justify-center gradient-primary text-5xl", children: "🎁" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: o.title || o.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-xs text-muted-foreground", children: o.description || o.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle.mutate(o.id), disabled: toggle.isPending, className: `rounded-full px-2 py-0.5 text-xs ${enabled ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`, children: enabled ? "Active" : "Inactive" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                  setEditing(o);
                  setIsNew(false);
                }, className: "rounded p-1.5 text-primary hover:bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                  if (window.confirm("Delete this offer?")) del.mutate(o.id);
                }, disabled: del.isPending, className: "rounded p-1.5 text-destructive hover:bg-destructive/10 disabled:opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
              ] })
            ] })
          ] })
        ] }, o.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Page ",
          page,
          " of ",
          totalPages,
          " · ",
          total,
          " offers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: page <= 1 || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: page >= totalPages || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsx(OfferDialog, { offer: editing, isNew, submitting: create.isPending || update.isPending, onClose: () => setEditing(null), onSubmit: (body) => {
      const action = isNew ? create.mutateAsync(body) : update.mutateAsync({
        id: editing.id,
        body
      });
      action.then(() => setEditing(null)).catch(() => {
      });
    } })
  ] });
}
function OfferDialog({
  offer,
  isNew,
  onClose,
  onSubmit,
  submitting
}) {
  const [form, setForm] = reactExports.useState({
    title: offer.title || offer.name || "",
    subtitle: offer.subtitle || "",
    description: offer.description || "",
    imageUrl: offer.imageUrl || offer.image || "",
    discountType: offer.discountType || "PERCENT",
    discountValue: offer.discountValue ?? 0,
    minOrderAmount: offer.minOrderAmount ?? 0,
    enabled: offer.enabled ?? true
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-xl border border-border bg-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: isNew ? "New Offer" : "Edit Offer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Title", value: form.title || "", onChange: (e) => setForm({
        ...form,
        title: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Subtitle", value: form.subtitle || "", onChange: (e) => setForm({
        ...form,
        subtitle: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Image URL", value: form.imageUrl || "", onChange: (e) => setForm({
        ...form,
        imageUrl: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Description", rows: 3, value: form.description || "", onChange: (e) => setForm({
        ...form,
        description: e.target.value
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Discount value", value: form.discountValue ?? 0, onChange: (e) => setForm({
          ...form,
          discountValue: Number(e.target.value)
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "rounded-md border border-border bg-background px-3 py-2 text-sm", placeholder: "Min order amount", value: form.minOrderAmount ?? 0, onChange: (e) => setForm({
          ...form,
          minOrderAmount: Number(e.target.value)
        }) })
      ] }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting || !form.title, onClick: () => onSubmit(form), className: "rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:opacity-50", children: submitting ? "Saving…" : "Save" })
    ] })
  ] }) });
}
export {
  OffersPage as component
};
