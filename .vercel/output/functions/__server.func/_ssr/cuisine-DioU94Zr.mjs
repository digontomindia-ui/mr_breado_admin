import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as StatusBadge } from "./router-DgvHmUYK.mjs";
import { D as DataTable } from "./data-table-CCv8g25V.mjs";
import { a as useQuery, u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { r as restaurantsService } from "./restaurants.service-CNiS_Twb.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Plus, g as Soup, y as Pencil, z as Trash2 } from "../_libs/lucide-react.mjs";
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
const cuisineKeys = {
  all: ["cuisines"],
  list: (p) => ["cuisines", "list", p]
};
function useCuisines() {
  return useQuery({
    queryKey: cuisineKeys.list({ page: 1, perPage: 100 }),
    queryFn: async () => {
      const res = await restaurantsService.list({ page: 1, perPage: 100 });
      const items = res.items ?? [];
      const set = /* @__PURE__ */ new Set();
      items.forEach((r) => {
        if (Array.isArray(r.cuisines)) r.cuisines.forEach((c) => set.add(c));
        else if (r.cuisines) set.add(String(r.cuisines));
      });
      return Array.from(set).map((name, i) => ({ id: i + 1, name, status: "Active", img: "🍽️" }));
    },
    staleTime: 6e4
  });
}
function useCreateCuisine() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => payload,
    onSuccess: (newItem) => {
      toast.success("Cuisine created");
      qc.setQueriesData(cuisineKeys.list({ page: 1, perPage: 100 }), (old) => {
        if (!old) return old;
        return [newItem, ...old ?? []];
      });
    },
    onError: (e) => toast.error(e?.message ?? "Failed to create cuisine")
  });
}
function useUpdateCuisine() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v) => v,
    onSuccess: (v) => {
      toast.success("Cuisine updated");
      qc.setQueriesData(cuisineKeys.list({ page: 1, perPage: 100 }), (old) => {
        if (!old) return old;
        return (old ?? []).map((it) => it.id === v.id ? { ...it, ...v.payload } : it);
      });
    },
    onError: (e) => toast.error(e?.message ?? "Failed to update cuisine")
  });
}
function useDeleteCuisine() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => id,
    onSuccess: (id) => {
      toast.success("Cuisine deleted");
      qc.setQueriesData(cuisineKeys.list({ page: 1, perPage: 100 }), (old) => {
        if (!old) return old;
        return (old ?? []).filter((it) => it.id !== id);
      });
    },
    onError: (e) => toast.error(e?.message ?? "Failed to delete cuisine")
  });
}
function useToggleCuisineStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v) => v,
    onSuccess: (v) => {
      toast.success("Status updated");
      qc.setQueriesData(cuisineKeys.list({ page: 1, perPage: 100 }), (old) => {
        if (!old) return old;
        return (old ?? []).map((it) => it.id === v.id ? { ...it, status: v.status } : it);
      });
    },
    onError: (e) => toast.error(e?.message ?? "Failed to update status")
  });
}
const SplitComponent = () => {
  const {
    data,
    isLoading,
    error
  } = useCuisines();
  const items = data ?? [];
  const cols = [{
    key: "img",
    header: "Image",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-xl", children: r.img })
  }, {
    key: "name",
    header: "Cuisine Name",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.name })
  }, {
    key: "status",
    header: "Status",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: r.status })
  }, {
    key: "actions",
    header: "Action",
    render: (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex cursor-pointer items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: r.status === "Active", onChange: (e) => toggle.mutate({
          id: r.id,
          status: e.target.checked ? "Active" : "Inactive"
        }), className: "peer sr-only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-5 w-9 rounded-full bg-muted transition peer-checked:bg-primary after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setEditing(r);
        setName(r.name);
        setImg(r.img ?? "🍽️");
        setStatus(r.status ?? "Active");
        setIsOpen(true);
      }, className: "rounded p-1.5 text-primary hover:bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del.mutate(r.id), className: "rounded p-1.5 text-destructive hover:bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
    ] })
  }];
  const create = useCreateCuisine();
  const update = useUpdateCuisine();
  const del = useDeleteCuisine();
  const toggle = useToggleCuisineStatus();
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const [img, setImg] = reactExports.useState("🍽️");
  const [status, setStatus] = reactExports.useState("Active");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Cuisine", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Soup, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Cuisine"
    }], actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
      setEditing(null);
      setName("");
      setImg("🍽️");
      setStatus("Active");
      setIsOpen(true);
    }, className: "inline-flex items-center gap-1.5 rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      " Add Cuisine"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { data: items, columns: cols, searchableKeys: ["name"], title: "All Cuisines", loading: isLoading }),
    isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: editing ? "Edit Cuisine" : "Add Cuisine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
          "Name",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: "mt-1 w-full rounded border px-2 py-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
          "Emoji/Icon",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: img, onChange: (e) => setImg(e.target.value), className: "mt-1 w-full rounded border px-2 py-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm", children: [
          "Status",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "mt-1 w-full rounded border px-2 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Inactive" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsOpen(false), className: "rounded-md px-3 py-1", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            const payload = {
              name,
              img,
              status
            };
            if (editing) update.mutate({
              id: editing.id,
              payload
            });
            else create.mutate({
              id: Date.now(),
              name,
              img,
              status
            });
            setIsOpen(false);
          }, className: "rounded-md bg-primary px-3 py-1 text-white", children: "Save" })
        ] })
      ] })
    ] }) }) : null
  ] });
};
export {
  SplitComponent as component
};
