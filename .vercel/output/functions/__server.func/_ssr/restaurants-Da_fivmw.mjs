import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PageHeader, S as StatusBadge } from "./router-DgvHmUYK.mjs";
import { u as useTableSearch, S as ServerTable } from "./server-table-wEPThqL2.mjs";
import { u as useRestaurants, r as restaurantKeys } from "./use-restaurants-DH0KHbVX.mjs";
import { r as restaurantsService } from "./restaurants.service-CNiS_Twb.mjs";
import { c as Store, x as Star, V as Eye, o as ShieldCheck, X, ab as Power } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
function isRestaurantVerified(r) {
  const s = String(r.verificationStatus ?? "").toUpperCase();
  return s === "VERIFIED" || s === "APPROVED";
}
function RestaurantsPage() {
  const qc = useQueryClient();
  const [page, setPage] = reactExports.useState(1);
  const {
    search,
    setSearch,
    debounced
  } = useTableSearch();
  const [verification, setVerification] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useRestaurants({
    page,
    perPage: 20,
    search: debounced,
    verificationStatus: verification || void 0
  });
  const verifyMutation = useMutation({
    mutationFn: ({
      id,
      status
    }) => restaurantsService.setVerificationStatus(id, status),
    onSuccess: (_, v) => {
      toast.success(v.status === "VERIFIED" ? "Restaurant verified successfully" : "Restaurant verification updated");
      qc.invalidateQueries({
        queryKey: restaurantKeys.all
      });
    },
    onError: () => toast.error("Restaurant verification could not be updated. Please try again.")
  });
  const items = data?.items ?? [];
  const cols = [{
    key: "name",
    header: "Restaurant",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      r.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.logo, alt: r.name, className: "h-10 w-10 rounded-lg object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-lg", children: "🏪" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "#",
          r.id,
          " · ",
          r.city || "—"
        ] })
      ] })
    ] })
  }, {
    key: "verification",
    header: "Verification",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.verificationStatus || "UNVERIFIED" })
  }, {
    key: "rating",
    header: "Rating",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-warning", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }),
      r.rating ?? 0
    ] })
  }, {
    key: "products",
    header: "Products",
    render: (r) => r.productCount ?? 0
  }, {
    key: "revenue",
    header: "Gross Sales",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
      "₹",
      Number(r.grossSales ?? 0).toFixed(2)
    ] })
  }, {
    key: "payable",
    header: "Payable",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "₹",
      Number(r.restaurantPayable ?? 0).toFixed(2)
    ] })
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.open ? "Active" : "Inactive" })
  }, {
    key: "actions",
    header: "Actions",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(r), className: "inline-flex items-center gap-1.5 rounded-lg border border-info/30 px-3 py-2 text-xs font-bold text-info hover:bg-info/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
        "View"
      ] }),
      !isRestaurantVerified(r) && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => verifyMutation.mutate({
        id: r.id,
        status: "VERIFIED"
      }), disabled: verifyMutation.isPending, className: "inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
        "Verify"
      ] })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Restaurants", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Restaurant Management"
    }, {
      label: "Restaurants"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServerTable, { title: `${data?.total ?? 0} restaurants`, columns: cols, items, page, totalPages: data?.total_pages ?? 1, total: data?.total ?? 0, isLoading, isFetching, error, onPageChange: setPage, search, onSearchChange: (s) => {
      setSearch(s);
      setPage(1);
    }, searchPlaceholder: "Search restaurants...", rowKey: (r) => r.id, filters: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: verification, onChange: (e) => {
      setVerification(e.target.value);
      setPage(1);
    }, className: "rounded-md border border-border bg-background px-2 py-1.5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All verifications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "UNVERIFIED", children: "Unverified" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDING", children: "Pending" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VERIFIED", children: "Verified" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "REJECTED", children: "Rejected" })
    ] }) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(RestaurantModal, { restaurant: selected, onClose: () => setSelected(null), onVerify: () => verifyMutation.mutate({
      id: selected.id,
      status: "VERIFIED"
    }), onUnverify: () => verifyMutation.mutate({
      id: selected.id,
      status: "UNVERIFIED"
    }), busy: verifyMutation.isPending })
  ] });
}
function RestaurantModal({
  restaurant,
  onClose,
  onVerify,
  onUnverify,
  busy
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: restaurant.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Restaurant #",
          restaurant.id,
          " · ",
          restaurant.city || "—"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-lg border border-border p-2 hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Verification", value: restaurant.verificationStatus || "UNVERIFIED" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Visibility", value: restaurant.visibilityStatus || "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Open state", value: restaurant.open ? "Open" : "Closed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Status", value: restaurant.status || "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Rating", value: String(restaurant.rating ?? 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Products", value: String(restaurant.productCount ?? 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Gross sales", value: `₹${Number(restaurant.grossSales ?? 0).toFixed(2)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Admin commission", value: `₹${Number(restaurant.adminCommission ?? 0).toFixed(2)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Payable", value: `₹${Number(restaurant.restaurantPayable ?? 0).toFixed(2)}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-border bg-background/50 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 whitespace-pre-wrap text-sm", children: restaurant.address || "No address returned by backend." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: true, className: "inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-bold text-muted-foreground disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "h-4 w-4" }),
        "Open/Close from Mr Breado Restaurant page"
      ] }),
      isRestaurantVerified(restaurant) ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onUnverify, disabled: busy, className: "rounded-xl border border-red-500/40 px-5 py-3 text-sm font-bold text-red-500 disabled:opacity-50", children: "Mark Unverified" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onVerify, disabled: busy, className: "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
        "Verify Restaurant"
      ] })
    ] })
  ] }) });
}
function Info({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background/50 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 break-words font-semibold", children: value })
  ] });
}
export {
  RestaurantsPage as component
};
