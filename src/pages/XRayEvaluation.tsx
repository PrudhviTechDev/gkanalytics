import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface ChestXRayItem {
  description: string;
  normal: boolean;
  abnormal: boolean;
}

export const XRayEvaluation = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    xrayDoneDate: '',
    xrayType: '',
    chestXRayItems: [
      { description: 'The cardio thoracic ratio angle', normal: false, abnormal: false },
      { description: 'The heart size and configuration', normal: false, abnormal: false },
      { description: 'Aortic Arch', normal: false, abnormal: false },
      { description: 'Broncho vascular markings', normal: false, abnormal: false },
      { description: 'Both pulmonary hila are normal in size', normal: false, abnormal: false },
      { description: 'Costophrenic and cardio phrenic recesses', normal: false, abnormal: false },
      { description: 'Dome of diaphragm', normal: false, abnormal: false },
      { description: 'The bone and soft tissue of chest wall', normal: false, abnormal: false },
    ],
    others: '',
    impression: '',
    abnormalityDetails: '',
    radiologistStamp: '',
    signDate: '',
    internalAssessment: '',
    remarks: '',
    verifiedBy: '',
    xrayValidity: '',
    documentedBy: '',
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateChestXRayItem = (index: number, field: keyof ChestXRayItem, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      chestXRayItems: prev.chestXRayItems.map((item, i) => 
        i === index ? { 
          ...item, 
          [field]: value,
          [field === 'normal' ? 'abnormal' : 'normal']: false 
        } : item
      )
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
            <h2 className="text-xl font-bold uppercase">X-Ray Evaluation Report</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 1 of 1</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Volunteer ID"
            value={volunteerId}
            onChange={() => {}}
            disabled
          />
          <FormField
            label="X-ray Done Date"
            type="date"
            value={formData.xrayDoneDate}
            onChange={(value) => updateForm('xrayDoneDate', value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">X-ray taken:</label>
          <div className="flex gap-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Internal"
                checked={formData.xrayType === 'Internal'}
                onChange={(e) => updateForm('xrayType', e.target.value)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Internal</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="External"
                checked={formData.xrayType === 'External'}
                onChange={(e) => updateForm('xrayType', e.target.value)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">External</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Chest X-ray PA View</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-center">Normal</th>
                <th className="px-4 py-2 text-center">Abnormal</th>
              </tr>
            </thead>
            <tbody>
              {formData.chestXRayItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{index + 1}. {item.description}</td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={item.normal}
                      onChange={(e) => updateChestXRayItem(index, 'normal', e.target.checked)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={item.abnormal}
                      onChange={(e) => updateChestXRayItem(index, 'abnormal', e.target.checked)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FormField
          label="Others (if any)"
          value={formData.others}
          onChange={(value) => updateForm('others', value)}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium">Impression:</label>
          <div className="flex gap-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Normal"
                checked={formData.impression === 'Normal'}
                onChange={(e) => updateForm('impression', e.target.value)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Normal</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Abnormal"
                checked={formData.impression === 'Abnormal'}
                onChange={(e) => updateForm('impression', e.target.value)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Abnormal</span>
            </label>
          </div>
        </div>

        <FormField
          label="If any abnormality (specify)"
          value={formData.abnormalityDetails}
          onChange={(value) => updateForm('abnormalityDetails', value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Radiologist stamp"
            value={formData.radiologistStamp}
            onChange={(value) => updateForm('radiologistStamp', value)}
          />
          <FormField
            label="Sign & Date"
            value={formData.signDate}
            onChange={(value) => updateForm('signDate', value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Internal physician assessment:</label>
          <div className="flex gap-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Eligible"
                checked={formData.internalAssessment === 'Eligible'}
                onChange={(e) => updateForm('internalAssessment', e.target.value)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Eligible</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Not eligible"
                checked={formData.internalAssessment === 'Not eligible'}
                onChange={(e) => updateForm('internalAssessment', e.target.value)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Not eligible</span>
            </label>
          </div>
        </div>

        <FormField
          label="Remarks"
          value={formData.remarks}
          onChange={(value) => updateForm('remarks', value)}
        />

        <FormField
          label="Verified By (Physician sign & date)"
          value={formData.verifiedBy}
          onChange={(value) => updateForm('verifiedBy', value)}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="X-ray validity till (Date)"
            type="date"
            value={formData.xrayValidity}
            onChange={(value) => updateForm('xrayValidity', value)}
          />
          <FormField
            label="Documented By (X-ray technician/Designee)"
            value={formData.documentedBy}
            onChange={(value) => updateForm('documentedBy', value)}
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