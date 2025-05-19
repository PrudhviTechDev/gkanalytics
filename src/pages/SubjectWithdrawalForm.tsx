import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface WithdrawalReason {
  srNo: string;
  reason: string;
  tick: boolean;
}

export const SubjectWithdrawalForm = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    sopNumber: 'CL-021',
    projectStudyNo: '',
    subjectNo: '',
    periodNo: '',
    withdrawalType: {
      inhouse: false,
      washout: false
    },
    others: '',
    timeOfWithdrawal: '',
    reasons: [
      { srNo: '1.', reason: 'Subject found positive in urine alcohol test.', tick: false },
      { srNo: '2.', reason: 'Subject found positive in breath alcohol test.', tick: false },
      { srNo: '3.', reason: 'Subject found positive in urine for drugs of abuse test.', tick: false },
      { srNo: '4.', reason: 'Abnormal vitals', tick: false },
      { srNo: '5.', reason: 'If the subject has not consumed high fat high calorie meal served prior to dosing as per the protocol.', tick: false },
      { srNo: '6.', reason: 'Any subject experience emesis at or before reported two times of median Tmax or within time specified in the protocol.', tick: false },
      { srNo: '7.', reason: 'Subject is suffering from adverse event', tick: false },
      { srNo: '8.', reason: 'Subject is voluntarily withdrawn from the study', tick: false },
      { srNo: '9.', reason: 'Failure to comply the requirements of the protocol', tick: false },
      { srNo: '10.', reason: 'Any subject who requires unacceptable concomitant medication', tick: false },
      { srNo: '11.', reason: 'Erroneous inclusion in the study', tick: false },
      { srNo: '12.', reason: 'If it is felt by investigator that it is not in the subject\'s best interest to continue.', tick: false },
      { srNo: '13.', reason: 'Positive in serum/urine pregnancy test (for female subjects)', tick: false },
      { srNo: '14.', reason: 'Subject is non-cooperative with the staff', tick: false },
      { srNo: '15.', reason: 'If the subject misbehaves during the study', tick: false },
      { srNo: '16.', reason: 'Others (specify):', tick: false }
    ] as WithdrawalReason[],
    comments: '',
    withdrawalDecision: {
      pi: false,
      ci: false,
      attendingPhysician: false,
      na: false
    },
    withdrawalDecisionByCI: {
      yes: false,
      no: false,
      na: false
    },
    reasonForWithdrawal: '',
    eligibleForSubsequentPeriods: {
      yes: false,
      no: false,
      na: false
    },
    compensationRecommendation: {
      asPerSOP: false,
      protocolRecommendation: false,
      ecRecommendation: false
    },
    informedToSponsor: {
      yes: false,
      no: false,
      na: false
    },
    informedToEC: {
      yes: false,
      no: false,
      na: false
    },
    voluntaryWithdrawalReason: '',
    subjectSignDate: '',
    doneBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    checkedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const updateReason = (index: number, field: keyof WithdrawalReason, value: any) => {
    setFormData(prev => ({
      ...prev,
      reasons: prev.reasons.map((reason, i) => 
        i === index ? { ...reason, [field]: value } : reason
      )
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
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
            <h2 className="text-xl font-bold">SUBJECT WITHDRAWAL FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 2</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <FormField
            label="Project/Study No.:"
            value={formData.projectStudyNo}
            onChange={(value) => setFormData(prev => ({ ...prev, projectStudyNo: value }))}
          />
          <FormField
            label="Subject No.:"
            value={formData.subjectNo}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNo: value }))}
          />
          <FormField
            label="Period No.:"
            value={formData.periodNo}
            onChange={(value) => setFormData(prev => ({ ...prev, periodNo: value }))}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.withdrawalType.inhouse}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  withdrawalType: { ...prev.withdrawalType, inhouse: e.target.checked }
                }))}
                className="form-checkbox h-4 w-4"
              />
              <span className="ml-2">In-house</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.withdrawalType.washout}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  withdrawalType: { ...prev.withdrawalType, washout: e.target.checked }
                }))}
                className="form-checkbox h-4 w-4"
              />
              <span className="ml-2">Washout</span>
            </label>
          </div>
        </div>

        <FormField
          label="Others:"
          value={formData.others}
          onChange={(value) => setFormData(prev => ({ ...prev, others: value }))}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Time of withdrawal:"
            type="time"
            value={formData.timeOfWithdrawal}
            onChange={(value) => setFormData(prev => ({ ...prev, timeOfWithdrawal: value }))}
          />
        </div>

        <div className="space-y-4">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left border-r border-gray-300">Sr. No.</th>
                <th className="px-4 py-2 text-left border-r border-gray-300">Reason</th>
                <th className="px-4 py-2 text-center">Tick (✓)</th>
              </tr>
            </thead>
            <tbody>
              {formData.reasons.map((reason, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="px-4 py-2 border-r border-gray-300">{reason.srNo}</td>
                  <td className="px-4 py-2 border-r border-gray-300">
                    <div className="flex items-center gap-2">
                      <span>{reason.reason}</span>
                      {index === formData.reasons.length - 1 && (
                        <input
                          type="text"
                          className="flex-1 p-1 border rounded"
                          placeholder="Specify other reason"
                          disabled={!reason.tick}
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={reason.tick}
                      onChange={(e) => updateReason(index, 'tick', e.target.checked)}
                      className="form-checkbox h-4 w-4"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Comments:</label>
          <textarea
            value={formData.comments}
            onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>Decision of Subject withdrawal taken by:</span>
            <div className="flex gap-4">
              {[
                { key: 'pi', label: 'PI' },
                { key: 'ci', label: 'CI' },
                { key: 'attendingPhysician', label: 'Attending Physician' },
                { key: 'na', label: 'NA' }
              ].map(({ key, label }) => (
                <label key={key} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.withdrawalDecision[key as keyof typeof formData.withdrawalDecision]}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      withdrawalDecision: {
                        ...prev.withdrawalDecision,
                        [key]: e.target.checked
                      }
                    }))}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span>Is the withdrawal decision is taken by CI/Physician whether consented with PI prior to withdrawal?</span>
            <div className="flex gap-4">
              {[
                { key: 'yes', label: 'Yes' },
                { key: 'no', label: 'No' },
                { key: 'na', label: 'NA' }
              ].map(({ key, label }) => (
                <label key={key} className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.withdrawalDecisionByCI[key as keyof typeof formData.withdrawalDecisionByCI]}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      withdrawalDecisionByCI: {
                        yes: key === 'yes',
                        no: key === 'no',
                        na: key === 'na'
                      }
                    }))}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Reason for withdrawal is informed to the subject:</label>
          <textarea
            value={formData.reasonForWithdrawal}
            onChange={(e) => setFormData(prev => ({ ...prev, reasonForWithdrawal: e.target.value }))}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>The subject is eligible to participate in the subsequent Period(s):</span>
            <div className="flex gap-4">
              {[
                { key: 'yes', label: 'Yes' },
                { key: 'no', label: 'No' },
                { key: 'na', label: 'NA' }
              ].map(({ key, label }) => (
                <label key={key} className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.eligibleForSubsequentPeriods[key as keyof typeof formData.eligibleForSubsequentPeriods]}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      eligibleForSubsequentPeriods: {
                        yes: key === 'yes',
                        no: key === 'no',
                        na: key === 'na'
                      }
                    }))}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 p-4">
            <div className="font-medium mb-4">Compensation recommended tick (✓) the applicable:</div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.compensationRecommendation.asPerSOP}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    compensationRecommendation: {
                      ...prev.compensationRecommendation,
                      asPerSOP: e.target.checked
                    }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">As per SOP/Protocol Recommendation</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.compensationRecommendation.ecRecommendation}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    compensationRecommendation: {
                      ...prev.compensationRecommendation,
                      ecRecommendation: e.target.checked
                    }
                  }))}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">As per EC Recommendation (in case of SAE only)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>Informed to Sponsor (in case of SAE only):</span>
            <div className="flex gap-4">
              {[
                { key: 'yes', label: 'Yes' },
                { key: 'no', label: 'No' },
                { key: 'na', label: 'NA' }
              ].map(({ key, label }) => (
                <label key={key} className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.informedToSponsor[key as keyof typeof formData.informedToSponsor]}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      informedToSponsor: {
                        yes: key === 'yes',
                        no: key === 'no',
                        na: key === 'na'
                      }
                    }))}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span>Informed to EC (in case of SAE only):</span>
            <div className="flex gap-4">
              {[
                { key: 'yes', label: 'Yes' },
                { key: 'no', label: 'No' },
                { key: 'na', label: 'NA' }
              ].map(({ key, label }) => (
                <label key={key} className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.informedToEC[key as keyof typeof formData.informedToEC]}
                    onChange={() => setFormData(prev => ({
                      ...prev,
                      informedToEC: {
                        yes: key === 'yes',
                        no: key === 'no',
                        na: key === 'na'
                      }
                    }))}
                    className="form-radio h-4 w-4"
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="font-medium">To be filled by the subject if voluntarily withdrawn</div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Reason for voluntarily withdrawal:</label>
            <textarea
              value={formData.voluntaryWithdrawalReason}
              onChange={(e) => setFormData(prev => ({ ...prev, voluntaryWithdrawalReason: e.target.value }))}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
          <FormField
            label="Subject (Sign & Date):"
            value={formData.subjectSignDate}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectSignDate: value }))}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Comments:</label>
          <textarea
            value={formData.comments}
            onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <SignatureFields
            label="Done By"
            value={formData.doneBy}
            onChange={(value) => setFormData(prev => ({ ...prev, doneBy: value }))}
          />
          <SignatureFields
            label="Checked By"
            value={formData.checkedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, checkedBy: value }))}
          />
        </div>
      </div>
    </div>
  );
};