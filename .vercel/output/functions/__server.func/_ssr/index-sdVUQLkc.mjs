import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { v as useDebounce, w as useOrders, x as useOrderAction, y as useOrder, j as useDrivers, z as orderKeys, P as PageHeader, B as formatCurrency, S as StatusBadge, D as Dialog, o as DialogContent, s as DialogTitle, C as DialogClose, m as mrBreadoService } from "./router-CKeaDZpC.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as ShoppingBag, c as Store, w as LoaderCircle, H as ToggleRight, J as ToggleLeft, N as Clock3, t as Search, d as Bike, O as Phone, R as ReceiptText, Q as IndianRupee, n as MapPin, E as ChevronLeft, u as ChevronRight, V as Eye, Y as Check, f as ChefHat, Z as PackageCheck, _ as FileDown, $ as Send, X } from "../_libs/lucide-react.mjs";
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
const ACTIVE_STATUSES = /* @__PURE__ */ new Set(["PENDING", "ACCEPTED", "PREPARING", "READY", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY"]);
const FINAL_STATUSES = /* @__PURE__ */ new Set(["DELIVERED", "CANCELLED", "REJECTED"]);
function normalizeStatus(status) {
  return String(status || "").trim().toUpperCase().replaceAll(" ", "_");
}
function isActiveOrder(order) {
  return ACTIVE_STATUSES.has(normalizeStatus(order.status || order.statusLabel));
}
function asNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}
function actionStorageKey(orderId, action) {
  return `mrbreado:order-action:${orderId}:${action}`;
}
function getStoredAction(orderId, action) {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(actionStorageKey(orderId, action)) === "1";
}
function setStoredAction(orderId, action) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(actionStorageKey(orderId, action), "1");
}
function isActionAlreadyDone(order, action, localDone) {
  if (action === "downloadInvoice") return false;
  const status = normalizeStatus(order.status || order.statusLabel);
  const key = actionStorageKey(order.id, action);
  if (localDone[key] || getStoredAction(order.id, action)) return true;
  if (action === "accept") return status !== "PENDING";
  if (action === "preparing") return ["PREPARING", "READY", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED", "REJECTED"].includes(status);
  if (action === "ready") return ["READY", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED", "REJECTED"].includes(status);
  if (action === "reject") return FINAL_STATUSES.has(status);
  if (action === "sendInvoice") return localDone[key] || getStoredAction(order.id, action);
  if (action === "delivered") return ["DELIVERED", "CANCELLED", "REJECTED"].includes(status);
  return false;
}
function OrdersPage({
  filterStatus,
  title = "All Orders",
  activeOnly = false
}) {
  const qc = useQueryClient();
  const [page, setPage] = reactExports.useState(1);
  const [perPage] = reactExports.useState(20);
  const [search, setSearch] = reactExports.useState("");
  const [localDone, setLocalDone] = reactExports.useState({});
  const dq = useDebounce(search, 300);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useOrders({
    page,
    perPage,
    status: activeOnly ? void 0 : filterStatus
  });
  const action = useOrderAction();
  const [selectedOrderId, setSelectedOrderId] = reactExports.useState(null);
  const orderDetail = useOrder(selectedOrderId ?? void 0);
  const [selectedRiderId, setSelectedRiderId] = reactExports.useState("");
  const [statusToChange, setStatusToChange] = reactExports.useState("");
  const [selectedAction, setSelectedAction] = reactExports.useState(null);
  const driversQuery = useDrivers({
    page: 1,
    perPage: 100
  });
  const driversList = driversQuery.data?.items || [];
  function isDriverVerified(r) {
    const status = String(r.verificationStatus ?? "").toUpperCase();
    if (status) return status === "VERIFIED" || status === "APPROVED";
    return r.verified === true;
  }
  function driverActive(r) {
    return Boolean(r.online || r.available) && isDriverVerified(r) && !r.blocked;
  }
  reactExports.useEffect(() => {
    setSelectedRiderId("");
    setStatusToChange("");
    setSelectedAction(null);
  }, [selectedOrderId]);
  const handleAssignRider = () => {
    if (!selectedOrderId || !selectedRiderId) return;
    setSelectedAction("assignRider");
    action.mutate({
      id: selectedOrderId,
      action: "assignRider",
      riderId: selectedRiderId
    }, {
      onSuccess: () => {
        setSelectedRiderId("");
        setSelectedAction(null);
        qc.invalidateQueries({
          queryKey: orderKeys.all
        });
        qc.invalidateQueries({
          queryKey: orderKeys.detail(selectedOrderId)
        });
      },
      onError: () => setSelectedAction(null)
    });
  };
  const handleForceStatusChange = () => {
    if (!selectedOrderId || !statusToChange) return;
    const confirm = window.confirm(`Are you sure you want to force status change to ${statusToChange}?`);
    if (!confirm) return;
    const reason = window.prompt("Reason for force status change?") || "Admin forced change";
    setSelectedAction("updateStatus");
    action.mutate({
      id: selectedOrderId,
      action: "updateStatus",
      status: statusToChange,
      reason
    }, {
      onSuccess: () => {
        setStatusToChange("");
        setSelectedAction(null);
        qc.invalidateQueries({
          queryKey: orderKeys.all
        });
        qc.invalidateQueries({
          queryKey: orderKeys.detail(selectedOrderId)
        });
      },
      onError: () => setSelectedAction(null)
    });
  };
  const restaurant = useQuery({
    queryKey: ["mr-breado", "restaurant"],
    queryFn: mrBreadoService.restaurant,
    staleTime: 2e4
  });
  const isRestaurantOpen = !!(restaurant.data?.open ?? restaurant.data?.isOpen ?? restaurant.data?.is_open);
  const toggleRestaurant = useMutation({
    mutationFn: () => mrBreadoService.updateRestaurantStatus({
      open: !isRestaurantOpen,
      isOpen: !isRestaurantOpen,
      is_open: !isRestaurantOpen
    }),
    onSuccess: () => {
      toast.success(!isRestaurantOpen ? "Restaurant opened for orders" : "Restaurant closed for new orders");
      qc.invalidateQueries({
        queryKey: ["mr-breado", "restaurant"]
      });
    },
    onError: () => toast.error("Restaurant status could not be updated. Please try again.")
  });
  const items = reactExports.useMemo(() => {
    return (data?.items ?? []).filter((o) => !activeOnly || isActiveOrder(o)).filter((o) => {
      if (!dq) return true;
      const q = dq.toLowerCase();
      return o.orderNumber?.toLowerCase().includes(q) || o.customerName?.toLowerCase().includes(q) || o.customerMobile?.includes(q);
    });
  }, [data?.items, activeOnly, dq]);
  const activeCount = (data?.items ?? []).filter(isActiveOrder).length;
  const totalPages = data?.total_pages ?? data?.totalPages ?? 1;
  const markActionDone = (id, actionName) => {
    if (actionName === "downloadInvoice") return;
    setStoredAction(id, actionName);
    setLocalDone((s) => ({
      ...s,
      [actionStorageKey(id, actionName)]: true
    }));
  };
  const runOrderAction = (vars) => {
    action.mutate(vars, {
      onSuccess: () => markActionDone(vars.id, vars.action)
    });
  };
  reactExports.useEffect(() => {
    if (!orderDetail.data) return;
    qc.invalidateQueries({
      queryKey: orderKeys.list({
        page,
        perPage,
        status: activeOnly ? void 0 : filterStatus
      })
    });
  }, [orderDetail.data?.status]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Orders"
    }, ...activeOnly ? [{
      label: "Active"
    }] : filterStatus ? [{
      label: String(filterStatus)
    }] : []] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-card md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isRestaurantOpen ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Mr Breado order receiving" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Current state: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: isRestaurantOpen ? "Open" : "Closed" }),
            ". Use this to stop or resume new restaurant orders."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleRestaurant.mutate(), disabled: toggleRestaurant.isPending || restaurant.isLoading, className: `inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition disabled:opacity-60 ${isRestaurantOpen ? "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20" : "border-success/30 bg-success/10 text-success hover:bg-success/20"}`, children: [
        toggleRestaurant.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : isRestaurantOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "h-4 w-4" }),
        isRestaurantOpen ? "Close Restaurant" : "Open Restaurant"
      ] })
    ] }),
    activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded-2xl border border-primary/40 bg-primary/10 p-4 shadow-[0_0_35px_rgba(249,115,22,0.20)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold text-primary", children: [
          activeCount,
          " active order",
          activeCount > 1 ? "s" : "",
          " need attention"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Current live orders are highlighted below with a glowing border." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-4 w-4" }),
        " Active now"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold", children: [
          activeOnly ? items.length : data?.total ?? 0,
          " orders ",
          isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "ml-1 inline h-3 w-3 animate-spin" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by order #, name, mobile...", className: "w-64 max-w-full bg-transparent outline-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[1180px] text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-background/40 text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Order #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Rider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: isLoading ? Array.from({
          length: 6
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-full animate-pulse rounded bg-primary/10" }) }) }, i)) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-16 text-center text-muted-foreground", children: "Orders are temporarily unavailable. Please refresh after a moment." }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-16 text-center text-muted-foreground", children: "No orders found" }) }) : items.map((o) => {
          const total = asNumber(o.grandTotal);
          const createdAt = o.createdAt ? new Date(o.createdAt) : null;
          const dateLabel = createdAt && !Number.isNaN(createdAt.getTime()) ? createdAt.toLocaleString() : "—";
          const payment = [o.paymentType, o.paymentStatus].filter(Boolean).join(" · ") || "—";
          const active = isActiveOrder(o);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b border-border/60 transition ${active ? "bg-primary/5 shadow-[inset_4px_0_0_hsl(var(--primary)),0_0_24px_rgba(249,115,22,0.10)]" : "hover:bg-accent/30"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 font-mono text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: o.orderNumber || `#${o.id}` }),
              active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 inline-flex rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-primary", children: "Active" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: o.customerName || "Guest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: o.customerMobile || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-xs", children: payment }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 font-semibold", children: formatCurrency(total) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.statusLabel || o.status || "PENDING" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: o.riderName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o.riderName })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Not Assigned" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-xs text-muted-foreground", children: dateLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderActions, { order: o, isPending: action.isPending, localDone, onView: () => setSelectedOrderId(o.id), onAction: runOrderAction }) })
          ] }, o.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: selectedOrderId != null, onOpenChange: (open) => {
        if (!open) setSelectedOrderId(null);
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[92vh] max-w-5xl overflow-y-auto p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 border-b border-border bg-card px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-bold", children: orderDetail.isLoading ? "Loading Order Details..." : orderDetail.error ? "Order Details" : orderDetail.data?.orderNumber || `Order #${orderDetail.data?.id}` }),
            orderDetail.data && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
              "Placed on ",
              orderDetail.data.createdAt ? new Date(orderDetail.data.createdAt).toLocaleString() : "—"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { className: "rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-accent", children: "Close" })
        ] }) }),
        orderDetail.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) }) : orderDetail.error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-muted-foreground", children: "Order details are temporarily unavailable. Please try again." }) : orderDetail.data ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), title: "Customer", lines: [orderDetail.data.customerName || "Guest", orderDetail.data.customerMobile || "No mobile", orderDetail.data.customerEmail || ""] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptText, { className: "h-4 w-4" }), title: "Payment", lines: [[orderDetail.data.paymentType, orderDetail.data.paymentStatus].filter(Boolean).join(" · ") || "—", `Status: ${orderDetail.data.statusLabel || orderDetail.data.status || "—"}`] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }), title: "Grand Total", lines: [formatCurrency(orderDetail.data.grandTotal), `Subtotal: ${formatCurrency(orderDetail.data.subtotal)}`], big: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4" }), title: "Rider Details", lines: [orderDetail.data.riderName ? `Rider: ${orderDetail.data.riderName}` : "Rider: Not Assigned", `OTP: ${orderDetail.data.deliveryOtp || "—"}`] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-base font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
              " Delivery Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-muted-foreground", children: orderDetail.data.deliveryAddress || "Address not available from backend response." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Order Items" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[720px] text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-background/60 text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Qty" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Total" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (orderDetail.data.items ?? []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "px-4 py-8 text-center text-muted-foreground", children: "No item details returned by backend." }) }) : (orderDetail.data.items ?? []).map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 font-medium", children: it.productName || it.title || it.name || "Food item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-right", children: [
                  "x",
                  it.quantity ?? 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-right", children: formatCurrency(it.price) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-right font-semibold", children: formatCurrency(it.totalPrice ?? asNumber(it.price) * asNumber(it.quantity ?? 1)) })
              ] }, it.id ?? idx)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-4 lg:grid-cols-[1fr_360px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Order Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Order type: ",
                  orderDetail.data.orderType || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Estimated delivery: ",
                  orderDetail.data.estimatedDeliveryMinutes ? `${orderDetail.data.estimatedDeliveryMinutes} mins` : "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Cancelled at: ",
                  orderDetail.data.cancelledAt || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Delivered at: ",
                  orderDetail.data.deliveredAt || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  "Cancellation reason: ",
                  orderDetail.data.cancellationReason || "—"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Bill Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Subtotal", value: orderDetail.data.subtotal }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Delivery charge", value: orderDetail.data.deliveryCharge }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Tax", value: orderDetail.data.tax }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Discount", value: -Math.abs(asNumber(orderDetail.data.discount)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Wallet used", value: -Math.abs(asNumber(orderDetail.data.walletUsed)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-lg font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatCurrency(orderDetail.data.grandTotal) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            orderDetail.data.orderType !== "TAKEAWAY" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-base font-bold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4" }),
                " Assign Rider"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedRiderId, onChange: (e) => setSelectedRiderId(e.target.value), className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a rider..." }),
                  driversList.map((driver) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: driver.mongoId || driver.driverId || driver.id, children: [
                    driver.driverName,
                    " (",
                    driver.driverMobile || "No Mobile",
                    ") ",
                    driverActive(driver) ? "· Active" : ""
                  ] }, driver.driverId))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleAssignRider, disabled: !selectedRiderId || action.isPending, className: "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/95 disabled:opacity-50", children: [
                  action.isPending && selectedAction === "assignRider" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
                  "Assign"
                ] })
              ] }),
              orderDetail.data.riderName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-muted-foreground", children: [
                "Currently assigned to: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: orderDetail.data.riderName })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-base font-bold text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "h-4 w-4" }),
                " Force Status Change"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: statusToChange, onChange: (e) => setStatusToChange(e.target.value), className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select new status..." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RECEIVED", children: "RECEIVED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDING_PAYMENT", children: "PENDING_PAYMENT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ACCEPTED", children: "ACCEPTED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PREPARING", children: "PREPARING" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "READY", children: "READY" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RIDER_ASSIGNMENT_PENDING", children: "RIDER_ASSIGNMENT_PENDING" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RIDER_ASSIGNED", children: "RIDER_ASSIGNED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PICKED_UP", children: "PICKED_UP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "OUT_FOR_DELIVERY", children: "OUT_FOR_DELIVERY" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "REACHED_DROP", children: "REACHED_DROP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DELIVERED", children: "DELIVERED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "REJECTED", children: "REJECTED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELLED", children: "CANCELLED" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleForceStatusChange, disabled: !statusToChange || action.isPending, className: "inline-flex items-center justify-center rounded-lg bg-destructive px-4 py-2 text-sm font-bold text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50", children: [
                  action.isPending && selectedAction === "updateStatus" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
                  "Force Update"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] text-muted-foreground", children: "Bypasses normal state machine transition rules." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 border-t border-border pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderActions, { order: orderDetail.data, isPending: action.isPending, localDone, onView: () => void 0, onAction: runOrderAction, expanded: true }) })
        ] }) : null
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
    ] })
  ] });
}
function OrderActions({
  order,
  isPending,
  localDone,
  onView,
  onAction,
  expanded = false
}) {
  const disabled = (name) => isPending || isActionAlreadyDone(order, name, localDone);
  const reject = () => {
    const reason = window.prompt("Reject reason?") || "";
    if (reason.trim()) onAction({
      id: order.id,
      action: "reject",
      reason
    });
  };
  const cls = expanded ? "flex flex-wrap items-center gap-3" : "flex min-w-[520px] flex-wrap items-center gap-2";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cls, children: [
    !expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "View", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }), onClick: onView, tone: "info" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Accept", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "accept"
    }), tone: "success", disabled: disabled("accept") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Prep", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "preparing"
    }), tone: "warning", disabled: disabled("preparing") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Ready", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "ready"
    }), tone: "primary", disabled: disabled("ready") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Delivered", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "delivered"
    }), tone: "success", disabled: disabled("delivered") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: expanded ? "Download Invoice" : "PDF", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "downloadInvoice",
      orderNumber: order.orderNumber
    }), disabled: isPending }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: expanded ? "Send Invoice" : "Send", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "sendInvoice"
    }), tone: "info", disabled: disabled("sendInvoice") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Reject", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }), onClick: reject, tone: "danger", disabled: disabled("reject") })
  ] });
}
function IconAction({
  label,
  icon,
  onClick,
  disabled,
  tone = "neutral"
}) {
  const toneClass = {
    neutral: "border-border bg-background text-foreground hover:bg-accent",
    info: "border-info/30 bg-info/10 text-info hover:bg-info/20",
    success: "border-success/30 bg-success/10 text-success hover:bg-success/20",
    warning: "border-warning/30 bg-warning/10 text-warning hover:bg-warning/20",
    primary: "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20",
    danger: "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, disabled, className: `inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-40 ${toneClass}`, title: disabled ? `${label} already completed or not available for this status` : label, children: [
    icon,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
  ] });
}
function InfoCard({
  icon,
  title,
  lines,
  big
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [
      icon,
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: big ? "text-2xl font-bold text-primary" : "space-y-1 text-sm font-medium", children: lines.filter(Boolean).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: line }, i)) })
  ] });
}
function SummaryRow({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(value) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(OrdersPage, {});
export {
  OrdersPage,
  SplitComponent as component
};
