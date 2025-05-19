import React from 'react';
import { useVolunteer } from '../context/VolunteerContext';

interface FormFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  className?: string;
  disabled?: boolean;
  min?: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  options,
  className = '',
  disabled = false,
  min,
  error,
}) => {
  const { screeningDate } = useVolunteer();

  if (type === 'select' && options) {
    return (
      <div className={`mb-4 ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${
            error ? 'border-red-500' : 'border-gray-200'
          }`}
          required={required}
          disabled={disabled}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${
          error ? 'border-red-500' : 'border-gray-200'
        }`}
        required={required}
        disabled={disabled}
        min={type === 'date' ? (min || screeningDate) : undefined}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};