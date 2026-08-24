import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, r as request, e as endpoints } from "./router-CKeaDZpC.mjs";
import { S as ServerTable } from "./server-table-C3wGZ1Ak.mjs";
import { k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/sonner.mjs";
import { q as MessageSquare, x as Star } from "../_libs/lucide-react.mjs";
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
const reviewsService = {
  list: (params = {}) => request({
    url: endpoints.admin.reviews,
    method: "GET",
    params: { page: params.page ?? 1, perPage: params.perPage ?? 20 }
  })
};
const reviewKeys = {
  all: ["reviews"],
  list: (q) => ["reviews", "list", q]
};
function useReviews(query) {
  return useQuery({
    queryKey: reviewKeys.list(query),
    queryFn: () => reviewsService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function Rating({
  value
}) {
  const v = Math.round(value ?? 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-warning", children: [
    Array.from({
      length: 5
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-3 w-3 ${i < v ? "fill-current" : "opacity-30"}` }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs text-foreground", children: value ?? 0 })
  ] });
}
function ReviewsPage() {
  const [page, setPage] = reactExports.useState(1);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useReviews({
    page,
    perPage: 20
  });
  const items = data?.items ?? [];
  const cols = [{
    key: "order",
    header: "Order",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-primary", children: r.orderNumber }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        "#",
        r.orderId
      ] })
    ] })
  }, {
    key: "restaurantRating",
    header: "Restaurant",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Rating, { value: r.restaurantRating })
  }, {
    key: "restaurantComment",
    header: "Restaurant comment",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 max-w-md text-xs text-muted-foreground", children: r.restaurantComment || "—" })
  }, {
    key: "driverRating",
    header: "Driver",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Rating, { value: r.driverRating })
  }, {
    key: "driverComment",
    header: "Driver comment",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 max-w-md text-xs text-muted-foreground", children: r.driverComment || "—" })
  }, {
    key: "createdAt",
    header: "Date",
    render: (r) => r.createdAt ? new Date(r.createdAt).toLocaleString() : "—"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Reviews", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Reviews"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServerTable, { title: `${data?.total ?? 0} reviews`, columns: cols, items, page, totalPages: data?.total_pages ?? 1, total: data?.total ?? 0, isLoading, isFetching, error, onPageChange: setPage, rowKey: (r) => r.id })
  ] });
}
export {
  ReviewsPage as component
};
