import React from 'react';
import { FormField } from './FormField';

interface LabReportHeaderProps {
  volunteerId: string;
  formData: {
    age: string;
    studyNo: string;
    subjectId: string;
    sampleAndSid: string;
    sex: string;
    collectionCentre: string;
    sampleCollectionDate: string;
    registrationDate: string;
    reportDate: string;
  };
  onUpdateForm: (field: string, value: string) => void;
}

const genderOptions = ['Male', 'Female'];

export const LabReportHeader: React.FC<LabReportHeaderProps> = ({
  volunteerId,
  formData,
  onUpdateForm,
}) => {
  return (
    <div className="lab-report-header-grid">
      <div className="field-group">
        <FormField
          label="Volunteer ID"
          value={volunteerId}
          onChange={() => {}}
          disabled
          className="font-medium"
        />
        <FormField
          label="Age"
          value={formData.age}
          onChange={(value) => onUpdateForm('age', value)}
        />
        <FormField
          label="Study No"
          value={formData.studyNo}
          onChange={(value) => onUpdateForm('studyNo', value)}
        />
        <FormField
          label="Subject Id"
          value={formData.subjectId}
          onChange={(value) => onUpdateForm('subjectId', value)}
        />
        <FormField
          label="Sample & SID"
          value={formData.sampleAndSid}
          onChange={(value) => onUpdateForm('sampleAndSid', value)}
        />
      </div>
      <div className="field-group">
        <FormField
          label="Sex"
          type="select"
          options={genderOptions}
          value={formData.sex}
          onChange={(value) => onUpdateForm('sex', value)}
        />
        <FormField
          label="Collection Centre"
          value={formData.collectionCentre}
          onChange={(value) => onUpdateForm('collectionCentre', value)}
        />
        <FormField
          label="Sample Collection Date"
          type="date"
          value={formData.sampleCollectionDate}
          onChange={(value) => onUpdateForm('sampleCollectionDate', value)}
        />
        <FormField
          label="Registration Date"
          type="date"
          value={formData.registrationDate}
          onChange={(value) => onUpdateForm('registrationDate', value)}
        />
        <FormField
          label="Report Date"
          type="date"
          value={formData.reportDate}
          onChange={(value) => onUpdateForm('reportDate', value)}
        />
      </div>
    </div>
  );
};