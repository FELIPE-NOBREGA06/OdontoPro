"use client";

import { Button } from "@/components/ui/button";
import { TimeSlot } from "./schedule-content";
import { cn } from "@/lib/utils";
import {
  isSlotInThePast,
  isToday,
  isSlotsSequenceAvailable,
} from "./schedule-utils";

interface SheduleTimeListProps {
  selectedDate: Date;
  selecteTime: string;
  requireSlots: number;
  blockedTimes: string[];
  availableTimeSlots: TimeSlot[];
  clinicTime: string[];
  onSelectTime: (time: string) => void;
}
export function SheduleTimeList({
  selectedDate,
  availableTimeSlots,
  blockedTimes,
  requireSlots,
  selecteTime,
  clinicTime,
  onSelectTime,
}: SheduleTimeListProps) {
  const dateIsToday = isToday(selectedDate);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
      {availableTimeSlots.map((slot) => {
        const sequenceOk = isSlotsSequenceAvailable(
          slot.time,
          requireSlots,
          clinicTime,
          blockedTimes
        );
        const slotIsPast = dateIsToday && isSlotInThePast(slot.time);

        const slotEnabled = slot.available && sequenceOk && !slotIsPast;

        return (
          <Button
            onClick={() => slotEnabled && onSelectTime(slot.time)}
            type="button"
            variant="outline"
            key={slot.time}
            className={cn(
              "h-10 select-none",
              selecteTime === slot.time &&
                "border-2 border-emerald-500 text-primary",
              !slotEnabled && "opacity-50 cursor-not-allowed"
            )}
          >
            disabled={slotIsPast}
          </Button>
        );
      })}
    </div>
  );
}
