<<<<<<< HEAD
import { getReminders } from "../../_data-acess/get-reminders";
import { ReminderList } from "./reminder-list";

export async function Reminders({ userId }: { userId: string }) {
  const Reminders = await getReminders({ userId: userId });
  return <ReminderList reminder={Reminders} />;
}
=======
import { getReminders } from '../../_data-access/get-reminders'
import { ReminderList } from './reminder-list'

export async function Reminders({ userId }: { userId: string }) {
  const reminders = await getReminders({ userId: userId })

  return (
    <ReminderList reminder={reminders} />
  )
}
>>>>>>> 6328a0a (att)
