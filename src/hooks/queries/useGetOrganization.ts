import { getOrganization } from "@/services/get-organization";
import { useQuery } from "@tanstack/react-query";

export const useGetOrganization = (org: string) => {
  if (org.length < 3) return;

  return useQuery({
    queryKey: ["GET_ORGANIZATION", org],
    queryFn: () => getOrganization(org),
    enabled: !!org && org.length >= 3,
  });
};
