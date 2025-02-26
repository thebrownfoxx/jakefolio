"use client";

import { usePathname, useRouter } from "next/navigation";

interface HeaderItemProps {
  text: string;
  path: string;
}

export default function HeaderItem({ text, path }: HeaderItemProps) {
  const router = useRouter();
  const pathName = usePathname();
  const selected = pathName === path;

  return (
    <button
      className={`px-6 py-4 text-sm font-semibold ${selected ? "opacity-100" : "opacity-60"}`}
      onClick={() => router.push(path)}
    >
      {text}
    </button>
  );
}
