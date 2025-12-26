import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link href={href}>
      <div
        className={`hover:cursor-pointer hover:underline ${
          isActive && "underline"
        }`}
      >
        {label}
      </div>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="font-newHeading flex items-center justify-between md:px-24 px-6 md:py-10 py-6 text-[#614A27]">
      <Link href="/">
        <h1 className="md:text-2xl text-xl text-nowrap font-extrabold hover:cursor-pointer">
          Kevin Gill
        </h1>
      </Link>
      <div className="flex text-sm md:text-base font-semibold md:gap-12 gap-4">
        <NavLink href="/about" label="About" />
        <NavLink href="/work" label="Work" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </div>
  );
}
