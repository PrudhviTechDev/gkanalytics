import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface CannulaSample {
  insertionTime: string;
  doneBy: SignatureData;
  removalTime: string;
  doneByRemoval: SignatureData;
  remarks: string;
}

interface BloodSample {
  date: string;
  timePoint: string;
  scheduledTime: string;
  collectedAsScheduled: boolean | null;
  actualTime: string;
  deviationTime: string;
  deviationReason: string;
  collectedBy: SignatureData;
}

export const BloodSampleCollection2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '2',
    subjectNumber: '',
    dosingDate: '',
    dosingTime: '',
    lightCondition: 'Normal light',
    typeOfContainer: 'K2/EDTA',
    cannula: {
      insertionTime: '',
      doneBy: { name: '', date: '', time: '' },
      removalTime: '',
      doneByRemoval: { name: '', date: '', time: '' },
      remarks: ''
    } as CannulaSample,
    bloodSamples: [
      { timePoint: '1.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '2.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '3.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '4.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '4.50', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '5.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '5.50', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '6.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '6.50', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '7.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '7.50', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '8.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '8.50', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '9.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '9.50', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '10.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '11.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '12.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '13.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '14.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '16.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '24.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '36.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } },
      { timePoint: '48.00', scheduledTime: '', collectedAsScheduled: null, actualTime: '', deviationTime: '', deviationReason: '', collectedBy: { name: '', date: '', time: '' } }
    ] as BloodSample[],
    comments: '',
    reviewedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Clians</h1>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">STUDY CASE REPORT FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 3</p>
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
          <h3 className="text-lg font-bold mb-4">Section-IV: BLOOD SAMPLE COLLECTION FORM</h3>
          
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

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Light condition:"
                value={formData.lightCondition}
                onChange={(value) => setFormData(prev => ({ ...prev, lightCondition: value }))}
                disabled
              />
              <FormField
                label="Type of container:"
                value={formData.typeOfContainer}
                onChange={(value) => setFormData(prev => ({ ...prev, typeOfContainer: value }))}
                disabled
              />
            </div>

            {/* Cannulation Details */}
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-4">Cannulation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <FormField
                    label="Cannula Insertion Time (Hrs)"
                    type="time"
                    value={formData.cannula.insertionTime}
                    onChange={(value) => setFormData(prev => ({
                      ...prev,
                      cannula: { ...prev.cannula, insertionTime: value }
                    }))}
                  />
                  <SignatureFields
                    label="Done By (Sign & Date)"
                    value={formData.cannula.doneBy}
                    onChange={(value) => setFormData(prev => ({
                      ...prev,
                      cannula: { ...prev.cannula, doneBy: value }
                    }))}
                  />
                </div>
                <div className="space-y-4">
                  <FormField
                    label="Cannula Removal Time (Hrs)"
                    type="time"
                    value={formData.cannula.removalTime}
                    onChange={(value) => setFormData(prev => ({
                      ...prev,
                      cannula: { ...prev.cannula, removalTime: value }
                    }))}
                  />
                  <SignatureFields
                    label="Done By (Sign & Date)"
                    value={formData.cannula.doneByRemoval}
                    onChange={(value) => setFormData(prev => ({
                      ...prev,
                      cannula: { ...prev.cannula, doneByRemoval: value }
                    }))}
                  />
                </div>
              </div>
              <div className="mt-4">
                <FormField
                  label="Remarks"
                  value={formData.cannula.remarks}
                  onChange={(value) => setFormData(prev => ({
                    ...prev,
                    cannula: { ...prev.cannula, remarks: value }
                  }))}
                />
              </div>
            </div>

            {/* Blood Sample Collection Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Sr. No.</th>
                    <th className="px-4 py-2 text-left">Time Point in (Hrs)</th>
                    <th className="px-4 py-2 text-left">Scheduled Time (Hrs)</th>
                    <th className="px-4 py-2 text-center">Collected as per Schedule Time</th>
                    <th className="px-4 py-2 text-left">Actual Time</th>
                    <th className="px-4 py-2 text-left">Deviation (± in Min)</th>
                    <th className="px-4 py-2 text-left">*Reason/Remarks</th>
                    <th className="px-4 py-2 text-left">Collected By (Sign & Date)</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.bloodSamples.map((sample, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{sample.timePoint}</td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={sample.scheduledTime}
                          onChange={(e) => {
                            const newSamples = [...formData.bloodSamples];
                            newSamples[index].scheduledTime = e.target.value;
                            setFormData(prev => ({ ...prev, bloodSamples: newSamples }));
                          }}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={sample.collectedAsScheduled === true}
                          onChange={(e) => {
                            const newSamples = [...formData.bloodSamples];
                            newSamples[index].collectedAsScheduled = e.target.checked;
                            setFormData(prev => ({ ...prev, bloodSamples: newSamples }));
                          }}
                          className="form-checkbox h-4 w-4"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={sample.actualTime}
                          onChange={(e) => {
                            const newSamples = [...formData.bloodSamples];
                            newSamples[index].actualTime = e.target.value;
                            setFormData(prev => ({ ...prev, bloodSamples: newSamples }));
                          }}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={sample.deviationTime}
                          onChange={(e) => {
                            const newSamples = [...formData.bloodSamples];
                            newSamples[index].deviationTime = e.target.value;
                            setFormData(prev => ({ ...prev, bloodSamples: newSamples }));
                          }}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={sample.deviationReason}
                          onChange={(e) => {
                            const newSamples = [...formData.bloodSamples];
                            newSamples[index].deviationReason = e.target.value;
                            setFormData(prev => ({ ...prev, bloodSamples: newSamples }));
                          }}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <SignatureFields
                          value={sample.collectedBy}
                          onChange={(value) => {
                            const newSamples = [...formData.bloodSamples];
                            newSamples[index].collectedBy = value;
                            setFormData(prev => ({ ...prev, bloodSamples: newSamples }));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  label="Reviewed By (Coordinator/Designee):"
                  value={formData.reviewedBy}
                  onChange={(value) => setFormData(prev => ({ ...prev, reviewedBy: value }))}
                />
              </div>

              <div className="text-sm text-gray-600 space-y-1 mt-4">
                <p>Note: *Please tick (✓) in appropriate boxes</p>
                <p>*CRF: Case Report Form, *PCD: Pre-Cannulation Dose, *SRL: Subject Reported Late, *SRLU: Subject Reported Late to urinate</p>
                <p>*DW: Difficult withdrawal, *AD: Missed sample due to adverse event, *DV: Direct vein puncture, *OTH: Other (Specify reason)</p>
                <p>*Dosing time recorded after dosing.</p>
                <p>*The pre-dose blood sample will be collected before the dosing. *Pre-dose sample of 20 ml.</p>
                <p>*Post-dose blood sample will be collected as per the scheduled time. If not collected as per the scheduled time will be documented in sampling deviations.</p>
                <p>*Post-dose Schedule time shall be captured according to dosing time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};