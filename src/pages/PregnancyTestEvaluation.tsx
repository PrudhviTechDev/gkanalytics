import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

export const PregnancyTestEvaluation = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    projectNo: '',
    periodNo: '',
    date: '',
    serumTest: {
      applicable: null as boolean | null,
      collectionTime: '',
      volume: '',
      collectedBy: '',
      result: null as boolean | null,
    },
    urineTest: {
      applicable: null as boolean | null,
      volume: '',
      receivedTime: '',
      receivedBy: '',
      resultTime: '',
      result: null as boolean | null,
      doneBy: '',
    },
    eligibleForCheckin: null as boolean | null,
    remarks: '',
    evaluatedBy: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">SCREENING PREGNANCY TEST EVALUATION FORM</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 1 of 1</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <FormField
            label="Project No."
            value={formData.projectNo}
            onChange={(value) => updateForm('projectNo', value)}
          />
          <FormField
            label="Period No."
            value={formData.periodNo}
            onChange={(value) => updateForm('periodNo', value)}
          />
          <FormField
            label="Date"
            type="date"
            value={formData.date}
            onChange={(value) => updateForm('date', value)}
            required
          />
        </div>

        <FormField
          label="Volunteer ID/Subject No."
          value={volunteerId}
          onChange={() => {}}
          disabled
        />

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-4">SERUM β-HCG PREGNANCY TEST</h3>
            <div className="space-y-4">
              <div className="flex gap-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.serumTest.applicable === true}
                    onChange={() => updateSerumTest('applicable', true)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Applicable</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.serumTest.applicable === false}
                    onChange={() => updateSerumTest('applicable', false)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Not Applicable</span>
                </label>
              </div>

              {formData.serumTest.applicable && (
                <div className="space-y-4">
                  <FormField
                    label="Sample collection Time (Hrs.)"
                    type="time"
                    value={formData.serumTest.collectionTime}
                    onChange={(value) => updateSerumTest('collectionTime', value)}
                  />
                  <FormField
                    label="Volume of sample collection (mL)"
                    type="number"
                    value={formData.serumTest.volume}
                    onChange={(value) => updateSerumTest('volume', value)}
                  />
                  <FormField
                    label="Collected by (Sign & Date)"
                    value={formData.serumTest.collectedBy}
                    onChange={(value) => updateSerumTest('collectedBy', value)}
                  />
                  <div className="flex gap-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.serumTest.result === true}
                        onChange={() => updateSerumTest('result', true)}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Positive</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.serumTest.result === false}
                        onChange={() => updateSerumTest('result', false)}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Negative</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-4">URINE SAMPLE COLLECTION</h3>
            <div className="space-y-4">
              <div className="flex gap-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.urineTest.applicable === true}
                    onChange={() => updateUrineTest('applicable', true)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Applicable</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.urineTest.applicable === false}
                    onChange={() => updateUrineTest('applicable', false)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Not Applicable</span>
                </label>
              </div>

              {formData.urineTest.applicable && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      label="Volume (approximately 15-20 mL)"
                      type="number"
                      value={formData.urineTest.volume}
                      onChange={(value) => updateUrineTest('volume', value)}
                    />
                    <FormField
                      label="Received Time (Hrs.)"
                      type="time"
                      value={formData.urineTest.receivedTime}
                      onChange={(value) => updateUrineTest('receivedTime', value)}
                    />
                    <FormField
                      label="Received by (Sign & Date)"
                      value={formData.urineTest.receivedBy}
                      onChange={(value) => updateUrineTest('receivedBy', value)}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      label="Result Time (Hrs.)"
                      type="time"
                      value={formData.urineTest.resultTime}
                      onChange={(value) => updateUrineTest('resultTime', value)}
                    />
                    <div className="flex gap-6 items-center">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          checked={formData.urineTest.result === true}
                          onChange={() => updateUrineTest('result', true)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">Positive</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          checked={formData.urineTest.result === false}
                          onChange={() => updateUrineTest('result', false)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">Negative</span>
                      </label>
                    </div>
                    <FormField
                      label="Done by (Sign & Date)"
                      value={formData.urineTest.doneBy}
                      onChange={(value) => updateUrineTest('doneBy', value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-6">
            <span className="text-sm font-medium">Eligible for check-in:</span>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.eligibleForCheckin === true}
                onChange={() => updateForm('eligibleForCheckin', true)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.eligibleForCheckin === false}
                onChange={() => updateForm('eligibleForCheckin', false)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>

          <FormField
            label="Remarks"
            value={formData.remarks}
            onChange={(value) => updateForm('remarks', value)}
          />

          <FormField
            label="Evaluated by (Sign & Date)"
            value={formData.evaluatedBy}
            onChange={(value) => updateForm('evaluatedBy', value)}
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};