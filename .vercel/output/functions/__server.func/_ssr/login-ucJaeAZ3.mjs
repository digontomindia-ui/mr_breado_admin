import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as ADMIN_LOGO_URL, b as authStore, d as authService } from "./router-CKeaDZpC.mjs";
import { b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { o as ShieldCheck, ad as Mail, ae as Lock, a7 as EyeOff, V as Eye, af as ArrowRight } from "../_libs/lucide-react.mjs";
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
const authHero = "/assets/auth-hero-Cdbrj4ue.jpg";
function useLogin() {
  return useMutation({
    mutationFn: (payload) => authService.login(payload),
    onSuccess: (data) => {
      if (data?.accessToken) {
        authStore.setToken(data.accessToken, data.tokenType ?? "ADMIN");
        toast.success("Welcome back!");
      } else {
        toast.error("Login failed: no token returned");
      }
    },
    onError: (e) => toast.error(e.message || "Invalid credentials")
  });
}
function LoginPage() {
  const navigate = useNavigate();
  const [show, setShow] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const login = useLogin();
  const loading = login.isPending;
  const onSubmit = (e) => {
    e.preventDefault();
    login.mutate({
      email,
      password,
      deviceType: "ADMIN"
    }, {
      onSuccess: () => navigate({
        to: "/"
      })
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-screen bg-background lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden overflow-hidden lg:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: authHero, alt: "Delicious food spread", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,115,0,0.25),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col justify-between p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ADMIN_LOGO_URL, alt: "Mr Breado", className: "h-10 w-10 rounded-xl object-contain shadow-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold tracking-tight", children: "Mr Breado Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold leading-tight text-foreground", children: "Manage your food delivery empire with confidence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Real-time orders, fleet tracking, restaurant analytics and revenue insights — all in one modern dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
            "Enterprise-grade security · 99.99% uptime"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-6 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-2 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ADMIN_LOGO_URL, alt: "Mr Breado", className: "h-9 w-9 rounded-lg object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Mr Breado Admin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Welcome back 👋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sign in to continue to your admin dashboard." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-muted-foreground", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "h-11 w-full rounded-lg border border-border bg-card px-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30", placeholder: "Enter admin email" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Contact platform owner for password reset" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: show ? "text" : "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), className: "h-11 w-full rounded-lg border border-border bg-card px-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30", placeholder: "••••••••" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow(!show), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-3.5 w-3.5 rounded border-border accent-[--color-primary]" }),
          "Keep me signed in"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg gradient-primary text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95 disabled:opacity-70", children: [
          loading ? "Signing in…" : "Sign in",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 bg-background px-3 text-[11px] uppercase tracking-wider text-muted-foreground", children: "Secure admin access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-1/2 h-px w-full bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card/70 p-3 text-xs leading-5 text-muted-foreground", children: "Use only the administrator credentials created in the backend. Demo credentials are never displayed on this page." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-sm text-muted-foreground", children: "Access is restricted to approved Mr Breado administrators." })
    ] }) })
  ] });
}
export {
  LoginPage as component
};
