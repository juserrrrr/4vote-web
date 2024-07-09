import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput: React.FC = () => {
  const label = 'Data Limite';
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isFocused, setIsFocused] = useState<Boolean>(false);

  const handleCalendarOpen = () => {
    setIsFocused(true);
  };

  const handleCalendarClose = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="border-2 h-10 w-full border-blue-950 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onCalendarOpen={handleCalendarOpen}
        onCalendarClose={handleCalendarClose}
      />
      <label
        className={`absolute left-4 transition-all duration-200 text-blue-950 font-bold text-md bg-white px-1 
        ${isFocused || selectedDate ? 'top-1 -translate-y-4 text-sm z-10' : 'top-3.5'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default DateInput;
