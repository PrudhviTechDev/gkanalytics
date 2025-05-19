import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

export const StudyCaseReport2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '2',
    subjectNumber: '',
    studyTitle: 'A randomized, open label, balanced, two-sequence, two-period-crossover, single oral dose, bioequivalence study of Gabapentin enacarbil extended-release tablets 600 mg of Actavis Pharmaceuticals Inc in healthy, adult, human subjects under fed conditions.',
    protocolNumber: '01',
    protocolVersion: '01',
    crbVersion: '02',
    crbDate: '',
    clinicalFacility: '',
    principalInvestigator: '',
    participationStatus: {
      ongoing: false,
      completed: false,
      adverseEvent: false,
      withdrawn: false,
      droppedOut: false,
      lostToFollowUp: false,
      studyTerminated: false
    },
    withdrawalDate: '',
    withdrawalReason: '',
    lostToFollowUpDate: '',
    comments: '',
    investigatorSignature: {
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

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Volunteer ID:"
            value={volunteerId}
            onChange={() => {}}
            disabled
          />
          <FormField
            label="Subject Number:"
            value={formData.subjectNumber}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Study Title:</label>
          <div className="p-3 bg-gray-50 rounded border text-sm">
            {formData.studyTitle}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex gap-2">
              <span className="font-medium">Protocol Number:</span>
              <span>{formData.protocolNumber}</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="font-medium">Protocol Version:</span>
              <span>{formData.protocolVersion}</span>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <span className="font-medium">CRF Version No.:</span>
              <span>{formData.crbVersion}</span>
            </div>
            <FormField
              label="CRF Date:"
              type="date"
              value={formData.crbDate}
              onChange={(value) => setFormData(prev => ({ ...prev, crbDate: value }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Clinical Facility Address:</label>
          <textarea
            value={formData.clinicalFacility}
            onChange={(e) => setFormData(prev => ({ ...prev, clinicalFacility: e.target.value }))}
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Enter clinical facility address"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Principal Investigator:</label>
          <FormField
            value={formData.principalInvestigator}
            onChange={(value) => setFormData(prev => ({ ...prev, principalInvestigator: value }))}
            placeholder="Enter principal investigator name and qualifications"
          />
        </div>

        <div className="border-t border-b py-4">
          <h3 className="text-lg font-bold mb-4">TO BE FILLED AFTER COMPLETION OF PERIOD</h3>
          <h4 className="font-medium mb-2">PARTICIPATION STATUS/EVALUATION</h4>
          
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.ongoing}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, ongoing: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Ongoing</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.completed}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, completed: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Completed</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.adverseEvent}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, adverseEvent: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Any Adverse event(s) recorded</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.withdrawn}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, withdrawn: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Withdrawn</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.droppedOut}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, droppedOut: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Dropped-out</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.lostToFollowUp}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, lostToFollowUp: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Lost to Follow-up</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.participationStatus.studyTerminated}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    participationStatus: { ...prev.participationStatus, studyTerminated: e.target.checked }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Study terminated</span>
              </label>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">In case of subject withdrawal/drop-out, document the details below:</p>
            
            <div className="space-y-4">
              <FormField
                label="Date of withdrawal/ drop-out:"
                type="date"
                value={formData.withdrawalDate}
                onChange={(value) => setFormData(prev => ({ ...prev, withdrawalDate: value }))}
              />
              
              <FormField
                label="Reason for withdrawal/ drop-out/ lost to follow-up:"
                value={formData.withdrawalReason}
                onChange={(value) => setFormData(prev => ({ ...prev, withdrawalReason: value }))}
              />
              
              <FormField
                label="Date of lost to follow up:"
                type="date"
                value={formData.lostToFollowUpDate}
                onChange={(value) => setFormData(prev => ({ ...prev, lostToFollowUpDate: value }))}
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
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
              label="Investigator's Signature & Date:"
              value={formData.investigatorSignature}
              onChange={(value) => setFormData(prev => ({ ...prev, investigatorSignature: value }))}
            />
          </div>
        </div>

        <div className="border-t pt-4 text-sm text-gray-600">
          <p>I confirm that data recorded in this case report form is complete, accurate and verified for the correctness of data recorded. I confirm that the study was conducted in accordance with the GCP, approved protocol and applicable Standard Operating Procedures (SOPs) of Clians Labs Pvt Ltd. Written informed consent was obtained from the Participant prior to the study.</p>
        </div>
      </div>
    </div>
  );
};