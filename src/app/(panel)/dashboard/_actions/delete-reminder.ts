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
  }
}
