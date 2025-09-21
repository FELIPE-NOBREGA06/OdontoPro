"use client";
import { useState } from "react";
import { ptBR } from "date-fns/locale/pt-BR";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

interface DateTimePickerProps {
  minDate?: Date;
  className?: string;
  initialDate?: Date;
  onChange: (date: Date) => void;
}

export function DateTimePicker({
  className,
  minDate,
  onChange,
}: DateTimePickerProps) {
  const [startDate, setStartDate] = useState(new Date());

  function handleChange(date: Date | null) {
    if (date) {
      console.log(date);
      setStartDate(date);
      onChange(date);
    }
  }

  return (
    <DatePicker
      className={className}
      selected={startDate}
      locale="pt-BR"
      minDate={minDate ?? new Date()}
      onChange={handleChange}
      dateFormat={"dd/mm/yyyy"}
    />
  );
}
