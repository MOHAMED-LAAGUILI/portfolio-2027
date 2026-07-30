import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/links";
import { site } from "@/data/site";

export function Logo() {
  return (
    <Link
      href={navLinks.logo.href}
      className="flex items-center gap-2 group select-none"
    >
      <Image
        src={site.logo}
        alt={site.name}
        width={28}
        height={28}
        className="rounded-md shrink-0"
      />
      <span className="font-semibold text-[15px] leading-none text-white tracking-[-0.01em]">
        {site.name}
      </span>
    </Link>
  );
}
