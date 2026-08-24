import { b as QueryClient, k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useRouterState, N as Navigate, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root, T as Trigger, P as Portal, C as Content, a as Close, O as Overlay, b as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { a as axios } from "../_libs/axios.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { M as Menu, B as Bell, S as Sparkles, G as Globe, C as ChevronDown, L as LayoutDashboard, a as ShoppingBag, U as Users, b as UserCog, c as Store, d as Bike, e as Utensils, f as ChefHat, g as Soup, h as Layers, i as Shield, K as KeyRound, T as Tag, j as Gift, k as LifeBuoy, l as Ticket, m as CreditCard, n as MapPin, W as Wallet, A as Activity, o as ShieldCheck, p as Building2, q as MessageSquare, r as CircleUser, I as Image, s as Settings, t as Search, u as ChevronRight, X, v as LogOut, P as Plus, F as FileSpreadsheet, D as Download, w as LoaderCircle, x as Star, y as Pencil, z as Trash2, E as ChevronLeft, H as ToggleRight, J as ToggleLeft, N as Clock3, O as Phone, R as ReceiptText, Q as IndianRupee, V as Eye, Y as Check, Z as PackageCheck, _ as FileDown, $ as Send } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-C6fVBh93.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = Root;
const SheetTrigger = Trigger;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
const STORAGE_KEY = "go4food.admin.session";
const EMPTY = Object.freeze({ token: null, tokenType: null });
function readFromStorage() {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.token !== "string" || !parsed.token) return EMPTY;
    return {
      token: parsed.token,
      tokenType: typeof parsed.tokenType === "string" ? parsed.tokenType : "ADMIN"
    };
  } catch {
    return EMPTY;
  }
}
let snapshot = readFromStorage();
const listeners = /* @__PURE__ */ new Set();
const emit = () => listeners.forEach((l) => l());
function persist(state) {
  if (typeof window === "undefined") return;
  try {
    if (state.token) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } else {
      window.sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
  }
}
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.storageArea !== window.sessionStorage) return;
    if (e.key && e.key !== STORAGE_KEY) return;
    const next = readFromStorage();
    if (next.token !== snapshot.token) {
      snapshot = next;
      emit();
    }
  });
}
const authStore = {
  getToken() {
    return snapshot.token;
  },
  getTokenType() {
    return snapshot.tokenType;
  },
  setToken(token, tokenType = "ADMIN") {
    snapshot = { token, tokenType };
    persist(snapshot);
    emit();
  },
  clear() {
    snapshot = EMPTY;
    persist(snapshot);
    emit();
  },
  subscribe(l) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  getSnapshot() {
    return snapshot;
  },
  /**
   * Stable server snapshot. MUST return the same reference on every call to
   * avoid the React "getServerSnapshot should be cached" infinite loop.
   */
  getServerSnapshot() {
    return EMPTY;
  }
};
function useAuth() {
  const state = reactExports.useSyncExternalStore(
    authStore.subscribe,
    authStore.getSnapshot,
    authStore.getServerSnapshot
  );
  return { ...state, isAuthenticated: !!state.token };
}
const DEFAULT_API_BASE_URL = "https://api.mrbreado.com/api";
const API_BASE_URL = "http://localhost:3696/api"?.replace(/\/$/, "") || DEFAULT_API_BASE_URL;
const ADMIN_LOGO_URL = "https://res.cloudinary.com/dswsz53xi/image/upload/v1780431123/logo_qbyjg5.png";
const endpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    register: "/auth/register"
  },
  platform: {
    publicSettings: "/platform/settings",
    adminSettings: "/platform/admin/settings"
  },
  admin: {
    profile: "/admin/profile",
    serviceArea: "/admin/service-area",
    verifications: "/admin/verifications",
    verificationsAll: "/admin/verifications/all",
    verificationRequestsAlias: "/admin/verification-requests",
    serviceAreaVerificationsAlias: "/admin/service-area-verifications",
    verificationApprove: (id) => `/admin/verifications/${id}/approve`,
    verificationReject: (id) => `/admin/verifications/${id}/reject`,
    restaurantVerificationStatus: (id) => `/admin/verifications/restaurants/${id}/status`,
    riderVerificationStatus: (id) => `/admin/verifications/riders/${id}/status`,
    accountProfile: "/admin/account/profile",
    updateProfile: "/admin/profile",
    updateEmail: "/admin/account/email",
    updateEmailOtp: "/admin/account/email/otp",
    updatePassword: "/admin/account/password",
    updatePasswordOtp: "/admin/account/password/otp",
    updatePhone: "/admin/account/phone",
    gstinUpdate: "/admin/account/profile/gstin",
    dashboard: "/admin/dashboard",
    dashboardOverview: "/admin/dashboard/overview",
    dashboardRevenue: "/admin/dashboard/revenue",
    dashboardPayments: "/admin/dashboard/payments",
    dashboardUserGrowth: "/admin/dashboard/user-growth",
    dashboardOrderStatusChart: "/admin/dashboard/order-status-chart",
    dashboardRecentOrders: "/admin/dashboard/recent-orders",
    dashboardTrendingMenu: "/admin/dashboard/trending-menu",
    dashboardPopularRestaurants: "/admin/dashboard/popular-restaurants",
    dashboardTopRestaurants: "/admin/dashboard/top-restaurants",
    mrBreadoDashboard: "/admin/mr-breado/dashboard",
    users: "/admin/users",
    userById: (id) => `/admin/users/${id}`,
    userStatus: (id) => `/admin/users/${id}/status`,
    customers: "/admin/customers",
    customerById: (id) => `/admin/customers/${id}`,
    customerDetails: (id) => `/admin/customers/${id}/details`,
    customerOrders: (id) => `/admin/customers/${id}/orders`,
    customerWallet: (id) => `/admin/customers/${id}/wallet`,
    customerAddresses: (id) => `/admin/customers/${id}/addresses`,
    customerWalletTopup: (id) => `/admin/customers/${id}/wallet/top-up`,
    customersExport: "/admin/customers/export",
    owners: "/admin/owners",
    sellers: "/admin/sellers",
    ownerById: (id) => `/admin/owners/${id}`,
    ownerDetails: (id) => `/admin/owners/${id}/details`,
    ownerRestaurants: (id) => `/admin/owners/${id}/restaurants`,
    ownerWallet: (id) => `/admin/owners/${id}/wallet`,
    ownerSubscriptions: (id) => `/admin/owners/${id}/subscriptions`,
    ownerStatus: (id) => `/admin/owners/${id}/status`,
    ownerVerification: (id) => `/admin/owners/${id}/verification`,
    ownersExport: "/admin/owners/export",
    restaurants: "/admin/restaurants",
    restaurantById: (id) => `/admin/restaurants/${id}`,
    restaurantDetails: (id) => `/admin/restaurants/${id}/details`,
    restaurantOrders: (id) => `/admin/restaurants/${id}/orders`,
    restaurantProducts: (id) => `/admin/restaurants/${id}/products`,
    restaurantReviews: (id) => `/admin/restaurants/${id}/reviews`,
    restaurantWallet: (id) => `/admin/restaurants/${id}/wallet`,
    restaurantStatus: (id) => `/admin/restaurants/${id}/status`,
    restaurantOnlineStatus: (id) => `/admin/restaurants/${id}/online-status`,
    restaurantOpeningHours: (id) => `/admin/restaurants/${id}/opening-hours`,
    restaurantJoinRequests: "/admin/restaurants/join-requests",
    restaurantJoinRequestById: (id) => `/admin/restaurants/join-requests/${id}`,
    restaurantJoinVerify: (id) => `/admin/restaurants/join-requests/${id}/verify`,
    restaurantJoinApprove: (id) => `/admin/restaurants/join-requests/${id}/approve`,
    restaurantJoinReject: (id) => `/admin/restaurants/join-requests/${id}/reject`,
    restaurantsExport: "/admin/restaurants/export",
    drivers: "/admin/drivers",
    driverById: (id) => `/admin/drivers/${id}`,
    driverStatus: (id) => `/admin/drivers/${id}/status`,
    driverVerification: (id) => `/admin/drivers/${id}/verification`,
    driverVerificationRequests: "/admin/drivers/verification-requests",
    driverVerificationDetails: (id) => `/admin/drivers/${id}/verification-details`,
    driverApprove: (id) => `/admin/drivers/${id}/approve`,
    driverReject: (id) => `/admin/drivers/${id}/reject`,
    driversExport: "/admin/drivers/export",
    driversCash: "/admin/drivers/cash",
    verifyDriverCash: (driverId) => `/admin/drivers/${driverId}/cash-deposit/verify`,
    driverCashTx: (driverId) => `/admin/drivers/${driverId}/cash-transactions`,
    products: "/admin/products",
    productById: (id) => `/admin/products/${id}`,
    productDetails: (id) => `/admin/products/${id}/details`,
    productStock: (id) => `/admin/products/${id}/stock`,
    productVisibility: (id) => `/admin/products/${id}/visibility`,
    productAddons: (id) => `/admin/products/${id}/addons`,
    productAddonById: (id, addonId) => `/admin/products/${id}/addons/${addonId}`,
    productsExport: "/admin/products/export",
    categories: "/admin/categories",
    categorySummary: "/admin/categories/summary",
    categoryById: (id) => `/admin/categories/${id}`,
    categoryStatus: (id) => `/admin/categories/${id}/status`,
    categorySubcategories: (id) => `/admin/categories/${id}/subcategories`,
    subcategoryById: (id) => `/admin/subcategories/${id}`,
    subcategoryStatus: (id) => `/admin/subcategories/${id}/status`,
    categoryAliases: "/admin/category",
    foodCategoriesAdmin: "/admin/food-categories",
    publicCategories: "/categories",
    publicSubCategories: "/categories/sub-categories",
    publicFoodCategories: "/food-categories",
    cuisine: "/admin/cuisines",
    cuisines: "/admin/cuisines",
    banners: "/admin/banners",
    bannerById: (id) => `/admin/banners/${id}`,
    bannerStatus: (id) => `/admin/banners/${id}/status`,
    offers: "/admin/offers",
    offerById: (id) => `/admin/offers/${id}`,
    offerStatus: (id) => `/admin/offers/${id}/status`,
    coupons: "/admin/coupons",
    couponById: (id) => `/admin/coupons/${id}`,
    couponStatus: (id) => `/admin/coupons/${id}/status`,
    paymentsSummary: "/admin/payments/summary",
    paymentLedger: "/admin/payment-ledger",
    paymentSettings: "/admin/payment-settings",
    paymentGatewaySettings: "/admin/finance/payment-gateways",
    paymentGatewayByCode: (code) => `/admin/finance/payment-gateways/${code}`,
    mrBreadoPayments: "/admin/mr-breado/payments",
    settlements: "/admin/restaurant-settlements",
    generateWeeklySettlement: (restaurantId) => `/admin/restaurant-settlements/${restaurantId}/generate-weekly`,
    markSettlementPaid: (settlementId) => `/admin/restaurant-settlements/${settlementId}/mark-paid`,
    sellerPayoutAccounts: "/admin/seller-payout-accounts",
    verifySellerPayout: (accountId) => `/admin/seller-payout-accounts/${accountId}/verify`,
    settings: "/admin/settings",
    restaurantSettings: "/admin/settings/restaurant",
    driverSettings: "/admin/settings/driver",
    mapSettings: "/admin/settings/map",
    commissionSettings: "/admin/settings/commission",
    vendorCommissionSettings: "/admin/settings/commission/vendor",
    driverCommissionSettings: "/admin/settings/commission/driver",
    platformFeeSettings: "/admin/settings/platform-fee",
    supportDashboard: "/admin/support/dashboard",
    supportTickets: "/admin/support/tickets",
    supportTicketById: (id) => `/admin/support/tickets/${id}`,
    supportTicketToday: "/admin/support/tickets/today",
    supportTicketAccept: (id) => `/admin/support/tickets/${id}/accept`,
    supportTicketStatus: (id) => `/admin/support/tickets/${id}/status`,
    supportTicketReply: (id) => `/admin/support/tickets/${id}/reply`,
    notifications: {
      send: "/admin/notifications/send",
      sendToAll: "/admin/notifications/send-to-all",
      sendToCustomers: "/admin/notifications/send-to-customers",
      sendToSellers: "/admin/notifications/send-to-sellers",
      sendToDrivers: "/admin/notifications/send-to-drivers"
    },
    customerMessages: "/admin/customer-messages/send",
    sellerMessages: "/admin/seller-messages",
    roles: "/admin/roles",
    roleAliases: "/admin/role",
    rolePermissions: (code) => `/admin/roles/${code}/permissions`,
    reviews: "/admin/reviews",
    restaurantReports: "/admin/restaurant-reports",
    reportStatus: (reportId) => `/admin/restaurant-reports/${reportId}/status`,
    uploadOfferImage: "/admin/uploads/offer-image",
    mrBreado: {
      dashboard: "/admin/mr-breado/dashboard",
      orders: "/admin/mr-breado/orders",
      orderById: (id) => `/admin/mr-breado/orders/${id}`,
      accept: (id) => `/admin/mr-breado/orders/${id}/accept`,
      preparing: (id) => `/admin/mr-breado/orders/${id}/preparing`,
      ready: (id) => `/admin/mr-breado/orders/${id}/ready`,
      reject: (id) => `/admin/mr-breado/orders/${id}/reject`,
      invoicePdf: (id) => `/admin/mr-breado/orders/${id}/invoice.pdf`,
      sendInvoice: (id) => `/admin/mr-breado/orders/${id}/invoice/send-to-customer`,
      products: "/admin/mr-breado/products",
      productById: (id) => `/admin/mr-breado/products/${id}`,
      productAvailability: (id) => `/admin/mr-breado/products/${id}/availability`,
      productStock: (id) => `/admin/mr-breado/products/${id}/stock`,
      template: "/admin/mr-breado/products/template",
      import: "/admin/mr-breado/products/import",
      export: "/admin/mr-breado/products/export",
      restaurant: "/admin/mr-breado/restaurant",
      restaurantStatus: "/admin/mr-breado/restaurant/status"
    }
  }
};
function toCamel(s) {
  return s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
function camelizeObject(obj) {
  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map((v) => camelizeObject(v));
  const out = {};
  Object.entries(obj).forEach(([k, v]) => {
    const key = toCamel(k);
    out[key] = camelizeObject(v);
  });
  if ("per_page" in obj && !("perPage" in out)) out.perPage = obj.per_page;
  if ("total_pages" in obj && !("totalPages" in out)) out.totalPages = obj.total_pages;
  if ("totalElements" in out && !("total" in out)) out.total = out.totalElements;
  if ("totalItems" in out && !("total" in out)) out.total = out.totalItems;
  if ("content" in out && !("items" in out)) out.items = out.content;
  return out;
}
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3e4,
  headers: { Accept: "application/json" }
});
api.interceptors.request.use((config) => {
  const token = authStore.getToken();
  config.headers = config.headers ?? {};
  const headers = config.headers;
  const responseType = String(config.responseType ?? "").toLowerCase();
  const isBinary = responseType === "blob" || responseType === "arraybuffer";
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (!isBinary && !headers.Accept) {
    headers.Accept = "application/json";
  }
  return config;
});
function safeMessageFor(status) {
  if (status === 400) return "The request was invalid. Please check your input.";
  if (status === 401) return "Your session has expired. Please sign in again.";
  if (status === 403) return "You don't have permission to perform this action.";
  if (status === 404) return "The requested resource was not found.";
  if (status === 409) return "This action conflicts with the current state.";
  if (status === 422) return "Some fields are invalid. Please review and try again.";
  if (status === 429) return "Too many requests. Please slow down and try again.";
  if (status && status >= 500) return "Server error. Please try again later.";
  return "Something went wrong. Please try again.";
}
api.interceptors.response.use(
  (response) => {
    try {
      if (response?.data && typeof response.data === "object") {
        if (response.data.data) {
          response.data.data = camelizeObject(response.data.data);
        }
      }
    } catch (e) {
    }
    return response;
  },
  (error) => {
    const status = error.response?.status;
    const safeMessage = safeMessageFor(status);
    if (status === 401) {
      authStore.clear();
      if (typeof window !== "undefined" && !window.location.pathname.startsWith("/login")) {
        toast.error(safeMessage);
        window.location.href = "/login";
      }
    }
    if (typeof console !== "undefined") {
      console.debug("[api]", status, error.response?.data?.message ?? error.message);
    }
    return Promise.reject(Object.assign(new Error(safeMessage), { status }));
  }
);
async function request(config) {
  const res = await api.request(config);
  return res.data?.data;
}
async function downloadBlob(config) {
  const res = await api.request({
    ...config,
    responseType: "blob",
    headers: {
      Accept: "application/pdf, text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/octet-stream",
      ...config.headers ?? {}
    }
  });
  return res.data;
}
function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
const normalizeAuthResponse = (raw) => ({
  accessToken: raw.accessToken ?? raw.access_token ?? raw.token ?? raw.data?.token ?? "",
  tokenType: raw.tokenType ?? raw.token_type ?? "ADMIN",
  data: raw.data
});
const authService = {
  login: (payload) => request({
    url: endpoints.auth.login,
    method: "POST",
    data: { deviceType: "ADMIN", emailOrMobile: payload.email ?? payload.mobile, ...payload }
  }).then(normalizeAuthResponse),
  logout: () => request({ url: endpoints.auth.logout, method: "POST" }).catch(() => null)
};
const NAV = [
  { items: [{ label: "Dashboard", to: "/", icon: LayoutDashboard }] },
  { items: [{
    label: "Orders",
    icon: ShoppingBag,
    children: [
      { label: "All Orders", to: "/orders" },
      { label: "Active Orders", to: "/orders/active" },
      { label: "Pending", to: "/orders/pending" },
      { label: "Accepted", to: "/orders/accepted" },
      { label: "Preparing", to: "/orders/preparing" },
      { label: "Ready for Pickup", to: "/orders/ready-for-pickup" },
      { label: "Delivered", to: "/orders/delivered" },
      { label: "Cancelled", to: "/orders/cancelled" }
    ]
  }] },
  { items: [{ label: "Customers", to: "/customers", icon: Users }] },
  { section: "RESTAURANT MANAGEMENT", items: [
    { label: "Owners", to: "/owners", icon: UserCog },
    { label: "Restaurants", to: "/restaurants", icon: Store }
  ] },
  { section: "DELIVERY MANAGEMENT", items: [
    { label: "Delivery Boys", to: "/delivery-boys", icon: Bike }
  ] },
  { section: "MENU MANAGEMENT", items: [
    { label: "Foods", to: "/foods", icon: Utensils },
    { label: "Mr Breado Store", to: "/admin-foods", icon: ChefHat },
    { label: "Cuisine", to: "/cuisine", icon: Soup },
    { label: "Categories", to: "/categories", icon: Layers }
  ] },
  { section: "ROLE MANAGEMENT", items: [
    { label: "Roles", to: "/roles", icon: Shield },
    { label: "Permissions", to: "/permissions", icon: KeyRound }
  ] },
  { section: "OFFER MANAGEMENT", items: [
    { label: "Coupons", to: "/coupons", icon: Tag },
    { label: "Offers", to: "/offers", icon: Gift }
  ] },
  { section: "SUPPORT MANAGEMENT", items: [
    { label: "Support Dashboard", to: "/support", icon: LifeBuoy },
    { label: "Support Tickets", to: "/tickets", icon: Ticket },
    { label: "Notifications", to: "/notifications", icon: Bell }
  ] },
  { section: "SUBSCRIPTION MANAGEMENT", items: [
    { label: "Subscriptions", to: "/subscriptions", icon: CreditCard }
  ] },
  { section: "ZONE MANAGEMENT", items: [
    { label: "Zones", to: "/zones", icon: MapPin }
  ] },
  { section: "SERVICE MANAGEMENT", items: [
    { label: "Payout Requests", to: "/payouts", icon: Wallet },
    { label: "Operations", to: "/operations", icon: Activity },
    { label: "Verification Requests", to: "/service-area-verifications", icon: ShieldCheck },
    { label: "Mr Breado Restaurant", to: "/mr-breado-restaurant", icon: Building2 },
    { label: "Customer Messages", to: "/customer-messages", icon: MessageSquare },
    { label: "Admin Profile", to: "/admin-profile", icon: CircleUser },
    { label: "Banner Management", to: "/banners", icon: Image }
  ] },
  { section: "SETTINGS", items: [
    { label: "Settings", to: "/settings", icon: Settings }
  ] }
];
function SidebarContent({ onNavigate }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to) => !!to && (to === "/" ? pathname === "/" : pathname.startsWith(to));
  const initiallyOpen = {};
  NAV.forEach((g) => g.items.forEach((it) => {
    if (it.children?.some((c) => isActive(c.to))) initiallyOpen[it.label] = true;
  }));
  const [open, setOpen] = reactExports.useState(initiallyOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col bg-sidebar text-sidebar-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[72px] items-center gap-3 border-b border-sidebar-border px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ADMIN_LOGO_URL, alt: "Mr Breado", className: "h-10 w-10 rounded-xl object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold tracking-tight", children: "Mr Breado" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-sidebar-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md bg-sidebar-accent px-3 py-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search here", className: "w-full bg-transparent outline-none placeholder:text-muted-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 overflow-y-auto px-2 py-3 text-sm", children: NAV.map((group, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
      group.section && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-1 pt-3 text-[10px] font-semibold tracking-widest text-muted-foreground", children: group.section }),
      group.items.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.to) || item.children?.some((c) => isActive(c.to));
        if (item.children) {
          const isOpen = open[item.label] ?? false;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpen((o) => ({ ...o, [item.label]: !o[item.label] })),
                className: cn(
                  "group flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors",
                  active ? "bg-primary/15 text-primary shadow-[inset_3px_0_0_var(--primary)]" : "hover:bg-sidebar-accent"
                ),
                children: [
                  Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: item.label }),
                  isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-7 mt-0.5 border-l border-sidebar-border pl-2", children: item.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: c.to,
                onClick: onNavigate,
                className: cn(
                  "block rounded-md px-3 py-1.5 text-[13px] transition-colors",
                  isActive(c.to) ? "bg-primary/10 text-primary" : "text-sidebar-foreground/80 hover:bg-sidebar-accent"
                ),
                children: c.label
              },
              c.to
            )) })
          ] }, item.label);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            onClick: onNavigate,
            className: cn(
              "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
              active ? "bg-primary/15 text-primary shadow-[inset_3px_0_0_var(--primary)]" : "hover:bg-sidebar-accent"
            ),
            children: [
              Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
            ]
          },
          item.label
        );
      })
    ] }, gi)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-sidebar-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoutButton, {}) })
  ] });
}
function ThemeSwitcher() {
  const [theme, setTheme] = reactExports.useState(() => localStorage.getItem("admin-theme") || "luxury");
  reactExports.useEffect(() => {
    document.documentElement.classList.remove("theme-dark", "theme-light", "theme-luxury");
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("admin-theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "select",
    {
      value: theme,
      onChange: (e) => setTheme(e.target.value),
      className: "rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold outline-none hover:bg-accent",
      title: "Theme",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dark", children: "Dark" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "light", children: "Light" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "luxury", children: "Luxury" })
      ]
    }
  );
}
function LogoutButton() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: async () => {
        await authService.logout();
        authStore.clear();
        qc.clear();
        navigate({ to: "/login", replace: true });
      },
      className: "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-destructive hover:bg-sidebar-accent",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Log out"
      ]
    }
  );
}
function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen w-full overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden w-[285px] shrink-0 border-r border-sidebar-border bg-sidebar shadow-card lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-[72px] shrink-0 items-center gap-3 border-b border-border bg-card/50 px-4 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open: mobileOpen, onOpenChange: setMobileOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md p-2 hover:bg-accent lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { side: "left", className: "w-72 border-sidebar-border bg-sidebar p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent, { onNavigate: () => setMobileOpen(false) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/notifications", className: "relative rounded-xl border border-transparent p-2 text-primary transition hover:border-primary/30 hover:bg-primary/10", title: "Open notifications", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary shadow-glow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 rounded-xl border border-border bg-card px-2 py-1 text-sm md:flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSwitcher, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold hover:bg-accent sm:flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
          " English ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-xl border border-border bg-card px-2 py-1.5 pr-3 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ADMIN_LOGO_URL, alt: "Admin", className: "h-9 w-9 rounded-full object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-xs leading-tight sm:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Hello" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Mr Breado Admin" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-w-0 flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[1680px] p-4 md:p-7", children }) })
    ] })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const PUBLIC_ROUTES = ["/login", "/register"];
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$B = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Go4Food Admin" },
      { name: "description", content: "Food delivery admin dashboard." }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$B.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { isAuthenticated } = useAuth();
  const isPublic = PUBLIC_ROUTES.some((p) => pathname.startsWith(p));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    isPublic ? isAuthenticated && pathname.startsWith("/login") ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) : !isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$A = () => import("./zones-BMVdxpqS.mjs");
