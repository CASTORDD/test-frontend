import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import DetailItem from "../atoms/DetailItem";

export default function CardOwner({ org }: { org: OrganizationProps }) {
  return (
    <Card className="w-full md:max-w-sm border-0">
      <CardHeader className="flex gap-4">
        <div className="relative h-[60px] w-[60px] aspect-square">
          <Image
            src={org?.avatar_url ?? ""}
            alt={org?.name || "avatar"}
            fill
            sizes="60px"
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle className="text-2xl">{org.name || org.login}</CardTitle>
          <CardDescription className="flex flex-col gap-1">
            {org?.bio}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <DetailItem text={org.following} icon="user" color="blue" />
          <DetailItem text={org.location} icon="map-pin" color="blue" />
        </div>
        <Link href={org.blog} target="_blank">
          <DetailItem text={org.blog} icon="external-link" color="blue" />
        </Link>
      </CardContent>
    </Card>
  );
}
