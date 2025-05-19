import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const SubjectCheckOut2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '2',
    subjectNumber: '',
    feelingWell: null as boolean | null,
    followRestrictions: {
      value: null as boolean | null,
      na: false
    },
    comeForSubsequentPeriod: {
      value: null as boolean | null,
      na: false
    },
    checkOutTime: '',
    subjectSignature: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    comments: '',
    checkOutDoneBy: {
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
          <h3 className="text-lg font-bold mb-4">Section-VII: SUBJECT CHECK-OUT FORM</h3>
          
          <div className="space-y-4">
            <FormField
              label="Subject Number:"
              value={formData.subjectNumber}
              onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium">Does the subject feeling well during check out</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.feelingWell === true}
                    onChange={() => setFormData(prev => ({ ...prev, feelingWell: true }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.feelingWell === false}
                    onChange={() => setFormData(prev => ({ ...prev, feelingWell: false }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Is the subject instructed to follow the restrictions as per the protocol</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.followRestrictions.value === true}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      followRestrictions: { value: true, na: false }
                    }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.followRestrictions.value === false}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      followRestrictions: { value: false, na: false }
                    }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.followRestrictions.na}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      followRestrictions: { value: null, na: true }
                    }))}
                    className="form-radio"
                  />
                  <span className="ml-2">NA</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Is the subject instructed to come for subsequent period visit?</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.comeForSubsequentPeriod.value === true}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      comeForSubsequentPeriod: { value: true, na: false }
                    }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.comeForSubsequentPeriod.value === false}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      comeForSubsequentPeriod: { value: false, na: false }
                    }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.comeForSubsequentPeriod.na}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      comeForSubsequentPeriod: { value: null, na: true }
                    }))}
                    className="form-radio"
                  />
                  <span className="ml-2">NA</span>
                </label>
              </div>
            </div>

            <FormField
              label="Check out Time:"
              type="time"
              value={formData.checkOutTime}
              onChange={(value) => setFormData(prev => ({ ...prev, checkOutTime: value }))}
            />

            <SignatureFields
              label="Subject (Sign & Date):"
              value={formData.subjectSignature}
              onChange={(value) => setFormData(prev => ({ ...prev, subjectSignature: value }))}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium">Comments (if any):</label>
              <textarea
                value={formData.comments}
                onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <SignatureFields
              label="Check-out Done By (Sign & Date):"
              value={formData.checkOutDoneBy}
              onChange={(value) => setFormData(prev => ({ ...prev, checkOutDoneBy: value }))}
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