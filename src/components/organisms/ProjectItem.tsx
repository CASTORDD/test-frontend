import Link from "next/link";
import DetailItem from "../atoms/DetailItem";
import Tag from "../atoms/Tag";

export default function ProjectItem({ project }: { project: ProjectProps }) {
  return (
    <div className="relative border p-4 rounded-lg">
      <Link
        href={`/projects/${project.name}`}
        className="text-blue-400 font-semibold hover:text-blue-200 transition-colors"
      >
        {project.name}
      </Link>
      <p className="h-10  text-sm text-gray-500 text-ellipsis overflow-hidden">
        {project.description}
      </p>
      <div className="flex gap-4 mt-2">
        <DetailItem text={project.stargazers_count} icon="star" />
        <DetailItem text={project.forks_count} icon="git-fork" />

        {project.language && <DetailItem text={project.language} icon="cpu" />}
      </div>
      <div className="absolute top-4 right-3">
        <Tag text={project.visibility} />
      </div>
    </div>
  );
}
