import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const SubjectCheckIn1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '1',
    subjectNumber: '',
    checkInDate: '',
    checkInTime: '',
    subjectDetails: {
      idCardVerified: null as boolean | null,
      wristBandApplied: null as boolean | null,
      personalBelongings: null as boolean | null,
      informedAboutRestrictions: null as boolean | null,
      informedAboutAdverseEvents: null as boolean | null,
      informedAboutEmergencyProcedures: null as boolean | null,
      comments: ''
    },
    subjectSignature: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    checkInDoneBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    reviewedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const updateSubjectDetails = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      subjectDetails: {
        ...prev.subjectDetails,
        [field]: value
      }
    }));
  };

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

        <div className="border-t border-b py-4">
          <h3 className="text-lg font-bold mb-4">Section-I: SUBJECT CHECK-IN FORM</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <FormField
                label="Subject Number:"
                value={formData.subjectNumber}
                onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
              />
              <FormField
                label="Check-in Date:"
                type="date"
                value={formData.checkInDate}
                onChange={(value) => setFormData(prev => ({ ...prev, checkInDate: value }))}
              />
              <FormField
                label="Check-in Time:"
                type="time"
                value={formData.checkInTime}
                onChange={(value) => setFormData(prev => ({ ...prev, checkInTime: value }))}
              />
            </div>

            <div className="space-y-4 border p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject ID card verified</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.idCardVerified === true}
                        onChange={() => updateSubjectDetails('idCardVerified', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.idCardVerified === false}
                        onChange={() => updateSubjectDetails('idCardVerified', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Wrist band applied</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.wristBandApplied === true}
                        onChange={() => updateSubjectDetails('wristBandApplied', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.wristBandApplied === false}
                        onChange={() => updateSubjectDetails('wristBandApplied', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Personal belongings kept in locker</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.personalBelongings === true}
                        onChange={() => updateSubjectDetails('personalBelongings', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.personalBelongings === false}
                        onChange={() => updateSubjectDetails('personalBelongings', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject informed about restrictions as per protocol</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.informedAboutRestrictions === true}
                        onChange={() => updateSubjectDetails('informedAboutRestrictions', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.informedAboutRestrictions === false}
                        onChange={() => updateSubjectDetails('informedAboutRestrictions', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject informed about adverse events reporting</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.informedAboutAdverseEvents === true}
                        onChange={() => updateSubjectDetails('informedAboutAdverseEvents', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.informedAboutAdverseEvents === false}
                        onChange={() => updateSubjectDetails('informedAboutAdverseEvents', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject informed about emergency procedures</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.informedAboutEmergencyProcedures === true}
                        onChange={() => updateSubjectDetails('informedAboutEmergencyProcedures', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectDetails.informedAboutEmergencyProcedures === false}
                        onChange={() => updateSubjectDetails('informedAboutEmergencyProcedures', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Comments (if any):</label>
                <textarea
                  value={formData.subjectDetails.comments}
                  onChange={(e) => updateSubjectDetails('comments', e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>
            </div>

            <SignatureFields
              label="Subject (Sign & Date):"
              value={formData.subjectSignature}
              onChange={(value) => setFormData(prev => ({ ...prev, subjectSignature: value }))}
            />

            <SignatureFields
              label="Check-in Done By (Sign & Date):"
              value={formData.checkInDoneBy}
              onChange={(value) => setFormData(prev => ({ ...prev, checkInDoneBy: value }))}
            />

            <div className="border-t pt-4">
              <SignatureFields
                label="Reviewed By (Coordinator/Designee):"
                value={formData.reviewedBy}
                onChange={(value) => setFormData(prev => ({ ...prev, reviewedBy: value }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};