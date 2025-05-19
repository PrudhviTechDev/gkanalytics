import React, { useState, useEffect } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormStep } from '../components/FormStep';
import { LabReportHeader } from '../components/LabReportHeader';
import { PathologistFields } from '../components/PathologistFields';
import { LabReportTable } from '../components/LabReportTable';
import type { LabReportBaseForm, BiochemistryTest } from '../types/lab-report';
import { REFERENCE_RANGES } from '../types/lab-report';
import type { Gender } from '../types/common';

interface ClinicalBiochemistryForm extends LabReportBaseForm {
  tests: {
    urea: BiochemistryTest;
    creatinine: BiochemistryTest;
    uricAcid: BiochemistryTest;
    bilirubinTotal: BiochemistryTest;
    ast: BiochemistryTest;
    alt: BiochemistryTest;
    alp: BiochemistryTest;
    proteinTotal: BiochemistryTest;
    albumin: BiochemistryTest;
    cholesterolTotal: BiochemistryTest;
    sodium: BiochemistryTest;
    potassium: BiochemistryTest;
    chloride: BiochemistryTest;
  };
}

const getInitialFormData = (sex: Gender): ClinicalBiochemistryForm => ({
  headerData: {
    age: '',
    studyNo: '',
    subjectId: '',
    sampleAndSid: '',
    sex,
    collectionCentre: '',
    sampleCollectionDate: '',
    registrationDate: '',
    reportDate: '',
  },
  tests: {
    urea: { result: '', unit: 'mg/dL', referenceRange: '16.6 - 48.5' },
    creatinine: { 
      result: '', 
      unit: REFERENCE_RANGES.creatinine.unit, 
      referenceRange: REFERENCE_RANGES.creatinine[sex.toLowerCase()]
    },
    uricAcid: { 
      result: '', 
      unit: REFERENCE_RANGES.uricAcid.unit, 
      referenceRange: REFERENCE_RANGES.uricAcid[sex.toLowerCase()]
    },
    bilirubinTotal: { 
      result: '', 
      unit: REFERENCE_RANGES.bilirubinTotal.unit, 
      referenceRange: REFERENCE_RANGES.bilirubinTotal.range 
    },
    ast: { 
      result: '', 
      unit: REFERENCE_RANGES.ast.unit, 
      referenceRange: REFERENCE_RANGES.ast[sex.toLowerCase()]
    },
    alt: { 
      result: '', 
      unit: REFERENCE_RANGES.alt.unit, 
      referenceRange: REFERENCE_RANGES.alt[sex.toLowerCase()]
    },
    alp: { 
      result: '', 
      unit: REFERENCE_RANGES.alp.unit, 
      referenceRange: REFERENCE_RANGES.alp[sex.toLowerCase()]
    },
    proteinTotal: { 
      result: '', 
      unit: REFERENCE_RANGES.proteinTotal.unit, 
      referenceRange: REFERENCE_RANGES.proteinTotal.range 
    },
    albumin: { 
      result: '', 
      unit: REFERENCE_RANGES.albumin.unit, 
      referenceRange: REFERENCE_RANGES.albumin.range 
    },
    cholesterolTotal: { 
      result: '', 
      unit: REFERENCE_RANGES.cholesterolTotal.unit, 
      referenceRange: REFERENCE_RANGES.cholesterolTotal.range 
    },
    sodium: { 
      result: '', 
      unit: REFERENCE_RANGES.sodium.unit, 
      referenceRange: REFERENCE_RANGES.sodium.range 
    },
    potassium: { 
      result: '', 
      unit: REFERENCE_RANGES.potassium.unit, 
      referenceRange: REFERENCE_RANGES.potassium.range 
    },
    chloride: { 
      result: '', 
      unit: REFERENCE_RANGES.chloride.unit, 
      referenceRange: REFERENCE_RANGES.chloride.range 
    },
  },
  pathologist1: {
    name: '',
    specialty: '',
  },
  pathologist2: {
    name: '',
    specialty: '',
  },
});

export const ClinicalBiochemistry2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState<ClinicalBiochemistryForm>(() => 
    getInitialFormData('Male')
  );

  const updateHeaderForm = (field: string, value: string) => {
    if (field === 'sex') {
      const gender = value as Gender;
      setFormData(prev => ({
        ...prev,
        headerData: {
          ...prev.headerData,
          [field]: gender
        },
        tests: {
          ...prev.tests,
          creatinine: { ...prev.tests.creatinine, referenceRange: REFERENCE_RANGES.creatinine[gender.toLowerCase()] },
          uricAcid: { ...prev.tests.uricAcid, referenceRange: REFERENCE_RANGES.uricAcid[gender.toLowerCase()] },
          ast: { ...prev.tests.ast, referenceRange: REFERENCE_RANGES.ast[gender.toLowerCase()] },
          alt: { ...prev.tests.alt, referenceRange: REFERENCE_RANGES.alt[gender.toLowerCase()] },
          alp: { ...prev.tests.alp, referenceRange: REFERENCE_RANGES.alp[gender.toLowerCase()] },
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        headerData: {
          ...prev.headerData,
          [field]: value
        }
      }));
    }
  };

  const updateTest = (testName: keyof ClinicalBiochemistryForm['tests'], field: keyof BiochemistryTest, value: string) => {
    setFormData(prev => ({
      ...prev,
      tests: {
        ...prev.tests,
        [testName]: {
          ...prev.tests[testName],
          [field]: value
        }
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
    console.log('Saving Clinical Biochemistry Part 2 data:', formData);
  };

  const displayNames: Record<string, string> = {
    urea: 'Urea',
    creatinine: 'Creatinine',
    uricAcid: 'Uric Acid',
    bilirubinTotal: 'Bilirubin Total',
    ast: 'Aspartate Aminotransferase(AST/SGOT)',
    alt: 'Alanine Transaminase (ALT/SGPT)',
    alp: 'Alkaline Phosphatase (ALP)',
    proteinTotal: 'Protein Total',
    albumin: 'Albumin',
    cholesterolTotal: 'Cholesterol-Total',
    sodium: 'Sodium',
    potassium: 'Potassium',
    chloride: 'Chloride',
  };

  return (
    <FormStep
      currentPage="/lab-report/biochemistry-2"
      nextPage="/lab-report/pathology"
      prevPage="/lab-report/biochemistry-1"
      onSave={handleSave}
    >
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Laboratory Test Report - Clinical Biochemistry (Part 2)</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 2 of 5</div>
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
              tests={formData.tests}
              displayNames={displayNames}
              methods={{
                urea: '(Method: Spectrophotometry)',
                creatinine: '(Method: Spectrophotometry)',
                uricAcid: '(Method: Spectrophotometry)',
              }}
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