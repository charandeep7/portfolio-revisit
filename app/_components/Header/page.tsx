"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navMenuList = [
  {
    id: "1",
    name: "Home",
    href: "/#home",
  },
  {
    id: "2",
    name: "About",
    href: "/#about",
  },
  {
    id: "3",
    name: "Projects",
    href: "/#project",
  },
  {
    id: "4",
    name: "Contact",
    href: "/#contact",
  },
  {
    id: "5",
    name: "Add Project",
    href: "/password",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="bg-black/75 dark:bg-gray-900 fixed top-0 w-screen z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navMenuList.map(({ name, id, href }) => (
                <li key={id}>
                  <Link
                    className={`text-gray-500 transition hover:text-gray-100/75 hover:underline dark:text-white dark:hover:text-white/75 ${
                      pathname === href ? "text-white underline" : null
                    }`}
                    href={href}
                    id={id}
                    scroll={true}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <Dialog defaultOpen={false}>
            <DialogTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DialogTrigger>
            <DialogContent className="w-3/4 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Menu</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <ul className="flex items-center flex-col sm:flex-row gap-6 text-sm">
                  {navMenuList.map(({ name, id, href }) => (
                    <li key={id}>
                      <a
                        className={`text-gray-500 transition hover:text-gray-100/75 hover:underline dark:text-white dark:hover:text-white/75 ${
                          pathname === href ? "text-white underline" : null
                        }`}
                        href={href}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
