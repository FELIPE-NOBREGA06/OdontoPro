"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { Session } from "inspector/promises";

const formShema = z.object({
  serviceId: z.string().min(1, "o id do serviço é obrigratório "),
  name: z.string().min(1, { message: "O nome do serviço é obrigratório" }),
  price: z.number().min(1, { message: "O preço do serviço é obrigratório" }),
  duration: z.number(),
});

type forShema = z.infer<typeof formShema>;

export async function updateService(formData: forShema) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Falha ao atualizar serviço",
    };
  }

  const schema = formShema.safeParse(formData);

  if (!schema.success) {
    return {
      error: schema.error.issues[0].message,
    };
  }

  try {
    await prisma.service.update({
      where: {
        id: formData.serviceId,
        userId: session?.user?.id,
      },
      data: {
        name: formData.name,
        price: formData.price,
        duration: formData.duration < 30 ? 30 : formData.duration,
      },
    });

    revalidatePath("/dashboard/services");

    return {
      data: "Serviço atualizado com sucesso",
    };
  } catch (err) {
    return {
      error: "falha ao atulizar serviço",
    };
  }
}
