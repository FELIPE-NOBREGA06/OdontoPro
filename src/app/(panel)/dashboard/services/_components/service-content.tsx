import { getAllServices } from "../_data-acess/get-all.services";
import { ServiceList } from "./services-list";

interface ServicesContentProps {
  userId: string;
}

export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId: userId });

  return (
    <div>
      <ServiceList services={services.data || []} />
    </div>
  );
}
