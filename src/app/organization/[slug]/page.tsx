import Loading from "@/components/atoms/Loading";
import CardOwner from "@/components/organisms/CardOwner";
import NotOrganization from "@/components/organisms/NotOrganization";
import PaginationComponent from "@/components/organisms/Pagination";
import ProjectList from "@/components/organisms/ProjectList";
import { getOrganization } from "@/services/get-organization";
import { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const org = await getOrganization(slug);

  if (org?.status === "404") {
    return <NotOrganization />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-7xl flex flex-col md:flex-row items-start gap-5 mx-auto p-4">
        <CardOwner org={org} />
        <div className="flex-1 w-full">
          <ProjectList />
          {org?.public_repos !== 0 && (
            <PaginationComponent repositories={org?.public_repos} />
          )}
        </div>
      </div>
    </Suspense>
  );
}
