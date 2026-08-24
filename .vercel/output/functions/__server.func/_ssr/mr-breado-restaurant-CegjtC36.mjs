import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PageHeader, S as StatusBadge, m as mrBreadoService } from "./router-CKeaDZpC.mjs";
import { p as Building2, a6 as Save, H as ToggleRight, J as ToggleLeft } from "../_libs/lucide-react.mjs";
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
const empty = {
  name: "",
  description: "",
  contactNumber: "",
  contactEmail: "",
  address: "",
  city: "",
  state: "",
  country: "India",
  zipcode: "",
  latitude: "",
  longitude: "",
  gstin: "",
  cuisines: "",
  priceForTwo: "",
  orderPreparationTime: "",
  minDeliveryTime: "",
  maxDeliveryTime: "",
  logo: null,
  banner: null,
  image: null
};
function MrBreadoRestaurantPage() {
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["mr-breado", "restaurant"],
    queryFn: mrBreadoService.restaurant
  });
  const [form, setForm] = reactExports.useState(empty);
  reactExports.useEffect(() => {
    if (!data) return;
    setForm({
      ...empty,
      name: data.name ?? "",
      description: data.description ?? "",
      contactNumber: data.contactNumber ?? data.contact_number ?? "",
      contactEmail: data.contactEmail ?? data.contact_email ?? "",
      address: data.address ?? "",
      city: data.city ?? "",
      state: data.state ?? "",
      country: data.country ?? "India",
      zipcode: data.zipcode ?? data.zipCode ?? "",
      latitude: data.latitude ?? "",
      longitude: data.longitude ?? "",
      gstin: data.gstin ?? data.gstinNumber ?? data.gstin_number ?? "",
      cuisines: data.cuisines ?? "",
      priceForTwo: data.priceForTwo ?? data.price_for_two ?? "",
      orderPreparationTime: data.orderPreparationTime ?? data.order_preparation_time ?? "",
      minDeliveryTime: data.minDeliveryTime ?? data.min_delivery_time ?? "",
      maxDeliveryTime: data.maxDeliveryTime ?? data.max_delivery_time ?? ""
    });
  }, [data]);
  const save = useMutation({
    mutationFn: () => {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (v === void 0 || v === null || v === "") return;
        fd.append(k, v);
        const snake = k.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
        if (snake !== k) fd.append(snake, v);
      });
      return mrBreadoService.updateRestaurant(fd);
    },
    onSuccess: () => {
      toast.success("Mr Breado restaurant updated");
      qc.invalidateQueries({
        queryKey: ["mr-breado", "restaurant"]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const status = useMutation({
    mutationFn: (patch) => mrBreadoService.updateRestaurantStatus(patch),
    onSuccess: () => {
      toast.success("Restaurant status updated");
      qc.invalidateQueries({
        queryKey: ["mr-breado", "restaurant"]
      });
    },
    onError: (e) => toast.error(e.message)
  });
  const set = (k, v) => setForm((s) => ({
    ...s,
    [k]: v
  }));
  const isOpen = !!(data?.open ?? data?.isOpen ?? data?.is_open);
  const isVisible = String(data?.visibilityStatus ?? data?.visibility_status ?? "VISIBLE").toUpperCase() !== "HIDDEN";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Mr Breado Restaurant", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Mr Breado Restaurant"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 xl:grid-cols-[1fr_320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "rounded-xl border border-border bg-card p-4 shadow-card md:p-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 animate-pulse rounded-lg bg-primary/10" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Restaurant Name", value: form.name, onChange: (v) => set("name", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "GSTIN", value: form.gstin, onChange: (v) => set("gstin", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contact Number", value: form.contactNumber, onChange: (v) => set("contactNumber", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contact Email", value: form.contactEmail, onChange: (v) => set("contactEmail", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cuisines", value: form.cuisines, onChange: (v) => set("cuisines", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Price For Two", value: form.priceForTwo, onChange: (v) => set("priceForTwo", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preparation Time (min)", value: form.orderPreparationTime, onChange: (v) => set("orderPreparationTime", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Delivery Time Min", value: form.minDeliveryTime, onChange: (v) => set("minDeliveryTime", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Delivery Time Max", value: form.maxDeliveryTime, onChange: (v) => set("maxDeliveryTime", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Zipcode", value: form.zipcode, onChange: (v) => set("zipcode", v) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, { label: "Description", value: form.description, onChange: (v) => set("description", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, { label: "Address", value: form.address, onChange: (v) => set("address", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", value: form.city, onChange: (v) => set("city", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State", value: form.state, onChange: (v) => set("state", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Latitude", value: form.latitude, onChange: (v) => set("latitude", v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Longitude", value: form.longitude, onChange: (v) => set("longitude", v) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileField, { label: "Logo", onChange: (f) => set("logo", f) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileField, { label: "Banner", onChange: (f) => set("banner", f) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileField, { label: "Image", onChange: (f) => set("image", f) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => save.mutate(), className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
          "Save Restaurant"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-4 rounded-xl border border-border bg-card p-4 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Live Controls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Verification", value: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: data?.verificationStatus ?? data?.verification_status ?? "PENDING" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Visibility", value: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: data?.visibilityStatus ?? data?.visibility_status ?? "VISIBLE" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Current Open State", value: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: isOpen ? "OPEN" : "CLOSED" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => status.mutate({
          open: !isOpen,
          isOpen: !isOpen,
          is_open: !isOpen
        }), className: "flex w-full items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent", children: [
          isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "h-4 w-4" }),
          isOpen ? "Close Store" : "Open Store"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => status.mutate({
          visibilityStatus: isVisible ? "HIDDEN" : "VISIBLE",
          visibility_status: isVisible ? "HIDDEN" : "VISIBLE"
        }), className: "w-full rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent", children: isVisible ? "Hide From App" : "Show In App" })
      ] })
    ] })
  ] });
}
function Field({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value ?? "", onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
  ] });
}
function TextArea({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: value ?? "", onChange: (e) => onChange(e.target.value), className: "mt-1 min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
  ] });
}
function FileField({
  label,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => onChange(e.target.files?.[0] ?? null), className: "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
  ] });
}
function Info({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-border p-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] });
}
export {
  MrBreadoRestaurantPage as component
};
