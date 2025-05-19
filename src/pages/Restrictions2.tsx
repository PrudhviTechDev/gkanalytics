import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const Restrictions2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '2',
    subjectNumber: '',
    preDose: {
      fastingCondition: null as boolean | null,
      waterRestriction: null as boolean | null,
      eligibleForDosing: null as boolean | null,
      comments: '',
      evaluatedBy: {
        name: '',
        date: '',
        time: ''
      } as SignatureData
    },
    postDose: {
      waterRestriction: null as boolean | null,
      sittingPosition: null as boolean | null,
      fastingCondition: null as boolean | null,
      comments: '',
      evaluatedBy: {
        name: '',
        date: '',
        time: ''
      } as SignatureData
    }
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
          <h3 className="text-lg font-bold mb-4">Section-V: PRE-DOSE AND POST-DOSE RESTRICTIONS FORM</h3>
          
          <FormField
            label="Subject Number:"
            value={formData.subjectNumber}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
          />

          <div className="mt-8 space-y-8">
            {/* Pre-Dose Restrictions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Pre-Dose Restrictions</h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Is subject maintained fasting condition at least 10.0 hours before serving of high fat high calorie meal?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.fastingCondition === true}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          preDose: { ...prev.preDose, fastingCondition: true }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.fastingCondition === false}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          preDose: { ...prev.preDose, fastingCondition: false }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Water restriction for one hour before dosing was maintained</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.waterRestriction === true}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          preDose: { ...prev.preDose, waterRestriction: true }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.waterRestriction === false}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          preDose: { ...prev.preDose, waterRestriction: false }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject is eligible for dosing</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.eligibleForDosing === true}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          preDose: { ...prev.preDose, eligibleForDosing: true }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.eligibleForDosing === false}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          preDose: { ...prev.preDose, eligibleForDosing: false }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Comments (if any):</label>
                  <textarea
                    value={formData.preDose.comments}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      preDose: { ...prev.preDose, comments: e.target.value }
                    }))}
                    className="w-full p-2 border rounded"
                    rows={2}
                  />
                </div>

                <SignatureFields
                  label="Evaluated By (sign & date):"
                  value={formData.preDose.evaluatedBy}
                  onChange={(value) => setFormData(prev => ({
                    ...prev,
                    preDose: { ...prev.preDose, evaluatedBy: value }
                  }))}
                />
                <div className="text-sm text-gray-500 text-center">(Coordinator/Designee)</div>
              </div>
            </div>

            {/* Post-Dose Restrictions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Post-Dose Restrictions</h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">1.0 hour post-dose water restriction maintained</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.postDose.waterRestriction === true}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          postDose: { ...prev.postDose, waterRestriction: true }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.postDose.waterRestriction === false}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          postDose: { ...prev.postDose, waterRestriction: false }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Sitting position maintained for initial 04 hours</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.postDose.sittingPosition === true}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          postDose: { ...prev.postDose, sittingPosition: true }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.postDose.sittingPosition === false}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          postDose: { ...prev.postDose, sittingPosition: false }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Is subject maintained fasting condition at least 04 hours post dose?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.postDose.fastingCondition === true}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          postDose: { ...prev.postDose, fastingCondition: true }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.postDose.fastingCondition === false}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          postDose: { ...prev.postDose, fastingCondition: false }
                        }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Comments (if any):</label>
                  <textarea
                    value={formData.postDose.comments}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      postDose: { ...prev.postDose, comments: e.target.value }
                    }))}
                    className="w-full p-2 border rounded"
                    rows={2}
                  />
                </div>

                <SignatureFields
                  label="Evaluated By (sign & date):"
                  value={formData.postDose.evaluatedBy}
                  onChange={(value) => setFormData(prev => ({
                    ...prev,
                    postDose: { ...prev.postDose, evaluatedBy: value }
                  }))}
                />
                <div className="text-sm text-gray-500 text-center">(Coordinator/Designee)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};