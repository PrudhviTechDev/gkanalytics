import React, { useState, useEffect } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormStep } from '../components/FormStep';
import { LabReportHeader } from '../components/LabReportHeader';
import { PathologistFields } from '../components/PathologistFields';
import { LabReportTable } from '../components/LabReportTable';
import type { LabReportBaseForm, BiochemistryTest } from '../types/lab-report';
import { REFERENCE_RANGES } from '../types/lab-report';

interface ClinicalBiochemistryForm extends LabReportBaseForm {
  glucoseRandom: BiochemistryTest;
}

export const ClinicalBiochemistry1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState<ClinicalBiochemistryForm>({
    headerData: {
      age: '',
      studyNo: '',
      subjectId: '',
      sampleAndSid: '',
      sex: '',
      collectionCentre: '',
      sampleCollectionDate: '',
      registrationDate: '',
      reportDate: '',
    },
    glucoseRandom: {
      result: '',
      unit: REFERENCE_RANGES.glucose.unit,
      referenceRange: REFERENCE_RANGES.glucose.range
    },
    pathologist1: {
      name: '',
      specialty: ''
    },
    pathologist2: {
      name: '',
      specialty: ''
    }
  });

  const updateHeaderForm = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      headerData: {
        ...prev.headerData,
        [field]: value
      }
    }));
  };

  const updateTest = (testName: string, field: keyof BiochemistryTest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [testName]: {
        ...prev[testName as keyof ClinicalBiochemistryForm],
        [field]: value
      }
    }));
  };

  const updatePathologist = (pathologist: 'pathologist1' | 'pathologist2', field: 'name' | 'specialty', value: string) => {
    setFormData(prev => ({
      ...prev,
      [pathologist]: {
        ...prev[pathologist],
        [field]: value
      }
    }));
  };

  const handleSave = async () => {
    console.log('Saving Clinical Biochemistry Part 1 data:', formData);
  };

  return (
    <FormStep
      currentPage="/lab-report/biochemistry-1"
      nextPage="/lab-report/biochemistry-2"
      onSave={handleSave}
    >
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Laboratory Test Report - Clinical Biochemistry (Part 1)</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 1 of 5</div>
        </div>
      </div>

      <div className="space-y-6">
        <LabReportHeader
          volunteerId={volunteerId}
          formData={formData.headerData}
          onUpdateForm={updateHeaderForm}
        />

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">CLINICAL BIOCHEMISTRY</h3>
          <div className="overflow-x-auto">
            <LabReportTable
              tests={{ glucoseRandom: formData.glucoseRandom }}
              displayNames={{ glucoseRandom: 'Glucose- Random*' }}
              methods={{ glucoseRandom: '(Method: Spectrophotometry)' }}
              onUpdateTest={updateTest}
            />
          </div>
        </div>

        <PathologistFields
          pathologist1={formData.pathologist1}
          pathologist2={formData.pathologist2}
          onUpdatePathologist={updatePathologist}
        />
      </div>
    </FormStep>
  );
};