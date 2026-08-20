import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PageHeader, S as StatusBadge, a as api, e as endpoints } from "./router-DgvHmUYK.mjs";
import { o as ShieldCheck, n as MapPin, c as Store, d as Bike, a8 as FileText, a9 as ExternalLink, a1 as CircleCheck, aa as CircleX } from "../_libs/lucide-react.mjs";
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
function unwrap(res) {
  return res?.data?.data ?? res?.data ?? res;
}
function asArray(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.content)) return data.content;
  if (Array.isArray(data?.requests)) return data.requests;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.records)) return data.records;
  if (Array.isArray(data?.payload)) return data.payload;
  if (Array.isArray(data?.result)) return data.result;
  return [];
}
function normalizeDocuments(raw) {
  if (Array.isArray(raw?.documents)) return raw.documents;
  const docs = [];
  const fields = [
    ["gstCertificate", "GST Certificate"],
    ["panCard", "PAN Card"],
    ["fssaiLicense", "FSSAI License"],
    ["ownerIdProof", "Owner ID Proof"],
    ["bankProof", "Bank Proof"],
    ["aadhaarFront", "Aadhaar Front"],
    ["aadhaarBack", "Aadhaar Back"],
    ["drivingLicense", "Driving License"],
    ["vehicleRc", "Vehicle RC"],
    ["profilePhoto", "Profile Photo"],
    ["documentUrl", "Document"],
    ["fileUrl", "Document"],
    ["url", "Document"]
  ];
  fields.forEach(([key, label]) => {
    const value = raw?.[key];
    if (typeof value === "string" && value.trim()) docs.push({ name: label, url: value });
  });
  return docs;
}
function normalizeRequest(raw, source) {
  const entityType = String(
    raw?.entityType ?? raw?.entity_type ?? raw?.targetType ?? raw?.target_type ?? raw?.requestType ?? raw?.request_type ?? (source === "RIDER" ? "RIDER" : source === "RESTAURANT" ? "RESTAURANT" : "")
  ).toUpperCase();
  const targetId = raw?.targetId ?? raw?.target_id;
  const requestId = raw?.id ?? raw?.requestId ?? raw?.request_id;
  return {
    ...raw,
    id: requestId ?? raw?.profileId ?? raw?.profile_id ?? raw?.restaurantId ?? raw?.restaurant_id ?? raw?.driverId ?? raw?.driver_id ?? targetId,
    entityType,
    requestType: raw?.requestType ?? raw?.request_type ?? entityType,
    restaurantId: raw?.restaurantId ?? raw?.restaurant_id ?? (entityType.includes("RESTAURANT") ? targetId : void 0),
    riderId: raw?.riderId ?? raw?.rider_id ?? raw?.driverId ?? raw?.driver_id ?? raw?.profileId ?? raw?.profile_id ?? (entityType.includes("RIDER") || entityType.includes("DRIVER") ? targetId : void 0),
    applicantName: raw?.applicantName ?? raw?.applicant_name ?? raw?.ownerName ?? raw?.owner_name ?? raw?.driverName ?? raw?.driver_name ?? raw?.riderName ?? raw?.rider_name ?? raw?.name,
    businessName: raw?.businessName ?? raw?.business_name ?? raw?.restaurantName ?? raw?.restaurant_name ?? raw?.name,
    contactMobile: raw?.contactMobile ?? raw?.contact_mobile ?? raw?.mobile ?? raw?.driverMobile ?? raw?.driver_mobile ?? raw?.phoneNumber ?? raw?.phone_number,
    status: raw?.status ?? raw?.verificationStatus ?? raw?.verification_status ?? "PENDING",
    note: raw?.note ?? raw?.applicantNote ?? raw?.applicant_note,
    createdAt: raw?.createdAt ?? raw?.created_at,
    updatedAt: raw?.updatedAt ?? raw?.updated_at,
    documents: normalizeDocuments(raw),
    source: entityType.includes("RESTAURANT") ? "RESTAURANT" : entityType.includes("RIDER") || entityType.includes("DRIVER") ? "RIDER" : source
  };
}
function filterStatus(items, status) {
  const wanted = String(status || "").toUpperCase();
  if (!wanted) return items;
  return items.filter((x) => String(x.status ?? x.verificationStatus ?? "").toUpperCase() === wanted);
}
const serviceAreaVerificationService = {
  async getServiceArea() {
    const res = await api.get(endpoints.admin.serviceArea);
    return unwrap(res);
  },
  async updateServiceArea(payload) {
    const res = await api.put(endpoints.admin.serviceArea, payload);
    return unwrap(res);
  },
  async listVerifications(status, type) {
    const calls = [];
    if (!type || type === "ALL") {
      const params = { status: status || void 0, targetType: void 0, target_type: void 0, _t: Date.now() };
      calls.push(api.get(endpoints.admin.verifications, { params }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "GENERAL"))).catch(() => []));
      calls.push(api.get(endpoints.admin.verificationsAll, { params }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "GENERAL"))).catch(() => []));
      calls.push(api.get(endpoints.admin.verificationRequestsAlias, { params }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "GENERAL"))).catch(() => []));
      calls.push(api.get(endpoints.admin.serviceAreaVerificationsAlias, { params }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "GENERAL"))).catch(() => []));
    }
    if (!type || type === "ALL" || type === "RESTAURANT") {
      calls.push(api.get(endpoints.admin.verifications, { params: { status: status || void 0, targetType: "RESTAURANT", target_type: "RESTAURANT", _t: Date.now() } }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "RESTAURANT"))).catch(() => []));
      calls.push(api.get(endpoints.admin.restaurantJoinRequests, { params: { status: status || void 0, _t: Date.now() } }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "RESTAURANT"))).catch(() => []));
    }
    if (!type || type === "ALL" || type === "RIDER") {
      calls.push(api.get(endpoints.admin.verifications, { params: { status: status || void 0, targetType: "RIDER", target_type: "RIDER", _t: Date.now() } }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "RIDER"))).catch(() => []));
      calls.push(api.get(endpoints.admin.driverVerificationRequests, { params: { status: status || void 0, _t: Date.now() } }).then((res) => asArray(unwrap(res)).map((x) => normalizeRequest(x, "RIDER"))).catch(() => []));
    }
    const merged = (await Promise.all(calls)).flat();
    const unique = /* @__PURE__ */ new Map();
    merged.forEach((x) => {
      const key = `request-${x.id ?? ""}-${x.entityType ?? x.requestType ?? ""}`;
      if (x.id !== void 0 && x.id !== null) unique.set(key, x);
    });
    return filterStatus(Array.from(unique.values()), status);
  },
  async approve(request, note) {
    const req = typeof request === "object" ? request : { id: request };
    const source = String(req.source ?? req.entityType ?? req.requestType ?? "").toUpperCase();
    const entity = String(req.entityType ?? req.requestType ?? "").toUpperCase();
    if (source.includes("RESTAURANT") || entity.includes("RESTAURANT")) {
      const id = req.restaurantId ?? req.id;
      try {
        return unwrap(await api.post(endpoints.admin.restaurantJoinApprove(id), { note }));
      } catch {
        return unwrap(await api.patch(endpoints.admin.restaurantVerificationStatus(id), null, { params: { status: "VERIFIED" } }));
      }
    }
    if (source.includes("RIDER") || source.includes("DRIVER") || entity.includes("RIDER") || entity.includes("DRIVER")) {
      const id = req.riderId ?? req.driverId ?? req.id;
      try {
        return unwrap(await api.post(endpoints.admin.driverApprove(id), { note }));
      } catch {
        return unwrap(await api.patch(endpoints.admin.riderVerificationStatus(id), null, { params: { status: "VERIFIED" } }));
      }
    }
    const res = await api.post(endpoints.admin.verificationApprove(req.id), { note });
    return unwrap(res);
  },
  async reject(request, reason) {
    const req = typeof request === "object" ? request : { id: request };
    const source = String(req.source ?? req.entityType ?? req.requestType ?? "").toUpperCase();
    const entity = String(req.entityType ?? req.requestType ?? "").toUpperCase();
    if (source.includes("RESTAURANT") || entity.includes("RESTAURANT")) {
      const id = req.restaurantId ?? req.id;
      try {
        return unwrap(await api.post(endpoints.admin.restaurantJoinReject(id), { reason, note: reason }));
      } catch {
        return unwrap(await api.patch(endpoints.admin.restaurantVerificationStatus(id), null, { params: { status: "REJECTED" } }));
      }
    }
    if (source.includes("RIDER") || source.includes("DRIVER") || entity.includes("RIDER") || entity.includes("DRIVER")) {
      const id = req.riderId ?? req.driverId ?? req.id;
      try {
        return unwrap(await api.post(endpoints.admin.driverReject(id), { reason, note: reason }));
      } catch {
        return unwrap(await api.patch(endpoints.admin.riderVerificationStatus(id), null, { params: { status: "REJECTED" } }));
      }
    }
    const res = await api.post(endpoints.admin.verificationReject(req.id), { reason, note: reason });
    return unwrap(res);
  },
  async setRestaurantStatus(id, status) {
    const res = await api.patch(endpoints.admin.restaurantVerificationStatus(id), null, { params: { status } });
    return unwrap(res);
  },
  async setRiderStatus(id, status) {
    const res = await api.patch(endpoints.admin.riderVerificationStatus(id), null, { params: { status } });
    return unwrap(res);
  }
};
function ServiceAreaVerificationPage() {
  const qc = useQueryClient();
  const [status, setStatus] = reactExports.useState("");
  const [type, setType] = reactExports.useState("ALL");
  const [range, setRange] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const area = useQuery({
    queryKey: ["service-area"],
    queryFn: serviceAreaVerificationService.getServiceArea
  });
  const requests = useQuery({
    queryKey: ["verifications", status, type],
    queryFn: () => serviceAreaVerificationService.listVerifications(status, type),
    staleTime: 8e3
  });
  const grouped = reactExports.useMemo(() => {
    const all = requests.data ?? [];
    return {
      all: all.length,
      restaurant: all.filter((x) => requestKind(x) === "RESTAURANT").length,
      rider: all.filter((x) => requestKind(x) === "RIDER").length,
      pending: all.filter((x) => String(x.status ?? "").toUpperCase() === "PENDING").length
    };
  }, [requests.data]);
  const saveArea = useMutation({
    mutationFn: () => serviceAreaVerificationService.updateServiceArea({
      defaultRangeKm: Number(range || area.data?.defaultRangeKm || 0),
      message: message || area.data?.message || "Sorry, this restaurant cannot deliver to your selected location right now.",
      enabled: area.data?.enabled ?? true
    }),
    onSuccess: () => {
      toast.success("Service area updated successfully");
      qc.invalidateQueries({
        queryKey: ["service-area"]
      });
    },
    onError: () => toast.error("Service area could not be updated. Please try again.")
  });
  const approve = useMutation({
    mutationFn: (req) => serviceAreaVerificationService.approve(req, "Verified by admin."),
    onSuccess: () => {
      toast.success("Verification approved successfully");
      qc.invalidateQueries({
        queryKey: ["verifications"]
      });
    },
    onError: () => toast.error("Verification could not be approved. Please refresh and try again.")
  });
  const reject = useMutation({
    mutationFn: ({
      req,
      reason
    }) => serviceAreaVerificationService.reject(req, reason),
    onSuccess: () => {
      toast.success("Verification rejected successfully");
      qc.invalidateQueries({
        queryKey: ["verifications"]
      });
    },
    onError: () => toast.error("Verification could not be rejected. Please refresh and try again.")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Verification Requests", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Service Management"
    }, {
      label: "Verification Requests"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 xl:grid-cols-[390px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "Delivery service area" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Set the maximum restaurant-to-customer delivery radius. Checkout is blocked professionally when the user is outside this range." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mt-5 block text-sm font-semibold", children: "Default delivery range in KM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 outline-none", type: "number", min: "0", step: "0.1", placeholder: String(area.data?.defaultRangeKm ?? 5), value: range, onChange: (e) => setRange(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mt-4 block text-sm font-semibold", children: "Out-of-range user message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "mt-2 min-h-28 w-full rounded-xl border border-border bg-background px-3 py-3 outline-none", placeholder: area.data?.message ?? "Sorry, this restaurant cannot deliver to your selected location right now.", value: message, onChange: (e) => setMessage(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => saveArea.mutate(), disabled: saveArea.isPending, className: "mt-4 w-full rounded-xl gradient-primary px-4 py-3 text-sm font-bold text-primary-foreground disabled:opacity-60", children: saveArea.isPending ? "Saving..." : "Save service area" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "Restaurant & Rider Verification Requests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Approve only after checking uploaded business/rider documents. Until approved, restaurants/products/rider assignments stay blocked." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-border bg-background px-3 py-2 text-sm", value: type, onChange: (e) => setType(e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "All request types" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RESTAURANT", children: "Restaurants only" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RIDER", children: "Riders only" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded-xl border border-border bg-background px-3 py-2 text-sm", value: status, onChange: (e) => setStatus(e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All statuses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDING", children: "Pending" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VERIFIED", children: "Verified" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "APPROVED", children: "Approved" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "REJECTED", children: "Rejected" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "UNVERIFIED", children: "Unverified" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 grid gap-3 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Total", value: grouped.all, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Restaurants", value: grouped.restaurant, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Riders", value: grouped.rider, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Pending", value: grouped.pending, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) })
        ] }),
        requests.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 animate-pulse rounded-xl bg-muted" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          (requests.data ?? []).map((req) => /* @__PURE__ */ jsxRuntimeExports.jsx(RequestCard, { req, approving: approve.isPending, rejecting: reject.isPending, onView: () => setSelected(req), onApprove: () => approve.mutate(req), onReject: () => {
            const reason = prompt("Reason for rejection?") || "Documents are not valid.";
            reject.mutate({
              req,
              reason
            });
          } }, `${req.source}-${String(req.id)}-${req.entityType}`)),
          (requests.data ?? []).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border p-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No verification requests found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "When sellers or riders submit documents from the app, their requests will appear here." })
          ] })
        ] })
      ] })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(RequestDetailsModal, { req: selected, onClose: () => setSelected(null), onApprove: () => approve.mutate(selected), onReject: () => {
      const reason = prompt("Reason for rejection?") || "Documents are not valid.";
      reject.mutate({
        req: selected,
        reason
      });
    }, busy: approve.isPending || reject.isPending })
  ] });
}
function Metric({
  label,
  value,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background/60 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: label }),
      icon
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-extrabold", children: value })
  ] });
}
function requestKind(req) {
  const raw = String(req.entityType ?? req.requestType ?? req.source ?? "").toUpperCase();
  if (raw.includes("RIDER") || raw.includes("DRIVER")) return "RIDER";
  if (raw.includes("RESTAURANT") || req.restaurantId) return "RESTAURANT";
  return "REQUEST";
}
function requestTitle(req) {
  return req.businessName || req.restaurantName || req.riderName || req.driverName || req.applicantName || "Verification request";
}
function RequestCard({
  req,
  onView,
  onApprove,
  onReject,
  approving,
  rejecting
}) {
  const name = requestTitle(req);
  const kind = requestKind(req);
  const docs = req.documents ?? [];
  const done = ["VERIFIED", "APPROVED", "REJECTED"].includes(String(req.status ?? "").toUpperCase());
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "rounded-xl border border-border bg-background/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-base font-bold", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: req.status || req.verificationStatus || "PENDING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-2 py-1 text-[11px] font-bold text-primary", children: kind })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        "Mobile: ",
        req.contactMobile || req.mobile || "N/A",
        " · Submitted: ",
        req.createdAt ? new Date(req.createdAt).toLocaleString() : "N/A"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: req.note || req.address || "Open details to review submitted information and uploaded documents." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
        docs.slice(0, 4).map((d, i) => documentUrl(d) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: documentUrl(d), target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold hover:bg-muted", children: [
          documentName(d, i),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
        ] }, i) : null),
        docs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground", children: "No document links returned by backend" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onView, className: "rounded-xl border border-info/30 px-4 py-2 text-sm font-bold text-info hover:bg-info/10", children: "View Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onApprove, disabled: approving || done, className: "inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
        "Approve"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onReject, disabled: rejecting || done, className: "inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" }),
        "Reject"
      ] })
    ] })
  ] }) });
}
function documentUrl(d) {
  return d?.url || d?.fileUrl;
}
function documentName(d, i) {
  return d?.name || d?.type || d?.documentType || d?.fileName || `Document ${i + 1}`;
}
function RequestDetailsModal({
  req,
  onClose,
  onApprove,
  onReject,
  busy
}) {
  const docs = req.documents ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card p-5 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold", children: requestTitle(req) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          requestKind(req),
          " verification request"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted", children: "Close" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Status", value: req.status || req.verificationStatus || "PENDING" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Mobile", value: req.contactMobile || req.mobile || "N/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "GSTIN", value: req.gstin || "N/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "PAN", value: req.panNumber || "N/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "FSSAI", value: req.fssaiNumber || "N/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Driving license", value: req.drivingLicenseNumber || "N/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Vehicle number", value: req.vehicleRegistrationNumber || "N/A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { label: "Submitted", value: req.createdAt ? new Date(req.createdAt).toLocaleString() : "N/A" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-border bg-background/50 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Address / Note" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 whitespace-pre-wrap text-sm", children: req.address || req.note || "No note provided." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Uploaded documents" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-2 sm:grid-cols-2", children: [
        docs.map((d, i) => documentUrl(d) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: documentUrl(d), target: "_blank", rel: "noreferrer", className: "flex items-center justify-between rounded-xl border border-border bg-background/50 px-3 py-3 text-sm font-semibold hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: documentName(d, i) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" })
        ] }, i) : null),
        docs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground", children: "Backend did not return document links for this request." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onApprove, disabled: busy, className: "rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50", children: "Approve Verification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onReject, disabled: busy, className: "rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50", children: "Reject Verification" })
    ] })
  ] }) });
}
function Info({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background/50 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: value })
  ] });
}
export {
  ServiceAreaVerificationPage as component
};
