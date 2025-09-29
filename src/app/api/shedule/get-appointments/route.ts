import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const userId = searchParams.get("userId");
  const dateParam = searchParams.get("date");

  if (!userId || !dateParam || dateParam === "null") {
    return NextResponse.json(
      { error: "Parâmetros inválidos" },
      { status: 400 }
    );
  }

  try {
    const [year, month, day] = dateParam.split("-").map(Number);
    const startDate = new Date(year, month - 1, day, 0, 0, 0);
    const enDate = new Date(year, month - 1, day, 23, 59, 59, 999);

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    const appointments = await prisma.appointment.findMany({
      where: {
        userId: userId,
        appointmentDate: { gte: startDate, lte: enDate },
      },
      include: { sevice: true }, // Verifique se o nome está correto
    });

    if (!appointments.length) {
      return NextResponse.json(
        { error: "Nenhum agendamento neste dia" },
        { status: 404 }
      );
    }

    const blockedSlots = new Set<string>();

    for (const apt of appointments) {
      const requiredSlots = Math.ceil(apt.sevice.duration / 30);
      const startIndex = user.times?.indexOf(apt.time) ?? -1;

      if (startIndex !== -1) {
        for (let i = 0; i < requiredSlots; i++) {
          blockedSlots.add(user.times[startIndex + i]);
        }
      }
    }

    return NextResponse.json(Array.from(blockedSlots));
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro ao buscar agendamentos" },
      { status: 500 }
    );
  }
}
