import NotFoundSVG from "@/SVGS/NotFound";
import Link from "next/link";
import React from "react";

export default function NotOrganization() {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
      <h3 className="absolute left-4 top-35 md:top-[25rem]  text-shadow-lg text-blue-500 text-shadow-blue-900 text-4xl md:text-6xl font-semibold">
        Nenhuma organização encontrada
      </h3>
      <NotFoundSVG />
      <Link
        href="/"
        className="rounded-full bg-blue-500 text-white text-3xl font-semibold py-4 px-8"
      >
        Voltar na Home
      </Link>
    </div>
  );
}
