import cn from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md animate-pulse h-6 w-[500px] bg-white/5",
        className
      )}
    />
  );
}
