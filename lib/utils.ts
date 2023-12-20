import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// CN digunakan untuk menggabungkan class jika terdapat kondisi

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
