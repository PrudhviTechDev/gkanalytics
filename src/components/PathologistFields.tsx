import React from 'react';
import { FormField } from './FormField';
import type { PathologistData } from '../types/lab-report';

interface PathologistFieldsProps {
  pathologist1: PathologistData;
  pathologist2: PathologistData;
  onUpdatePathologist: (pathologist: 'pathologist1' | 'pathologist2', field: keyof PathologistData, value: string) => void;
}

export const PathologistFields: React.FC<PathologistFieldsProps> = ({
  pathologist1,
  pathologist2,
  onUpdatePathologist,
}) => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">
      <div className="space-y-2">
        <FormField
          label="Pathologist Name"
          value={pathologist1.name}
          onChange={(value) => onUpdatePathologist('pathologist1', 'name', value)}
          placeholder="Enter pathologist name"
        />
        <FormField
          label="Specialty"
          value={pathologist1.specialty}
          onChange={(value) => onUpdatePathologist('pathologist1', 'specialty', value)}
          placeholder="Enter specialty"
        />
      </div>
      <div className="space-y-2">
        <FormField
          label="Pathologist Name"
          value={pathologist2.name}
          onChange={(value) => onUpdatePathologist('pathologist2', 'name', value)}
          placeholder="Enter pathologist name"
        />
        <FormField
          label="Specialty"
          value={pathologist2.specialty}
          onChange={(value) => onUpdatePathologist('pathologist2', 'specialty', value)}
          placeholder="Enter specialty"
        />
      </div>
    </div>
  );
};