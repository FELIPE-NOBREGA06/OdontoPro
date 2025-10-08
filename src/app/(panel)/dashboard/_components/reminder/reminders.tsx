import { getReminders } from "../../_data-acess/get-reminders";
import { ReminderList } from "./reminder-list";

export async function Reminders({ userId }: { userId: string }) {
  const Reminders = await getReminders({ userId: userId });
  return <ReminderList reminder={Reminders} />;
}
