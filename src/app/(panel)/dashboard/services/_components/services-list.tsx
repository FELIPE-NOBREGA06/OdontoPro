"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, X } from "lucide-react";
import { DialogService } from "./dialog-services";
import { Service } from "@/generated/prisma";
import { foramtCurrency } from "@/utils/formatCurrency";
import { deleteService } from "../_actions/delite-service";
import { toast } from "sonner";

interface ServicesListProps {
  services: Service[];
  onServiceDeleted?: (serviceId: string) => void;
}

export function ServiceList({ services, onServiceDeleted }: ServicesListProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  async function handleDeleteService(serviceId: string) {
    const response = await deleteService({ serviceId });

    if (response.error) {
      toast.error(response.error);
      return;
    }

    toast.success(response.data);
    onServiceDeleted?.(serviceId);
  }

  function handleEditService(service: Service) {
    setEditingService(service);
    setIsDialogOpen(true);
  }

  function handleNewService() {
    setEditingService(null);
    setIsDialogOpen(true);
  }

  return (
    <section className="mx-auto">
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-xl md:text-2xl font-bold">
            Serviços
          </CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleNewService}>
                <Plus className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent
              onInteractOutside={(e) => {
                e.preventDefault();
                setIsDialogOpen(false);
                setEditingService(null);
              }}
            >
              <DialogService
                closeModal={() => {
                  setIsDialogOpen(false);
                  setEditingService(null);
                }}
                serviceId={editingService?.id}
                initialValues={
                  editingService
                    ? {
                        name: editingService.name,
                        price: (editingService.price / 100)
                          .toFixed(2)
                          .replace(".", ","),
                        hours: Math.floor(
                          editingService.duration / 60
                        ).toString(),
                        minutes: (editingService.duration % 60).toString(),
                      }
                    : undefined
                }
              />
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          <section className="space-y-4 mt-5">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2 ">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-gray-500">-</span>
                  <span className="text-gray-400">
                    {foramtCurrency(service.price / 100)}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditService(service)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </section>
        </CardContent>
      </Card>
    </section>
  );
}
