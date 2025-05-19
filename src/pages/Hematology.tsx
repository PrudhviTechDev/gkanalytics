import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormStep } from '../components/FormStep';
import { LabReportHeader } from '../components/LabReportHeader';
import { PathologistFields } from '../components/PathologistFields';
import type { LabReportBaseForm } from '../types/lab-report';

interface BloodGroupingTest {
  result: string;
  unit: string;
  referenceRange: string;
}

interface CompleteBloodCountTest {
  result: string;
  unit: string;
  referenceRange: string;
}

interface HematologyForm extends LabReportBaseForm {
  bloodGrouping: {
    abo: BloodGroupingTest;
    rhTyping: BloodGroupingTest;
  };
  completeBloodCount: {
    hemoglobin: CompleteBloodCountTest;
    rbcCount: CompleteBloodCountTest;
    wbcCount: CompleteBloodCountTest;
    plateletCount: CompleteBloodCountTest;
    neutrophils: CompleteBloodCountTest;
    lymphocytes: CompleteBloodCountTest;
    eosinophils: CompleteBloodCountTest;
    monocytes: CompleteBloodCountTest;
    basophils: CompleteBloodCountTest;
  };
}

export const Hematology = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState<HematologyForm>({
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
    bloodGrouping: {
      abo: { result: '', unit: '', referenceRange: '' },
      rhTyping: { result: '', unit: '', referenceRange: '' },
    },
    completeBloodCount: {
      hemoglobin: { result: '', unit: 'g/dL', referenceRange: '13 - 18' },
      rbcCount: { result: '', unit: 'mil/µL', referenceRange: '4.5 - 5.5' },
      wbcCount: { result: '', unit: 'cells/Cumm', referenceRange: '4000 - 11000' },
      plateletCount: { result: '', unit: 'lakhs/cumm', referenceRange: '1.5 - 4.0' },
      neutrophils: { result: '', unit: '%', referenceRange: '40 - 75' },
      lymphocytes: { result: '', unit: '%', referenceRange: '20 - 40' },
      eosinophils: { result: '', unit: '%', referenceRange: '1 - 6' },
      monocytes: { result: '', unit: '%', referenceRange: '2 - 10' },
      basophils: { result: '', unit: '%', referenceRange: '0 - 1' },
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

  const updateBloodGrouping = (test: keyof HematologyForm['bloodGrouping'], field: keyof BloodGroupingTest, value: string) => {
    setFormData(prev => ({
      ...prev,
      bloodGrouping: {
        ...prev.bloodGrouping,
        [test]: {
          ...prev.bloodGrouping[test],
          [field]: value
        }
      }
    }));
  };

  const updateCompleteBloodCount = (test: keyof HematologyForm['completeBloodCount'], field: keyof CompleteBloodCountTest, value: string) => {
    setFormData(prev => ({
      ...prev,
      completeBloodCount: {
        ...prev.completeBloodCount,
        [test]: {
          ...prev.completeBloodCount[test],
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
    console.log('Saving Hematology data:', formData);
  };

  return (
    <FormStep
      currentPage="/lab-report/hematology"
      nextPage="/lab-report/immunology"
      prevPage="/lab-report/pathology"
      onSave={handleSave}
    >
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Laboratory Test Report - Hematology</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 4 of 5</div>
        </div>
      </div>

      <div className="space-y-6">
        <LabReportHeader
          volunteerId={volunteerId}
          formData={formData.headerData}
          onUpdateForm={updateHeaderForm}
        />

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">HEMATOLOGY</h3>
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
                    <div className="text-sm font-medium">Blood Grouping (A B O) and Rh typing</div>
                    <div className="text-xs text-gray-500">(Method: Tube method)</div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="text-sm">Blood Grouping (ABO)</div>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bloodGrouping.abo.result}
                      onChange={(e) => updateBloodGrouping('abo', 'result', e.target.value)}
                      className="input-field"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bloodGrouping.abo.unit}
                      onChange={(e) => updateBloodGrouping('abo', 'unit', e.target.value)}
                      className="input-field"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bloodGrouping.abo.referenceRange}
                      onChange={(e) => updateBloodGrouping('abo', 'referenceRange', e.target.value)}
                      className="input-field"
                    />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">
                    <div className="text-sm">Rh Typing</div>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bloodGrouping.rhTyping.result}
                      onChange={(e) => updateBloodGrouping('rhTyping', 'result', e.target.value)}
                      className="input-field"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bloodGrouping.rhTyping.unit}
                      onChange={(e) => updateBloodGrouping('rhTyping', 'unit', e.target.value)}
                      className="input-field"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bloodGrouping.rhTyping.referenceRange}
                      onChange={(e) => updateBloodGrouping('rhTyping', 'referenceRange', e.target.value)}
                      className="input-field"
                    />
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-2" colSpan={4}>
                    <div className="text-sm font-medium">COMPLETE BLOOD COUNT</div>
                    <div className="text-xs text-gray-500">(Method: Electrical Impedance)</div>
                  </td>
                </tr>
                {Object.entries(formData.completeBloodCount).map(([key, test]) => {
                  const displayNames: Record<string, string> = {
                    hemoglobin: 'Hemoglobin (Hb)*',
                    rbcCount: 'RBC count*',
                    wbcCount: 'WBC count*',
                    plateletCount: 'Platelet Count*',
                    neutrophils: 'Neutrophils*',
                    lymphocytes: 'Lymphocytes*',
                    eosinophils: 'Eosinophils*',
                    monocytes: 'Monocytes*',
                    basophils: 'Basophils*',
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
                          onChange={(e) => updateCompleteBloodCount(key as keyof HematologyForm['completeBloodCount'], 'result', e.target.value)}
                          className="input-field"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.unit}
                          disabled
                          className="input-field bg-gray-50"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={test.referenceRange}
                          disabled
                          className="input-field bg-gray-50"
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