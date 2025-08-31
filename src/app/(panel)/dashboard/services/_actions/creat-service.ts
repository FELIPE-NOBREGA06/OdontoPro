"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { error } from "console";
import { z } from "zod";

const formShema = z.object({
  name: z.string().min(1, { message: "O nome do serviço é obrigratório" }),
  price: z.number().min(1, { message: "O preço do serviço é obrigratório" }),
  duration: z.number(),
});

type forShema = z.infer<typeof formShema>;

export async function createNewService(formData: forShema) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Falha ao castrar serviço",
    };
  }

  const schema = formShema.safeParse(formData);

  if (!schema.success) {
    return {
      error: schema.error.issues[0].message,
    };
  }

  try {
    const newService = await prisma.service.create({
      data: {
        name: formData.name,
        price: formData.price,
        duration: formData.duration,
        userId: session?.user?.id,
      },
    });

    return {
      data: newService,
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Falha ao castrar serviço",
    };
  }
}
