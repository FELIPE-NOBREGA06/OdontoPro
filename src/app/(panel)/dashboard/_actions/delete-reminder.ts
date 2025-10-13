<<<<<<< HEAD
"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  reminderId: z.string().min(1, "O id do lembrete é obrigatório"),
});

type FormSchema = z.infer<typeof formSchema>;

export async function deleteReminder(formData: FormSchema) {
  const parseResult = formSchema.safeParse(formData);

  if (!parseResult.success) {
    return {
      error: parseResult.error.issues[0].message,
    };
  }

  try {
    await prisma.reminder.delete({
      where: { id: formData.reminderId },
    });

    revalidatePath("/dashboard");

    return { data: "Lembrete deletado com sucesso" };
  } catch (err: any) {
    const errorMessage = err?.message || "Não foi possível deletar o lembrete";
    return { error: errorMessage };
=======
"use server"

import prisma from "@/lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

// Schema simplificado sem errorMap
const formSchema = z.object({
  reminderId: z.string().min(1, "O id do lembrete é obrigatório"),
})

type FormSchema = z.infer<typeof formSchema>

export async function deleteReminder(formData: FormSchema) {
  // Validação do formulário
  const schema = formSchema.safeParse(formData)

  if (!schema.success) {
    return { error: schema.error.issues[0].message }
  }

  const { reminderId } = schema.data

  try {
    // Deletando o lembrete
    const deleted = await prisma.reminder.deleteMany({
      where: { id: reminderId }
    })

    if (deleted.count === 0) {
      return { error: "Lembrete não encontrado." }
    }

    // Revalida a rota do dashboard
    revalidatePath("/dashboard")

    return { data: "Lembrete deletado com sucesso" }

  } catch (err) {
    return { error: "Não foi possível deletar o lembrete." }
>>>>>>> 6328a0a (att)
  }
}
