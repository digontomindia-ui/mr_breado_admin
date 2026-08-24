import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQuery, u as useQueryClient, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { P as PageHeader, r as request, e as endpoints } from "./router-CKeaDZpC.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as Settings, c as Store, d as Bike, n as MapPin, a3 as Percent, a4 as Grid2x2, m as CreditCard, o as ShieldCheck, a5 as Truck, a6 as Save, a7 as EyeOff, V as Eye } from "../_libs/lucide-react.mjs";
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
const settingsService = {
  restaurant: () => request({ url: endpoints.admin.restaurantSettings, method: "GET" }),
  updateRestaurant: (data) => request({ url: endpoints.admin.restaurantSettings, method: "PUT", data }),
  driver: () => request({ url: endpoints.admin.driverSettings, method: "GET" }),
  updateDriver: (data) => request({ url: endpoints.admin.driverSettings, method: "PUT", data }),
  map: () => request({ url: endpoints.admin.mapSettings, method: "GET" }),
  updateMap: (data) => request({ url: endpoints.admin.mapSettings, method: "PUT", data }),
  commission: () => request({ url: endpoints.admin.commissionSettings, method: "GET" }),
  updateVendorCommission: (data) => request({ url: endpoints.admin.vendorCommissionSettings, method: "PUT", data }),
  updateDriverCommission: (data) => request({ url: endpoints.admin.driverCommissionSettings, method: "PUT", data }),
  platformFee: () => request({ url: endpoints.admin.platformFeeSettings, method: "GET" }),
  updatePlatformFee: (data) => request({ url: endpoints.admin.platformFeeSettings, method: "PUT", data }),
  // Real backend platform settings used by app checkout/payment/takeaway flows.
  // Admin can change Razorpay key id/secret, enable/disable online payment, COD,
  // Mr Breado takeaway, delivery charge rules, rider payout and support details.
  platformAdmin: () => request({ url: endpoints.platform.adminSettings, method: "GET" }),
  updatePlatformAdmin: (data) => request({ url: endpoints.platform.adminSettings, method: "PUT", data })
};
const tabs = [{
  key: "restaurant",
  label: "Restaurant Settings",
  icon: Store
}, {
  key: "driver",
  label: "Driver Settings",
  icon: Bike
}, {
  key: "map",
  label: "Map Settings",
  icon: MapPin
}, {
  key: "commission",
  label: "Admin Commission",
  icon: Percent
}, {
  key: "platform",
  label: "Platform Fee",
  icon: Grid2x2
}, {
  key: "payment",
  label: "Payment & Takeaway",
  icon: CreditCard
}];
const platformDefaults = {
  codEnabled: true,
  onlinePaymentEnabled: false,
  razorpayMode: "TEST",
  razorpayKeyId: "",
  razorpayKeySecret: "",
  razorpaySecretConfigured: false,
  mrBreadoTakeawayEnabled: false,
  takeawayBookingFeePercent: 20,
  deliveryChargePerKm: 8,
  minimumDeliveryCharge: 25,
  maximumDeliveryCharge: 120,
  riderDeliveryPayPerKm: 6,
  minimumRiderDeliveryPay: 20,
  supportEmail: "",
  supportPhone: "",
  businessAddress: "",
  businessLatitude: "",
  businessLongitude: "",
  googleMapsApiKey: "",
  googleMapsApiKeyConfigured: false,
  googleDistanceEnabled: false
};
function SettingsPage() {
  const [tab, setTab] = reactExports.useState("payment");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Settings", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Settings"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "rounded-xl border border-border bg-card p-3 shadow-card", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.key), className: `mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm ${tab === t.key ? "bg-primary/15 text-primary" : "hover:bg-accent"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-4 w-4" }),
        " ",
        t.label
      ] }, t.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "min-w-0 rounded-xl border border-border bg-card p-4 shadow-card md:p-6", children: [
        tab === "restaurant" && /* @__PURE__ */ jsxRuntimeExports.jsx(RestaurantSettings, {}),
        tab === "driver" && /* @__PURE__ */ jsxRuntimeExports.jsx(DriverSettings, {}),
        tab === "map" && /* @__PURE__ */ jsxRuntimeExports.jsx(MapSettings, {}),
        tab === "commission" && /* @__PURE__ */ jsxRuntimeExports.jsx(CommissionSettings, {}),
        tab === "platform" && /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformSettings, {}),
        tab === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentAndTakeawaySettings, {})
      ] })
    ] })
  ] });
}
function useSettingsQuery(key, fn) {
  return useQuery({
    queryKey: ["settings", key],
    queryFn: fn,
    staleTime: 3e4
  });
}
function useSave(key, fn) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      toast.success("Settings saved successfully");
      qc.invalidateQueries({
        queryKey: ["settings", key]
      });
    },
    onError: (e) => toast.error(e.message)
  });
}
function RestaurantSettings() {
  const {
    data
  } = useSettingsQuery("restaurant", settingsService.restaurant);
  const save = useSave("restaurant", settingsService.updateRestaurant);
  const [form, setForm] = reactExports.useState({});
  reactExports.useEffect(() => setForm(data ?? {}), [data]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Restaurant Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Subscription Plan", value: !!form.subscriptionPlanEnabled, onChange: (v) => setForm({
      ...form,
      subscriptionPlanEnabled: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Vendor Document Verification", value: !!form.vendorDocumentVerificationEnabled, onChange: (v) => setForm({
      ...form,
      vendorDocumentVerificationEnabled: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Self Delivery", value: !!form.selfDeliveryEnabled, onChange: (v) => setForm({
      ...form,
      selfDeliveryEnabled: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Restaurant Location Radius", value: form.restaurantLocationRadius ?? "", onChange: (v) => setForm({
      ...form,
      restaurantLocationRadius: Number(v)
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: save.isPending, onClick: () => save.mutate(form) })
  ] });
}
function DriverSettings() {
  const {
    data
  } = useSettingsQuery("driver", settingsService.driver);
  const save = useSave("driver", settingsService.updateDriver);
  const [form, setForm] = reactExports.useState({});
  reactExports.useEffect(() => setForm(data ?? {}), [data]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Driver Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Driver Document Verification", value: !!form.driverDocumentVerificationEnabled, onChange: (v) => setForm({
      ...form,
      driverDocumentVerificationEnabled: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Driver Radius", value: form.driverRadiusKm ?? "", onChange: (v) => setForm({
        ...form,
        driverRadiusKm: Number(v)
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Driver Location Update", value: form.driverLocationUpdateSeconds ?? "", onChange: (v) => setForm({
        ...form,
        driverLocationUpdateSeconds: Number(v)
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fare per KM", value: form.farePerKm ?? "", onChange: (v) => setForm({
        ...form,
        farePerKm: Number(v)
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fare MinCharge With KM", value: form.fareMinChargeWithKm ?? "", onChange: (v) => setForm({
        ...form,
        fareMinChargeWithKm: Number(v)
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fare Minimum Charge", value: form.fareMinimumCharge ?? "", onChange: (v) => setForm({
        ...form,
        fareMinimumCharge: Number(v)
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Delivery Charges", value: !!form.deliveryChargeEnabled, onChange: (v) => setForm({
      ...form,
      deliveryChargeEnabled: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: save.isPending, onClick: () => save.mutate(form) })
  ] });
}
function MapSettings() {
  const {
    data
  } = useSettingsQuery("map", settingsService.map);
  const save = useSave("map", settingsService.updateMap);
  const [form, setForm] = reactExports.useState({});
  reactExports.useEffect(() => setForm(data ?? {}), [data]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Map Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Google Map Key", value: form.googleMapKey ?? "", onChange: (v) => setForm({
      ...form,
      googleMapKey: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Type", value: form.provider ?? "OSM", onChange: (v) => setForm({
      ...form,
      provider: v
    }), options: ["OSM", "GOOGLE"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: save.isPending, onClick: () => save.mutate(form) })
  ] });
}
function CommissionSettings() {
  const {
    data
  } = useSettingsQuery("commission", settingsService.commission);
  const vendorSave = useSave("commission", settingsService.updateVendorCommission);
  const driverSave = useSave("commission", settingsService.updateDriverCommission);
  const [vendor, setVendor] = reactExports.useState({});
  const [driver, setDriver] = reactExports.useState({});
  reactExports.useEffect(() => {
    setVendor({
      type: data?.["vendor.type"] ?? data?.vendor?.type ?? "FIXED",
      value: data?.["vendor.value"] ?? data?.vendor?.value ?? 15,
      active: data?.["vendor.active"] ?? data?.vendor?.active ?? true
    });
    setDriver({
      type: data?.["driver.type"] ?? data?.driver?.type ?? "PERCENTAGE",
      value: data?.["driver.value"] ?? data?.driver?.value ?? 20,
      active: data?.["driver.active"] ?? data?.driver?.active ?? true
    });
  }, [data]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Admin Commission Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Vendor Admin Commission" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Commission Type", value: vendor.type, onChange: (v) => setVendor({
        ...vendor,
        type: v
      }), options: ["FIXED", "PERCENTAGE"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Admin Commission", value: vendor.value ?? "", onChange: (v) => setVendor({
        ...vendor,
        value: Number(v)
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Status", value: !!vendor.active, onChange: (v) => setVendor({
      ...vendor,
      active: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: vendorSave.isPending, onClick: () => vendorSave.mutate(vendor) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Driver Admin Commission" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Commission Type", value: driver.type, onChange: (v) => setDriver({
        ...driver,
        type: v
      }), options: ["FIXED", "PERCENTAGE"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Admin Commission", value: driver.value ?? "", onChange: (v) => setDriver({
        ...driver,
        value: Number(v)
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Status", value: !!driver.active, onChange: (v) => setDriver({
      ...driver,
      active: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: driverSave.isPending, onClick: () => driverSave.mutate(driver) })
  ] });
}
function PlatformSettings() {
  const {
    data
  } = useSettingsQuery("platform", settingsService.platformFee);
  const save = useSave("platform", settingsService.updatePlatformFee);
  const [form, setForm] = reactExports.useState({});
  reactExports.useEffect(() => setForm(data ?? {}), [data]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Platform Fee Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Platform Fee", value: form.platformFee ?? "", onChange: (v) => setForm({
      ...form,
      platformFee: Number(v)
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Platform Fee Status", value: !!form.platformFeeActive, onChange: (v) => setForm({
      ...form,
      platformFeeActive: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Packaging Fee", value: !!form.packagingFeeActive, onChange: (v) => setForm({
      ...form,
      packagingFeeActive: v
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: save.isPending, onClick: () => save.mutate(form) })
  ] });
}
function PaymentAndTakeawaySettings() {
  const {
    data,
    isLoading
  } = useSettingsQuery("platform-payment", settingsService.platformAdmin);
  const save = useSave("platform-payment", settingsService.updatePlatformAdmin);
  const [form, setForm] = reactExports.useState(platformDefaults);
  const [showSecret, setShowSecret] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!data) return;
    setForm({
      ...platformDefaults,
      ...data,
      razorpayKeySecret: "",
      supportEmail: data.supportEmail ?? "",
      supportPhone: data.supportPhone ?? "",
      businessAddress: data.businessAddress ?? "",
      businessLatitude: data.businessLatitude ?? "",
      businessLongitude: data.businessLongitude ?? "",
      googleMapsApiKey: "",
      googleMapsApiKeyConfigured: data.googleMapsApiKeyConfigured ?? false,
      googleDistanceEnabled: data.googleDistanceEnabled ?? false
    });
  }, [data]);
  const razorpayReady = reactExports.useMemo(() => Boolean(form.razorpayKeyId) && (Boolean(form.razorpayKeySecret) || Boolean(form.razorpaySecretConfigured)), [form.razorpayKeyId, form.razorpayKeySecret, form.razorpaySecretConfigured]);
  const set = (key, value) => setForm((current) => ({
    ...current,
    [key]: value
  }));
  const numberSet = (key, value) => set(key, value === "" ? "" : Number(value));
  const payload = () => ({
    codEnabled: Boolean(form.codEnabled),
    onlinePaymentEnabled: Boolean(form.onlinePaymentEnabled),
    razorpayMode: form.razorpayMode || "TEST",
    razorpayKeyId: optionalText(form.razorpayKeyId),
    razorpayKeySecret: optionalText(form.razorpayKeySecret),
    mrBreadoTakeawayEnabled: Boolean(form.mrBreadoTakeawayEnabled),
    takeawayBookingFeePercent: moneyNumber(form.takeawayBookingFeePercent, 20),
    deliveryChargePerKm: moneyNumber(form.deliveryChargePerKm, 8),
    minimumDeliveryCharge: moneyNumber(form.minimumDeliveryCharge, 25),
    maximumDeliveryCharge: moneyNumber(form.maximumDeliveryCharge, 120),
    riderDeliveryPayPerKm: moneyNumber(form.riderDeliveryPayPerKm, 6),
    minimumRiderDeliveryPay: moneyNumber(form.minimumRiderDeliveryPay, 20),
    supportEmail: optionalText(form.supportEmail),
    supportPhone: optionalText(form.supportPhone),
    businessAddress: optionalText(form.businessAddress),
    businessLatitude: optionalNumber(form.businessLatitude),
    businessLongitude: optionalNumber(form.businessLongitude),
    googleMapsApiKey: optionalText(form.googleMapsApiKey),
    googleDistanceEnabled: Boolean(form.googleDistanceEnabled)
  });
  const onSave = () => {
    if (!form.codEnabled && !form.onlinePaymentEnabled) {
      toast.error("Keep at least one payment method enabled.");
      return;
    }
    if (form.mrBreadoTakeawayEnabled && !form.onlinePaymentEnabled) {
      toast.error("Enable online payment before enabling takeaway.");
      return;
    }
    if (form.onlinePaymentEnabled && !razorpayReady) {
      toast.error("Add Razorpay Key ID and Secret Key before enabling online payment.");
      return;
    }
    save.mutate(payload());
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Payment & Takeaway Settings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 animate-pulse rounded-xl bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 animate-pulse rounded-xl bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 animate-pulse rounded-xl bg-muted md:col-span-2" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Payment & Takeaway Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Production payment control" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-5", children: "These settings are used by the customer app checkout flow. Online payment is available only when it is enabled and Razorpay credentials are configured. Secret key is never shown after saving; enter a new secret only when you want to replace it." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }), title: "Online Payment", active: !!form.onlinePaymentEnabled && razorpayReady, activeText: "Enabled", inactiveText: form.onlinePaymentEnabled ? "Credentials needed" : "Disabled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }), title: "Razorpay Secret", active: !!form.razorpaySecretConfigured || !!form.razorpayKeySecret, activeText: "Configured", inactiveText: "Not configured" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-5 w-5" }), title: "Mr Breado Takeaway", active: !!form.mrBreadoTakeawayEnabled, activeText: "Enabled", inactiveText: "Disabled" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Gateway, { title: "Payment Availability", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Cash on Delivery", value: !!form.codEnabled, onChange: (v) => set("codEnabled", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Online Payment", value: !!form.onlinePaymentEnabled, onChange: (v) => set("onlinePaymentEnabled", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Mr Breado Takeaway", value: !!form.mrBreadoTakeawayEnabled, onChange: (v) => set("mrBreadoTakeawayEnabled", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Razorpay Mode", value: form.razorpayMode ?? "TEST", onChange: (v) => set("razorpayMode", v), options: ["TEST", "LIVE"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Gateway, { title: "Razorpay Credentials", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Razorpay Key ID", value: form.razorpayKeyId ?? "", onChange: (v) => set("razorpayKeyId", v), placeholder: "rzp_test_xxxxx or rzp_live_xxxxx" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SecretField, { label: "Razorpay Secret Key", value: form.razorpayKeySecret ?? "", visible: showSecret, configured: !!form.razorpaySecretConfigured, onToggle: () => setShowSecret(!showSecret), onChange: (v) => set("razorpayKeySecret", v) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Gateway, { title: "Takeaway & Delivery Charges", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Takeaway Booking Fee (%)", type: "number", value: form.takeawayBookingFeePercent ?? "", onChange: (v) => numberSet("takeawayBookingFeePercent", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Customer Delivery Charge / KM (₹)", type: "number", value: form.deliveryChargePerKm ?? "", onChange: (v) => numberSet("deliveryChargePerKm", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Minimum Delivery Charge (₹)", type: "number", value: form.minimumDeliveryCharge ?? "", onChange: (v) => numberSet("minimumDeliveryCharge", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Maximum Delivery Charge (₹)", type: "number", value: form.maximumDeliveryCharge ?? "", onChange: (v) => numberSet("maximumDeliveryCharge", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Rider Pay / KM (₹)", type: "number", value: form.riderDeliveryPayPerKm ?? "", onChange: (v) => numberSet("riderDeliveryPayPerKm", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Minimum Rider Pay (₹)", type: "number", value: form.minimumRiderDeliveryPay ?? "", onChange: (v) => numberSet("minimumRiderDeliveryPay", v) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Gateway, { title: "Google Maps Distance API", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Use Google distance calculation when key is configured", value: !!form.googleDistanceEnabled, onChange: (v) => set("googleDistanceEnabled", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Google Maps API Key", value: form.googleMapsApiKey ?? "", onChange: (v) => set("googleMapsApiKey", v), placeholder: form.googleMapsApiKeyConfigured ? "Key already configured. Leave blank to keep existing." : "AIza..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-background p-3 text-xs leading-5 text-muted-foreground md:col-span-2 xl:col-span-3", children: "The key is stored only on the backend. Customer apps receive calculated distance and delivery charge, never the API key. If Google distance fails, backend should fall back to safe haversine calculation and return a clear distance-unavailable message when needed." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Gateway, { title: "Business Support Details", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Support Email", value: form.supportEmail ?? "", onChange: (v) => set("supportEmail", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Support Phone", value: form.supportPhone ?? "", onChange: (v) => set("supportPhone", v), placeholder: "10 digit mobile number" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Business Latitude", type: "number", value: form.businessLatitude ?? "", onChange: (v) => set("businessLatitude", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Business Longitude", type: "number", value: form.businessLongitude ?? "", onChange: (v) => set("businessLongitude", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium md:col-span-2 xl:col-span-3", children: [
        "Business Address",
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.businessAddress ?? "", onChange: (e) => set("businessAddress", e.target.value), className: "mt-1 min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SaveButton, { loading: save.isPending, onClick: onSave, label: "Save Payment Settings" })
  ] });
}
function optionalText(value) {
  const text = value == null ? "" : String(value).trim();
  return text.length ? text : null;
}
function optionalNumber(value) {
  if (value === "" || value == null) return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}
function moneyNumber(value, fallback) {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}
function Panel({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: title }),
    children
  ] });
}
function Gateway({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-b border-border pb-5 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value: value ?? "", placeholder, onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
  ] });
}
function SecretField({
  label,
  value,
  onChange,
  visible,
  onToggle,
  configured
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex overflow-hidden rounded-md border border-border bg-background focus-within:border-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: visible ? "text" : "password", value: value ?? "", placeholder: configured ? "Secret already configured. Leave blank to keep existing." : "Enter Razorpay secret key", onChange: (e) => onChange(e.target.value), className: "min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onToggle, className: "border-l border-border px-3 text-muted-foreground hover:text-foreground", children: visible ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
    ] })
  ] });
}
function SelectField({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: value ?? "", onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o)) })
  ] });
}
function Toggle({
  label,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-background p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex cursor-pointer items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: value, onChange: (e) => onChange(e.target.checked), className: "peer sr-only" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-5 w-9 rounded-full bg-muted transition peer-checked:bg-primary after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-4" })
    ] })
  ] });
}
function SaveButton({
  onClick,
  loading,
  label = "Save"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: loading, onClick, className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow disabled:cursor-not-allowed disabled:opacity-60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
    loading ? "Saving..." : label
  ] }) });
}
function StatusCard({
  icon,
  title,
  active,
  activeText,
  inactiveText
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl border p-4 ${active ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-border bg-background text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-semibold", children: [
      icon,
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-1 text-xs font-bold ${active ? "bg-emerald-600 text-white" : "bg-muted text-foreground"}`, children: active ? activeText : inactiveText })
  ] }) });
}
export {
  SettingsPage as component
};
