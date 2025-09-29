"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  date: z
    .string()
    .min(1, "A data é obrigatória")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato inválido. Use YYYY-MM-DD"),
  serviceId: z.string().min(1, "O serviço é obrigatório"),
  time: z.string().min(1, "O horário é obrigatório"),
  clinicId: z.string().min(1, "A clínica é obrigatória"),
});

type FormSchema = z.infer<typeof formSchema>;

export async function createNewAppointment(formdata: FormSchema) {
  // Validação do formulário
  const schema = formSchema.safeParse(formdata);

  if (!schema.success) {
    return {
      success: false,
      error: schema.error.issues[0].message,
    };
  }

  try {
    // Converte a data para objeto Date
    const selectedDate = new Date(formdata.date);

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const day = selectedDate.getDate();

    // Cria a data do agendamento sem hora definida
    const appointmentDate = new Date(year, month, day, 0, 0, 0, 0);

    // Criação do agendamento no Prisma
    const newAppointment = await prisma.appointment.create({
      data: {
        name: formdata.name,
        email: formdata.email,
        phone: formdata.phone,
        time: formdata.time,
        appointmentDate: appointmentDate,
        serviceId: formdata.serviceId,
        userId: formdata.clinicId,
      },
    });

    return {
      success: true,
      data: newAppointment,
    };
  } catch (err) {
    console.error("Erro ao cadastrar agendamento:", err);
    return {
      success: false,
      error: "Erro ao cadastrar agendamento",
    };
  }
}
