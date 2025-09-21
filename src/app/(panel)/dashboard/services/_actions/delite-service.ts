"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const formShema = z.object({
  serviceId: z.string().min(1, "o id do serviço é obrigatório"),
});

type forShema = z.infer<typeof formShema>;

export async function deleteService(formData: forShema) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Falha ao deletar serviço",
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
        status: false,
      },
    });

    revalidatePath("/dashborad/services");
    return {
      data: "serviço deletado com sucesso",
    };
  } catch (err) {
    return {
      error: "Falha ao deletar serviço",
    };
  }
}
