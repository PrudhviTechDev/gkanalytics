import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormStep } from '../components/FormStep';
import { LabReportHeader } from '../components/LabReportHeader';
import { PathologistFields } from '../components/PathologistFields';
import type { LabReportBaseForm } from '../types/lab-report';

interface ImmunologyTest {
  result: string;
  unit: string;
  referenceRange: string;
}

interface ImmunologyForm extends LabReportBaseForm {
  tests: {
    vdrl: ImmunologyTest;
    hbsAg: ImmunologyTest;
    hivAntibody: ImmunologyTest;
    hcvAntibody: ImmunologyTest;
  };
}

export const Immunology = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState<ImmunologyForm>({
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
    tests: {
      vdrl: { 
        result: '', 
        unit: '', 
        referenceRange: '≥ 1:8 Significant' 
      },
      hbsAg: { 
        result: '', 
        unit: '', 
        referenceRange: '' 
      },
      hivAntibody: { 
        result: '', 
        unit: '', 
        referenceRange: '' 
      },
      hcvAntibody: { 
        result: '', 
        unit: '', 
        referenceRange: '' 
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

  const updateHeaderForm = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      headerData: {
        ...prev.headerData,
        [field]: value
      }
    }));
  };

  const updateTest = (testName: keyof ImmunologyForm['tests'], field: keyof ImmunologyTest, value: string) => {
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
    console.log('Saving Immunology data:', formData);
  };

  return (
    <FormStep
      currentPage="/lab-report/immunology"
      prevPage="/lab-report/hematology"
      onSave={handleSave}
    >
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Laboratory Test Report - Immunology/Serology</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 5 of 5</div>
        </div>
      </div>

      <div className="space-y-6">
        <LabReportHeader
          volunteerId={volunteerId}
          formData={formData.headerData}
          onUpdateForm={updateHeaderForm}
        />

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">IMMUNOLOGY / SEROLOGY</h3>
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
                {Object.entries(formData.tests).map(([key, test]) => {
                  const displayNames: Record<string, string> = {
                    vdrl: 'Rapid Plasma Reagin (VDRL)*',
                    hbsAg: 'Hepatitis B Surface antigen (HBsAg)',
                    hivAntibody: 'HIV 1 & 2 Antibody',
                    hcvAntibody: 'Hepatitis C Virus (HCV Antibody)',
                  };

                  const methods: Record<string, string> = {
                    vdrl: '(Method: Flocculation)',
                    hbsAg: '(Method: ELISA)',
                    hivAntibody: '(Method: ELISA)',
                    hcvAntibody: '(Method: ELISA)',
                  };

                  return (
                    <tr key={key} className="border-b">
                      <td className="px-4 py-2">
                        <div className="text-sm">{displayNames[key]}</div>
                        <div className="text-xs text-gray-500">{methods[key]}</div>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.result}
                          onChange={(e) => updateTest(key as keyof ImmunologyForm['tests'], 'result', e.target.value)}
                          className="input-field"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.unit}
                          onChange={(e) => updateTest(key as keyof ImmunologyForm['tests'], 'unit', e.target.value)}
                          className="input-field"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.referenceRange}
                          disabled={test.referenceRange !== ''}
                          className={`input-field ${test.referenceRange !== '' ? 'bg-gray-50' : ''}`}
                          onChange={(e) => updateTest(key as keyof ImmunologyForm['tests'], 'referenceRange', e.target.value)}
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