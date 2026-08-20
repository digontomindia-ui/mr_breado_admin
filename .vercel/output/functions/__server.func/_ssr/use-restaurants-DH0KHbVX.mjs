import { k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as restaurantsService } from "./restaurants.service-CNiS_Twb.mjs";
const restaurantKeys = {
  all: ["restaurants"],
  list: (q) => ["restaurants", "list", q]
};
function useRestaurants(query) {
  return useQuery({
    queryKey: restaurantKeys.list(query),
    queryFn: () => restaurantsService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
export {
  restaurantKeys as r,
  useRestaurants as u
};
