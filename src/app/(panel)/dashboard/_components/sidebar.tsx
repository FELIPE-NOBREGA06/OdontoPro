"use client"
import React, {useState} from 'react'
import {usePathname} from 'next/navigation'
import clsx from 'clsx';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Banknote, CalendarCheck2, ChevronLeft, ChevronRight, Folder, List, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'
import logoImg from '../../../../../public/logo-odonto.png'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"




export function SidebarDashboard({children}:{children: React.ReactNode}){

    const pathname = usePathname();
    const [isCollpsed,setIcollpsed] = useState(false);

    return(
        <div className='flex min-h-screen w-full'>

            <aside
            className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full",{
                "w-20": isCollpsed,
                "w-64": !isCollpsed,
                "hidden md:flex md:fixed": true
            })}
            >
                <div className='mb-6 mt-4'>
                   {!isCollpsed && (
                     <Image
                      src={logoImg}
                      alt='logo do odontopro'
                      priority
                      quality={100}
                      style={{
                      width: 'auto',
                      height: 'auto'
                    }}
                    />
                   )}
                </div>
                
                <Button
                    className='bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2'
                    onClick={() => setIcollpsed(!isCollpsed)}
                >
                    {!isCollpsed ?  <ChevronLeft className='w-12 h-12'/> : <ChevronRight className='w-12 h-12'/> }
                </Button>

                <Collapsible open={isCollpsed}>
                 <CollapsibleContent>
                  <nav className='flex flex-col gap-1 overflow-hidden'>
                        <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                            Paniel
                        </span>

                     <SidebarLink
                        href="/dashboard"
                        label="Agendamento"
                        pathname={pathname}
                        isCollapsed={isCollpsed}
                        icon={<CalendarCheck2 className='w-6 h-6' />}
                        />
                        <SidebarLink
                            href="/dashboard/services"
                            label="Serviços"
                            pathname={pathname}
                            isCollapsed={isCollpsed}
                            icon={<Folder className='w-6 h-6' />}
                         />

                    <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                         Configurações
                    </span>
                     <SidebarLink
                            href="/dashboard/profile"
                            label="Meu perfil"
                            pathname={pathname}
                            isCollapsed={isCollpsed}
                            icon={<Settings className='w-6 h-6' />}
                        />

                        <SidebarLink
                            href="/dashboard/plans"
                            label="Planos"
                            pathname={pathname}
                            isCollapsed={isCollpsed}
                            icon={<Banknote className='w-6 h-6' />}
                        />
                  </nav>
                 </CollapsibleContent>
                </Collapsible>
            </aside>

            <div className={clsx("flex flex-1 flex-col transition-all duration-300",{
                "md:ml-20":isCollpsed,
                "md:ml-64":!isCollpsed
            })}>
                
                <header className='md:hidden flex items-center justify-between border-b px-4 md:px-6 h-14 z-10 sticky top-0 bg-white'>
                    <Sheet>
                        <div className='flex items-center gap-4'>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className='md:hidden'>
                                    <List className='w-5 h-5'/>
                                </Button>
                            </SheetTrigger>

                            <h1 className='text-base md:text-lg font-semibold'>
                                Menu OdontoPro
                            </h1>
                        </div>
                        <SheetContent side="right" className="sm:max-w-xs text-black">
                            <SheetTitle>OdontoPRO</SheetTitle>
                            <SheetDescription>
                                Menu administrativo
                            </SheetDescription>

                            <nav className='grid gap-2 text-base pt-5'>
                                <SidebarLink
                                href="/dashboard"
                                label="Agendamento"
                                pathname={pathname}
                                isCollapsed={isCollpsed}
                                icon={<CalendarCheck2 className='w-6 h-6' />}
                                />

                                <SidebarLink
                                href="/dashboard/services"
                                label="Serviços"
                                pathname={pathname}
                                isCollapsed={isCollpsed}
                                icon={<Folder className='w-6 h-6' />}
                                />

                                <SidebarLink
                                href="/dashboard/profile"
                                label="Meu perfil"
                                pathname={pathname}
                                isCollapsed={isCollpsed}
                                icon={<Settings className='w-6 h-6' />}
                                />

                                <SidebarLink
                                href="/dashboard/plans"
                                label="Planos"
                                pathname={pathname}
                                isCollapsed={isCollpsed}
                                icon={<Banknote className='w-6 h-6' />}
                                />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

                <main className='flex-1 py-4 px-2 md:p-6'>
                    {children}
                </main>

            </div>
            
        </div>
    )
}

interface sidebarLinkProps{
    href: string;
    icon: React.ReactNode;
    label: String;
    pathname: String;
    isCollapsed: boolean;
}

function SidebarLink({href,icon,isCollapsed,label,pathname}: sidebarLinkProps){
    return(
        <Link
        href={href}
        >
            <div
            className={clsx("flex items-center gap-2 px-3 py-2 rounded-md transition-colors",{
              "text-white bg-blue-500": pathname === href,
              "text-gray-700 hover:bg-gray-100": pathname !== href,
            })}
            >
                <span className='w-6 h-6'>{icon}</span>
                {!isCollapsed && <span>{label}</span>}
            </div>
        </Link>
    )
}