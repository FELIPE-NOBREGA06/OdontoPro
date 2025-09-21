"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ImgTest from "../_components/../../../../../../public/foto1.png";
import { MapPin } from "lucide-react";
import { Prisma } from "@/generated/prisma";
import { userappointmentForm, appointmentFormData } from "./schedule-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatPhone } from "@/utils/formatPhone";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { DateTimePicker } from "./deta-picker";
import { Label } from "@radix-ui/react-label";
import { SheduleTimeList } from "./schedule-time-list";
import { createNewAppointment } from "../_actions/creat-appointments";
import { toast } from "sonner";
import { isSlotInThePast, isToday } from "./schedule-utils";

type UserWithSubscriptionAndSuscription = Prisma.UserGetPayload<{
  include: {
    subscription: true;
    services: true;
  };
}>;

interface ScheduleContentProps {
  clinic: UserWithSubscriptionAndSuscription;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export function ScheduleContent({ clinic }: ScheduleContentProps) {
  const form = userappointmentForm();
  const { watch } = form;

  const selectedDate = watch("date");
  const selectSeviceId = watch("serviceId");

  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [blockedTimes, setBlockedTimes] = useState<string[]>([]);

  const fetchblockedTimes = useCallback(
    async (date: Date): Promise<string[]> => {
      setLoadingSlots(true);
      try {
        const dateString = date.toISOString().split("T")[0];
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/schedule/get-appointments?userId=${clinic.id}&date=${dateString}`
        );

        const json = await response.json();
        setLoadingSlots(false);

        return json.map((t: any) => String(t));
      } catch (err) {
        console.log(err);
        setLoadingSlots(false);
        return [];
      }
    },
    [clinic.id]
  );

  useEffect(() => {
    if (selectedDate) {
      fetchblockedTimes(selectedDate).then((blocked) => {
        setBlockedTimes(blocked);

        const times = clinic.times || [];

        const finalSlots = times.map((time) => ({
          time: time,
          available: !blocked.includes(time),
        }));

        setAvailableTimeSlots(finalSlots);

        const stillAvailable = finalSlots.find(
          (slot) => slot.time === selectedTime && slot.available
        );

        if (!stillAvailable) {
          setSelectedTime("");
        }
      });
    }
  }, [selectedDate, clinic.times, fetchblockedTimes, selectedTime]);

  async function handleRegisterAppointmnent(formData: appointmentFormData) {
    if (!selectedTime) {
      return;
    }

    const response = await createNewAppointment({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      time: selectedTime,
      date: formData.date.toISOString().split("T")[0],
      serviceId: formData.serviceId,
      clinicId: clinic.id,
    });
    if (response.error) {
      toast.error(response.error);
      return;
    }

    toast.success("Consulta agendada com sucesso!");
    form.reset();
    setSelectedTime("");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-32 bg-emerald-500" />
      <section className="container mx-auto px-4 -mt-4 ">
        <div className="max-2xl mx-auto">
          <article className="flex flex-col items-center">
            <div className="relative w-48 rounded-full overflow-hidden border-4 border-white mb-8">
              <Image
                src={clinic.image ? clinic.image : ImgTest}
                alt="Foto da clinica"
                className="object-cover"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">{clinic.name}</h1>
            <div className="flex items-center gap-1  ">
              <MapPin className="w-5 h-5" />
              <span>
                {clinic.address ? clinic.address : "Endereço não informado "}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="max-w-2xl mx-auto w-full mt-6">
        /* formulario */
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegisterAppointmnent)}
            className="mx-2 space-y-6 bg-white p-6 border rounded-md shadow-sm"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <div>
                  <FormItem className="my-2">
                    <FormLabel className="font-semibold">
                      Nome completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Digite seu nome completo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div>
                  <FormItem className="my-2">
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Digite seu email..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <div>
                  <FormItem className="my-2">
                    <FormLabel className="font-semibold">Telefone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="phone"
                        placeholder="(XX) XXXXX-XXXX"
                        onChange={(e) => {
                          const formatValue = formatPhone(e.target.value);
                          field.onChange(formatValue);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <div>
                  <FormItem className="flex items-center gap-2 space-y-1">
                    <FormLabel className="font-semibold">
                      Data do agendamento
                    </FormLabel>
                    <FormControl>
                      <DateTimePicker
                        initialDate={new Date()}
                        className="w-full rounded border p-2"
                        onChange={(date) => {
                          if (date) {
                            field.onChange(date);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="serviceId"
              render={({ field }) => (
                <div>
                  <FormItem className="">
                    <FormLabel className="font-semibold">
                      Selecione o serviço
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue className="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {clinic.services.map((services) => (
                          <SelectItem key={services.id} value={services.id}>
                            {services.name}({Math.floor(services.duration / 60)}
                            h {services.duration % 60}min)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            {selectSeviceId && (
              <div className="space-y-2">
                <Label className="font-semibold">Horários disponíveis</Label>
                <div className="bg-gray-100 py-4 rouded-lg">
                  {loadingSlots ? (
                    <p>Carregando Horário....</p>
                  ) : availableTimeSlots.length === 0 ? (
                    <p>Nenhum horário disponível</p>
                  ) : (
                    <SheduleTimeList
                      onSelectTime={(time) => setSelectedTime(time)}
                      clinicTime={clinic.times}
                      blockedTimes={blockedTimes}
                      availableTimeSlots={availableTimeSlots}
                      selecteTime={selectedTime}
                      selectedDate={selectedDate}
                      requireSlots={
                        clinic.services.find(
                          (service) => service.id === selectSeviceId
                        )
                          ? Math.ceil(
                              clinic.services.find(
                                (service) => service.id === selectSeviceId
                              )!.duration / 30
                            )
                          : 1
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {clinic.status ? (
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400"
                disabled={
                  !watch("name") ||
                  !watch("email") ||
                  !watch("phone") ||
                  !watch("date")
                }
              >
                Realizar agendamento
              </Button>
            ) : (
              <p className="bg-red-500 text-white text-center px-4 py-2 rounded-md">
                A clinica está fechada nesse momento
              </p>
            )}
          </form>
        </Form>
      </section>
    </div>
  );
}
