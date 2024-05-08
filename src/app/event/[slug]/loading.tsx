import Skeleton from "@/components/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
