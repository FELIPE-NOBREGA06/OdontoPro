"use client";

import { Button } from "@/components/ui/button";
import { ReminderFormData, useReminderForm } from "./reminder-form";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
export function ReminderContent() {
  const form = useReminderForm();

  async function onSubmit(formData: ReminderFormData) {}

  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form
          className="flex  flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="Description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Descreva o lembrete...
                </FormLabel>
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

          <Button type="submit" disabled={!form.watch("Description")}>
            Cadastrar lembrete
          </Button>
        </form>
      </Form>
    </div>
  );
}
