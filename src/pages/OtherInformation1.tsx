import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const OtherInformation1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '1',
    otherInformation: '',
    recordedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    verifiedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Clians</h1>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">STUDY CASE REPORT FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2">
            <span className="font-medium">Study No.:</span>
            <span>{formData.studyNo}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium">Period No.:</span>
            <span>{formData.periodNo}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold">ANY OTHER INFORMATION:</h3>
          <textarea
            value={formData.otherInformation}
            onChange={(e) => setFormData(prev => ({ ...prev, otherInformation: e.target.value }))}
            className="w-full p-2 border rounded min-h-[200px]"
            placeholder="Enter any additional information here..."
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <SignatureFields
            label="Recorded By:"
            value={formData.recordedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, recordedBy: value }))}
          />
          <SignatureFields
            label="Verified By:"
            value={formData.verifiedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, verifiedBy: value }))}
          />
        </div>
      </div>
    </div>
  );
};