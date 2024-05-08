import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[350px] max-w-[500px]"
    >
      <section className="flex flex-col h-full w-full items-center justify-center rounded-xl overflow-hidden bg-white/[7%] relative hover:scale-105 active:scale-[1.02] transition">
        <Image
          src={event.imageUrl}
          alt={event.slug}
          width={500}
          height={200}
          className="h-[70%] object-fit "
        ></Image>
        <div className="flex flex-col justify-center items-center flex-1 gap-1">
          <h2 className="text-white/60 text-sm">{event.slug}</h2>
          <p className="text-white/90 ">by {event.organizerName}</p>
          <p className="text-white/30 italic text-sm">{event.location}</p>
        </div>

        <p className="absolute top-[2px] left-[4px] h-[50px] w-[50px] flex flex-col items-center justify-center rounded-xl bg-yellow-600/95 text-white/90">
          <span className="font-bold text-lg">
            {format(event.date, "d", { locale: enUS }).padStart(2, "0")}
          </span>
          <span className="text-sm uppercase">
            {format(event.date, "MMM", { locale: enUS })}
          </span>
        </p>
      </section>
    </Link>
  );
}
