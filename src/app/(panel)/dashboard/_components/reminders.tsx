import { getReminders } from "../_data-acess/get-reminders";

export function Reminders({ userId }: { userId: string }) {
  const Reminders = await getReminders({ userId: userId });
  return (
    <div>
      <h1>Lembretes</h1>
    </div>
  );
}
