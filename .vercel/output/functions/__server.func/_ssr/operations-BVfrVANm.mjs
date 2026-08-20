import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusBadge, c as cn, r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { p as paymentsService } from "./payments.service-C6Sd6FQd.mjs";
import { A as Activity, $ as Send, o as ShieldCheck, aa as CircleX } from "../_libs/lucide-react.mjs";
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
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const reportsService = {
  list: (params = {}) => request({
    url: endpoints.admin.restaurantReports,
    method: "GET",
    params: {
      page: params.page ?? 1,
      perPage: params.perPage ?? 20,
      status: params.status,
      search: params.search
    }
  }),
  detail: (id) => request({
    url: `${endpoints.admin.restaurantReports}/${id}`,
    method: "GET"
  }),
  updateStatus: (id, data) => request({
    url: endpoints.admin.reportStatus(id),
    method: "PATCH",
    data
  }),
  approve: (id, reason) => request({
    url: endpoints.admin.reportStatus(id),
    method: "PATCH",
    data: { status: "APPROVED", reason }
  }),
  reject: (id, reason) => request({
    url: endpoints.admin.reportStatus(id),
    method: "PATCH",
    data: { status: "REJECTED", reason }
  }),
  resolve: (id, reason) => request({
    url: endpoints.admin.reportStatus(id),
    method: "PATCH",
    data: { status: "RESOLVED", reason }
  })
};
const messagingService = {
  list: (params = {}) => request({
    url: endpoints.admin.sellerMessages,
    method: "GET",
    params: {
      page: params.page ?? 1,
      perPage: params.perPage ?? 20,
      search: params.search
    }
  }),
  send: (data) => request({
    url: endpoints.admin.sellerMessages,
    method: "POST",
    data
  }),
  markAsRead: (id) => request({
    url: `${endpoints.admin.sellerMessages}/${id}/read`,
    method: "PATCH"
  })
};
const asItems = (data) => data?.items ?? data?.content ?? data?.records ?? data?.accounts ?? data?.transactions ?? data?.reports ?? data?.messages ?? [];
function OperationsPage() {
  const qc = useQueryClient();
  const [sellerId, setSellerId] = reactExports.useState("");
  const [messageTitle, setMessageTitle] = reactExports.useState("");
  const [messageBody, setMessageBody] = reactExports.useState("");
  const paymentSummary = useQuery({
    queryKey: ["ops", "payment-summary"],
    queryFn: paymentsService.summary
  });
  const mrBreadoPayments = useQuery({
    queryKey: ["ops", "mr-breado-payments"],
    queryFn: paymentsService.mrBreado
  });
  const reports = useQuery({
    queryKey: ["ops", "reports"],
    queryFn: () => reportsService.list({
      page: 1,
      perPage: 50
    })
  });
  const messages = useQuery({
    queryKey: ["ops", "seller-messages"],
    queryFn: () => messagingService.list({
      page: 1,
      perPage: 50
    })
  });
  const payoutAccounts = useQuery({
    queryKey: ["ops", "payout-accounts"],
    queryFn: () => request({
      url: endpoints.admin.sellerPayoutAccounts,
      method: "GET",
      params: {
        page: 1,
        perPage: 50
      }
    })
  });
  const sendSellerMessage = useMutation({
    mutationFn: () => messagingService.send({
      sellerId: Number(sellerId),
      title: messageTitle.trim(),
      message: messageBody.trim()
    }),
    onSuccess: () => {
      toast.success("Seller message sent");
      setSellerId("");
      setMessageTitle("");
      setMessageBody("");
      qc.invalidateQueries({
        queryKey: ["ops", "seller-messages"]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const verifyPayout = useMutation({
    mutationFn: ({
      id,
      approved
    }) => request({
      url: endpoints.admin.verifySellerPayout(id),
      method: "PATCH",
      data: {
        approved,
        verified: approved,
        status: approved ? "VERIFIED" : "REJECTED"
      }
    }),
    onSuccess: () => {
      toast.success("Payout account updated");
      qc.invalidateQueries({
        queryKey: ["ops", "payout-accounts"]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const updateReport = useMutation({
    mutationFn: ({
      id,
      status
    }) => reportsService.updateStatus(id, {
      status
    }),
    onSuccess: () => {
      toast.success("Report status updated");
      qc.invalidateQueries({
        queryKey: ["ops", "reports"]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const payouts = asItems(payoutAccounts.data);
  const reportItems = asItems(reports.data);
  const messageItems = asItems(messages.data);
  const paymentRows = asItems(mrBreadoPayments.data);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Real World Operations", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Operations"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "Total Payments", value: money(paymentSummary.data?.totalAmount ?? paymentSummary.data?.totalPayments) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "Online Payments", value: money(paymentSummary.data?.onlineAmount ?? paymentSummary.data?.onlinePayments) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "COD / Pending", value: money(paymentSummary.data?.codAmount ?? paymentSummary.data?.pendingAmount) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Seller Message Center", subtitle: "Same admin-to-seller messaging flow as the app.", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-[120px_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: sellerId, onChange: (e) => setSellerId(e.target.value), placeholder: "Seller ID", className: "rounded-md border border-input bg-background px-3 py-2 text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: messageTitle, onChange: (e) => setMessageTitle(e.target.value), placeholder: "Message title", className: "rounded-md border border-input bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: messageBody, onChange: (e) => setMessageBody(e.target.value), placeholder: "Write message to seller", className: "mt-3 min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: !sellerId || !messageTitle.trim() || !messageBody.trim() || sendSellerMessage.isPending, onClick: () => sendSellerMessage.mutate(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
          " Send Message"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Recent Seller Messages", subtitle: "Backend connected message history.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniList, { loading: messages.isLoading, empty: "No seller messages", rows: messageItems.map((m) => ({
        title: m.title ?? m.subject ?? "Message",
        sub: [m.sellerName ?? m.seller?.name, m.createdAt].filter(Boolean).join(" · "),
        right: m.status ?? "sent"
      })) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 xl:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Restaurant Reports", subtitle: "Review, resolve, approve, or reject seller/customer reports.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b text-left text-xs uppercase text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "Report" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: reports.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-8 text-muted-foreground", colSpan: 3, children: "Loading reports..." }) }) : reportItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-8 text-muted-foreground", colSpan: 3, children: "No reports found" }) }) : reportItems.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.restaurantName ?? r.restaurant?.name ?? r.title ?? `Report #${r.id}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.reason ?? r.message ?? r.description ?? "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status ?? "PENDING" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => updateReport.mutate({
              id: r.id,
              status: "RESOLVED"
            }), children: "Resolve" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => updateReport.mutate({
              id: r.id,
              status: "REJECTED"
            }), children: "Reject" })
          ] }) })
        ] }, r.id)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Seller Payout Accounts", subtitle: "Verify or reject bank/UPI payout accounts.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: payoutAccounts.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Loading payout accounts..." }) : payouts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "No payout accounts found" }) : payouts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.accountHolderName ?? a.sellerName ?? `Account #${a.id}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: [a.bankName, a.upiId, a.ifscCode].filter(Boolean).join(" · ") || "Bank details available in backend" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status ?? (a.verified ? "VERIFIED" : "PENDING") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => verifyPayout.mutate({
            id: a.id,
            approved: true
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mr-1 h-4 w-4" }),
            "Verify"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => verifyPayout.mutate({
            id: a.id,
            approved: false
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "mr-1 h-4 w-4" }),
            "Reject"
          ] })
        ] })
      ] }, a.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Mr Breado Payment Ledger", subtitle: "Admin-side store payment records from backend.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniList, { loading: mrBreadoPayments.isLoading, empty: "No payment ledger rows", rows: paymentRows.map((p) => ({
      title: p.orderNumber ?? p.paymentId ?? p.razorpayPaymentId ?? `Payment #${p.id ?? ""}`,
      sub: [p.customerName, p.paymentType, p.paymentStatus, p.createdAt].filter(Boolean).join(" · "),
      right: money(p.amount ?? p.grandTotal ?? p.totalAmount)
    })) }) }) })
  ] });
}
function MetricCard({
  title,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-semibold", children: value })
  ] });
}
function Panel({
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
    ] }),
    children
  ] });
}
function MiniList({
  rows,
  loading,
  empty
}) {
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Loading..." });
  if (!rows.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: empty });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: rows.slice(0, 8).map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: row.title }),
      row.sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: row.sub })
    ] }),
    row.right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-primary", children: row.right })
  ] }, i)) });
}
function money(value) {
  const n = Number(value ?? 0);
  return `₹${Number.isFinite(n) ? n.toFixed(2) : "0.00"}`;
}
export {
  OperationsPage as component
};
