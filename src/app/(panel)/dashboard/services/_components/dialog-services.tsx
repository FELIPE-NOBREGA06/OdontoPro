"user client";
import { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import {
  useDialogServiceForm,
  DialogServiceFormData,
} from "./dialog-services-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { converRealToCents } from "@/utils/convertCurrency";
import { createNewService } from "../_actions/creat-service";
import { toast } from "sonner";

interface DialogServiceProps {
  closeModal: () => void;
}

export function DialogService({ closeModal }: DialogServiceProps) {
  const form = useDialogServiceForm();
  const [loading, setLoading] = useState(false);

  async function onsubmit(values: DialogServiceFormData) {
    setLoading(true);
    const priceIncents = converRealToCents(values.price);
    const hours = parseInt(values.hours) || 0;
    const minuts = parseInt(values.minuts) || 0;

    // converter horas e minutos para duração total em minutos:
    const duration = hours * 60 + minuts;

    const response = await createNewService({
      name: values.name,
      price: priceIncents,
      duration: duration,
    });

    setLoading(false);

    if (response.error) {
      toast.error(response.error);
      setLoading(false);
      return;
    }

    toast.success("Seviço cadastrado com sucesso");
  }

  function handleCloseModal() {
    form.reset();
    closeModal();
  }

  function changeCurrency(event: React.ChangeEvent<HTMLInputElement>) {
    let { value } = event.target;
    value = value.replace(/\D/g, "");

    if (value) {
      value = (parseInt(value, 10) / 100).toFixed(2);
      value = value.replace(".", ",");
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    event.target.value = value;
    form.setValue("price", value);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Novo Serviços</DialogTitle>
        <DialogDescription>Adicione um novo serviço</DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onsubmit)}>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Nome do serviço:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o nome do serviço..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Valor do serviço:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Ex: 120,00"
                      onChange={changeCurrency}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <p className="font-semibold">Tempo de duração do serviços:</p>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Horas:</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="1" min="0" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minuts"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Minutos:</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="0" min="0" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full font-semibold text-white"
            disabled={loading}
          >
            {loading ? "Cadastrado..." : "Adicionar serviço"}
          </Button>
        </form>
      </Form>
    </>
  );
}
