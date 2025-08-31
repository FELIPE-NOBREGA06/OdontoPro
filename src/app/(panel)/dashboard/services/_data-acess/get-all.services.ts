"use server";

import Prisma from "@/lib/prisma";

export async function getAllServices({ userId }: { userId: string }) {
  if (!userId) {
    return {
      error: "Falha ao buscar serviços: usuário inválido",
    };
  }

  try {
    const services = await Prisma.service.findMany({
      where: {
        userId: userId,
        status: true,
      },
    });

    return {
      data: services,
    };
  } catch (err) {
    console.error("Erro ao buscar serviços:", err);
    return {
      error: "Falha ao buscar serviços",
    };
  }
}
