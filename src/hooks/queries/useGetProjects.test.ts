// import { renderHook, waitFor } from "@testing-library/react";
// import {
//   QueryClient,
//   QueryClientProvider,
//   type QueryClientProviderProps,
// } from "@tanstack/react-query";
// import { useGetProjects } from "./useGetProjects";
// import * as getProjectsModule from "@/services/get-projects";

// const queryClient = new QueryClient();
// const wrapper = ({ children }: { children: React.ReactNode }) => (
//   // <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );

// describe("useGetProjects", () => {
//   const mockGetProjects = jest.spyOn(getProjectsModule, "getProjects");

//   beforeEach(() => {
//     mockGetProjects.mockClear();
//   });

//   it("should not run query if org length < 3", () => {
//     const { result } = renderHook(() => useGetProjects("ab", 10, 1), {
//       wrapper,
//     });
//     expect(result.current).toBeUndefined();
//     expect(mockGetProjects).not.toHaveBeenCalled();
//   });

//   it("should run query if org length >= 3", async () => {
//     mockGetProjects.mockResolvedValueOnce([{ id: 1, name: "Project" }]);
//     const { result } = renderHook(() => useGetProjects("abc", 10, 1), {
//       wrapper,
//     });
//     await waitFor(() => result.current?.isSuccess);
//     expect(mockGetProjects).toHaveBeenCalledWith({
//       org: "abc",
//       limit: 10,
//       page: 1,
//     });
//     expect(result.current?.data).toEqual([{ id: 1, name: "Project" }]);
//   });

//   it("should use correct queryKey", async () => {
//     mockGetProjects.mockResolvedValueOnce([]);
//     const { result } = renderHook(() => useGetProjects("orgname", 5, 2), {
//       wrapper,
//     });
//     await waitFor(() => result.current?.isSuccess);
//     expect(result.current?.queryKey).toEqual(["GET_PROJECTS", "orgname", 5, 2]);
//   });

//   it("should set staleTime to 5 minutes", async () => {
//     mockGetProjects.mockResolvedValueOnce([]);
//     const { result } = renderHook(() => useGetProjects("orgname", 5, 2), {
//       wrapper,
//     });
//     await waitFor(() => result.current?.isSuccess);
//     expect(result.current?.options.staleTime).toBe(1000 * 60 * 5);
//   });
// });
