import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface VitalSignReading {
  scheduledTimePoint: string;
  scheduledTime: string;
  pulseRate: string;
  bloodPressure: string;
  subjectWellBeing: boolean | null;
  recordingTime: string;
  doneBy: SignatureData;
}

export const VitalSigns1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '1',
    subjectNumber: '',
    dosingDate: '',
    dosingTime: '',
    preDose: {
      scheduledTimePoint: 'Pre-Dose',
      scheduledTime: '',
      pulseRate: '',
      bloodPressure: '',
      subjectWellBeing: null as boolean | null,
      recordingTime: '',
      doneBy: {
        name: '',
        date: '',
        time: ''
      }
    } as VitalSignReading,
    postDose: [
      { scheduledTimePoint: '2.0', scheduledTime: '', pulseRate: '', bloodPressure: '', subjectWellBeing: null, recordingTime: '', doneBy: { name: '', date: '', time: '' } },
      { scheduledTimePoint: '5.0', scheduledTime: '', pulseRate: '', bloodPressure: '', subjectWellBeing: null, recordingTime: '', doneBy: { name: '', date: '', time: '' } },
      { scheduledTimePoint: '10.0', scheduledTime: '', pulseRate: '', bloodPressure: '', subjectWellBeing: null, recordingTime: '', doneBy: { name: '', date: '', time: '' } },
      { scheduledTimePoint: '25.0', scheduledTime: '', pulseRate: '', bloodPressure: '', subjectWellBeing: null, recordingTime: '', doneBy: { name: '', date: '', time: '' } },
      { scheduledTimePoint: 'check-out', scheduledTime: '', pulseRate: '', bloodPressure: '', subjectWellBeing: null, recordingTime: '', doneBy: { name: '', date: '', time: '' } }
    ] as VitalSignReading[],
    subjectFitForDosing: null as boolean | null,
    comments: '',
    reviewedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const updatePreDose = (field: keyof VitalSignReading, value: any) => {
    setFormData(prev => ({
      ...prev,
      preDose: {
        ...prev.preDose,
        [field]: value
      }
    }));
  };

  const updatePostDose = (index: number, field: keyof VitalSignReading, value: any) => {
    setFormData(prev => ({
      ...prev,
      postDose: prev.postDose.map((reading, i) =>
        i === index ? { ...reading, [field]: value } : reading
      )
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
          <h3 className="text-lg font-bold mb-4">Section-III: SUBJECT VITAL SIGNS AND WELL-BEING FORM</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
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
              <FormField
                label="*Dosing Time:"
                type="time"
                value={formData.dosingTime}
                onChange={(value) => setFormData(prev => ({ ...prev, dosingTime: value }))}
              />
            </div>

            {/* Pre-Dose Vitals */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-4">Pre-Dose Vitals</h4>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1">
                  <FormField
                    label="Time Point"
                    value={formData.preDose.scheduledTimePoint}
                    onChange={() => {}}
                    disabled
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    label="Scheduled Time"
                    type="time"
                    value={formData.preDose.scheduledTime}
                    onChange={(value) => updatePreDose('scheduledTime', value)}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    label="Pulse Rate (per min)"
                    value={formData.preDose.pulseRate}
                    onChange={(value) => updatePreDose('pulseRate', value)}
                  />
                </div>
                <div className="col-span-1">
                  <FormField
                    label="Blood Pressure (mm of Hg)"
                    value={formData.preDose.bloodPressure}
                    onChange={(value) => updatePreDose('bloodPressure', value)}
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1">Subject Well Being</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.subjectWellBeing === true}
                        onChange={() => updatePreDose('subjectWellBeing', true)}
                        className="form-radio"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={formData.preDose.subjectWellBeing === false}
                        onChange={() => updatePreDose('subjectWellBeing', false)}
                        className="form-radio"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                <div className="col-span-1">
                  <SignatureFields
                    label="Done By"
                    value={formData.preDose.doneBy}
                    onChange={(value) => updatePreDose('doneBy', value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">*Subject is fit for dosing:</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.subjectFitForDosing === true}
                    onChange={() => setFormData(prev => ({ ...prev, subjectFitForDosing: true }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.subjectFitForDosing === false}
                    onChange={() => setFormData(prev => ({ ...prev, subjectFitForDosing: false }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {/* Post-Dose Vitals */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-4">Post-Dose Vitals & Subject Wellbeing</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Time Point</th>
                      <th className="px-4 py-2 text-left">Scheduled Time</th>
                      <th className="px-4 py-2 text-left">Pulse Rate (per min)</th>
                      <th className="px-4 py-2 text-left">Blood Pressure (mm of Hg)</th>
                      <th className="px-4 py-2 text-center">Subject Well Being</th>
                      <th className="px-4 py-2 text-left">Done By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.postDose.map((reading, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{reading.scheduledTimePoint}</td>
                        <td className="px-4 py-2">
                          <input
                            type="time"
                            value={reading.scheduledTime}
                            onChange={(e) => updatePostDose(index, 'scheduledTime', e.target.value)}
                            className="w-full p-1 border rounded"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={reading.pulseRate}
                            onChange={(e) => updatePostDose(index, 'pulseRate', e.target.value)}
                            className="w-full p-1 border rounded"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={reading.bloodPressure}
                            onChange={(e) => updatePostDose(index, 'bloodPressure', e.target.value)}
                            className="w-full p-1 border rounded"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex justify-center gap-4">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                checked={reading.subjectWellBeing === true}
                                onChange={() => updatePostDose(index, 'subjectWellBeing', true)}
                                className="form-radio"
                              />
                              <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                checked={reading.subjectWellBeing === false}
                                onChange={() => updatePostDose(index, 'subjectWellBeing', false)}
                                className="form-radio"
                              />
                              <span className="ml-2">No</span>
                            </label>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <SignatureFields
                            value={reading.doneBy}
                            onChange={(value) => updatePostDose(index, 'doneBy', value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Comments (if any):</label>
                <textarea
                  value={formData.comments}
                  onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>

              <div className="border-t pt-4">
                <SignatureFields
                  label="Reviewed By (PI/CI/Physician):"
                  value={formData.reviewedBy}
                  onChange={(value) => setFormData(prev => ({ ...prev, reviewedBy: value }))}
                />
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>Note: The in-house post dose vital signs will be done with a window period of ± 60 minutes to the scheduled time point. Pre-dose vital signs will be done before the dosing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};