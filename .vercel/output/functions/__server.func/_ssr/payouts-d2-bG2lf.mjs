import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusBadge, r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
import { S as ServerTable } from "./server-table-wEPThqL2.mjs";
import { k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { a as useQuery, u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { p as paymentsService } from "./payments.service-C6Sd6FQd.mjs";
import { W as Wallet, Y as Check } from "../_libs/lucide-react.mjs";
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
const settlementsService = {
  list: (params = {}) => request({
    url: endpoints.admin.settlements,
    method: "GET",
    params: { page: params.page ?? 1, perPage: params.perPage ?? 20 }
  }),
  generateWeekly: (restaurantId) => request({
    url: endpoints.admin.generateWeeklySettlement(restaurantId),
    method: "POST"
  }),
  markPaid: (settlementId, body) => request({
    url: endpoints.admin.markSettlementPaid(settlementId),
    method: "POST",
    data: body
  })
};
const settlementKeys = {
  all: ["settlements"],
  list: (q) => ["settlements", "list", q]
};
function useSettlements(query) {
  return useQuery({
    queryKey: settlementKeys.list(query),
    queryFn: () => settlementsService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function useMarkSettlementPaid() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => settlementsService.markPaid(id, body),
    onSuccess: () => {
      toast.success("Settlement marked as paid");
      qc.invalidateQueries({ queryKey: settlementKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function usePaymentsSummary() {
  return useQuery({
    queryKey: ["payments", "summary"],
    queryFn: () => paymentsService.summary(),
    staleTime: 3e4
  });
}
function PayoutsPage() {
  const [page, setPage] = reactExports.useState(1);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useSettlements({
    page,
    perPage: 20
  });
  const {
    data: summary
  } = usePaymentsSummary();
  const markPaid = useMarkSettlementPaid();
  const items = data?.items ?? [];
  const cols = [{
    key: "id",
    header: "Settlement #",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary", children: [
      "#",
      r.id
    ] })
  }, {
    key: "restaurant",
    header: "Restaurant",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.restaurantName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        "#",
        r.restaurantId
      ] })
    ] })
  }, {
    key: "period",
    header: "Period",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
      r.periodStart ? new Date(r.periodStart).toLocaleDateString() : "—",
      " → ",
      r.periodEnd ? new Date(r.periodEnd).toLocaleDateString() : "—"
    ] })
  }, {
    key: "orders",
    header: "Orders",
    render: (r) => r.totalOrders ?? 0
  }, {
    key: "gross",
    header: "Gross",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
      "₹",
      Number(r.grossAmount ?? 0).toFixed(2)
    ] })
  }, {
    key: "commission",
    header: "Commission",
    render: (r) => `₹${Number(r.commissionAmount ?? 0).toFixed(2)}`
  }, {
    key: "payable",
    header: "Payable",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-success", children: [
      "₹",
      Number(r.payableAmount ?? 0).toFixed(2)
    ] })
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status || "PENDING" })
  }, {
    key: "actions",
    header: "Actions",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
      const ref = window.prompt("Payment reference (txn id)?") || "";
      if (ref) markPaid.mutate({
        id: r.id,
        body: {
          paymentMethod: "BANK",
          paymentReference: ref
        }
      });
    }, disabled: markPaid.isPending || r.status === "PAID", className: "rounded p-1.5 text-success hover:bg-success/10 disabled:opacity-40", title: "Mark paid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Restaurant Settlements", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Service Management"
    }, {
      label: "Settlements"
    }] }),
    summary && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: [{
      label: "Total Collected",
      value: `₹${Number(summary.totalCollected ?? 0).toFixed(2)}`
    }, {
      label: "Platform Fee",
      value: `₹${Number(summary.platformFee ?? 0).toFixed(2)}`
    }, {
      label: "Restaurant Payable",
      value: `₹${Number(summary.restaurantPayable ?? 0).toFixed(2)}`
    }, {
      label: "Admin Commission",
      value: `₹${Number(summary.adminCommission ?? 0).toFixed(2)}`
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl font-bold", children: s.value })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServerTable, { title: `${data?.total ?? 0} settlements`, columns: cols, items, page, totalPages: data?.total_pages ?? 1, total: data?.total ?? 0, isLoading, isFetching, error, onPageChange: setPage, rowKey: (r) => r.id })
  ] });
}
export {
  PayoutsPage as component
};
