import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const BtnStyle =
  "bg-white/10 text-white/50 hover:bg-white/20 px-6 py-2 rounded-xl";
export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex gap-4 justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={BtnStyle}>
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={BtnStyle}>
          Next
        </Link>
      )}
    </section>
  );
}
