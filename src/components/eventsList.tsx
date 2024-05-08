import { getEvents } from "@/lib/utils-server";
import EventCard from "./eventCard";

import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
};
export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalEvents } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalEvents > page * 6 ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] p-[20px] flex flex-wrap gap-10 justify-center ">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