const Route$A = createFileRoute("/zones")({
  head: () => ({
    meta: [{
      title: "Zones | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./tickets-EcAaSbmK.mjs");
const Route$z = createFileRoute("/tickets")({
  head: () => ({
    meta: [{
      title: "Support Tickets | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./support-B_gvX4q5.mjs");
const Route$y = createFileRoute("/support")({
  head: () => ({
    meta: [{
      title: "Support Dashboard | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./subscriptions-CAdwPrt9.mjs");
const Route$x = createFileRoute("/subscriptions")({
  head: () => ({
    meta: [{
      title: "Subscriptions | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./settings-BVI-vH4v.mjs");
const Route$w = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./service-area-verifications-BeWxHrHh.mjs");
const Route$v = createFileRoute("/service-area-verifications")({
  head: () => ({
    meta: [{
      title: "Verification Requests | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./roles-Cd3m-W4r.mjs");
const Route$u = createFileRoute("/roles")({
  head: () => ({
    meta: [{
      title: "Roles | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./reviews-K5HwWYOD.mjs");
const Route$t = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Reviews | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./restaurants-Cvsr5iiW.mjs");
const Route$s = createFileRoute("/restaurants")({
  head: () => ({
    meta: [{
      title: "Restaurants | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./register-FSvJxpq5.mjs");
const Route$r = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create account | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./permissions-BZHuduhk.mjs");
const Route$q = createFileRoute("/permissions")({
  head: () => ({
    meta: [{
      title: "Permissions | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./payouts-CL6iY-Qf.mjs");
const Route$p = createFileRoute("/payouts")({
  head: () => ({
    meta: [{
      title: "Payouts | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./owners-BHwaohtU.mjs");
const Route$o = createFileRoute("/owners")({
  head: () => ({
    meta: [{
      title: "Owners | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./operations-BUuSZoU2.mjs");
const Route$n = createFileRoute("/operations")({
  head: () => ({
    meta: [{
      title: "Operations | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./offers-D89bLpln.mjs");
const Route$m = createFileRoute("/offers")({
  head: () => ({
    meta: [{
      title: "Offers | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./notifications-CsXYThHa.mjs");
const Route$l = createFileRoute("/notifications")({
  head: () => ({
    meta: [{
      title: "Notifications | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./mr-breado-restaurant-CegjtC36.mjs");
const Route$k = createFileRoute("/mr-breado-restaurant")({
  head: () => ({
    meta: [{
      title: "Mr Breado Restaurant | Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./login-ucJaeAZ3.mjs");
const Route$j = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
function PageHeader({ title, breadcrumbs = [], icon, actions }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold leading-tight", children: title }),
        breadcrumbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex items-center gap-1 text-xs text-muted-foreground", children: breadcrumbs.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          b.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: b.to, className: "hover:text-foreground", children: b.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.label }),
          i < breadcrumbs.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
        ] }, i)) })
      ] })
    ] }),
    actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: actions })
  ] });
}
const variants = {
  Active: "bg-success/15 text-success border-success/30",
  Inactive: "bg-muted text-muted-foreground border-border",
  Pending: "bg-warning/15 text-warning border-warning/30",
  Accepted: "bg-info/15 text-info border-info/30",
  Preparing: "bg-primary/15 text-primary border-primary/30",
  Ready: "bg-success/15 text-success border-success/30",
  "Ready for Pickup": "bg-success/15 text-success border-success/30",
  READY_FOR_PICKUP: "bg-success/15 text-success border-success/30",
  Delivered: "bg-success/15 text-success border-success/30",
  Cancelled: "bg-destructive/15 text-destructive border-destructive/30",
  Suspended: "bg-destructive/15 text-destructive border-destructive/30",
  Open: "bg-info/15 text-info border-info/30",
  "In Progress": "bg-warning/15 text-warning border-warning/30",
  Resolved: "bg-success/15 text-success border-success/30",
  High: "bg-destructive/15 text-destructive border-destructive/30",
  Medium: "bg-warning/15 text-warning border-warning/30",
  Low: "bg-muted text-muted-foreground border-border"
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
    variants[status] ?? variants.Inactive
  ), children: status });
}
function toFormData$1(payload) {
  if (payload instanceof FormData) return payload;
  const fd = new FormData();
  Object.entries(payload).forEach(([k, v]) => {
    if (v === void 0 || v === null) return;
    if (v instanceof File || v instanceof Blob) fd.append(k, v);
    else fd.append(k, typeof v === "string" ? v : JSON.stringify(v));
  });
  return fd;
}
const isAdmin = (source) => source === "admin";
const productsService = {
  list: (params = {}) => {
    if (params.source === "seller") {
      return request({
        url: "/seller/products",
        method: "GET",
        params: {
          search: params.search || void 0
        }
      });
    }
    return request({
      url: isAdmin(params.source) ? endpoints.admin.mrBreado.products : endpoints.admin.products,
      method: "GET",
      params: {
        page: params.page ?? 1,
        per_page: params.perPage ?? 20,
        perPage: params.perPage ?? 20,
        search: params.search || void 0
      }
    });
  },
  detail: (id, source) => request({
    url: isAdmin(source) ? endpoints.admin.mrBreado.productById(id) : endpoints.admin.productDetails(id),
    method: "GET"
  }),
  create: (payload, source = "admin") => request({
    url: source === "seller" ? "/seller/products" : isAdmin(source) ? endpoints.admin.mrBreado.products : endpoints.admin.products,
    method: "POST",
    data: toFormData$1(payload),
    headers: { "Content-Type": "multipart/form-data" }
  }),
  update: (id, payload, source = "admin") => {
    if (source === "seller") {
      let stockQuantity = 0;
      if (payload instanceof FormData) {
        stockQuantity = payload.get("stockQuantity") || payload.get("stock") || 0;
      } else {
        stockQuantity = payload.stockQuantity || payload.stock || 0;
      }
      return request({
        url: `/seller/products/${id}`,
        method: "PUT",
        data: { stockQuantity: Number(stockQuantity) }
      });
    }
    return request({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productById(id) : endpoints.admin.productById(id),
      method: "PUT",
      data: toFormData$1(payload),
      headers: { "Content-Type": "multipart/form-data" }
    });
  },
  remove: (id, source = "admin") => {
    if (source === "seller") {
      throw new Error("Sellers are not allowed to delete products");
    }
    return request({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productById(id) : endpoints.admin.productById(id),
      method: "DELETE"
    });
  },
  setAvailability: (id, isAvailable, source = "admin") => {
    if (source === "seller") {
      return request({
        url: `/seller/products/${id}/availability`,
        method: "PATCH",
        data: { available: isAvailable }
      });
    }
    return request({
      url: isAdmin(source) ? endpoints.admin.mrBreado.productAvailability(id) : endpoints.admin.productStock(id),
      method: "PATCH",
      data: { isAvailable, inStock: isAvailable, in_stock: isAvailable }
    });
  },
  downloadTemplate: async () => {
    const blob = await downloadBlob({ url: endpoints.admin.mrBreado.template, method: "GET" });
    saveBlob(blob, "mr-breado-products-template.xlsx");
  },
  exportAdminProducts: async () => {
    const blob = await downloadBlob({ url: endpoints.admin.mrBreado.export, method: "GET" });
    saveBlob(blob, "mr-breado-products.csv");
  }
};
const productKeys = {
  all: ["products"],
  list: (q) => ["products", "list", q]
};
function useProducts(query) {
  return useQuery({
    queryKey: productKeys.list(query),
    queryFn: () => productsService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, source = "admin" }) => productsService.remove(id, source),
    onSuccess: () => {
      toast.success("Product deleted");
      qc.invalidateQueries({ queryKey: productKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useToggleProductAvailability() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v) => productsService.setAvailability(v.id, v.isAvailable, v.source ?? "admin"),
    onSuccess: () => {
      toast.success("Availability updated");
      qc.invalidateQueries({ queryKey: productKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ payload, source = "admin" }) => productsService.create(payload, source),
    onSuccess: () => {
      toast.success("Product created");
      qc.invalidateQueries({ queryKey: productKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (v) => productsService.update(v.id, v.payload, v.source ?? "admin"),
    onSuccess: () => {
      toast.success("Product updated");
      qc.invalidateQueries({ queryKey: productKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
const $$splitComponentImporter$i = () => import("./foods-Dwue42OK.mjs");
const Route$i = createFileRoute("/foods")({
  head: () => ({
    meta: [{
      title: "Foods | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
function FoodsPage({
  title,
  source = "admin"
}) {
  const [page, setPage] = reactExports.useState(1);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useProducts({
    page,
    perPage: 20,
    source
  });
  const del = useDeleteProduct();
  const toggle = useToggleProductAvailability();
  const create = useCreateProduct();
  const update = useUpdateProduct();
  const items = data?.items ?? [];
  const totalPages = data?.total_pages ?? 1;
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const blankForm = {
    title: "",
    subtitle: "",
    description: "",
    price: "",
    discountPrice: "",
    categoryName: "",
    foodType: "",
    stockQuantity: "",
    isVeg: true,
    isAvailable: true,
    isBestseller: false,
    smallSizeExtra: "",
    mediumSizeExtra: "",
    largeSizeExtra: "",
    cake500gmExtra: "",
    cake1kgExtra: "",
    cake15kgExtra: "",
    cake2kgExtra: "",
    cakeMessageEnabled: false,
    cakeMessageCharge: "",
    customWeightEnabled: false,
    variantType: "STANDARD",
    image: null
  };
  const [form, setForm] = reactExports.useState(blankForm);
  reactExports.useEffect(() => {
    if (editing) {
      setForm({
        ...blankForm,
        title: editing.title ?? editing.name ?? "",
        subtitle: editing.subtitle ?? "",
        description: editing.description ?? "",
        price: String(editing.price ?? ""),
        discountPrice: String(editing.discountPrice ?? editing.discount_price ?? ""),
        categoryName: editing.categoryName ?? editing.category_name ?? editing.category ?? "",
        foodType: editing.foodType ?? editing.food_type ?? "",
        stockQuantity: String(editing.stockQuantity ?? editing.stock_quantity ?? ""),
        isVeg: Boolean(editing.isVeg ?? editing.veg ?? editing.is_veg ?? true),
        isAvailable: Boolean(editing.isAvailable ?? editing.available ?? editing.is_available ?? true),
        isBestseller: Boolean(editing.isBestseller ?? editing.bestseller ?? editing.is_bestseller ?? false),
        smallSizeExtra: String(editing.smallSizeExtra ?? editing.small_size_extra ?? ""),
        mediumSizeExtra: String(editing.mediumSizeExtra ?? editing.medium_size_extra ?? ""),
        largeSizeExtra: String(editing.largeSizeExtra ?? editing.large_size_extra ?? ""),
        cake500gmExtra: String(editing.cake500gmExtra ?? editing.cake_500gm_extra ?? ""),
        cake1kgExtra: String(editing.cake1kgExtra ?? editing.cake_1kg_extra ?? ""),
        cake15kgExtra: String(editing.cake15kgExtra ?? editing.cake1_5kgExtra ?? editing.cake_1_5kg_extra ?? ""),
        cake2kgExtra: String(editing.cake2kgExtra ?? editing.cake_2kg_extra ?? ""),
        cakeMessageEnabled: Boolean(editing.cakeMessageEnabled ?? editing.cake_message_enabled ?? false),
        cakeMessageCharge: String(editing.cakeMessageCharge ?? editing.cake_message_charge ?? ""),
        customWeightEnabled: Boolean(editing.customWeightEnabled ?? editing.custom_weight_enabled ?? false),
        variantType: editing.variantType ?? editing.variant_type ?? "STANDARD",
        image: null
      });
    } else {
      setForm(blankForm);
    }
  }, [editing]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Menu Management"
    }, {
      label: title
    }], actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setEditing(null);
        setShowForm(true);
      }, className: "inline-flex items-center gap-1.5 rounded-md gradient-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Item"
      ] }),
      source === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => productsService.downloadTemplate(), className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4" }),
        "Template"
      ] }),
      source === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => productsService.exportAdminProducts(), className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
        "Export"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold", children: [
        data?.total ?? 0,
        " products ",
        isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "ml-1 inline h-3 w-3 animate-spin" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-background/40 text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Food" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Restaurant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Availability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: isLoading ? Array.from({
          length: 6
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-full animate-pulse rounded bg-primary/10" }) }) }, i)) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-16 text-center text-destructive", children: error.message }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 py-16 text-center text-muted-foreground", children: "No products yet" }) }) : items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 hover:bg-accent/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, className: "h-10 w-10 rounded-lg object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-accent", children: "🍽️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                p.title,
                " ",
                p.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800", children: "Featured" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                "#",
                p.id
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: typeof p.restaurant === "object" ? p.restaurant?.name ?? "—" : p.restaurant ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-semibold", children: [
            "₹",
            Number(p.effectivePrice ?? p.effective_price ?? p.price ?? 0).toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle.mutate({
            id: p.id,
            isAvailable: !p.isAvailable,
            source
          }), disabled: toggle.isPending, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: p.isAvailable ? "Active" : "Inactive" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            source !== "seller" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => update.mutate({
              id: p.id,
              payload: {
                featured: !p.isFeatured
              },
              source
            }), className: "rounded p-1.5 text-amber-600 hover:bg-amber-100", title: p.isFeatured ? "Unfeature" : "Mark as featured", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded p-1.5 text-primary hover:bg-primary/10", onClick: () => {
              setEditing(p);
              setShowForm(true);
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
            source !== "seller" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              if (window.confirm(`Delete "${p.title}"?`)) del.mutate({
                id: p.id,
                source
              });
            }, disabled: del.isPending, className: "rounded p-1.5 text-destructive hover:bg-destructive/10 disabled:opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] }) })
        ] }, p.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Page ",
          data?.page ?? page,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: page === 1 || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: page >= totalPages || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModalForm, { open: showForm, onClose: () => {
      setShowForm(false);
      setEditing(null);
    }, form, setForm, editing, source, onSave: async () => {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value === void 0 || value === null || value === "") return;
        if (key === "image" && value) fd.append("image", value);
        else if (key !== "image") {
          fd.append(key, String(value));
          const snake = key.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
          if (snake !== key) fd.append(snake, String(value));
        }
      });
      try {
        if (editing) {
          await update.mutateAsync({
            id: editing.id,
            payload: fd,
            source
          });
        } else {
          await create.mutateAsync({
            payload: fd,
            source
          });
        }
        setShowForm(false);
        setEditing(null);
      } catch (e) {
        console.error(e);
      }
    } })
  ] });
}
function ModalForm({
  open,
  onClose,
  form,
  setForm,
  onSave,
  editing,
  source
}) {
  if (!open) return null;
  const isSeller = source === "seller";
  const disabled = isSeller && !!editing;
  const set = (key, value) => setForm((s) => ({
    ...s,
    [key]: value
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl rounded-xl border border-border bg-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: editing ? isSeller ? "Edit Stock" : "Edit Food" : "Add Item" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", value: form.title, onChange: (v) => set("title", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subtitle", value: form.subtitle, onChange: (v) => set("subtitle", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", value: form.categoryName, onChange: (v) => set("categoryName", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Food Type", value: form.foodType, onChange: (v) => set("foodType", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Price", value: form.price, onChange: (v) => set("price", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Discount Price", value: form.discountPrice, onChange: (v) => set("discountPrice", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Stock Quantity", value: form.stockQuantity, onChange: (v) => set("stockQuantity", v) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
        "Quantity / Variant Type",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.variantType, onChange: (e) => set("variantType", e.target.value), disabled, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 disabled:opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "STANDARD", children: "Standard (Single Unit / Pieces)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PIZZA", children: "Pizza (Sizes: Small, Medium, Large)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CAKE", children: "Cake (Weights: 500gm, 1kg, 1.5kg, 2kg)" })
        ] })
      ] }),
      form.variantType === "PIZZA" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Small Size Extra", value: form.smallSizeExtra, onChange: (v) => set("smallSizeExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Medium Size Extra", value: form.mediumSizeExtra, onChange: (v) => set("mediumSizeExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Large Size Extra", value: form.largeSizeExtra, onChange: (v) => set("largeSizeExtra", v), disabled })
      ] }),
      form.variantType === "CAKE" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 500gm Extra", value: form.cake500gmExtra, onChange: (v) => set("cake500gmExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 1kg Extra", value: form.cake1kgExtra, onChange: (v) => set("cake1kgExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 1.5kg Extra", value: form.cake15kgExtra, onChange: (v) => set("cake15kgExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake 2kg Extra", value: form.cake2kgExtra, onChange: (v) => set("cake2kgExtra", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Cake Message Charge", value: form.cakeMessageCharge, onChange: (v) => set("cakeMessageCharge", v), disabled })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
        "Image",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: (e) => set("image", e.target.files?.[0] ?? null), disabled, className: "mt-1 w-full rounded-md border border-input px-3 py-2 disabled:opacity-60" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-3 block text-sm font-medium", children: [
      "Description",
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.description, onChange: (e) => set("description", e.target.value), disabled, className: "mt-1 min-h-24 w-full rounded-md border border-input px-3 py-2 disabled:opacity-60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Veg", value: form.isVeg, onChange: (v) => set("isVeg", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Available", value: form.isAvailable, onChange: (v) => set("isAvailable", v), disabled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Bestseller", value: form.isBestseller, onChange: (v) => set("isBestseller", v), disabled }),
      form.variantType === "CAKE" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Cake Message", value: form.cakeMessageEnabled, onChange: (v) => set("cakeMessageEnabled", v), disabled }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Custom Weight", value: form.customWeightEnabled, onChange: (v) => set("customWeightEnabled", v), disabled })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "rounded-md border border-border px-4 py-2 text-sm hover:bg-accent", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSave, className: "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground", children: "Save" })
    ] })
  ] }) });
}
function Field({
  label,
  value,
  onChange,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: value ?? "", onChange: (e) => onChange(e.target.value), disabled, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 disabled:opacity-60" })
  ] });
}
function Toggle({
  label,
  value,
  onChange,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-lg border border-border p-3 text-sm font-medium disabled:opacity-60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: !!value, onChange: (e) => onChange(e.target.checked), disabled })
  ] });
}
const $$splitComponentImporter$h = () => import("./delivery-boys-CQl-bQib.mjs");
const Route$h = createFileRoute("/delivery-boys")({
  head: () => ({
    meta: [{
      title: "Delivery Boys | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./customers-R-wNz3fv.mjs");
const Route$g = createFileRoute("/customers")({
  head: () => ({
    meta: [{
      title: "Customers | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./customer-messages-CLXSo9fh.mjs");
const Route$f = createFileRoute("/customer-messages")({
  head: () => ({
    meta: [{
      title: "Admin Notifications | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./cuisine-BDAVvGK0.mjs");
const Route$e = createFileRoute("/cuisine")({
  head: () => ({
    meta: [{
      title: "Cuisine | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./coupons-CCk-1QEO.mjs");
const Route$d = createFileRoute("/coupons")({
  head: () => ({
    meta: [{
      title: "Coupons | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./categories-CGZgSMff.mjs");
const Route$c = createFileRoute("/categories")({
  head: () => ({
    meta: [{
      title: "Categories | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./banners-T4mxXisZ.mjs");
const Route$b = createFileRoute("/banners")({
  head: () => ({
    meta: [{
      title: "Banners | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./admin-profile-DyU01UZm.mjs");
const Route$a = createFileRoute("/admin-profile")({
  head: () => ({
    meta: [{
      title: "Admin Profile | Mr Breado Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./admin-foods-B9Tv3iC_.mjs");
const Route$9 = createFileRoute("/admin-foods")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-CXs6vr8v.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dashboard | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Dialog = Root;
const DialogPortal = Portal;
const DialogClose = Close;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const ordersService = {
  list: (params = {}) => request({
    url: endpoints.admin.mrBreado.orders,
    method: "GET",
    params: { page: params.page ?? 1, perPage: params.perPage ?? 20, status: params.status }
  }),
  detail: (id) => request({
    url: endpoints.admin.mrBreado.orderById(id),
    method: "GET"
  }),
  accept: (id) => request({
    url: endpoints.admin.mrBreado.accept(id),
    method: "POST"
  }),
  preparing: (id) => request({
    url: endpoints.admin.mrBreado.preparing(id),
    method: "POST"
  }),
  ready: (id) => request({
    url: endpoints.admin.mrBreado.ready(id),
    method: "POST"
  }),
  reject: (id, reason) => request({
    url: endpoints.admin.mrBreado.reject(id),
    method: "POST",
    data: { reason }
  }),
  downloadInvoice: async (id, orderNumber) => {
    const blob = await downloadBlob({ url: endpoints.admin.mrBreado.invoicePdf(id), method: "GET" });
    const clean = String(orderNumber || id).replace(/[^a-zA-Z0-9_-]/g, "_");
    saveBlob(blob, `${clean}_invoice.pdf`);
  },
  sendInvoice: (id) => request({
    url: endpoints.admin.mrBreado.sendInvoice(id),
    method: "POST"
  }),
  assignRider: (id, riderId) => request({
    url: `/admin/mr-breado/orders/${id}/assign-rider`,
    method: "POST",
    data: { riderId }
  }),
  delivered: (id) => request({
    url: `/admin/mr-breado/orders/${id}/delivered`,
    method: "POST"
  }),
  updateStatus: (id, status, reason) => request({
    url: `/admin/mr-breado/orders/${id}/status`,
    method: "POST",
    data: { status, reason }
  })
};
const orderKeys = {
  all: ["orders"],
  list: (q) => ["orders", "list", q],
  detail: (id) => ["orders", "detail", id]
};
function useOrders(query) {
  return useQuery({
    queryKey: orderKeys.list(query),
    queryFn: () => ordersService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function useOrder(id) {
  return useQuery({
    queryKey: orderKeys.detail(id ?? "none"),
    queryFn: () => ordersService.detail(id),
    enabled: id != null
  });
}
function labelFor(action, status) {
  switch (action) {
    case "accept":
      return "Order accepted";
    case "preparing":
      return "Order moved to preparing";
    case "ready":
      return "Order marked ready";
    case "reject":
      return "Order rejected";
    case "sendInvoice":
      return "Invoice sent to customer";
    case "downloadInvoice":
      return "Invoice downloaded";
    case "assignRider":
      return "Rider assigned successfully";
    case "delivered":
      return "Order marked delivered";
    case "updateStatus":
      return `Order status updated to ${status}`;
  }
}
function useOrderAction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars) => {
      switch (vars.action) {
        case "accept":
          return ordersService.accept(vars.id);
        case "preparing":
          return ordersService.preparing(vars.id);
        case "ready":
          return ordersService.ready(vars.id);
        case "reject":
          return ordersService.reject(vars.id, vars.reason ?? "Rejected by admin");
        case "sendInvoice":
          return ordersService.sendInvoice(vars.id);
        case "downloadInvoice":
          return ordersService.downloadInvoice(vars.id, vars.orderNumber);
        case "assignRider":
          return ordersService.assignRider(vars.id, vars.riderId || "");
        case "delivered":
          return ordersService.delivered(vars.id);
        case "updateStatus":
          return ordersService.updateStatus(vars.id, vars.status || "", vars.reason);
      }
    },
    onMutate: (v) => {
      if (v.action !== "downloadInvoice") toast.loading("Updating order...", { id: `order-${v.id}-${v.action}` });
    },
    onSuccess: (_d, v) => {
      toast.success(labelFor(v.action, v.status), { id: `order-${v.id}-${v.action}` });
      qc.invalidateQueries({ queryKey: orderKeys.all });
      qc.invalidateQueries({ queryKey: orderKeys.detail(v.id) });
    },
    onError: (_e, v) => toast.error("Action could not be completed. Please refresh and try again.", { id: `order-${v.id}-${v.action}` })
  });
}
const driversService = {
  list: (params = {}) => request({
    url: endpoints.admin.driversCash,
    method: "GET",
    params: {
      page: params.page ?? 1,
      perPage: params.perPage ?? 20,
      search: params.search || void 0
    }
  }),
  details: async (driverId) => {
    try {
      const res = await api.get(endpoints.admin.driverVerificationDetails(driverId));
      return res.data?.data ?? res.data;
    } catch {
      const res = await api.get(endpoints.admin.driverById(driverId));
      return res.data?.data ?? res.data;
    }
  },
  setVerificationStatus: async (driverId, status) => {
    try {
      const res = await api.patch(endpoints.admin.riderVerificationStatus(driverId), null, { params: { status } });
      return res.data?.data ?? res.data;
    } catch {
      const res = await api.post(status === "VERIFIED" ? endpoints.admin.driverApprove(driverId) : endpoints.admin.driverReject(driverId), { reason: status === "REJECTED" ? "Rejected by admin" : void 0 });
      return res.data?.data ?? res.data;
    }
  },
  verifyDeposit: (driverId, body) => request({
    url: endpoints.admin.verifyDriverCash(driverId),
    method: "POST",
    data: body
  }),
  transactions: (driverId, page = 1, perPage = 20) => request({
    url: endpoints.admin.driverCashTx(driverId),
    method: "GET",
    params: { page, perPage }
  })
};
const driverKeys = {
  all: ["drivers"],
  list: (q) => ["drivers", "list", q]
};
function useDrivers(query) {
  return useQuery({
    queryKey: driverKeys.list(query),
    queryFn: () => driversService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
function useVerifyDriverDeposit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ driverId, body }) => driversService.verifyDeposit(driverId, body),
    onSuccess: () => {
      toast.success("Cash deposit verified");
      qc.invalidateQueries({ queryKey: driverKeys.all });
    },
    onError: (e) => toast.error(e.message)
  });
}
function useDebounce(value, delay = 300) {
  const [v, setV] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}
function formatCurrency(value) {
  const n = Number(value);
  return `₹${Number.isFinite(n) ? n.toFixed(2) : "0.00"}`;
}
function toFormData(payload) {
  if (payload instanceof FormData) return payload;
  const fd = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value === void 0 || value === null || value === "") return;
    if (value instanceof File || value instanceof Blob) fd.append(key, value);
    else fd.append(key, typeof value === "string" ? value : JSON.stringify(value));
  });
  return fd;
}
const mrBreadoService = {
  restaurant: () => request({ url: endpoints.admin.mrBreado.restaurant, method: "GET" }),
  updateRestaurant: (data) => request({
    url: endpoints.admin.mrBreado.restaurant,
    method: "PUT",
    data: toFormData(data),
    headers: { "Content-Type": "multipart/form-data" }
  }),
  updateRestaurantStatus: (data) => request({ url: endpoints.admin.mrBreado.restaurantStatus, method: "PATCH", data })
};
const $$splitComponentImporter$7 = () => import("./index-sdVUQLkc.mjs");
const Route$7 = createFileRoute("/orders/")({
  head: () => ({
    meta: [{
      title: "Orders | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const ACTIVE_STATUSES = /* @__PURE__ */ new Set(["PENDING", "ACCEPTED", "PREPARING", "READY", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY"]);
const FINAL_STATUSES = /* @__PURE__ */ new Set(["DELIVERED", "CANCELLED", "REJECTED"]);
function normalizeStatus(status) {
  return String(status || "").trim().toUpperCase().replaceAll(" ", "_");
}
function isActiveOrder(order) {
  return ACTIVE_STATUSES.has(normalizeStatus(order.status || order.statusLabel));
}
function asNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}
function actionStorageKey(orderId, action) {
  return `mrbreado:order-action:${orderId}:${action}`;
}
function getStoredAction(orderId, action) {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(actionStorageKey(orderId, action)) === "1";
}
function setStoredAction(orderId, action) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(actionStorageKey(orderId, action), "1");
}
function isActionAlreadyDone(order, action, localDone) {
  if (action === "downloadInvoice") return false;
  const status = normalizeStatus(order.status || order.statusLabel);
  const key = actionStorageKey(order.id, action);
  if (localDone[key] || getStoredAction(order.id, action)) return true;
  if (action === "accept") return status !== "PENDING";
  if (action === "preparing") return ["PREPARING", "READY", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED", "REJECTED"].includes(status);
  if (action === "ready") return ["READY", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED", "REJECTED"].includes(status);
  if (action === "reject") return FINAL_STATUSES.has(status);
  if (action === "sendInvoice") return localDone[key] || getStoredAction(order.id, action);
  if (action === "delivered") return ["DELIVERED", "CANCELLED", "REJECTED"].includes(status);
  return false;
}
function OrdersPage({
  filterStatus,
  title = "All Orders",
  activeOnly = false
}) {
  const qc = useQueryClient();
  const [page, setPage] = reactExports.useState(1);
  const [perPage] = reactExports.useState(20);
  const [search, setSearch] = reactExports.useState("");
  const [localDone, setLocalDone] = reactExports.useState({});
  const dq = useDebounce(search, 300);
  const {
    data,
    isLoading,
    isFetching,
    error
  } = useOrders({
    page,
    perPage,
    status: activeOnly ? void 0 : filterStatus
  });
  const action = useOrderAction();
  const [selectedOrderId, setSelectedOrderId] = reactExports.useState(null);
  const orderDetail = useOrder(selectedOrderId ?? void 0);
  const [selectedRiderId, setSelectedRiderId] = reactExports.useState("");
  const [statusToChange, setStatusToChange] = reactExports.useState("");
  const [selectedAction, setSelectedAction] = reactExports.useState(null);
  const driversQuery = useDrivers({
    page: 1,
    perPage: 100
  });
  const driversList = driversQuery.data?.items || [];
  function isDriverVerified(r) {
    const status = String(r.verificationStatus ?? "").toUpperCase();
    if (status) return status === "VERIFIED" || status === "APPROVED";
    return r.verified === true;
  }
  function driverActive(r) {
    return Boolean(r.online || r.available) && isDriverVerified(r) && !r.blocked;
  }
  reactExports.useEffect(() => {
    setSelectedRiderId("");
    setStatusToChange("");
    setSelectedAction(null);
  }, [selectedOrderId]);
  const handleAssignRider = () => {
    if (!selectedOrderId || !selectedRiderId) return;
    setSelectedAction("assignRider");
    action.mutate({
      id: selectedOrderId,
      action: "assignRider",
      riderId: selectedRiderId
    }, {
      onSuccess: () => {
        setSelectedRiderId("");
        setSelectedAction(null);
        qc.invalidateQueries({
          queryKey: orderKeys.all
        });
        qc.invalidateQueries({
          queryKey: orderKeys.detail(selectedOrderId)
        });
      },
      onError: () => setSelectedAction(null)
    });
  };
  const handleForceStatusChange = () => {
    if (!selectedOrderId || !statusToChange) return;
    const confirm = window.confirm(`Are you sure you want to force status change to ${statusToChange}?`);
    if (!confirm) return;
    const reason = window.prompt("Reason for force status change?") || "Admin forced change";
    setSelectedAction("updateStatus");
    action.mutate({
      id: selectedOrderId,
      action: "updateStatus",
      status: statusToChange,
      reason
    }, {
      onSuccess: () => {
        setStatusToChange("");
        setSelectedAction(null);
        qc.invalidateQueries({
          queryKey: orderKeys.all
        });
        qc.invalidateQueries({
          queryKey: orderKeys.detail(selectedOrderId)
        });
      },
      onError: () => setSelectedAction(null)
    });
  };
  const restaurant = useQuery({
    queryKey: ["mr-breado", "restaurant"],
    queryFn: mrBreadoService.restaurant,
    staleTime: 2e4
  });
  const isRestaurantOpen = !!(restaurant.data?.open ?? restaurant.data?.isOpen ?? restaurant.data?.is_open);
  const toggleRestaurant = useMutation({
    mutationFn: () => mrBreadoService.updateRestaurantStatus({
      open: !isRestaurantOpen,
      isOpen: !isRestaurantOpen,
      is_open: !isRestaurantOpen
    }),
    onSuccess: () => {
      toast.success(!isRestaurantOpen ? "Restaurant opened for orders" : "Restaurant closed for new orders");
      qc.invalidateQueries({
        queryKey: ["mr-breado", "restaurant"]
      });
    },
    onError: () => toast.error("Restaurant status could not be updated. Please try again.")
  });
  const items = reactExports.useMemo(() => {
    return (data?.items ?? []).filter((o) => !activeOnly || isActiveOrder(o)).filter((o) => {
      if (!dq) return true;
      const q = dq.toLowerCase();
      return o.orderNumber?.toLowerCase().includes(q) || o.customerName?.toLowerCase().includes(q) || o.customerMobile?.includes(q);
    });
  }, [data?.items, activeOnly, dq]);
  const activeCount = (data?.items ?? []).filter(isActiveOrder).length;
  const totalPages = data?.total_pages ?? data?.totalPages ?? 1;
  const markActionDone = (id, actionName) => {
    if (actionName === "downloadInvoice") return;
    setStoredAction(id, actionName);
    setLocalDone((s) => ({
      ...s,
      [actionStorageKey(id, actionName)]: true
    }));
  };
  const runOrderAction = (vars) => {
    action.mutate(vars, {
      onSuccess: () => markActionDone(vars.id, vars.action)
    });
  };
  reactExports.useEffect(() => {
    if (!orderDetail.data) return;
    qc.invalidateQueries({
      queryKey: orderKeys.list({
        page,
        perPage,
        status: activeOnly ? void 0 : filterStatus
      })
    });
  }, [orderDetail.data?.status]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }), breadcrumbs: [{
      label: "Dashboard",
      to: "/"
    }, {
      label: "Orders"
    }, ...activeOnly ? [{
      label: "Active"
    }] : filterStatus ? [{
      label: String(filterStatus)
    }] : []] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-card md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isRestaurantOpen ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Mr Breado order receiving" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Current state: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: isRestaurantOpen ? "Open" : "Closed" }),
            ". Use this to stop or resume new restaurant orders."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleRestaurant.mutate(), disabled: toggleRestaurant.isPending || restaurant.isLoading, className: `inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition disabled:opacity-60 ${isRestaurantOpen ? "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20" : "border-success/30 bg-success/10 text-success hover:bg-success/20"}`, children: [
        toggleRestaurant.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : isRestaurantOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "h-4 w-4" }),
        isRestaurantOpen ? "Close Restaurant" : "Open Restaurant"
      ] })
    ] }),
    activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded-2xl border border-primary/40 bg-primary/10 p-4 shadow-[0_0_35px_rgba(249,115,22,0.20)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold text-primary", children: [
          activeCount,
          " active order",
          activeCount > 1 ? "s" : "",
          " need attention"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Current live orders are highlighted below with a glowing border." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-4 w-4" }),
        " Active now"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-semibold", children: [
          activeOnly ? items.length : data?.total ?? 0,
          " orders ",
          isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "ml-1 inline h-3 w-3 animate-spin" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by order #, name, mobile...", className: "w-64 max-w-full bg-transparent outline-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[1180px] text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-background/40 text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Order #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Rider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-medium", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: isLoading ? Array.from({
          length: 6
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-full animate-pulse rounded bg-primary/10" }) }) }, i)) : error ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-16 text-center text-muted-foreground", children: "Orders are temporarily unavailable. Please refresh after a moment." }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "px-4 py-16 text-center text-muted-foreground", children: "No orders found" }) }) : items.map((o) => {
          const total = asNumber(o.grandTotal);
          const createdAt = o.createdAt ? new Date(o.createdAt) : null;
          const dateLabel = createdAt && !Number.isNaN(createdAt.getTime()) ? createdAt.toLocaleString() : "—";
          const payment = [o.paymentType, o.paymentStatus].filter(Boolean).join(" · ") || "—";
          const active = isActiveOrder(o);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b border-border/60 transition ${active ? "bg-primary/5 shadow-[inset_4px_0_0_hsl(var(--primary)),0_0_24px_rgba(249,115,22,0.10)]" : "hover:bg-accent/30"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 font-mono text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: o.orderNumber || `#${o.id}` }),
              active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 inline-flex rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-primary", children: "Active" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: o.customerName || "Guest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: o.customerMobile || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-xs", children: payment }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 font-semibold", children: formatCurrency(total) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.statusLabel || o.status || "PENDING" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: o.riderName ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o.riderName })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Not Assigned" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-xs text-muted-foreground", children: dateLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderActions, { order: o, isPending: action.isPending, localDone, onView: () => setSelectedOrderId(o.id), onAction: runOrderAction }) })
          ] }, o.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: selectedOrderId != null, onOpenChange: (open) => {
        if (!open) setSelectedOrderId(null);
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[92vh] max-w-5xl overflow-y-auto p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 border-b border-border bg-card px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-bold", children: orderDetail.isLoading ? "Loading Order Details..." : orderDetail.error ? "Order Details" : orderDetail.data?.orderNumber || `Order #${orderDetail.data?.id}` }),
            orderDetail.data && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
              "Placed on ",
              orderDetail.data.createdAt ? new Date(orderDetail.data.createdAt).toLocaleString() : "—"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { className: "rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-accent", children: "Close" })
        ] }) }),
        orderDetail.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) }) : orderDetail.error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-muted-foreground", children: "Order details are temporarily unavailable. Please try again." }) : orderDetail.data ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), title: "Customer", lines: [orderDetail.data.customerName || "Guest", orderDetail.data.customerMobile || "No mobile", orderDetail.data.customerEmail || ""] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiptText, { className: "h-4 w-4" }), title: "Payment", lines: [[orderDetail.data.paymentType, orderDetail.data.paymentStatus].filter(Boolean).join(" · ") || "—", `Status: ${orderDetail.data.statusLabel || orderDetail.data.status || "—"}`] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }), title: "Grand Total", lines: [formatCurrency(orderDetail.data.grandTotal), `Subtotal: ${formatCurrency(orderDetail.data.subtotal)}`], big: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4" }), title: "Rider Details", lines: [orderDetail.data.riderName ? `Rider: ${orderDetail.data.riderName}` : "Rider: Not Assigned", `OTP: ${orderDetail.data.deliveryOtp || "—"}`] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-base font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
              " Delivery Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-muted-foreground", children: orderDetail.data.deliveryAddress || "Address not available from backend response." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Order Items" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[720px] text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-background/60 text-xs uppercase text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Qty" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Total" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (orderDetail.data.items ?? []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "px-4 py-8 text-center text-muted-foreground", children: "No item details returned by backend." }) }) : (orderDetail.data.items ?? []).map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 font-medium", children: it.productName || it.title || it.name || "Food item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4 text-right", children: [
                  "x",
                  it.quantity ?? 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-right", children: formatCurrency(it.price) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-right font-semibold", children: formatCurrency(it.totalPrice ?? asNumber(it.price) * asNumber(it.quantity ?? 1)) })
              ] }, it.id ?? idx)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-4 lg:grid-cols-[1fr_360px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Order Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Order type: ",
                  orderDetail.data.orderType || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Estimated delivery: ",
                  orderDetail.data.estimatedDeliveryMinutes ? `${orderDetail.data.estimatedDeliveryMinutes} mins` : "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Cancelled at: ",
                  orderDetail.data.cancelledAt || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Delivered at: ",
                  orderDetail.data.deliveredAt || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  "Cancellation reason: ",
                  orderDetail.data.cancellationReason || "—"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: "Bill Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Subtotal", value: orderDetail.data.subtotal }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Delivery charge", value: orderDetail.data.deliveryCharge }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Tax", value: orderDetail.data.tax }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Discount", value: -Math.abs(asNumber(orderDetail.data.discount)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Wallet used", value: -Math.abs(asNumber(orderDetail.data.walletUsed)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-lg font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatCurrency(orderDetail.data.grandTotal) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            orderDetail.data.orderType !== "TAKEAWAY" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-base font-bold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bike, { className: "h-4 w-4" }),
                " Assign Rider"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedRiderId, onChange: (e) => setSelectedRiderId(e.target.value), className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a rider..." }),
                  driversList.map((driver) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: driver.mongoId || driver.driverId || driver.id, children: [
                    driver.driverName,
                    " (",
                    driver.driverMobile || "No Mobile",
                    ") ",
                    driverActive(driver) ? "· Active" : ""
                  ] }, driver.driverId))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleAssignRider, disabled: !selectedRiderId || action.isPending, className: "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/95 disabled:opacity-50", children: [
                  action.isPending && selectedAction === "assignRider" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
                  "Assign"
                ] })
              ] }),
              orderDetail.data.riderName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-muted-foreground", children: [
                "Currently assigned to: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: orderDetail.data.riderName })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-background/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-base font-bold text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "h-4 w-4" }),
                " Force Status Change"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: statusToChange, onChange: (e) => setStatusToChange(e.target.value), className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select new status..." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RECEIVED", children: "RECEIVED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDING_PAYMENT", children: "PENDING_PAYMENT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ACCEPTED", children: "ACCEPTED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PREPARING", children: "PREPARING" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "READY", children: "READY" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RIDER_ASSIGNMENT_PENDING", children: "RIDER_ASSIGNMENT_PENDING" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RIDER_ASSIGNED", children: "RIDER_ASSIGNED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PICKED_UP", children: "PICKED_UP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "OUT_FOR_DELIVERY", children: "OUT_FOR_DELIVERY" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "REACHED_DROP", children: "REACHED_DROP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DELIVERED", children: "DELIVERED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "REJECTED", children: "REJECTED" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELLED", children: "CANCELLED" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleForceStatusChange, disabled: !statusToChange || action.isPending, className: "inline-flex items-center justify-center rounded-lg bg-destructive px-4 py-2 text-sm font-bold text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50", children: [
                  action.isPending && selectedAction === "updateStatus" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
                  "Force Update"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] text-muted-foreground", children: "Bypasses normal state machine transition rules." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 border-t border-border pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OrderActions, { order: orderDetail.data, isPending: action.isPending, localDone, onView: () => void 0, onAction: runOrderAction, expanded: true }) })
        ] }) : null
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Page ",
          data?.page ?? page,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: page === 1 || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: page >= totalPages || isFetching, className: "rounded-md border border-border p-1.5 hover:bg-accent disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] })
  ] });
}
function OrderActions({
  order,
  isPending,
  localDone,
  onView,
  onAction,
  expanded = false
}) {
  const disabled = (name) => isPending || isActionAlreadyDone(order, name, localDone);
  const reject = () => {
    const reason = window.prompt("Reject reason?") || "";
    if (reason.trim()) onAction({
      id: order.id,
      action: "reject",
      reason
    });
  };
  const cls = expanded ? "flex flex-wrap items-center gap-3" : "flex min-w-[520px] flex-wrap items-center gap-2";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cls, children: [
    !expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "View", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }), onClick: onView, tone: "info" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Accept", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "accept"
    }), tone: "success", disabled: disabled("accept") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Prep", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "preparing"
    }), tone: "warning", disabled: disabled("preparing") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Ready", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "ready"
    }), tone: "primary", disabled: disabled("ready") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Delivered", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "delivered"
    }), tone: "success", disabled: disabled("delivered") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: expanded ? "Download Invoice" : "PDF", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "downloadInvoice",
      orderNumber: order.orderNumber
    }), disabled: isPending }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: expanded ? "Send Invoice" : "Send", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }), onClick: () => onAction({
      id: order.id,
      action: "sendInvoice"
    }), tone: "info", disabled: disabled("sendInvoice") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IconAction, { label: "Reject", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }), onClick: reject, tone: "danger", disabled: disabled("reject") })
  ] });
}
function IconAction({
  label,
  icon,
  onClick,
  disabled,
  tone = "neutral"
}) {
  const toneClass = {
    neutral: "border-border bg-background text-foreground hover:bg-accent",
    info: "border-info/30 bg-info/10 text-info hover:bg-info/20",
    success: "border-success/30 bg-success/10 text-success hover:bg-success/20",
    warning: "border-warning/30 bg-warning/10 text-warning hover:bg-warning/20",
    primary: "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20",
    danger: "border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, disabled, className: `inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-40 ${toneClass}`, title: disabled ? `${label} already completed or not available for this status` : label, children: [
    icon,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
  ] });
}
function InfoCard({
  icon,
  title,
  lines,
  big
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-bold text-muted-foreground", children: [
      icon,
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: big ? "text-2xl font-bold text-primary" : "space-y-1 text-sm font-medium", children: lines.filter(Boolean).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: line }, i)) })
  ] });
}
function SummaryRow({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(value) })
  ] });
}
const $$splitComponentImporter$6 = () => import("./ready-for-pickup-B9lkIdwM.mjs");
const Route$6 = createFileRoute("/orders/ready-for-pickup")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./preparing-CqVWJdPd.mjs");
const Route$5 = createFileRoute("/orders/preparing")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./pending-1LbLo7fA.mjs");
const Route$4 = createFileRoute("/orders/pending")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./delivered-CrPxw51F.mjs");
const Route$3 = createFileRoute("/orders/delivered")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cancelled-CTBUKse6.mjs");
const Route$2 = createFileRoute("/orders/cancelled")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./active-CsX_vBQV.mjs");
const Route$1 = createFileRoute("/orders/active")({
  head: () => ({
    meta: [{
      title: "Active Orders | Go4Food Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./accepted-CVKFqN0S.mjs");
const Route = createFileRoute("/orders/accepted")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ZonesRoute = Route$A.update({
  id: "/zones",
  path: "/zones",
  getParentRoute: () => Route$B
});
const TicketsRoute = Route$z.update({
  id: "/tickets",
  path: "/tickets",
  getParentRoute: () => Route$B
});
const SupportRoute = Route$y.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => Route$B
});
const SubscriptionsRoute = Route$x.update({
  id: "/subscriptions",
  path: "/subscriptions",
  getParentRoute: () => Route$B
});
const SettingsRoute = Route$w.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$B
});
const ServiceAreaVerificationsRoute = Route$v.update({
  id: "/service-area-verifications",
  path: "/service-area-verifications",
  getParentRoute: () => Route$B
});
const RolesRoute = Route$u.update({
  id: "/roles",
  path: "/roles",
  getParentRoute: () => Route$B
});
const ReviewsRoute = Route$t.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$B
});
const RestaurantsRoute = Route$s.update({
  id: "/restaurants",
  path: "/restaurants",
  getParentRoute: () => Route$B
});
const RegisterRoute = Route$r.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$B
});
const PermissionsRoute = Route$q.update({
  id: "/permissions",
  path: "/permissions",
  getParentRoute: () => Route$B
});
const PayoutsRoute = Route$p.update({
  id: "/payouts",
  path: "/payouts",
  getParentRoute: () => Route$B
});
const OwnersRoute = Route$o.update({
  id: "/owners",
  path: "/owners",
  getParentRoute: () => Route$B
});
const OperationsRoute = Route$n.update({
  id: "/operations",
  path: "/operations",
  getParentRoute: () => Route$B
});
const OffersRoute = Route$m.update({
  id: "/offers",
  path: "/offers",
  getParentRoute: () => Route$B
});
const NotificationsRoute = Route$l.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => Route$B
});
const MrBreadoRestaurantRoute = Route$k.update({
  id: "/mr-breado-restaurant",
  path: "/mr-breado-restaurant",
  getParentRoute: () => Route$B
});
const LoginRoute = Route$j.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$B
});
const FoodsRoute = Route$i.update({
  id: "/foods",
  path: "/foods",
  getParentRoute: () => Route$B
});
const DeliveryBoysRoute = Route$h.update({
  id: "/delivery-boys",
  path: "/delivery-boys",
  getParentRoute: () => Route$B
});
const CustomersRoute = Route$g.update({
  id: "/customers",
  path: "/customers",
  getParentRoute: () => Route$B
});
const CustomerMessagesRoute = Route$f.update({
  id: "/customer-messages",
  path: "/customer-messages",
  getParentRoute: () => Route$B
});
const CuisineRoute = Route$e.update({
  id: "/cuisine",
  path: "/cuisine",
  getParentRoute: () => Route$B
});
const CouponsRoute = Route$d.update({
  id: "/coupons",
  path: "/coupons",
  getParentRoute: () => Route$B
});
const CategoriesRoute = Route$c.update({
  id: "/categories",
  path: "/categories",
  getParentRoute: () => Route$B
});
const BannersRoute = Route$b.update({
  id: "/banners",
  path: "/banners",
  getParentRoute: () => Route$B
});
const AdminProfileRoute = Route$a.update({
  id: "/admin-profile",
  path: "/admin-profile",
  getParentRoute: () => Route$B
});
const AdminFoodsRoute = Route$9.update({
  id: "/admin-foods",
  path: "/admin-foods",
  getParentRoute: () => Route$B
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$B
});
const OrdersIndexRoute = Route$7.update({
  id: "/orders/",
  path: "/orders/",
  getParentRoute: () => Route$B
});
const OrdersReadyForPickupRoute = Route$6.update({
  id: "/orders/ready-for-pickup",
  path: "/orders/ready-for-pickup",
  getParentRoute: () => Route$B
});
const OrdersPreparingRoute = Route$5.update({
  id: "/orders/preparing",
  path: "/orders/preparing",
  getParentRoute: () => Route$B
});
const OrdersPendingRoute = Route$4.update({
  id: "/orders/pending",
  path: "/orders/pending",
  getParentRoute: () => Route$B
});
const OrdersDeliveredRoute = Route$3.update({
  id: "/orders/delivered",
  path: "/orders/delivered",
  getParentRoute: () => Route$B
});
const OrdersCancelledRoute = Route$2.update({
  id: "/orders/cancelled",
  path: "/orders/cancelled",
  getParentRoute: () => Route$B
});
const OrdersActiveRoute = Route$1.update({
  id: "/orders/active",
  path: "/orders/active",
  getParentRoute: () => Route$B
});
const OrdersAcceptedRoute = Route.update({
  id: "/orders/accepted",
  path: "/orders/accepted",
  getParentRoute: () => Route$B
});
const rootRouteChildren = {
  IndexRoute,
  AdminFoodsRoute,
  AdminProfileRoute,
  BannersRoute,
  CategoriesRoute,
  CouponsRoute,
  CuisineRoute,
  CustomerMessagesRoute,
  CustomersRoute,
  DeliveryBoysRoute,
  FoodsRoute,
  LoginRoute,
  MrBreadoRestaurantRoute,
  NotificationsRoute,
  OffersRoute,
  OperationsRoute,
  OwnersRoute,
  PayoutsRoute,
  PermissionsRoute,
  RegisterRoute,
  RestaurantsRoute,
  ReviewsRoute,
  RolesRoute,
  ServiceAreaVerificationsRoute,
  SettingsRoute,
  SubscriptionsRoute,
  SupportRoute,
  TicketsRoute,
  ZonesRoute,
  OrdersAcceptedRoute,
  OrdersActiveRoute,
  OrdersCancelledRoute,
  OrdersDeliveredRoute,
  OrdersPendingRoute,
  OrdersPreparingRoute,
  OrdersReadyForPickupRoute,
  OrdersIndexRoute
};
const routeTree = Route$B._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ADMIN_LOGO_URL as A,
  formatCurrency as B,
  DialogClose as C,
  Dialog as D,
  router as E,
  FoodsPage as F,
  OrdersPage as O,
  PageHeader as P,
  StatusBadge as S,
  api as a,
  authStore as b,
  cn as c,
  authService as d,
  endpoints as e,
  useDeleteProduct as f,
  useToggleProductAvailability as g,
  useCreateProduct as h,
  useUpdateProduct as i,
  useDrivers as j,
  useVerifyDriverDeposit as k,
  driverKeys as l,
  mrBreadoService as m,
  driversService as n,
  DialogContent as o,
  productsService as p,
  DialogHeader as q,
  request as r,
  DialogTitle as s,
  DialogDescription as t,
  useProducts as u,
  useDebounce as v,
  useOrders as w,
  useOrderAction as x,
  useOrder as y,
  orderKeys as z
};
