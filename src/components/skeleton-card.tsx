import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Skeleton className="rounded-full w-[100px] h-[100px]" />
      <Skeleton className="w-[300px] h-[20px]" />
      <Skeleton className="w-[200px] h-[20px]" />
    </div>
  );
}
