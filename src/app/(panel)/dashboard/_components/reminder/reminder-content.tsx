<<<<<<< HEAD
"use client";

import { Button } from "@/components/ui/button";
import { ReminderFormData, useReminderForm } from "./reminder-form";
=======
"use client"

import { Button } from "@/components/ui/button"
import { useReminderForm, ReminderFormdata } from "./reminder-form"
>>>>>>> 6328a0a (att)
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
<<<<<<< HEAD
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
export function ReminderContent() {
  const form = useReminderForm();

  async function onSubmit(formData: ReminderFormData) {}
=======
  FormMessage
} from "@/components/ui/form"
import { Textarea } from '@/components/ui/textarea'
import { createReminder } from '../../_actions/create-reminder'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'


interface ReminderContentProps {
  closeDialog: () => void;
}


export function ReminderContent({ closeDialog }: ReminderContentProps) {

  const form = useReminderForm()
  const router = useRouter();

  async function onSubmit(formData: ReminderFormdata) {

    const response = await createReminder({ description: formData.description })

    if (response.error) {
      toast.error(response.error)
      return;
    }

    toast.success(response.data)
    router.refresh();
    closeDialog();
  }
>>>>>>> 6328a0a (att)

  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form
<<<<<<< HEAD
          className="flex  flex-col gap-4"
=======
          className="flex flex-col gap-4"
>>>>>>> 6328a0a (att)
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
<<<<<<< HEAD
            name="Description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Descreva o lembrete...
                </FormLabel>
=======
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Descreva o lembrete:</FormLabel>
>>>>>>> 6328a0a (att)
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Digite o nome do lembrete..."
                    className="max-h-52"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<<<<<<< HEAD
          <Button type="submit" disabled={!form.watch("Description")}>
=======
          <Button
            type="submit"
            disabled={!form.watch("description")}
          >
>>>>>>> 6328a0a (att)
            Cadastrar lembrete
          </Button>
        </form>
      </Form>
    </div>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> 6328a0a (att)
