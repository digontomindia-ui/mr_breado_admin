import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as cn, e as endpoints, r as request } from "./router-CKeaDZpC.mjs";
import "../_libs/sonner.mjs";
import { B as Bell, ag as RefreshCw, t as Search, a1 as CircleCheck, l as Ticket, ah as ShieldAlert, ai as UserRound, N as Clock3 } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
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
const unwrapList = (value) => {
  if (Array.isArray(value)) return value;
  const data = value?.data ?? value?.items ?? value?.content ?? value?.notifications ?? value?.results;
  if (Array.isArray(data)) return data;
  if (data && typeof data === "object") return unwrapList(data);
  return [];
};
const notificationsService = {
  async list() {
    const candidates = [
      "/admin/notifications",
      "/admin/notifications/list",
      "/admin/notifications/all",
      "/admin/reports/notifications",
      endpoints.admin.supportTicketToday
    ];
    for (const url of candidates) {
      try {
        const response = await request({ url, method: "GET", params: { page: 1, per_page: 50, perPage: 50 } });
        const list = unwrapList(response);
        if (list.length || url === candidates[candidates.length - 1]) {
          return list.map((item, index) => ({
            id: item.id ?? item.ticketId ?? item.ticket_id ?? index,
            title: item.title ?? item.subject ?? item.issue ?? "Admin notification",
            message: item.message ?? item.body ?? item.description ?? item.issue ?? "New platform activity needs attention.",
            type: item.type ?? item.targetType ?? item.target_type ?? item.userType ?? "SYSTEM",
            status: item.status ?? "UNREAD",
            read: item.read ?? item.isRead ?? false,
            createdAt: item.createdAt ?? item.created_at ?? item.createdDate ?? item.created_at
          }));
        }
      } catch (_) {
      }
    }
    return [];
  }
};
const getTime = (item) => item.createdAt ?? item.created_at ?? "";
const getMessage = (item) => item.message ?? item.body ?? "New platform activity needs attention.";
const getTitle = (item) => item.title ?? "Admin notification";
const isUnread = (item) => !(item.read ?? item.isRead ?? false) && !["READ", "RESOLVED"].includes((item.status ?? "").toUpperCase());
function NotificationsPage() {
  const [search, setSearch] = reactExports.useState("");
  const {
    data = [],
    isLoading,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["admin-notifications"],
    queryFn: notificationsService.list,
    refetchInterval: 3e4
  });
  const filtered = reactExports.useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return data;
    return data.filter((item) => `${getTitle(item)} ${getMessage(item)} ${item.type ?? ""} ${item.status ?? ""}`.toLowerCase().includes(term));
  }, [data, search]);
  const unreadCount = data.filter(isUnread).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-primary/15 text-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Notifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Support reports, verification events, order alerts and system notices." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card px-4 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Unread:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: unreadCount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => refetch(), className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: cn("h-4 w-4", isFetching && "animate-spin") }),
          " Refresh"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Notification center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Click support tickets to manage replies and status." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search notifications...", className: "h-10 w-full rounded-xl border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-primary" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading notifications..." }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: "No notifications found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "New support tickets, reports and verification activity will appear here." })
      ] }) : filtered.map((item) => {
        const type = (item.type ?? "SYSTEM").toUpperCase();
        const unread = isUnread(item);
        const icon = type.includes("TICKET") || type.includes("CUSTOMER") ? /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, { className: "h-5 w-5" }) : type.includes("VERIFY") ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-5 w-5" });
        const href = type.includes("TICKET") || getTitle(item).toLowerCase().includes("ticket") ? "/tickets" : type.includes("VERIFY") ? "/service-area-verifications" : "/notifications";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: href, className: cn("flex gap-4 p-4 transition hover:bg-accent/70", unread && "bg-primary/5"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid h-11 w-11 shrink-0 place-items-center rounded-2xl border", unread ? "border-primary/40 bg-primary/15 text-primary" : "border-border bg-background text-muted-foreground"), children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: getTitle(item) }),
              unread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary", children: "New" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground", children: type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: getMessage(item) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-3.5 w-3.5" }),
              " ",
              getTime(item) || "Just now"
            ] })
          ] })
        ] }, item.id);
      }) })
    ] })
  ] });
}
export {
  NotificationsPage as component
};
