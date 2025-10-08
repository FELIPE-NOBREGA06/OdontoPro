"use server";

import prisma from "@/lib/prisma";
import { Reminders } from "../_components/reminder/reminders";

export async function getReminders({ userId }: { userId: string }) {
  if (!userId) {
    return [];
  }

  try {
    const Reminders = await prisma.reminder.findMany({
      where: {
        userId: userId,
      },
    });
    return Reminders;
  } catch (err) {
    return [];
  }
}
