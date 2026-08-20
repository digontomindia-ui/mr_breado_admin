import { r as request, e as endpoints } from "./router-DgvHmUYK.mjs";
const paymentsService = {
  summary: () => request({
    url: endpoints.admin.paymentsSummary,
    method: "GET"
  }),
  mrBreado: () => request({
    url: endpoints.admin.mrBreadoPayments,
    method: "GET"
  })
};
export {
  paymentsService as p
};
