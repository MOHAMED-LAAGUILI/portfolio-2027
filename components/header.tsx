import { CtaButton } from "@/components/header/cta-button";
import { Logo } from "@/components/header/logo";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[52px]">
          <Logo />
          <CtaButton />
        </div>
      </div>
    </nav>
  );
}
