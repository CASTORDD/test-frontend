import Logo from "@/components/atoms/Logo";
import SearchOrganization from "@/components/organisms/SearchOrganization";

export default function Home() {
  return (
    <div className="max-w-5xl h-[calc(100vh-74px)] mx-auto flex flex-col gap-4 items-center justify-center p-4">
      <h2 className="text-4xl text-center text-gray-400 font-bold">
        Encontre uma organização
      </h2>
      <p className="max-w-xl text-2xl text-center text-gray-600">
        O <Logo /> é uma ferramenta que permite encontrar organizações do GitHub
        e explorar seus repositórios.
      </p>
      <SearchOrganization />
    </div>
  );
}
