import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, D as Dialog, o as DialogContent, q as DialogHeader, s as DialogTitle, t as DialogDescription, S as StatusBadge } from "./router-CKeaDZpC.mjs";
import { u as useTableSearch, S as ServerTable } from "./server-table-C3wGZ1Ak.mjs";
import { u as useUsers, a as userKeys } from "./use-users-L7RbMZsk.mjs";
import { u as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { u as usersService } from "./users.service-BsNa9j9i.mjs";
import "../_libs/sonner.mjs";
import { U as Users, V as Eye } from "../_libs/lucide-react.mjs";
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
function CustomersPage() {
  const [page, setPage] = reactExports.useState(1);
  const [selectedCustomer, setSelectedCustomer] = reactExports.useState(null);
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
  } = useUsers({
    page,
    perPage: 20,
    role: "CUSTOMER",
    search: debounced
  });
  const queryClient = useQueryClient();
  const items = data?.items ?? [];
  const cols = [{
    key: "name",
    header: "Customer",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      r.profileImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.profileImage, alt: r.name, className: "h-9 w-9 rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-xs font-bold text-primary-foreground", children: (r.name || "?").split(" ").map((x) => x[0]).slice(0, 2).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "#",
          r.id
        ] })
      ] })
    ] })
  }, {
    key: "mobile",
    header: "Phone",
    render: (r) => r.mobile || "—"
  }, {
    key: "email",
    header: "Email",
    render: (r) => r.email || "—"
  }, {
    key: "orders",
    header: "Orders",
    render: (r) => r.totalOrders ?? 0
  }, {
    key: "wallet",
    header: "Wallet",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
      "₹",
      Number(r.walletBalance ?? 0).toFixed(2)
    ] })
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.blocked ? "Blocked" : r.enabled ? "Active" : "Inactive" })
  }, {
    key: "actions",
    header: "Actions",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedCustomer(r), className: "rounded p-1.5 text-info hover:bg-info/10", "aria-label": `View ${r.name} details`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
  }];
  async function handleToggleStatus(user, patch) {
    try {
      await usersService.setStatus(user.id, patch);
      queryClient.invalidateQueries({
        queryKey: userKeys.list({
          page,
          perPage: 20,
          role: "CUSTOMER",
          search: debounced
        })
      });
      const updated = await usersService.get(user.id);
      setSelectedCustomer(updated);
    } catch (e) {
      console.error(e);
    }
  }
  async function handleSave(userId, values) {
    try {
      await usersService.update(userId, values);
      queryClient.invalidateQueries({
        queryKey: userKeys.list({
          page,
          perPage: 20,
          role: "CUSTOMER",
          search: debounced
        })
      });
      const updated = await usersService.get(userId);
      setSelectedCustomer(updated);
    } catch (e) {
      console.error(e);
    }
  }
  const [editValues, setEditValues] = reactExports.useState({
    name: "",
    email: "",
    mobile: "",
    phoneNumber: ""
  });
  reactExports.useEffect(() => {
    if (selectedCustomer) {
      setEditValues({
        name: selectedCustomer.name ?? "",
        email: selectedCustomer.email ?? "",
        mobile: selectedCustomer.mobile ?? "",
        phoneNumber: selectedCustomer.phoneNumber ?? ""
      });
    } else {
      setEditValues({
        name: "",
        email: "",
        mobile: "",
        phoneNumber: ""
      });
    }
  }, [selectedCustomer]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Customers", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Customers"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServerTable, { title: `${data?.total ?? 0} customers`, columns: cols, items, page, totalPages: data?.total_pages ?? 1, total: data?.total ?? 0, isLoading, isFetching, error, onPageChange: setPage, search, onSearchChange: (s) => {
      setSearch(s);
      setPage(1);
    }, searchPlaceholder: "Search customers...", rowKey: (r) => r.id }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: Boolean(selectedCustomer), onOpenChange: (open) => {
      if (!open) setSelectedCustomer(null);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Customer details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Review the selected customer profile and account status." })
      ] }),
      selectedCustomer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 rounded-xl border border-border bg-muted/50 p-4", children: [
          selectedCustomer.profileImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedCustomer.profileImage, alt: selectedCustomer.name, className: "h-16 w-16 rounded-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-lg font-bold text-primary-foreground", children: (selectedCustomer.name || "?").split(" ").map((x) => x[0]).slice(0, 2).join("") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold", children: selectedCustomer.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
              "#",
              selectedCustomer.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: selectedCustomer.role || "Customer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleToggleStatus(selectedCustomer, {
              enabled: !selectedCustomer.enabled
            }), className: "rounded-md border border-border px-3 py-1 text-sm hover:bg-accent", children: selectedCustomer.enabled ? "Disable" : "Enable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleToggleStatus(selectedCustomer, {
              blocked: !selectedCustomer.blocked
            }), className: "rounded-md border border-border px-3 py-1 text-sm hover:bg-accent", children: selectedCustomer.blocked ? "Unblock" : "Block" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: selectedCustomer.email || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: selectedCustomer.mobile || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
              "Orders: ",
              selectedCustomer.totalOrders ?? 0
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
              "Wallet: ₹",
              Number(selectedCustomer.walletBalance ?? 0).toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
              "Status: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: selectedCustomer.blocked ? "Blocked" : selectedCustomer.enabled ? "Active" : "Inactive" })
            ] })
          ] })
        ] }),
        selectedCustomer.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Joined" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: new Date(selectedCustomer.createdAt).toLocaleDateString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-wide text-muted-foreground", children: "Edit Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: editValues.name, onChange: (e) => setEditValues((v) => ({
              ...v,
              name: e.target.value
            })), placeholder: "Name", className: "rounded-md border border-input px-3 py-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: editValues.email, onChange: (e) => setEditValues((v) => ({
              ...v,
              email: e.target.value
            })), placeholder: "Email", className: "rounded-md border border-input px-3 py-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: editValues.mobile, onChange: (e) => setEditValues((v) => ({
              ...v,
              mobile: e.target.value
            })), placeholder: "Mobile", className: "rounded-md border border-input px-3 py-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: editValues.phoneNumber, onChange: (e) => setEditValues((v) => ({
              ...v,
              phoneNumber: e.target.value
            })), placeholder: "Phone number", className: "rounded-md border border-input px-3 py-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleSave(selectedCustomer.id, editValues), className: "rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground", children: "Save" }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 text-center text-sm text-muted-foreground", children: "No customer selected." })
    ] }) })
  ] });
}
export {
  CustomersPage as component
};
