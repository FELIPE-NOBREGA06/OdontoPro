import { redirect } from "next/navigation";
import { getInfoShedule } from "./[id]/_data-acess/get-info-schedule";
import { ScheduleContent } from "./[id]/_components/schedule-content";

export default async function SchedulePage({
  params,
}: {
  params: { id: string };
}) {
  const userId = params.id;
  const user = (await getInfoShedule({ userId })) ?? null;

  if (!user) {
    // Redireciona caso não encontre o usuário
    redirect("/");
  }

  console.log(user);
  return <ScheduleContent clinic={user} />;
}
