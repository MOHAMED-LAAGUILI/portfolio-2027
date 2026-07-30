import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 group select-none"
    >
      <Image
        src="/favicon.png"
        alt="Dev"
        width={28}
        height={28}
        className="rounded-md shrink-0"
      />
      <span className="font-semibold text-[15px] leading-none text-white tracking-[-0.01em]">Dev</span>
    </Link>
  );
}
