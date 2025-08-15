import NotFoundSVG from "@/SVGS/NotFound";
import React from "react";

export default function NotRepos() {
  return (
    <div className="relative w-full min-w-max flex flex-col items-center justify-center">
      <h3 className="absolute bottom-10 md:bottom-30  text-shadow-lg text-blue-500 text-shadow-blue-900 text-4xl md:text-6xl font-semibold">
        Nenhum repositório encontrado
      </h3>
      <NotFoundSVG />
    </div>
  );
}
