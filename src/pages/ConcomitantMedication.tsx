import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface MedicationEntry {
  brandName: string;
  drugName: string;
  batchLotNo: string;
  expiryDate: string;
  dosageFormStrength: string;
  routeOfAdmin: string;
  medicationGiven: {
    date: string;
    time: string;
  };
  givenBy: SignatureData;
}

export const ConcomitantMedication = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    sopNumber: 'CL-020',
    projectStudyNo: '',
    subjectNo: '',
    period: {
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      washout: false,
      postStudy: false
    },
    otherPeriod: '',
    medications: [] as MedicationEntry[],
    lastBloodSampleTime: '',
    checkedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const addMedication = () => {
    setFormData(prev => ({
      ...prev,
      medications: [
        ...prev.medications,
        {
          brandName: '',
          drugName: '',
          batchLotNo: '',
          expiryDate: '',
          dosageFormStrength: '',
          routeOfAdmin: '',
          medicationGiven: {
            date: '',
            time: ''
          },
          givenBy: {
            name: '',
            date: '',
            time: ''
          }
        }
      ]
    }));
  };

  const updateMedication = (index: number, field: keyof MedicationEntry | 'medicationGivenDate' | 'medicationGivenTime', value: any) => {
    setFormData(prev => ({
      ...prev,
      medications: prev.medications.map((med, i) => {
        if (i !== index) return med;
        
        if (field === 'medicationGivenDate') {
          return {
            ...med,
            medicationGiven: {
              ...med.medicationGiven,
              date: value
            }
          };
        }
        
        if (field === 'medicationGivenTime') {
          return {
            ...med,
            medicationGiven: {
              ...med.medicationGiven,
              time: value
            }
          };
        }
        
        return {
          ...med,
          [field]: value
        };
      })
    }));
  };

  const updateGivenBy = (index: number, value: SignatureData) => {
    setFormData(prev => ({
      ...prev,
      medications: prev.medications.map((item, i) =>
        i === index ? { ...item, givenBy: value } : item
      )
    }));
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
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
            <h2 className="text-xl font-bold">CONCOMITANT MEDICATION FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Project No./Study No.:"
            value={formData.projectStudyNo}
            onChange={(value) => setFormData(prev => ({ ...prev, projectStudyNo: value }))}
          />
          <FormField
            label="Subject No.:"
            value={formData.subjectNo}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNo: value }))}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Period No.:</label>
          <div className="flex flex-wrap gap-4">
            {[
              { key: 'p1', label: '01' },
              { key: 'p2', label: '02' },
              { key: 'p3', label: '03' },
              { key: 'p4', label: '04' },
              { key: 'washout', label: 'Wash out Period' },
              { key: 'postStudy', label: 'Post study' }
            ].map(({ key, label }) => (
              <label key={key} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.period[key as keyof typeof formData.period]}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    period: {
                      ...prev.period,
                      [key]: e.target.checked
                    }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">{label}</span>
              </label>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm">If Other (specify):</span>
            <input
              type="text"
              value={formData.otherPeriod}
              onChange={(e) => setFormData(prev => ({ ...prev, otherPeriod: e.target.value }))}
              className="flex-1 p-2 border rounded"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Medication Details:</h3>
            <button
              type="button"
              onClick={addMedication}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Medication
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left border-r">Brand Name</th>
                  <th className="px-4 py-2 text-left border-r">Drug name</th>
                  <th className="px-4 py-2 text-left border-r">Batch/ Lot No.</th>
                  <th className="px-4 py-2 text-left border-r">Expiry date</th>
                  <th className="px-4 py-2 text-left border-r">Dosage form & Strength</th>
                  <th className="px-4 py-2 text-left border-r">Route of administration</th>
                  <th className="px-4 py-2 text-left border-r">Medication given</th>
                  <th className="px-4 py-2 text-left">Given by</th>
                </tr>
              </thead>
              <tbody>
                {formData.medications.map((med, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={med.brandName}
                        onChange={(e) => updateMedication(index, 'brandName', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={med.drugName}
                        onChange={(e) => updateMedication(index, 'drugName', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={med.batchLotNo}
                        onChange={(e) => updateMedication(index, 'batchLotNo', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="date"
                        value={med.expiryDate}
                        onChange={(e) => updateMedication(index, 'expiryDate', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={med.dosageFormStrength}
                        onChange={(e) => updateMedication(index, 'dosageFormStrength', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={med.routeOfAdmin}
                        onChange={(e) => updateMedication(index, 'routeOfAdmin', e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="w-12 text-sm">Date:</span>
                          <input
                            type="date"
                            value={med.medicationGiven.date}
                            onChange={(e) => updateMedication(index, 'medicationGivenDate', e.target.value)}
                            className="flex-1 p-2 border rounded"
                          />
                        </div>
                        <div className="flex items-center">
                          <span className="w-12 text-sm">Time:</span>
                          <input
                            type="time"
                            value={med.medicationGiven.time}
                            onChange={(e) => updateMedication(index, 'medicationGivenTime', e.target.value)}
                            className="flex-1 p-2 border rounded"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <SignatureFields
                        value={med.givenBy}
                        onChange={(value) => updateGivenBy(index, value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>If subject withdraws from the study, mentioned the last blood sample collection time point:</span>
            <input
              type="text"
              value={formData.lastBloodSampleTime}
              onChange={(e) => setFormData(prev => ({ ...prev, lastBloodSampleTime: e.target.value }))}
              className="w-48 p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <SignatureFields
              label="Checked by PI/CI/Physician:"
              value={formData.checkedBy}
              onChange={(value) => setFormData(prev => ({ ...prev, checkedBy: value }))}
            />
          </div>
        </div>

        <div className="text-sm text-gray-500">CL-020-F-003-07</div>
      </div>
    </div>
  );
};