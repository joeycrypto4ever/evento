import EventsList from "@/components/eventsList";
import H1 from "@/components/h1";
import SkeletonList from "@/components/skeleton-list";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type PageProps = Props & { searchParams: { page?: number } };

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;
  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${capitalizeFirstLetter(city)}`,
  };
}
const PageNumberSchema = z.coerce.number().int().positive().optional();

export default async function page({ params, searchParams }: PageProps) {
  const { city } = params;
  const ParsedPage = PageNumberSchema.safeParse(searchParams.page);
  if (!ParsedPage.success) {
    throw new Error("Invalid page number");
  }
  return (
    <main className="flex flex-col items-center min-h-[110vh] pt-24 gap-20 ">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeFirstLetter(city)}`}
      </H1>
      <Suspense key={city + ParsedPage.data} fallback={<SkeletonList />}>
        <EventsList city={city} page={ParsedPage.data} />
      </Suspense>
    </main>
  );
}
