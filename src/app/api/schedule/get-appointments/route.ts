  import prisma from '@/lib/prisma'
  import { NextRequest, NextResponse } from 'next/server'

  export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const userId = searchParams.get('userId');
    const dateParam = searchParams.get('date');

    if (!userId || userId === "null") {
      return NextResponse.json({ error: "ID do usuário não informado" }, { status: 400 });
    }

    if (!dateParam || dateParam === "null") {
      return NextResponse.json({ error: "Data não informada" }, { status: 400 });
    }

    try {
      const [year, month, day] = dateParam.split("-").map(Number);
      const startDate = new Date(year, month - 1, day, 0, 0, 0);
      const endDate = new Date(year, month - 1, day, 23, 59, 59, 999);

      const user = await prisma.user.findFirst({ where: { id: userId } });

      if (!user) {
        return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
      }

      if (!user.times || !Array.isArray(user.times)) {
        return NextResponse.json({ error: "Horários do usuário não configurados" }, { status: 400 });
      }

      const appointments = await prisma.appointment.findMany({
        where: {
          userId,
          appointmentDate: { gte: startDate, lte: endDate },
        },
        include: { service: true },
      });

      const blockedSlots = new Set<string>();

      for (const apt of appointments) {
        if (!apt.service || !apt.service.duration) continue;

        const requiredSlots = Math.ceil(apt.service.duration / 30);
        const startIndex = user.times.indexOf(apt.time);

        if (startIndex !== -1) {
          for (let i = 0; i < requiredSlots; i++) {
            const blockedSlot = user.times[startIndex + i];
            if (blockedSlot) blockedSlots.add(blockedSlot);
          }
        }
      }

      const blockedtimes = Array.from(blockedSlots);
      console.log({ userId, dateParam, blockedtimes });

      return NextResponse.json(blockedtimes);

    } catch (err) {
      console.error("Erro ao buscar agendamentos:", err);
      return NextResponse.json({ error: "Erro interno ao buscar agendamentos" }, { status: 500 });
    }
  }
