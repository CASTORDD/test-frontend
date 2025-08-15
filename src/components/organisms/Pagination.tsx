"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PaginationComponent({
  repositories,
}: {
  repositories: number;
}) {
  const { slug } = useParams();
  const searchparams = useSearchParams();
  const limit = Number(searchparams.get("limit"));
  const page = Number(searchparams.get("page"));

  const pages = Math.ceil(repositories / limit);

  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent className="max-w-3xl gap-4 ">
          {page !== 1 && (
            <PaginationItem>
              <Link
                href={`/organization/${slug}?limit=${limit}&page=${page - 1}`}
                className="flex py-2 px-2 text-slate-400 rounded-md hover:bg-slate-900"
              >
                <ChevronLeft />
              </Link>
            </PaginationItem>
          )}
          {Array.from({ length: pages }, (_, index) => (
            <PaginationItem key={index}>
              <Link
                href={`/organization/${slug}?limit=${limit}&page=${index + 1}`}
                className={cn(
                  "block px-3 py-1 text-lg rounded-md border-1 border-slate-900 hover:bg-slate-700",
                  page === index + 1 && "bg-slate-900 text-white"
                )}
              >
                {index + 1}
              </Link>
            </PaginationItem>
          ))}
          {page !== pages && (
            <PaginationItem>
              <Link
                href={`/organization/${slug}?limit=${limit}&page=${page + 1}`}
                className="flex py-2 px-2 text-slate-400 rounded-md hover:bg-slate-900"
              >
                <ChevronRight />
              </Link>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
