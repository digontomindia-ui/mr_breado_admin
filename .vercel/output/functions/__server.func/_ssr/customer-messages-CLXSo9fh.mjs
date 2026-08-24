import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PageHeader, r as request, e as endpoints } from "./router-CKeaDZpC.mjs";
import { B as Bell, $ as Send, Y as Check } from "../_libs/lucide-react.mjs";
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
function endpointForReceiver(receiver) {
  switch (receiver) {
    case "CUSTOMERS":
      return endpoints.admin.notifications.sendToCustomers;
    case "SELLERS":
      return endpoints.admin.notifications.sendToSellers;
    case "DRIVERS":
      return endpoints.admin.notifications.sendToDrivers;
    case "ALL":
    default:
      return endpoints.admin.notifications.sendToAll;
  }
}
const customerMessagesService = {
  send: (data) => request({ url: endpoints.admin.customerMessages, method: "POST", data }),
  sendNotification: (payload) => {
    const data = {
      receiver: payload.receiver,
      type: payload.messageType,
      messageType: payload.messageType,
      title: payload.title,
      message: payload.message,
      body: payload.message,
      targetValue: payload.targetValue || void 0,
      target: payload.targetValue || void 0
    };
    return request({ url: endpointForReceiver(payload.receiver), method: "POST", data });
  }
};
const receivers = ["CUSTOMERS", "SELLERS", "DRIVERS", "ALL"];
const messageTypes = ["OFFER", "DEAL", "ISSUE", "SYSTEM"];
function CustomerMessagesPage() {
  const [form, setForm] = reactExports.useState({
    receiver: "CUSTOMERS",
    messageType: "OFFER",
    title: "",
    message: "",
    targetValue: ""
  });
  const send = useMutation({
    mutationFn: () => customerMessagesService.sendNotification(form),
    onSuccess: () => {
      toast.success("Notification sent successfully");
      setForm({
        receiver: "CUSTOMERS",
        messageType: "OFFER",
        title: "",
        message: "",
        targetValue: ""
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const canSend = form.title.trim().length > 0 && form.message.trim().length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Admin Notifications", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Admin Notifications"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl rounded-2xl border border-border bg-card p-5 shadow-card md:p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Send app notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Send offers, app updates, seller notices, driver alerts, or important broadcasts using the same backend flow as the mobile admin app." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/80 bg-background/40 p-4 md:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Receiver" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: receivers.map((receiver) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: form.receiver === receiver, label: label(receiver), onClick: () => setForm((f) => ({
          ...f,
          receiver
        })) }, receiver)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { title: "Message Type", className: "mt-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: messageTypes.map((messageType) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: form.messageType === messageType, label: label(messageType), onClick: () => setForm((f) => ({
          ...f,
          messageType
        })), orange: form.messageType === messageType }, messageType)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid gap-5 lg:grid-cols-[1fr_340px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", placeholder: "Example: Weekend Pizza Deal", value: form.title, onChange: (v) => setForm((f) => ({
              ...f,
              title: v
            })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, { label: "Message", placeholder: "Example: Get 20% off on selected items today only.", value: form.message, onChange: (v) => setForm((f) => ({
              ...f,
              message: v
            })) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Optional target value", placeholder: "Example: product slug, restaurant slug, offer id, order id", value: form.targetValue, onChange: (v) => setForm((f) => ({
              ...f,
              targetValue: v
            })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4 text-primary" }),
              " Preview"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-border bg-background p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-bold text-primary", children: [
                label(form.messageType),
                " · ",
                label(form.receiver)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: form.title || "Weekend Pizza Deal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-muted-foreground", children: form.message || "Get 20% off on selected items today only." }),
              form.targetValue && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
                "Target: ",
                form.targetValue
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: !canSend || send.isPending, onClick: () => send.mutate(), className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow disabled:cursor-not-allowed disabled:opacity-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
              send.isPending ? "Sending..." : "Send Notification"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function label(v) {
  return v.replaceAll("_", " ").toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
}
function SectionTitle({
  title,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `mb-3 text-sm font-bold tracking-tight ${className}`, children: title });
}
function Chip({
  active,
  label: label2,
  onClick,
  orange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `inline-flex min-w-28 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-extrabold uppercase tracking-wide transition-all ${active ? orange ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-primary bg-sidebar text-sidebar-foreground shadow-glow" : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-primary/10"}`, children: [
    active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
    label2
  ] });
}
function Field({
  label: label2,
  value,
  onChange,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-bold", children: [
    label2,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value, onChange: (e) => onChange(e.target.value), placeholder, className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" })
  ] });
}
function TextArea({
  label: label2,
  value,
  onChange,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-bold", children: [
    label2,
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value, onChange: (e) => onChange(e.target.value), placeholder, className: "mt-2 min-h-40 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" })
  ] });
}
export {
  CustomerMessagesPage as component
};
