import { redirect } from "next/navigation";
import { getInfoShedule } from "./{id}/_data-acess/get-info-schedule";
import { ScheduleContent } from "./{id}/_components/schedule-content";

export default async function SchedulePage({
  params,
}: {
  params: { id: string };
}) {
  const userId = (await params).id;
  const user = await getInfoShedule({ userId: userId });

  if (!user) {
    redirect("/");
  }

  return <ScheduleContent clinic={user} />;
}
