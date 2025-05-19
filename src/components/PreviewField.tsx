import React from 'react';

interface PreviewFieldProps {
  label: string;
  value: string | number;
}

export const PreviewField: React.FC<PreviewFieldProps> = ({ label, value }) => {
  return (
    <div className="preview-field">
      <dt className="text-sm font-medium text-gray-600">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value || '-'}</dd>
    </div>
  );
};