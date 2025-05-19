import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { LabReportHeader } from '../components/LabReportHeader';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const BhcgTest1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    headerData: {
      age: '',
      studyNo: '',
      subjectId: '',
      sampleAndSid: '',
      sex: 'Female',
      collectionCentre: '',
      sampleCollectionDate: '',
      registrationDate: '',
      reportDate: '',
    },
    bhcgTest: {
      result: '',
      unit: 'mIU/mL',
      referenceRange: '< 5.3',
    },
    evaluatedBy: {
      name: '',
      date: '',
      time: '',
    } as SignatureData,
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

  const updateBhcgTest = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      bhcgTest: {
        ...prev.bhcgTest,
        [field]: value
      }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">β-HCG Test Report - Period 1</h2>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <LabReportHeader
          volunteerId={volunteerId}
          formData={formData.headerData}
          onUpdateForm={updateHeaderForm}
        />

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-center">CLINICAL BIOCHEMISTRY</h3>
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
                  <td className="px-4 py-2">
                    <div className="text-sm">Beta Human Chorionic Gonadotropin Hormone</div>
                    <div className="text-xs text-gray-500">(Method: Spectrophotometry)</div>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bhcgTest.result}
                      onChange={(e) => updateBhcgTest('result', e.target.value)}
                      className="input-field"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bhcgTest.unit}
                      disabled
                      className="input-field bg-gray-50"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={formData.bhcgTest.referenceRange}
                      disabled
                      className="input-field bg-gray-50"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <SignatureFields
            label="Evaluated by:"
            value={formData.evaluatedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, evaluatedBy: value }))}
          />
        </div>
      </div>
    </div>
  );
};