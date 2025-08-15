"use client";
import React from "react";
import { Loader2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";
import { useForm } from "react-hook-form";
import { getOrganization } from "@/services/get-organization";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  organization: z.string().min(3).max(100).trim().nonempty(),
});

export default function SearchOrganization() {
  const [org, setOrg] = React.useState<OrganizationProps | undefined>(
    undefined
  );
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organization: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await getOrganization(value.organization);

      if (res.status === "404") {
        return toast.error("Organização não encontrada");
      }

      setOrg(res);
    } catch (err) {
      console.error(err);
      toast.error("Algo deu errado, tente novamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {!org && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="organization"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome da organização"
                      className="h-fit !text-xl text-center font-semibold rounded-full placeholder:text-xl placeholder:text-slate-600 py-4"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="w-full h-fit !text-xl text-center font-semibold rounded-full py-4"
              disabled={
                !form.watch("organization") ||
                form.watch("organization")?.length < 3
              }
              type="submit"
            >
              {loading && <Loader2Icon className="mr-2 animate-spin" />}
              Buscar
            </Button>
          </form>
        </Form>
      )}
      {org && (
        <Link
          href={`/organization/${org.login}?limit=10&page=1`}
          className="max-w-max mx-auto mt-4 flex gap-4 border-2 p-6 rounded-2xl"
        >
          <div className="block relative h-[60px] w-[60px] aspect-square">
            <Image
              src={org.avatar_url}
              alt={`${org.name} avatar`}
              fill
              className="w-full h-auto overflow-hidden rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold truncate">{org.name}</h2>
            <p>
              {org.type} {org.location && `- ${org.location}`}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
