<<<<<<< HEAD
import { StringDecoder } from "string_decoder";
=======
>>>>>>> 6328a0a (att)

export function isToday(date: Date) {
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
<<<<<<< HEAD
  );
}

export function isSlotInThePast(slotTime: string) {
  const [slotHour, slotMinute] = slotTime.split(":").map(Number);

  const now = new Date();
=======
  )
}


/**
 * Verificar se determinado slot já passou.
 */
export function isSlotInThePast(slotTime: string) {
  const [slotHour, slotMinute] = slotTime.split(":").map(Number)

  const now = new Date()
>>>>>>> 6328a0a (att)
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (slotHour < currentHour) {
<<<<<<< HEAD
    return true;
=======
    return true; // true quer dize que a hora já passou
>>>>>>> 6328a0a (att)
  } else if (slotHour === currentHour && slotMinute <= currentMinute) {
    return true;
  }

  return false;
<<<<<<< HEAD
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
=======

}


/** 
  * Verificar se, a partir de um slot inicial, existe uma sequencia de 'requiredSlots' disponiveis
  * Explo: se um serviço tem 2 required slots e começa no time 15:00,
  * precisa garantir que 15:00 e 15:30 não estejam no nosso blockedSlots
 */
export function isSlotSequenceAvailable(
  startSlot: string, //> Primeiro horario disponivel
  requiredSlots: number, //> Quantidade de slots necessários
  allSlots: string[], //> Todos horarios da clinica
  blockedSlots: string[] //> Horarios bloqueados
) {

  const startIndex = allSlots.indexOf(startSlot)
  if (startIndex === -1 || startIndex + requiredSlots > allSlots.length) {
    return false;
  }


  for (let i = startIndex; i < startIndex + requiredSlots; i++) {
    const slotTime = allSlots[i]
>>>>>>> 6328a0a (att)

    if (blockedSlots.includes(slotTime)) {
      return false;
    }
  }

  return true;
<<<<<<< HEAD
}
=======
}
>>>>>>> 6328a0a (att)
