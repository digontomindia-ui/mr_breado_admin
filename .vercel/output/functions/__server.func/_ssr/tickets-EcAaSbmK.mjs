import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusBadge } from "./router-CKeaDZpC.mjs";
import { D as DataTable } from "./data-table-5nJyabaT.mjs";
import { u as useSupportTickets, s as supportKeys, a as supportService } from "./use-support-CHH9Kkn3.mjs";
import { u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as Ticket, V as Eye, q as MessageSquare, z as Trash2 } from "../_libs/lucide-react.mjs";
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
function useAcceptSupportTicket() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (id) => supportService.accept(id), onSuccess: () => {
    toast.success("Ticket accepted");
    qc.invalidateQueries({ queryKey: supportKeys.all });
  }, onError: (e) => toast.error(e.message) });
}
function useReplySupportTicket() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, message }) => supportService.reply(id, message),
    onSuccess: () => {
      toast.success("Reply sent to user");
      qc.invalidateQueries({ queryKey: supportKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useDeleteSupportTicket() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (id) => supportService.remove(id), onSuccess: () => {
    toast.success("Ticket deleted");
    qc.invalidateQueries({ queryKey: supportKeys.all });
  }, onError: (e) => toast.error(e.message) });
}
function TicketsPage() {
  const {
    data,
    isLoading
  } = useSupportTickets({
    page: 1,
    perPage: 50
  });
  const accept = useAcceptSupportTicket();
  const del = useDeleteSupportTicket();
  const [selected, setSelected] = reactExports.useState(null);
  const items = data?.items ?? [];
  const cols = [{
    key: "userName",
    header: "User Name",
    render: (r) => r.userName ?? r.user?.name ?? "Unknown User"
  }, {
    key: "employeeName",
    header: "Employee Name",
    render: (r) => r.employeeName ?? r.assignedEmployee?.name ?? "-"
  }, {
    key: "type",
    header: "Type",
    render: (r) => r.userType ?? r.type ?? r.user?.type ?? "Customer"
  }, {
    key: "issue",
    header: "Issue",
    render: (r) => r.issue ?? r.subject ?? "Support Issue"
  }, {
    key: "createdAt",
    header: "CreatedAt",
    render: (r) => r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status })
  }, {
    key: "actions",
    header: "Actions",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(r), className: "rounded p-1.5 text-info hover:bg-info/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected({
        ...r,
        replyMode: true
      }), className: "rounded p-1.5 text-primary hover:bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del.mutate(r.id), className: "rounded p-1.5 text-destructive hover:bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) }),
      String(r.status).toUpperCase() === "PENDING" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => accept.mutate(r.id), className: "rounded-md gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground", children: "Accept" })
    ] })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Support Ticket", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Support Ticket"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { data: items, columns: cols, searchableKeys: ["userName", "employeeName", "issue", "status"], loading: isLoading, title: "Tickets" }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(TicketDetailsModal, { ticket: selected, onClose: () => setSelected(null) })
  ] });
}
function TicketDetailsModal({
  ticket,
  onClose
}) {
  const user = ticket.user ?? {};
  const employee = ticket.assignedEmployee ?? {};
  const reply = useReplySupportTicket();
  const [message, setMessage] = reactExports.useState("");
  const sendReply = () => {
    const text = message.trim();
    if (!text) return;
    reply.mutate({
      id: ticket.id,
      message: text
    }, {
      onSuccess: () => {
        setMessage("");
        onClose();
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl rounded-xl border border-border bg-card p-5 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Support Ticket Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "User Details", rows: {
      Name: ticket.userName ?? user.name,
      Email: user.email,
      PhoneNumber: user.phone
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { title: "Employee Details", rows: {
      Name: ticket.employeeName ?? employee.name ?? "-",
      Email: employee.email ?? "-",
      PhoneNumber: employee.phone ?? "-"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: ticket.issue ?? ticket.subject }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: ticket.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 whitespace-pre-wrap text-sm text-muted-foreground", children: ticket.description ?? "No description provided." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg border border-border bg-background p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: "Reply to user" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "min-h-28 w-full rounded-lg border border-border bg-card p-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20", placeholder: "Write a clear reply. The user will receive this as an app notification." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-md border border-border px-4 py-2 text-sm hover:bg-accent", children: "Close" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendReply, disabled: reply.isPending || !message.trim(), className: "rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50", children: reply.isPending ? "Sending…" : "Send reply" })
    ] })
  ] }) });
}
function Detail({
  title,
  rows
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 rounded-lg border border-border bg-background p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 font-semibold", children: title }),
    Object.entries(rows).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        k,
        " :"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v || "-" })
    ] }, k))
  ] });
}
export {
  TicketsPage as component
};
