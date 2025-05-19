import React from 'react';
import { FormField } from './FormField';

interface SignatureFieldProps {
  name: string;
  date: string;
  time: string;
  onNameChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  className?: string;
}

export const SignatureField: React.FC<SignatureFieldProps> = ({
  name,
  date,
  time,
  onNameChange,
  onDateChange,
  onTimeChange,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <FormField
        value={name}
        onChange={onNameChange}
        placeholder="Enter name"
      />
      <div className="grid grid-cols-2 gap-2">
        <FormField
          type="date"
          value={date}
          onChange={onDateChange}
        />
        <FormField
          type="time"
          value={time}
          onChange={onTimeChange}
          step="1" // Enable seconds input
        />
      </div>
    </div>
  );
};