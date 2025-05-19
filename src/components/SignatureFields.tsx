import React from 'react';
import { FormField } from './FormField';
import type { SignatureData } from '../types/common';

interface SignatureFieldsProps {
  label?: string;
  value: SignatureData;
  onChange: (value: SignatureData) => void;
  className?: string;
}

export const SignatureFields: React.FC<SignatureFieldsProps> = ({
  label,
  value,
  onChange,
  className = '',
}) => {
  const signatureData = value || { name: '', date: '', time: '' };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="space-y-2">
        <FormField
          value={signatureData.name}
          onChange={(name) => onChange({ ...signatureData, name })}
          placeholder="Sign"
        />
        <FormField
          type="date"
          value={signatureData.date}
          onChange={(date) => onChange({ ...signatureData, date })}
        />
        <FormField
          type="time"
          value={signatureData.time}
          onChange={(time) => onChange({ ...signatureData, time })}
          step="1"
        />
      </div>
    </div>
  );
};