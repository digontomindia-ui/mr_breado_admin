import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PageHeader, r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
import { r as CircleUser, a6 as Save, i as Shield, ad as Mail, O as Phone, K as KeyRound } from "../_libs/lucide-react.mjs";
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
const accountService = {
  profile: () => request({ url: endpoints.admin.accountProfile, method: "GET" }),
  updateProfile: (data) => request({ url: endpoints.admin.accountProfile, method: "PUT", data }),
  updateGstin: (data) => request({ url: endpoints.admin.gstinUpdate, method: "PATCH", data }),
  sendPasswordOtp: () => request({ url: endpoints.admin.updatePasswordOtp, method: "POST" }),
  updatePassword: (data) => request({ url: endpoints.admin.updatePassword, method: "PUT", data }),
  sendEmailOtp: () => request({ url: endpoints.admin.updateEmailOtp, method: "POST" }),
  updateEmail: (data) => request({ url: endpoints.admin.updateEmail, method: "PUT", data }),
  updatePhone: (data) => request({ url: endpoints.admin.updatePhone, method: "PUT", data })
};
function AdminProfilePage() {
  const qc = useQueryClient();
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["admin", "account-profile"],
    queryFn: accountService.profile
  });
  const [profile, setProfile] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    gstin: ""
  });
  const [emailForm, setEmailForm] = reactExports.useState({
    email: "",
    otp: ""
  });
  const [phone, setPhone] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState({
    otp: "",
    newPassword: "",
    confirmPassword: ""
  });
  reactExports.useEffect(() => {
    if (!data) return;
    setProfile({
      name: data.name ?? data.fullName ?? "",
      email: data.email ?? "",
      phone: data.phone ?? data.mobile ?? "",
      gstin: data.gstin ?? data.gstinNumber ?? ""
    });
    setEmailForm((s) => ({
      ...s,
      email: data.email ?? ""
    }));
    setPhone(data.phone ?? data.mobile ?? "");
  }, [data]);
  const saveProfile = useMut(() => accountService.updateProfile(profile), "Profile saved", ["admin", "account-profile"]);
  const saveGstin = useMut(() => accountService.updateGstin({
    gstin: profile.gstin,
    gstinNumber: profile.gstin
  }), "GSTIN updated", ["admin", "account-profile"]);
  const sendPassOtp = useMut(accountService.sendPasswordOtp, "Password OTP sent", ["admin", "account-profile"]);
  const updatePass = useMut(() => accountService.updatePassword(password), "Password updated", ["admin", "account-profile"]);
  const sendEmailOtp = useMut(accountService.sendEmailOtp, "Email OTP sent", ["admin", "account-profile"]);
  const updateEmail = useMut(() => accountService.updateEmail(emailForm), "Email updated", ["admin", "account-profile"]);
  const updatePhone = useMut(() => accountService.updatePhone({
    phone,
    mobile: phone
  }), "Phone updated", ["admin", "account-profile"]);
  function useMut(fn, ok, key) {
    return useMutation({
      mutationFn: fn,
      onSuccess: () => {
        toast.success(ok);
        qc.invalidateQueries({
          queryKey: key
        });
      },
      onError: (e) => toast.error(e.message)
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Admin Profile", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUser, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Admin Profile"
    }] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-80 animate-pulse rounded-xl bg-primary/10" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 xl:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Profile Details", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUser, { className: "h-5 w-5" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", value: profile.name, onChange: (v) => setProfile({
          ...profile,
          name: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", value: profile.email, onChange: (v) => setProfile({
          ...profile,
          email: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", value: profile.phone, onChange: (v) => setProfile({
          ...profile,
          phone: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => saveProfile.mutate(), className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
          "Save Profile"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Business GSTIN", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "GSTIN Number", value: profile.gstin, onChange: (v) => setProfile({
          ...profile,
          gstin: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => saveGstin.mutate(), className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4" }),
          "Update GSTIN"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Change Email", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "New Email", value: emailForm.email, onChange: (v) => setEmailForm({
          ...emailForm,
          email: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email OTP", value: emailForm.otp, onChange: (v) => setEmailForm({
          ...emailForm,
          otp: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sendEmailOtp.mutate(), className: "rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent", children: "Send OTP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateEmail.mutate(), className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: "Update Email" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Change Phone", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", value: phone, onChange: setPhone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updatePhone.mutate(), className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: "Update Phone" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { title: "Change Password", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-5 w-5" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "OTP", value: password.otp, onChange: (v) => setPassword({
          ...password,
          otp: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "New Password", type: "password", value: password.newPassword, onChange: (v) => setPassword({
          ...password,
          newPassword: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Confirm Password", type: "password", value: password.confirmPassword, onChange: (v) => setPassword({
          ...password,
          confirmPassword: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sendPassOtp.mutate(), className: "rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent", children: "Send OTP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updatePass.mutate(), className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: "Update Password" })
        ] })
      ] })
    ] })
  ] });
}
function Panel({
  title,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 shadow-card md:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2 text-lg font-semibold", children: [
      icon,
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children })
  ] });
}
function Field({
  label,
  value,
  onChange,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value: value ?? "", onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" })
  ] });
}
export {
  AdminProfilePage as component
};
