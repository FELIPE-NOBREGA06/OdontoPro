import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const formShema = z.object({
  name: z.string().min(1, { message: "O nome do serviço é obrigatorio" }),
  price: z.string().min(1, { message: "O preço do  serviço é obrigatorio" }),
  hours: z.string(),
  minuts: z.string(),
});

export interface userDialogServiceFormProps {
  initiaValues?: {
    name: string;
    price: string;
    hours: string;
    minuts: string;
  };
}

export type DialogServiceFormData = z.infer<typeof formShema>;

export function useDialogServiceForm() {
  return useForm<DialogServiceFormData>({
    resolver: zodResolver(formShema),
    defaultValues: {
      name: "",
      price: "",
      hours: "",
      minuts: "",
    },
  });
}
