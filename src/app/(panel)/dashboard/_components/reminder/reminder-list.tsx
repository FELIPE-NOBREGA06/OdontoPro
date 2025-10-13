<<<<<<< HEAD
"use client";

import { Reminder } from "@/generated/prisma";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { deleteReminder } from "../../_actions/delete-reminder";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
=======
"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { PrismaClient, Prisma } from "@prisma/client";
import { Plus, Trash } from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'
import { deleteReminder } from '../../_actions/delete-reminder'
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
>>>>>>> 6328a0a (att)
import {
  Dialog,
  DialogContent,
  DialogHeader,
<<<<<<< HEAD
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReminderContent } from "./reminder-content";

interface ReminderListProps {
  reminder: Reminder[];
}

export function ReminderList({ reminder }: ReminderListProps) {
  const router = useRouter();

  async function handleDeleteReminder(id: string) {
    const response = await deleteReminder({ reminderId: id });

    if (response.error) {
      toast.error(response.error);
      return;
    }
    toast.success(response.data);
    router.refresh();
=======
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from '@/components/ui/dialog'
import { ReminderContent } from './reminder-content'
import { Reminder } from '@/generated/prisma';

interface ReminderListProps {
  reminder: Reminder[]
}

export function ReminderList({ reminder }: ReminderListProps) {
  const router = useRouter()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  async function handleDeleteReminder(id: string) {
    const response = await deleteReminder({ reminderId: id })

    if (response.error) {
      toast.error(response.error)
      return
    }

    toast.success(response.data)
    router.refresh()
>>>>>>> 6328a0a (att)
  }

  return (
    <div className="flex flex-col gap-3">
      <Card>
<<<<<<< HEAD
        {/* Cabeçalho do card */}
        <CardHeader className="flex flex-row items-center justify-between pb-2">
=======
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
>>>>>>> 6328a0a (att)
          <CardTitle className="text-xl md:text-2xl font-bold">
            Lembretes
          </CardTitle>

<<<<<<< HEAD
          {/* Botão para criar novo lembrete */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
=======
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="w-9 p-0">
>>>>>>> 6328a0a (att)
                <Plus className="w-5 h-5" />
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Novo Lembrete</DialogTitle>
<<<<<<< HEAD
                <DialogDescription>
                  Crie um novo lembrete para sua lista.
                </DialogDescription>
              </DialogHeader>

              <ReminderContent />
=======
                <DialogDescription>Criar um novo lembrete para sua lista.</DialogDescription>
              </DialogHeader>

              <ReminderContent closeDialog={() => setIsDialogOpen(false)} />
>>>>>>> 6328a0a (att)
            </DialogContent>
          </Dialog>
        </CardHeader>

<<<<<<< HEAD
        {/* Conteúdo da lista */}
        <CardContent>
          {reminder.length === 0 ? (
            <p className="text-gray-500 text-sm">
              Nenhum lembrete registrado...
            </p>
          ) : (
            <ScrollArea className="h-[340px] lg:max-h-[calc(100vh-15rem)] pr-0 w-full flex-1">
              {reminder.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-wrap flex-row items-center justify-between py-2 bg-yellow-100 mb-2 px-2 rounded-md"
                >
                  <p className="text-sm lg:text-base">{item.description}</p>

                  <Button
                    variant="destructive"
                    size="icon"
                    className="rounded-full"
                    aria-label="Excluir lembrete"
                    onClick={() => handleDeleteReminder(String(item.id))}
                  >
                    <Trash className="w-5 h-5 text-white" />
                  </Button>
                </article>
              ))}
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
=======
        <CardContent>
          {reminder.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhum lembrete registrado...
            </p>
          )}

          <ScrollArea className="h-[340px] lg:max-h-[calc(100vh-15rem)] pr-0 w-full flex-1">
            {reminder.map((item) => (
              <article
                key={item.id}
                className="flex flex-wrap flex-row items-center justify-between py-2 bg-yellow-100 mb-2 px-2 rounded-md"
              >
                <p className="text-sm lg:text-base">{item.description}</p>
                <Button
                  className="bg-red-500 hover:bg-red-400 shadow-none rounded-full p-2"
                  size="sm"
                  onClick={() => handleDeleteReminder(item.id)}
                >
                  <Trash className="w-4 h-4 text-white" />
                </Button>
              </article>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
>>>>>>> 6328a0a (att)
}
