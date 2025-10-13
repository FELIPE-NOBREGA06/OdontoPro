"use client";

<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from 'react';
>>>>>>> 6328a0a (att)
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { handleRegister } from "../_actions/login";
=======
import { Button } from "../../../components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useSession } from 'next-auth/react';
import { handleRegister } from '../_actions/login';
>>>>>>> 6328a0a (att)

export function Header() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
  const navItems = [{ href: "#profissionais", label: "Profissionais" }];
=======
  const navItems = [
    { href: "#profissionais", label: "Profissionais" },
  ];
>>>>>>> 6328a0a (att)

  async function handleLogin() {
    await handleRegister("github");
  }

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          onClick={() => setIsOpen(false)}
          key={item.href}
          asChild
          className="bg-transparent hover:bg-transparent text-black shadow-none"
        >
          <Link href={item.href} className="text-base">
            {item.label}
          </Link>
        </Button>
      ))}

<<<<<<< HEAD
      {status === "loading" ? (
        <></>
      ) : session ? (
        <Link
          href="/dashoard"
          className="flex items-center justify-center gap-2 w-auto px-6 rounded-md bg-zinc-900 text-white py-1"
=======
      {status === 'loading' ? null : session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 rounded-md px-4"
>>>>>>> 6328a0a (att)
        >
          Acessar clinica
        </Link>
      ) : (
<<<<<<< HEAD
        <Button onClick={handleLogin} className="w-auto px-6 rounded-lg">
=======
        <Button onClick={handleLogin}>
>>>>>>> 6328a0a (att)
          <LogIn />
          Portal da clinica
        </Button>
      )}
    </>
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
<<<<<<< HEAD
          Agend<span className="text-emerald-500">Med </span>
=======
          Agend<span className="text-emerald-500">Med</span> 
>>>>>>> 6328a0a (att)
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
<<<<<<< HEAD
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-transparent"
=======
          <SheetTrigger asChild>
            <Button
              className="md:hidden text-black hover:bg-transparent"
>>>>>>> 6328a0a (att)
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

<<<<<<< HEAD
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] z-[9999] "
          >
            <div className="p-4">
              <SheetTitle>Menu</SheetTitle>
              <SheetHeader></SheetHeader>

              <SheetDescription>Veja nossos links</SheetDescription>

              <nav className="flex flex-col space-y-4 mt-6">
                <NavLinks />
              </nav>
            </div>
=======
          <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Veja nossos links</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col space-y-4 mt-6">
              <NavLinks />
            </nav>
>>>>>>> 6328a0a (att)
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
