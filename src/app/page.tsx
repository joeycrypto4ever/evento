import H1 from "@/components/h1";
import SerachForm from "@/components/serach-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-24 flex flex-col justify-between items-center px-3 sm:px-9 gap-3 ">
      <H1>Find events around you</H1>
      <p className="text-xl sm:text-3xl text-white/60">
        Browse more than{" "}
        <span className="italic underline text-accent">10,000 events</span>{" "}
        around you
      </p>

      <SerachForm />

      <section className="flex gap-6 text-white/50">
        <p>Popular: </p>
        <ul className="space-x-3 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </ul>
      </section>
    </main>
  );
}
