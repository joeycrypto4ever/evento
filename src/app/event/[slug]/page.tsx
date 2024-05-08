import Section from "@/components/section";
import { getEvent } from "@/lib/utils-server";
// import { EventoEvent } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden  flex justify-center">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="w-full z-0 blur-3xl"
        ></Image>
        <div className="relative obeject-cover z-1 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 p-6">
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="rounded-2xl border-white border-1 "
            width={300}
            height={201}
          ></Image>
          <div>
            <h2>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h2>
            <h1 className="text-xl md:text-3xl whitespace-nowrap ">
              {event.name}
            </h1>
            <p className="text-md whitespace-nowrap text-white/75">
              Organized by {event.organizerName}
            </p>
          </div>
        </div>
      </section>
      <Section>
        {{
          title: "About this event",
          description: event.description,
        }}
      </Section>
      <Section>
        {{
          title: "Location",
          description: event.location,
        }}
      </Section>
    </main>
  );
}
