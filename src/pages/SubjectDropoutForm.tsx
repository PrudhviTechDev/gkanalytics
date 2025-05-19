import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface DropoutReason {
  srNo: string;
  reason: string;
  tick: boolean;
}

export const SubjectDropoutForm = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    sopNumber: 'CL-021',
    projectStudyNo: '',
    subjectNo: '',
    periodNo: '',
    date: '',
    reasons: [
      { srNo: '1.', reason: 'Did not report for check-in', tick: false },
      { srNo: '2.', reason: 'Others (specify):', tick: false }
    ] as DropoutReason[],
    comments: '',
    isEligible: null as boolean | null,
    compensationRecommendation: {
      asPerSOP: false,
      protocolRecommendation: false
    },
    doneBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    checkedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const updateReason = (index: number, field: keyof DropoutReason, value: any) => {
    setFormData(prev => ({
      ...prev,
      reasons: prev.reasons.map((reason, i) => 
        i === index ? { ...reason, [field]: value } : reason
      )
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Clians</h1>
            <div className="mt-2">
              <span className="text-sm font-medium">SOP NUMBER: </span>
              <span className="text-sm">{formData.sopNumber}</span>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">SUBJECT DROPOUT FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <FormField
            label="Project/Study No.:"
            value={formData.projectStudyNo}
            onChange={(value) => setFormData(prev => ({ ...prev, projectStudyNo: value }))}
          />
          <FormField
            label="Subject No.:"
            value={formData.subjectNo}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNo: value }))}
          />
          <FormField
            label="Period No.:"
            value={formData.periodNo}
            onChange={(value) => setFormData(prev => ({ ...prev, periodNo: value }))}
          />
          <FormField
            label="Date:"
            type="date"
            value={formData.date}
            onChange={(value) => setFormData(prev => ({ ...prev, date: value }))}
          />
        </div>

        <div className="space-y-4">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left border-r border-gray-300">Sr. No</th>
                <th className="px-4 py-2 text-left border-r border-gray-300">Reason</th>
                <th className="px-4 py-2 text-center">Tick (✓)</th>
              </tr>
            </thead>
            <tbody>
              {formData.reasons.map((reason, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="px-4 py-2 border-r border-gray-300">{reason.srNo}</td>
                  <td className="px-4 py-2 border-r border-gray-300">
                    <div className="flex items-center gap-2">
                      <span>{reason.reason}</span>
                      {index === 1 && (
                        <input
                          type="text"
                          className="flex-1 p-1 border rounded"
                          placeholder="Specify other reason"
                          disabled={!reason.tick}
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={reason.tick}
                      onChange={(e) => updateReason(index, 'tick', e.target.checked)}
                      className="form-checkbox h-4 w-4"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Comments:</label>
          <textarea
            value={formData.comments}
            onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>Is the subject is eligible to participate in the subsequent Period(s)</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.isEligible === true}
                  onChange={() => setFormData(prev => ({ ...prev, isEligible: true }))}
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.isEligible === false}
                  onChange={() => setFormData(prev => ({ ...prev, isEligible: false }))}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.isEligible === null}
                  onChange={() => setFormData(prev => ({ ...prev, isEligible: null }))}
                  className="form-radio"
                />
                <span className="ml-2">NA</span>
              </label>
            </div>
          </div>

          <div className="border border-gray-300">
            <div className="px-4 py-2 border-b border-gray-300">
              <span className="font-medium">Compensation recommended tick (✓) the applicable</span>
            </div>
            <div className="p-4 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.compensationRecommendation.asPerSOP}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    compensationRecommendation: {
                      ...prev.compensationRecommendation,
                      asPerSOP: e.target.checked
                    }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">As per SOP</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.compensationRecommendation.protocolRecommendation}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    compensationRecommendation: {
                      ...prev.compensationRecommendation,
                      protocolRecommendation: e.target.checked
                    }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Protocol Recommendation</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <SignatureFields
            label="Done By"
            value={formData.doneBy}
            onChange={(value) => setFormData(prev => ({ ...prev, doneBy: value }))}
          />
          <SignatureFields
            label="Checked By"
            value={formData.checkedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, checkedBy: value }))}
          />
        </div>
      </div>
    </div>
  );
};