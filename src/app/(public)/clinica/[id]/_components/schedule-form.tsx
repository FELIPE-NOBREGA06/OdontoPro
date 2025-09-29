"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const appointmentshema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("O e-mail deve ser válido"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  date: z.date(),
  serviceId: z.string().min(1, "O serviço é obrigatório"),
});

export type appointmentFormData = z.infer<typeof appointmentshema>;

export function userappointmentForm() {
  return useForm<appointmentFormData>({
    resolver: zodResolver(appointmentshema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceId: "",
      date: new Date(),
    },
  });
}
