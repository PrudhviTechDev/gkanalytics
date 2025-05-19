import React, { useState } from 'react';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface CallRecord {
  followUpNo: string;
  callNo: string;
  purpose: string;
  dateOfCall: string;
  callType: 'Incoming' | 'Outgoing' | '';
  callMadeToReceivedFrom: string;
  dialedFromPhoneNumber: string;
  callReceivedByDialedTo: string;
  summaryOfConversation: string;
  nextFollowUpRequired: boolean | null;
  recordedBy: SignatureData;
}

export const TelephoneNotes = () => {
  const [formData, setFormData] = useState({
    sopNumber: 'QA-005',
    documentNo: 'QA-005-F-001-05',
    calls: [
      {
        followUpNo: '',
        callNo: '',
        purpose: '',
        dateOfCall: '',
        callType: '',
        callMadeToReceivedFrom: '',
        dialedFromPhoneNumber: '',
        callReceivedByDialedTo: '',
        summaryOfConversation: '',
        nextFollowUpRequired: null,
        recordedBy: {
          name: '',
          date: '',
          time: ''
        }
      },
      {
        followUpNo: '',
        callNo: '',
        purpose: '',
        dateOfCall: '',
        callType: '',
        callMadeToReceivedFrom: '',
        dialedFromPhoneNumber: '',
        callReceivedByDialedTo: '',
        summaryOfConversation: '',
        nextFollowUpRequired: null,
        recordedBy: {
          name: '',
          date: '',
          time: ''
        }
      }
    ] as CallRecord[],
    authorizedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const updateCall = (index: number, field: keyof CallRecord, value: any) => {
    setFormData(prev => ({
      ...prev,
      calls: prev.calls.map((call, i) => 
        i === index ? { ...call, [field]: value } : call
      )
    }));
  };

  const updateCallSignature = (index: number, value: SignatureData) => {
    setFormData(prev => ({
      ...prev,
      calls: prev.calls.map((call, i) => 
        i === index ? { ...call, recordedBy: value } : call
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
            <h2 className="text-xl font-bold">TELEPHONE NOTES</h2>
            <p className="text-sm text-gray-600">Page 2 of 2</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm font-medium">SOP NUMBER: </span>
            <span className="text-sm">{formData.sopNumber}</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {formData.calls.map((call, index) => (
          <div key={index} className="border-b pb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex gap-2 items-center">
                <span>Follow-up No.:</span>
                <input
                  type="text"
                  value={call.followUpNo}
                  onChange={(e) => updateCall(index, 'followUpNo', e.target.value)}
                  className="w-20 border rounded px-2 py-1"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span>Call No.:</span>
                <input
                  type="text"
                  value={call.callNo}
                  onChange={(e) => updateCall(index, 'callNo', e.target.value)}
                  className="w-20 border rounded px-2 py-1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <FormField
                label="Purpose"
                value={call.purpose}
                onChange={(value) => updateCall(index, 'purpose', value)}
              />

              <FormField
                label="Date of Call"
                type="date"
                value={call.dateOfCall}
                onChange={(value) => updateCall(index, 'dateOfCall', value)}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Call Type</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={call.callType === 'Incoming'}
                      onChange={() => updateCall(index, 'callType', 'Incoming')}
                      className="form-radio"
                    />
                    <span className="ml-2">Incoming</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={call.callType === 'Outgoing'}
                      onChange={() => updateCall(index, 'callType', 'Outgoing')}
                      className="form-radio"
                    />
                    <span className="ml-2">Outgoing</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Call made to/Received from"
                  value={call.callMadeToReceivedFrom}
                  onChange={(value) => updateCall(index, 'callMadeToReceivedFrom', value)}
                />
                <FormField
                  label="Call received by/Dialled to phone number"
                  value={call.callReceivedByDialedTo}
                  onChange={(value) => updateCall(index, 'callReceivedByDialedTo', value)}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Summary of Conversation</label>
                <textarea
                  value={call.summaryOfConversation}
                  onChange={(e) => updateCall(index, 'summaryOfConversation', e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Next Follow Up Required:</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={call.nextFollowUpRequired === true}
                      onChange={() => updateCall(index, 'nextFollowUpRequired', true)}
                      className="form-radio"
                    />
                    <span className="ml-2">YES</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={call.nextFollowUpRequired === false}
                      onChange={() => updateCall(index, 'nextFollowUpRequired', false)}
                      className="form-radio"
                    />
                    <span className="ml-2">NO</span>
                  </label>
                </div>
              </div>

              <SignatureFields
                label="Recorded By (Sign & Date):"
                value={call.recordedBy}
                onChange={(value) => updateCallSignature(index, value)}
              />
            </div>
          </div>
        ))}

        <div className="pt-6">
          <SignatureFields
            label="Authorized By:"
            value={formData.authorizedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, authorizedBy: value }))}
          />
          <div className="text-sm text-gray-500 text-center mt-1">(Department Head/Designee)</div>
        </div>

        <div className="text-sm text-gray-500">{formData.documentNo}</div>
      </div>
    </div>
  );
};