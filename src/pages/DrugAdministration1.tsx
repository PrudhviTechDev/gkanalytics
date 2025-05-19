import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const DrugAdministration1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '1',
    subjectNumber: '',
    dosingDate: '',
    lightCondition: 'Normal light',
    randomizationCode: '',
    noOfUnits: '',
    dosageForm: 'Tablets',
    subjectIdVerified: null as boolean | null,
    dosingProcedureExplained: null as boolean | null,
    difficultySwallowing: null as boolean | null,
    scheduledTime: '',
    actualTime: '',
    waterConsumed: null as boolean | null,
    medicationSwallowed: null as boolean | null,
    mouthCheckPerformed: null as boolean | null,
    ipLabel: '',
    comments: '',
    administeredBy: {
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

        <div className="border-t border-b py-4">
          <h3 className="text-lg font-bold mb-4">Section-VI: DRUG ADMINISTRATION FORM</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Subject Number:"
                value={formData.subjectNumber}
                onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
              />
              <FormField
                label="Dosing Date:"
                type="date"
                value={formData.dosingDate}
                onChange={(value) => setFormData(prev => ({ ...prev, dosingDate: value }))}
              />
            </div>

            <FormField
              label="Light condition:"
              value={formData.lightCondition}
              onChange={(value) => setFormData(prev => ({ ...prev, lightCondition: value }))}
              disabled
            />

            <div className="grid grid-cols-3 gap-4">
              <FormField
                label="Randomization code:"
                value={formData.randomizationCode}
                onChange={(value) => setFormData(prev => ({ ...prev, randomizationCode: value }))}
              />
              <FormField
                label="No. of Units:"
                value={formData.noOfUnits}
                onChange={(value) => setFormData(prev => ({ ...prev, noOfUnits: value }))}
              />
              <FormField
                label="Dosage Form:"
                value={formData.dosageForm}
                onChange={(value) => setFormData(prev => ({ ...prev, dosageForm: value }))}
                disabled
              />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject ID card & wrist band verified</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectIdVerified === true}
                        onChange={() => setFormData(prev => ({ ...prev, subjectIdVerified: true }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.subjectIdVerified === false}
                        onChange={() => setFormData(prev => ({ ...prev, subjectIdVerified: false }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Dosing procedure explained to the subject as per protocol</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.dosingProcedureExplained === true}
                        onChange={() => setFormData(prev => ({ ...prev, dosingProcedureExplained: true }))}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.dosingProcedureExplained === false}
                        onChange={() => setFormData(prev => ({ ...prev, dosingProcedureExplained: false }))}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Is there any difficulty to swallow the investigational product?</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.difficultySwallowing === true}
                      onChange={() => setFormData(prev => ({ ...prev, difficultySwallowing: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.difficultySwallowing === false}
                      onChange={() => setFormData(prev => ({ ...prev, difficultySwallowing: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Scheduled time (hr: min)"
                type="time"
                value={formData.scheduledTime}
                onChange={(value) => setFormData(prev => ({ ...prev, scheduledTime: value }))}
              />
              <FormField
                label="Actual Time (hr: min)"
                type="time"
                value={formData.actualTime}
                onChange={(value) => setFormData(prev => ({ ...prev, actualTime: value }))}
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Water consumed as per protocol</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.waterConsumed === true}
                      onChange={() => setFormData(prev => ({ ...prev, waterConsumed: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.waterConsumed === false}
                      onChange={() => setFormData(prev => ({ ...prev, waterConsumed: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Study medication swallowed</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.medicationSwallowed === true}
                      onChange={() => setFormData(prev => ({ ...prev, medicationSwallowed: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.medicationSwallowed === false}
                      onChange={() => setFormData(prev => ({ ...prev, medicationSwallowed: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Mouth check Performed after Dosing</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.mouthCheckPerformed === true}
                      onChange={() => setFormData(prev => ({ ...prev, mouthCheckPerformed: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.mouthCheckPerformed === false}
                      onChange={() => setFormData(prev => ({ ...prev, mouthCheckPerformed: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">IP Label (Affix Here):</label>
              <textarea
                value={formData.ipLabel}
                onChange={(e) => setFormData(prev => ({ ...prev, ipLabel: e.target.value }))}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Comments (if any):</label>
              <textarea
                value={formData.comments}
                onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <SignatureFields
                label="Administrated By (Sign & Date):"
                value={formData.administeredBy}
                onChange={(value) => setFormData(prev => ({ ...prev, administeredBy: value }))}
              />
              <SignatureFields
                label="Verified by (PI/CI/Physician):"
                value={formData.verifiedBy}
                onChange={(value) => setFormData(prev => ({ ...prev, verifiedBy: value }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};