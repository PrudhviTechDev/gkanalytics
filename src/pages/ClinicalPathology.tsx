import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormStep } from '../components/FormStep';
import { LabReportHeader } from '../components/LabReportHeader';
import { PathologistFields } from '../components/PathologistFields';
import type { LabReportBaseForm } from '../types/lab-report';

interface UrineAnalysisTest {
  result: string;
  unit: string;
  referenceRange: string;
}

interface ClinicalPathologyForm extends LabReportBaseForm {
  urineAnalysis: {
    color: UrineAnalysisTest;
    appearance: UrineAnalysisTest;
    specificGravity: UrineAnalysisTest;
    reactionPh: UrineAnalysisTest;
    proteins: UrineAnalysisTest;
    glucose: UrineAnalysisTest;
    bileSalts: UrineAnalysisTest;
    ketones: UrineAnalysisTest;
    blood: UrineAnalysisTest;
    urobilinogen: UrineAnalysisTest;
    nitrites: UrineAnalysisTest;
    pusWbc: UrineAnalysisTest;
    urineRbc: UrineAnalysisTest;
    epithelialCells: UrineAnalysisTest;
    casts: UrineAnalysisTest;
    others: UrineAnalysisTest;
  };
}

export const ClinicalPathology = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState<ClinicalPathologyForm>({
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
    urineAnalysis: {
      color: { result: '', unit: '', referenceRange: '' },
      appearance: { result: '', unit: '', referenceRange: '' },
      specificGravity: { result: '', unit: '', referenceRange: '1.000 - 1.030' },
      reactionPh: { result: '', unit: '', referenceRange: '5.0 - 8.0' },
      proteins: { result: '', unit: '', referenceRange: 'NIL' },
      glucose: { result: '', unit: '', referenceRange: 'Nil' },
      bileSalts: { result: '', unit: '', referenceRange: 'NEGATIVE' },
      ketones: { result: '', unit: '', referenceRange: 'NEGATIVE' },
      blood: { result: '', unit: '', referenceRange: 'NEGATIVE' },
      urobilinogen: { result: '', unit: '', referenceRange: 'NORMAL' },
      nitrites: { result: '', unit: '', referenceRange: 'NEGATIVE' },
      pusWbc: { result: '', unit: '', referenceRange: '0 - 5 /HPF' },
      urineRbc: { result: '', unit: '', referenceRange: 'NIL' },
      epithelialCells: { result: '', unit: '', referenceRange: '0 - 5 /HPF' },
      casts: { result: '', unit: '', referenceRange: 'NIL' },
      others: { result: '', unit: '', referenceRange: '' },
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

  const updateHeaderForm = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      headerData: {
        ...prev.headerData,
        [field]: value
      }
    }));
  };

  const updateUrineAnalysis = (testName: keyof ClinicalPathologyForm['urineAnalysis'], field: keyof UrineAnalysisTest, value: string) => {
    setFormData(prev => ({
      ...prev,
      urineAnalysis: {
        ...prev.urineAnalysis,
        [testName]: {
          ...prev.urineAnalysis[testName],
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
    console.log('Saving Clinical Pathology data:', formData);
  };

  return (
    <FormStep
      currentPage="/lab-report/pathology"
      nextPage="/lab-report/hematology"
      prevPage="/lab-report/biochemistry-2"
      onSave={handleSave}
    >
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Laboratory Test Report - Clinical Pathology</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 3 of 5</div>
        </div>
      </div>

      <div className="space-y-6">
        <LabReportHeader
          volunteerId={volunteerId}
          formData={formData.headerData}
          onUpdateForm={updateHeaderForm}
        />

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">CLINICAL PATHOLOGY</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">TEST DESCRIPTION</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">RESULT</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">UNITS</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">REFERENCE RANGES</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2" colSpan={4}>
                    <div className="text-sm font-medium">Complete Urine Analysis (CUE)</div>
                    <div className="text-xs text-gray-500">(Method: Strip/Microscopy)</div>
                  </td>
                </tr>
                {Object.entries(formData.urineAnalysis).map(([key, test]) => {
                  const displayNames: Record<string, string> = {
                    color: 'Colour',
                    appearance: 'Appearance',
                    specificGravity: 'Specific gravity',
                    reactionPh: 'Reaction(pH)',
                    proteins: 'Proteins',
                    glucose: 'Glucose',
                    bileSalts: 'Bile salts & Bile pigments',
                    ketones: 'Ketones',
                    blood: 'Blood',
                    urobilinogen: 'Urobilinogen',
                    nitrites: 'Nitrites',
                    pusWbc: 'PUS(WBC) Cells',
                    urineRbc: 'Urine RBC',
                    epithelialCells: 'U.Epithelial Cells',
                    casts: 'Casts & Crystals',
                    others: 'Others',
                  };

                  return (
                    <tr key={key} className="border-b">
                      <td className="px-4 py-2">
                        <div className="text-sm">{displayNames[key]}</div>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.result}
                          onChange={(e) => updateUrineAnalysis(key as keyof ClinicalPathologyForm['urineAnalysis'], 'result', e.target.value)}
                          className="input-field"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.unit}
                          onChange={(e) => updateUrineAnalysis(key as keyof ClinicalPathologyForm['urineAnalysis'], 'unit', e.target.value)}
                          className="input-field"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.referenceRange}
                          disabled={test.referenceRange !== ''}
                          className={`input-field ${test.referenceRange !== '' ? 'bg-gray-50' : ''}`}
                          onChange={(e) => updateUrineAnalysis(key as keyof ClinicalPathologyForm['urineAnalysis'], 'referenceRange', e.target.value)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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