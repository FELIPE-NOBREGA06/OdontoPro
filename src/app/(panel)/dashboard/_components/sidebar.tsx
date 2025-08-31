"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Folder,
  List,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../../../public/logo-odonto.png";

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      href: "/dashboard",
      label: "Agendamento",
      icon: <CalendarCheck2 className="w-6 h-6" />,
    },
    {
      href: "/dashboard/services",
      label: "Serviços",
      icon: <Folder className="w-6 h-6" />,
    },
    {
      href: "/dashboard/profile",
      label: "Meu perfil",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      href: "/dashboard/plans",
      label: "Planos",
      icon: <Banknote className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar Desktop */}
      <aside
        className={clsx(
          " flex-col border-r bg-background transition-all duration-300 p-4 h-full hidden md:flex md:fixed",
          {
            "w-20": isCollapsed,
            "w-64": !isCollapsed,
          }
        )}
      >
        <div className="mb-6 mt-4 flex justify-center">
          {!isCollapsed && (
            <Image
              src={logoImg}
              alt="logo do odontopro"
              priority
              quality={100}
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </div>

        <Button
          className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-center mb-4"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </Button>

        <nav className="flex flex-col gap-2">
          <span
            className={clsx(
              "text-sm text-gray-400 font-medium mt-1 uppercase",
              isCollapsed && "sr-only" // esconde título no modo fechado
            )}
          >
            Painel
          </span>

          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              {...item}
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <div
        className={clsx("flex flex-1 flex-col transition-all duration-300", {
          "md:ml-20": isCollapsed,
          "md:ml-64": !isCollapsed,
        })}
      >
        {/* Menu Mobile */}
        <header className="md:hidden flex items-center justify-between border-b px-4 md:px-6 h-14 z-10 sticky top-0 bg-white">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsCollapsed(false)}
                >
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <h1 className="text-base md:text-lg font-semibold">
                Menu OdontoPro
              </h1>
            </div>
            <SheetContent side="right" className="sm:max-w-xs text-black">
              <SheetTitle>OdontoPRO</SheetTitle>
              <SheetDescription>Menu administrativo</SheetDescription>

              <nav className="grid gap-2 text-base pt-5">
                {navItems.map((item) => (
                  <SidebarLink
                    key={item.href}
                    {...item}
                    pathname={pathname}
                    isCollapsed={false}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsed: boolean;
}

function SidebarLink({
  href,
  icon,
  isCollapsed,
  label,
  pathname,
}: SidebarLinkProps) {
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={clsx(
          "flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200",
          isCollapsed ? "justify-center w-12 h-12 rounded-lg" : "",
          {
            "text-white bg-blue-500": isActive,
            "text-gray-700 hover:bg-gray-100": !isActive,
          }
        )}
      >
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  );
}
