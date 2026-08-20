import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { j as useDrivers, k as useVerifyDriverDeposit, P as PageHeader, S as StatusBadge, l as driverKeys, n as driversService } from "./router-DgvHmUYK.mjs";
import { u as useTableSearch, S as ServerTable } from "./server-table-wEPThqL2.mjs";
import { d as Bike, V as Eye, m as CreditCard, a1 as CircleCheck, X, o as ShieldCheck } from "../_libs/lucide-react.mjs";
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
function isDriverVerified(r) {
  const status = String(r.verificationStatus ?? "").toUpperCase();
  if (status) return status === "VERIFIED" || status === "APPROVED";
  return r.verified === true;
}
function driverActive(r) {
  return Boolean(r.online || r.available) && isDriverVerified(r) && !r.blocked;
}
function DriversPage() {
  const qc = useQueryClient();
  const [page, setPage] = reactExports.useState(1);
  const [selected, setSelected] = reactExports.useState(null);
  const {
    search,
    setSearch,
    debounced
  } = useTableSearch();
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useDrivers({
    page,
    perPage: 20,
    search: debounced
  });
  const verify = useVerifyDriverDeposit();
  const verification = useMutation({
    mutationFn: ({
      driverId,
      status
    }) => driversService.setVerificationStatus(driverId, status),
    onSuccess: (_, v) => {
      toast.success(v.status === "VERIFIED" ? "Delivery partner verified" : "Delivery partner verification updated");
      qc.invalidateQueries({
        queryKey: driverKeys.all
      });
    },
    onError: () => toast.error("Driver verification could not be updated. Please try again.")
  });
  const cashSettlement = (r) => {
    const amount = Number(window.prompt(`Enter cash settlement amount for ${r.driverName}`, String(Number(r.cashInHand ?? 0).toFixed(2))) || 0);
    if (amount <= 0) return;
    verify.mutate({
      driverId: r.driverId,
      body: {
        amount,
        paymentMethod: "CASH",
        note: "Verified by admin panel"
      }
    });
  };
  const items = data?.items ?? [];
  const cols = [{
    key: "driver",
    header: "Driver",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full gradient-info text-xs font-bold text-primary-foreground", children: (r.driverName || "?").split(" ").map((x) => x[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card ${driverActive(r) ? "bg-success" : "bg-muted-foreground"}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.driverName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "#",
          r.driverId
        ] })
      ] })
    ] })
  }, {
    key: "mobile",
    header: "Mobile",
    render: (r) => r.driverMobile || "—"
  }, {
    key: "online",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: driverActive(r) ? "Active" : "Inactive" })
  }, {
    key: "deliveries",
    header: "Deliveries",
    render: (r) => r.totalDeliveries ?? 0
  }, {
    key: "earnings",
    header: "Earnings",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
      "₹",
      Number(r.totalEarnings ?? 0).toFixed(2)
    ] })
  }, {
    key: "cash",
    header: "Cash in hand",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "₹",
      Number(r.cashInHand ?? 0).toFixed(2),
      " / ₹",
      Number(r.cashLimit ?? 0).toFixed(2)
    ] })
  }, {
    key: "verified",
    header: "Verification",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: isDriverVerified(r) ? "Verified" : r.verificationStatus || "Unverified" })
  }, {
    key: "actions",
    header: "Actions",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(r), className: "inline-flex items-center gap-1.5 rounded-lg border border-info/30 px-3 py-2 text-xs font-bold text-info hover:bg-info/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
        "View"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => cashSettlement(r), disabled: verify.isPending, className: "inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 px-3 py-2 text-xs font-bold text-emerald-500 hover:bg-emerald-500/10 disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4" }),
        "Cash Settlement"
      ] }),
      !isDriverVerified(r) && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => verification.mutate({
        driverId: r.driverId,
        status: "VERIFIED"
      }), disabled: verification.isPending, className: "inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
        "Verify"
      ] })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Delivery Boys", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Delivery Management"
    }, {
      label: "Delivery Boys"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServerTable, { title: `${data?.total ?? 0} drivers`, columns: cols, items, page, totalPages: data?.total_pages ?? 1, total: data?.total ?? 0, isLoading, isFetching, error, onPageChange: setPage, search, onSearchChange: (s) => {
      setSearch(s);
      setPage(1);
    }, searchPlaceholder: "Search drivers...", rowKey: (r) => r.driverId }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(DriverModal, { driver: selected, onClose: () => setSelected(null), onCash: () => cashSettlement(selected), onVerify: () => verification.mutate({
      driverId: selected.driverId,
      status: "VERIFIED"
    }), onUnverify: () => verification.mutate({
      driverId: selected.driverId,
      status: "UNVERIFIED"
    }), busy: verify.isPending || verification.isPending })
  ] });
}
function DriverModal({
  driver,
  onClose,
  onCash,
  onVerify,
  onUnverify,
  busy
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: driver.driverName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Delivery partner #",
          driver.driverId
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-lg border border-border p-2 hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Mobile", value: driver.driverMobile || "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Email", value: driver.driverEmail || "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Verification", value: isDriverVerified(driver) ? "Verified" : driver.verificationStatus || "Unverified" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Status", value: driverActive(driver) ? "Active" : "Inactive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Deliveries", value: String(driver.totalDeliveries ?? 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Rating", value: String(driver.rating ?? 0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Total earnings", value: `₹${Number(driver.totalEarnings ?? 0).toFixed(2)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Cash in hand", value: `₹${Number(driver.cashInHand ?? 0).toFixed(2)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Cash limit", value: `₹${Number(driver.cashLimit ?? 0).toFixed(2)}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onCash, disabled: busy, className: "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4" }),
        "Cash Settlement"
      ] }),
      isDriverVerified(driver) ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onUnverify, disabled: busy, className: "rounded-xl border border-red-500/40 px-5 py-3 text-sm font-bold text-red-500 disabled:opacity-50", children: "Mark Unverified" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onVerify, disabled: busy, className: "inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
        "Verify Driver"
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
  DriversPage as component
};
