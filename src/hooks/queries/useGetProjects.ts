import { getProjects } from "@/services/get-projects";
import { useQuery } from "@tanstack/react-query";

export const useGetProjects = (org: string, limit: number, page: number) => {
  if (org.length < 3) return;

  return useQuery({
    queryKey: ["GET_PROJECTS", org, limit, page],
    queryFn: () => getProjects({ org, limit, page }),
    enabled: !!org && org.length >= 3,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
