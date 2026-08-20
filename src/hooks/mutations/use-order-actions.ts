import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ordersService } from "@/services/orders.service";
import { orderKeys } from "@/hooks/queries/use-orders";

type Action = "accept" | "preparing" | "ready" | "reject" | "sendInvoice" | "downloadInvoice" | "assignRider" | "delivered" | "updateStatus";

function labelFor(action: Action, status?: string) {
  switch (action) {
    case "accept": return "Order accepted";
    case "preparing": return "Order moved to preparing";
    case "ready": return "Order marked ready";
    case "reject": return "Order rejected";
    case "sendInvoice": return "Invoice sent to customer";
    case "downloadInvoice": return "Invoice downloaded";
    case "assignRider": return "Rider assigned successfully";
    case "delivered": return "Order marked delivered";
    case "updateStatus": return `Order status updated to ${status}`;
  }
}

export function useOrderAction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (vars: { id: number | string; action: Action; reason?: string; orderNumber?: string; riderId?: string; status?: string }) => {
      switch (vars.action) {
        case "accept": return ordersService.accept(vars.id);
        case "preparing": return ordersService.preparing(vars.id);
        case "ready": return ordersService.ready(vars.id);
        case "reject": return ordersService.reject(vars.id, vars.reason ?? "Rejected by admin");
        case "sendInvoice": return ordersService.sendInvoice(vars.id);
        case "downloadInvoice": return ordersService.downloadInvoice(vars.id, vars.orderNumber);
        case "assignRider": return ordersService.assignRider(vars.id, vars.riderId || "");
        case "delivered": return ordersService.delivered(vars.id);
        case "updateStatus": return ordersService.updateStatus(vars.id, vars.status || "", vars.reason);
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
    onError: (_e, v) => toast.error("Action could not be completed. Please refresh and try again.", { id: `order-${v.id}-${v.action}` }),
  });
}
