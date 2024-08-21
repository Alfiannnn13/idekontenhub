"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Coffee, FileClock, Home, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
    {
      name: "Buat Beli Kopi",
      icon: Coffee,
      path: "/dashboard/coffee",
    },
  ];

  return (
    <header className="p-5 shadow-sm border-b flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
       
      </Link>

      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </button>
          </SheetTrigger>
          <SheetContent className="p-5">
            <Image
              src="/icon.png"
              alt="logo"
              width={50}
              height={50}
              className="mb-5"
            />
            <ul>
              {MenuList.map((menu, index) => (
                <li
                  key={index}
                  className={`flex gap-2 mb-4 items-center p-3 hover:bg-purple-100 cursor-pointer hover:text-white rounded-lg
                  ${pathname === menu.path && "bg-purple-400 text-white"}`}
                >
                  <menu.icon className="h-6 w-6" />
                  <Link href={menu.path}>
                    <h2 className="text-lg">{menu.name}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
