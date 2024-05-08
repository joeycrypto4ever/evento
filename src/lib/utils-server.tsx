import { notFound } from "next/navigation";
import prisma from "./db";
import { unstable_cache } from "next/cache";
import { capitalizeFirstLetter } from "./utils";

export const getEvent = unstable_cache(async (slug: string) => {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventoEvent = await res.json();
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
});

export const getEvents = unstable_cache(async (city: string, page: number) => {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: EventoEvent[] = await res.json();
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalizeFirstLetter(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: 6 * (page - 1),
  });
  const totalEvents = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalizeFirstLetter(city),
    },
  });
  // console.log(totalEvents);
  return { events, totalEvents };
});
