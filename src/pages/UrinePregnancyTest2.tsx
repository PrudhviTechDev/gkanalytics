import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const UrinePregnancyTest2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    sopNumber: 'CL-013',
    projectNo: '',
    periodNo: '',
    date: '',
    serumTest: {
      applicable: null as boolean | null,
      collectionTime: '',
      volume: '',
      collectedBy: {
        name: '',
        date: '',
        time: '',
      } as SignatureData,
      comments: '',
      result: null as boolean | null,
    },
    urineTest: {
      applicable: null as boolean | null,
      volume: '',
      receivedTime: '',
      receivedBy: {
        name: '',
        date: '',
        time: '',
      } as SignatureData,
      applicable2: null as boolean | null,
      resultTime: '',
      result: null as boolean | null,
      doneBy: {
        name: '',
        date: '',
        time: '',
      } as SignatureData,
    },
    eligibleForCheckin: null as boolean | null,
    remarks: '',
    evaluatedBy: {
      name: '',
      date: '',
      time: '',
    } as SignatureData,
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateSerumTest = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      serumTest: {
        ...prev.serumTest,
        [field]: value
      }
    }));
  };

  const updateUrineTest = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      urineTest: {
        ...prev.urineTest,
        [field]: value
      }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <div className="grid grid-cols-3">
          <div className="col-span-1 border-r border-gray-300 pr-4">
            <h1 className="text-2xl font-bold">Clians</h1>
          </div>
          <div className="col-span-2 text-center">
            <h2 className="text-lg font-bold">URINE PREGNANCY TEST / SERUM β-HCG</h2>
            <h2 className="text-lg font-bold">PREGNANCY TEST</h2>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-300 pt-2">
          <div className="grid grid-cols-2">
            <div className="text-sm font-medium">SOP NUMBER</div>
            <div className="text-sm">{formData.sopNumber}</div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="space-y-4">
        {/* Project Details */}
        <div className="grid grid-cols-3 gap-4 border-b border-gray-300 pb-4">
          <FormField
            label="Project No.:"
            value={formData.projectNo}
            onChange={(value) => updateForm('projectNo', value)}
          />
          <FormField
            label="Period No.:"
            value={formData.periodNo}
            onChange={(value) => updateForm('periodNo', value)}
          />
          <FormField
            label="Date:"
            type="date"
            value={formData.date}
            onChange={(value) => updateForm('date', value)}
          />
        </div>

        <FormField
          label="Volunteer ID/Subject No.:"
          value={volunteerId}
          onChange={() => {}}
          disabled
          className="border-b border-gray-300 pb-4"
        />

        {/* Serum Test Section */}
        <div className="border-b border-gray-300 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">SERUM β-HCG PREGNANCY TEST:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.serumTest.applicable === true}
                  onChange={() => updateSerumTest('applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.serumTest.applicable === false}
                  onChange={() => updateSerumTest('applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <FormField
              label="Sample collection Time (Hrs):"
              type="time"
              value={formData.serumTest.collectionTime}
              onChange={(value) => updateSerumTest('collectionTime', value)}
            />
            <FormField
              label="Volume of sample collection (mL):"
              type="number"
              value={formData.serumTest.volume}
              onChange={(value) => updateSerumTest('volume', value)}
            />
            <SignatureFields
              label="Collected by:"
              value={formData.serumTest.collectedBy}
              onChange={(value) => updateSerumTest('collectedBy', value)}
            />
            <FormField
              label="Comments:"
              value={formData.serumTest.comments}
              onChange={(value) => updateSerumTest('comments', value)}
            />
            <div className="flex items-center gap-8">
              <span className="font-medium">Test Result:</span>
              <div className="flex gap-8">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.serumTest.result === true}
                    onChange={() => updateSerumTest('result', true)}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">Positive</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.serumTest.result === false}
                    onChange={() => updateSerumTest('result', false)}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">Negative</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Urine Sample Collection */}
        <div className="border-b border-gray-300 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">URINE SAMPLE COLLECTION:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineTest.applicable === true}
                  onChange={() => updateUrineTest('applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineTest.applicable === false}
                  onChange={() => updateUrineTest('applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <FormField
              label="Volume (approximately 15-20 mL)"
              type="number"
              value={formData.urineTest.volume}
              onChange={(value) => updateUrineTest('volume', value)}
            />
            <FormField
              label="Received Time (Hrs.):"
              type="time"
              value={formData.urineTest.receivedTime}
              onChange={(value) => updateUrineTest('receivedTime', value)}
            />
            <SignatureFields
              label="Received by:"
              value={formData.urineTest.receivedBy}
              onChange={(value) => updateUrineTest('receivedBy', value)}
            />
          </div>
        </div>

        {/* Urine Pregnancy Test */}
        <div className="border-b border-gray-300 pb-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">URINE PREGNANCY TEST:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineTest.applicable2 === true}
                  onChange={() => updateUrineTest('applicable2', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineTest.applicable2 === false}
                  onChange={() => updateUrineTest('applicable2', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <FormField
              label="Result Time (Hrs):"
              type="time"
              value={formData.urineTest.resultTime}
              onChange={(value) => updateUrineTest('resultTime', value)}
            />
            <div className="space-y-2">
              <span className="block text-sm font-medium text-gray-700">Test Result</span>
              <div className="flex gap-8">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.urineTest.result === true}
                    onChange={() => updateUrineTest('result', true)}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">Positive</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.urineTest.result === false}
                    onChange={() => updateUrineTest('result', false)}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">Negative</span>
                </label>
              </div>
            </div>
            <SignatureFields
              label="Done by:"
              value={formData.urineTest.doneBy}
              onChange={(value) => updateUrineTest('doneBy', value)}
            />
          </div>
        </div>

        {/* Final Section */}
        <div className="space-y-4">
          <p className="text-sm text-gray-600">(Tick (✓) the appropriate)</p>
          <div className="flex items-center gap-8">
            <span className="font-medium">Eligible for check-in:</span>
            <div className="flex gap-8">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.eligibleForCheckin === true}
                  onChange={() => updateForm('eligibleForCheckin', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.eligibleForCheckin === false}
                  onChange={() => updateForm('eligibleForCheckin', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <FormField
            label="Remarks:"
            value={formData.remarks}
            onChange={(value) => updateForm('remarks', value)}
          />

          <SignatureFields
            label="Evaluated by:"
            value={formData.evaluatedBy}
            onChange={(value) => updateForm('evaluatedBy', value)}
          />
        </div>
      </div>
    </div>
  );
};