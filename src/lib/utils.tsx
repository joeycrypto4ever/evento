import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { EventoEvent } from "@prisma/client";
// import prisma from "./db";
// import { notFound } from "next/navigation";
// import { unstable_cache } from "next/cache";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cn;

export async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
