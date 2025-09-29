import { StringDecoder } from "string_decoder";

export function isToday(date: Date) {
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export function isSlotInThePast(slotTime: string) {
  const [slotHour, slotMinute] = slotTime.split(":").map(Number);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (slotHour < currentHour) {
    return true;
  } else if (slotHour === currentHour && slotMinute <= currentMinute) {
    return true;
  }

  return false;
}

export function isSlotsSequenceAvailable(
  starSlot: string,
  requiredSlots: number,
  allSlots: string[],
  blockedSlots: string[]
) {
  const starIndex = allSlots.indexOf(starSlot);
  if (starIndex === -1 || starIndex + requiredSlots > allSlots.length) {
    return false;
  }

  for (let i = starIndex; i < starIndex + requiredSlots; i++) {
    const slotTime = allSlots[i];

    if (blockedSlots.includes(slotTime)) {
      return false;
    }
  }

  return true;
}
