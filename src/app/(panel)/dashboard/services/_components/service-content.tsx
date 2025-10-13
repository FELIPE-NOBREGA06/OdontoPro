<<<<<<< HEAD
import { getAllServices } from "../_data-acess/get-all.services";
import { ServiceList } from "./services-list";
=======
import { getAllServices } from '../_data-access/get-all-services'
import { ServicesList } from './services-list';
>>>>>>> 6328a0a (att)

interface ServicesContentProps {
  userId: string;
}

<<<<<<< HEAD
export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId: userId });

  return (
    <div>
      <ServiceList services={services.data || []} />
    </div>
  );
}
=======

export async function ServicesContent({ userId }: ServicesContentProps) {

  const services = await getAllServices({ userId: userId })

  return (
    <ServicesList services={services.data || []} />
  )
}   
>>>>>>> 6328a0a (att)
