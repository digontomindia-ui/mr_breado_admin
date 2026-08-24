import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { w as useOrders, u as useProducts, P as PageHeader, S as StatusBadge, c as cn, r as request, e as endpoints } from "./router-CKeaDZpC.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useRestaurants } from "./use-restaurants-BUr_94AN.mjs";
import "../_libs/sonner.mjs";
import { L as LayoutDashboard, a8 as FileText, D as Download, Q as IndianRupee, a as ShoppingBag, U as Users, d as Bike, c as Store, w as LoaderCircle, aj as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area, P as PieChart, b as Pie, c as Cell, B as BarChart, d as Bar } from "../_libs/recharts.mjs";
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
import "./restaurants.service-DES48MtL.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
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
  return out;
}
const dashboardService = {
  get: async () => {
    const res = await request({
      url: endpoints.admin.dashboard,
      method: "GET"
    });
    const data = camelizeObject(res);
    return {
      ...data,
      totalRevenue: data.totalRevenue ?? Number(data.total_revenue) ?? 0,
      totalOrders: data.totalOrders ?? Number(data.total_orders) ?? 0,
      totalCustomers: data.totalCustomers ?? Number(data.total_customers) ?? 0,
      totalUsers: data.totalUsers ?? Number(data.total_users) ?? 0,
      totalDrivers: data.totalDrivers ?? Number(data.total_drivers) ?? 0,
      totalDeliveryBoys: data.totalDeliveryBoys ?? data.totalDrivers ?? 0,
      deliveredOrdersCount: data.deliveredOrdersCount ?? data.deliveredOrders ?? 0,
      totalAdminCommission: data.totalAdminCommission ?? data.adminCommission ?? 0,
      totalRestaurantPayable: data.totalRestaurantPayable ?? data.restaurantPayable ?? 0
    };
  }
};
const dashboardKeys = { all: ["dashboard"] };
function useDashboard() {
  return useQuery({
    queryKey: dashboardKeys.all,
    queryFn: dashboardService.get,
    staleTime: 3e4
  });
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
function formatCurrency(value) {
  const num = Number(value ?? 0);
  if (Number.isNaN(num)) return "₹0";
  const opts = {
    minimumFractionDigits: num % 1 === 0 ? 0 : 2,
    maximumFractionDigits: num % 1 === 0 ? 0 : 2
  };
  return num.toLocaleString(void 0, opts);
}
function useCounter(target, duration = 900) {
  const [v, setV] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}
function StatCard({
  label,
  value,
  prefix = "",
  icon: Icon,
  trend,
  gradient,
  loading
}) {
  const n = useCounter(loading ? 0 : Number(value) || 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-20 blur-2xl ${gradient}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-8 w-24" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-2xl font-bold", children: [
          prefix,
          n.toLocaleString()
        ] }),
        trend != null && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 inline-flex items-center gap-1 text-xs text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }),
          " +",
          trend,
          "% this month"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground ${gradient}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
    ] })
  ] });
}
function Dashboard() {
  const [greeting, setGreeting] = reactExports.useState("Welcome");
  reactExports.useEffect(() => {
    const h = (/* @__PURE__ */ new Date()).getHours();
    setGreeting(h < 12 ? "Good Morning" : h < 18 ? "Good Afternoon" : "Good Evening");
  }, []);
  const {
    data: stats,
    isLoading
  } = useDashboard();
  const {
    data: recentOrders,
    isLoading: ordersLoading
  } = useOrders({
    page: 1,
    perPage: 6
  });
  const {
    data: allOrders,
    isLoading: allOrdersLoading
  } = useOrders({
    page: 1,
    perPage: 100
  });
  const {
    data: restaurants,
    isLoading: restaurantsLoading
  } = useRestaurants({
    page: 1,
    perPage: 5
  });
  const {
    data: trendingProducts,
    isLoading: trendingLoading
  } = useProducts({
    page: 1,
    perPage: 6
  });
  const {
    data: homeData
  } = useQuery({
    queryKey: ["home"],
    queryFn: async () => request({
      url: "/home",
      method: "GET"
    }),
    staleTime: 6e4
  });
  const chartData = recentOrders?.items?.slice(0, 7).map((o, i) => ({
    name: `Order ${i + 1}`,
    revenue: Number(o.grandTotal ?? 0),
    orders: 1
  })) ?? [];
  const statusCounts = (allOrders?.items ?? []).reduce((acc, o) => {
    const s = (o.status || "UNKNOWN").toString();
    acc[s] = (acc[s] || 0) + 1;
    return acc;
  }, {});
  const pieData = [{
    name: "Completed",
    value: statusCounts["DELIVERED"] || 0,
    color: "#10B981"
  }, {
    name: "Pending",
    value: statusCounts["PENDING"] || 0,
    color: "#F59E0B"
  }, {
    name: "Cancelled",
    value: statusCounts["CANCELLED"] || 0,
    color: "#EF4444"
  }];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthMap = new Array(12).fill(0);
  (allOrders?.items ?? []).forEach((o) => {
    const d = new Date(o.createdAt || o.created_at || Date.now());
    monthMap[d.getMonth()] = (monthMap[d.getMonth()] || 0) + 1;
  });
  const growthData = months.map((m, i) => ({
    name: m,
    value: monthMap[i]
  }));
  const viewReport = () => {
    const el = document.getElementById("dashboard-report-section");
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const downloadReport = () => {
    const rows = [["Metric", "Value"], ["Total Revenue", stats?.totalRevenue ?? 0], ["Total Orders", stats?.totalOrders ?? 0], ["Total Customers", stats?.totalCustomers ?? 0], ["Delivery Boys", stats?.totalDeliveryBoys ?? stats?.totalDrivers ?? 0], ["Restaurants", stats?.totalRestaurants ?? 0], ["Total Users", stats?.totalUsers ?? 0], ["Admin Commission", stats?.totalAdminCommission ?? stats?.adminCommission ?? 0], ["Restaurant Payable", stats?.totalRestaurantPayable ?? stats?.restaurantPayable ?? 0]];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mr-breado-dashboard-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Dashboard", breadcrumbs: [{
      label: "Dashboard"
    }], icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-primary opacity-20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Welcome back 👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold tracking-tight md:text-3xl", children: [
            greeting,
            ", Admin"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-xl text-sm text-muted-foreground", children: "Here is what's happening with your food delivery platform today." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: viewReport, className: "inline-flex items-center gap-2 rounded-md gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
            " View Report"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: downloadReport, className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            " Download"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Revenue", value: stats?.totalRevenue ?? 0, prefix: "₹", icon: IndianRupee, gradient: "gradient-primary", loading: isLoading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Orders", value: stats?.totalOrders ?? 0, icon: ShoppingBag, gradient: "gradient-info", loading: isLoading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Customers", value: stats?.totalCustomers ?? 0, icon: Users, gradient: "gradient-success", loading: isLoading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Delivery Boys", value: stats?.totalDeliveryBoys ?? 0, icon: Bike, gradient: "gradient-warning", loading: isLoading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Restaurants", value: stats?.totalRestaurants ?? 0, icon: Store, gradient: "gradient-info", loading: isLoading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Users", value: stats?.totalUsers ?? 0, icon: Users, gradient: "gradient-primary", loading: isLoading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Admin Commission", value: stats?.totalAdminCommission ?? 0, prefix: "₹", icon: IndianRupee, gradient: "gradient-success", loading: isLoading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Restaurant Payable", value: stats?.totalRestaurantPayable ?? 0, prefix: "₹", icon: IndianRupee, gradient: "gradient-warning", loading: isLoading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "dashboard-report-section", className: "mb-6 grid scroll-mt-20 gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Revenue Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Recent orders" })
        ] }),
        chartData.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: chartData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorRevenue", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#ff9100", stopOpacity: 0.3 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#ff9100", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#1f2937" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "#6b7280" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "#6b7280" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "#ff9100", fillOpacity: 1, fill: "url(#colorRevenue)" })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[250px] items-center justify-center", children: ordersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No data available" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Order Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Status breakdown" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", style: {
            height: 160
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PieChart, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { dataKey: "value", data: pieData, innerRadius: 40, outerRadius: 70, paddingAngle: 4, children: pieData.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, `cell-${idx}`)) }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-around text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/orders/delivered", className: "flex items-center gap-2 text-success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-3 rounded-full bg-[#10B981]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: pieData[0].value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Completed" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/orders/pending", className: "flex items-center gap-2 text-warning", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-3 rounded-full bg-[#F59E0B]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: pieData[1].value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Pending" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/orders/cancelled", className: "flex items-center gap-2 text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-3 rounded-full bg-[#EF4444]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: pieData[2].value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Cancelled" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Customer & Restaurant Growth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Monthly growth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: growthData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#1f2937" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "#6b7280" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "#6b7280" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", fill: "#ff9100" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Top Restaurants" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/restaurants", className: "text-xs text-primary hover:underline", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-1 lg:grid-cols-1", children: (restaurants?.items ?? []).slice(0, 4).sort((a, b) => (b.grossSales || 0) - (a.grossSales || 0)).map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
              idx + 1,
              ". ",
              r.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
              r.productCount ?? 0,
              " orders"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
              "₹",
              formatCurrency(r.grossSales ?? r.restaurantPayable ?? 0)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-success", children: [
              "+",
              r.adminCommission ?? 0,
              "%"
            ] })
          ] })
        ] }, r.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-xl border border-border bg-card p-5 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Trending Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Popular items" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-6", children: (trendingProducts?.items ?? homeData?.featured_foods ?? []).slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/50 bg-background/40 p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 mx-auto rounded-md bg-muted overflow-hidden", children: p.image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title || p.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium", children: p.title ?? p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          "₹",
          formatCurrency(p.price ?? p.discountPrice ?? p.effectivePrice ?? 0),
          " • ",
          p.rating ?? 0,
          " ⭐"
        ] })
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Popular Restaurants" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/restaurants", className: "text-xs text-primary hover:underline", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: (homeData?.popular_restaurants ?? restaurants?.items ?? []).slice(0, 6).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/50 bg-background/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: r.cuisineType ?? r.slug })
        ] }, r.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Recent Orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/orders", className: "text-xs text-primary hover:underline", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (recentOrders?.items ?? []).slice(0, 6).map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
              "Order #",
              order.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(order.createdAt ?? order.created_at ?? Date.now()).toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: order.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
              "₹",
              formatCurrency(order.grandTotal ?? order.grand_total ?? order.payable_now ?? 0)
            ] })
          ] })
        ] }, order.id)) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
