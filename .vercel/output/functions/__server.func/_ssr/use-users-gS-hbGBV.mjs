import { k as keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as usersService } from "./users.service-B7tep2Ql.mjs";
const userKeys = {
  all: ["users"],
  list: (q) => ["users", "list", q]
};
function useUsers(query) {
  return useQuery({
    queryKey: userKeys.list(query),
    queryFn: () => usersService.list(query),
    placeholderData: keepPreviousData,
    staleTime: 1e4
  });
}
export {
  userKeys as a,
  useUsers as u
};
