"use client";
import { useGetProjects } from "@/hooks/queries/useGetProjects";
import { useParams, useSearchParams } from "next/navigation";
import Loading from "../atoms/Loading";
import NotRepos from "../molecules/NotRepos";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  const { slug } = useParams();
  const searchparams = useSearchParams();
  const limit = Number(searchparams.get("limit"));
  const page = Number(searchparams.get("page"));

  const org = String(slug) || "";

  const result = useGetProjects(org, limit, page);
  const { data, isLoading, error } = result ?? {};

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex-1 w-full">
      <h2 className="text-2xl font-semibold mb-4">Lista de Repocitorios</h2>
      {isLoading && <Loading />}
      {!data?.length && !isLoading && <NotRepos />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((project: ProjectProps) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
