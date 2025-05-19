import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface SampleCollection {
  type: string;
  volume: string;
  collectionTime: string;
  collectedBy: SignatureData;
}

interface LabTest {
  test: string;
  normal: boolean;
  abnormal: boolean;
  remarks: string;
}

interface LabParameter {
  parameter: string;
  repeatAfter: string;
  signAndDate: string;
}

export const PostStudySafetyEvaluation = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '',
    crbVersion: '02',
    date: '18 Dec 2024',
    subjectNo: '',
    eligibleForSampleCollection: null as boolean | null,
    specifyIfNo: '',
    samples: [
      { type: 'Blood', volume: '', collectionTime: '', collectedBy: { name: '', date: '', time: '' } }
    ] as SampleCollection[],
    labTests: [
      { test: 'Hematology', normal: false, abnormal: false, remarks: '' },
      { test: 'Biochemistry', normal: false, abnormal: false, remarks: '' }
    ] as LabTest[],
    abnormalLabParameter: null as boolean | null,
    repeatSample: null as boolean | null,
    labParameters: [] as LabParameter[],
    comments: '',
    evaluatedBy: {
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

  const addSample = () => {
    setFormData(prev => ({
      ...prev,
      samples: [...prev.samples, { 
        type: '', 
        volume: '', 
        collectionTime: '', 
        collectedBy: { name: '', date: '', time: '' } 
      }]
    }));
  };

  const updateSample = (index: number, field: keyof SampleCollection, value: any) => {
    setFormData(prev => ({
      ...prev,
      samples: prev.samples.map((sample, i) => 
        i === index ? { ...sample, [field]: value } : sample
      )
    }));
  };

  const updateLabTest = (index: number, field: keyof LabTest, value: any) => {
    setFormData(prev => ({
      ...prev,
      labTests: prev.labTests.map((test, i) => {
        if (i !== index) return test;
        
        if (field === 'normal' && value === true) {
          return { ...test, normal: true, abnormal: false };
        } else if (field === 'abnormal' && value === true) {
          return { ...test, normal: false, abnormal: true };
        } else {
          return { ...test, [field]: value };
        }
      })
    }));
  };

  const addLabParameter = () => {
    setFormData(prev => ({
      ...prev,
      labParameters: [...prev.labParameters, { 
        parameter: '', 
        repeatAfter: '', 
        signAndDate: '' 
      }]
    }));
  };

  const updateLabParameter = (index: number, field: keyof LabParameter, value: string) => {
    setFormData(prev => ({
      ...prev,
      labParameters: prev.labParameters.map((param, i) => 
        i === index ? { ...param, [field]: value } : param
      )
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="grid grid-cols-3">
          <div className="col-span-1 border-r pr-4">
            <h1 className="text-2xl font-bold">Clians</h1>
          </div>
          <div className="col-span-2 text-center">
            <h2 className="text-lg font-bold">POST/REPEAT POST STUDY SAFETY EVALUATION</h2>
            <h2 className="text-lg font-bold">AND SAMPLE COLLECTION FORM</h2>
            <p className="text-sm text-right">Page 2 of 2</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex gap-2">
            <span className="font-medium">Study No.:</span>
            <span>{formData.studyNo}</span>
          </div>
          <FormField
            label="Period No.:"
            value={formData.periodNo}
            onChange={(value) => setFormData(prev => ({ ...prev, periodNo: value }))}
          />
          <div className="flex gap-2">
            <span className="font-medium">CRF Version No.:</span>
            <span>{formData.crbVersion}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex gap-2">
            <span className="font-medium">Date:</span>
            <span>{formData.date}</span>
          </div>
          <FormField
            label="Subject No.:"
            value={formData.subjectNo}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNo: value }))}
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span>Subject is eligible for post study safety sample collection:</span>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.eligibleForSampleCollection === true}
                    onChange={() => setFormData(prev => ({ ...prev, eligibleForSampleCollection: true }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.eligibleForSampleCollection === false}
                    onChange={() => setFormData(prev => ({ ...prev, eligibleForSampleCollection: false }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.eligibleForSampleCollection === null}
                    onChange={() => setFormData(prev => ({ ...prev, eligibleForSampleCollection: null }))}
                    className="form-radio"
                  />
                  <span className="ml-2">NA</span>
                </label>
              </div>
            </div>
            {formData.eligibleForSampleCollection === false && (
              <div className="ml-4">
                <FormField
                  label="If No, specify:"
                  value={formData.specifyIfNo}
                  onChange={(value) => setFormData(prev => ({ ...prev, specifyIfNo: value }))}
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Type of Samples</h3>
              <button
                type="button"
                onClick={addSample}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Sample
              </button>
            </div>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left border-r">Type of Samples</th>
                  <th className="px-4 py-2 text-left border-r">Volume (mL)</th>
                  <th className="px-4 py-2 text-left border-r">Collection Time (Hrs)</th>
                  <th className="px-4 py-2 text-left">Collected by (Sign and Date)</th>
                </tr>
              </thead>
              <tbody>
                {formData.samples.map((sample, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={sample.type}
                        onChange={(e) => updateSample(index, 'type', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={sample.volume}
                        onChange={(e) => updateSample(index, 'volume', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="time"
                        value={sample.collectionTime}
                        onChange={(e) => updateSample(index, 'collectionTime', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <SignatureFields
                        value={sample.collectedBy}
                        onChange={(value) => updateSample(index, 'collectedBy', value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">POST STUDY LAB REPORTS EVALUATION:</h3>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left border-r">Test</th>
                  <th className="px-4 py-2 text-center border-r">Normal</th>
                  <th className="px-4 py-2 text-center border-r">Abnormal</th>
                  <th className="px-4 py-2 text-left">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {formData.labTests.map((test, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border-r">{test.test}</td>
                    <td className="px-4 py-2 text-center border-r">
                      <input
                        type="checkbox"
                        checked={test.normal}
                        onChange={() => updateLabTest(index, 'normal', true)}
                        className="form-checkbox"
                      />
                    </td>
                    <td className="px-4 py-2 text-center border-r">
                      <input
                        type="checkbox"
                        checked={test.abnormal}
                        onChange={() => updateLabTest(index, 'abnormal', true)}
                        className="form-checkbox"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={test.remarks}
                        onChange={(e) => updateLabTest(index, 'remarks', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span>Any abnormal lab parameter:</span>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.abnormalLabParameter === true}
                    onChange={() => setFormData(prev => ({ ...prev, abnormalLabParameter: true }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.abnormalLabParameter === false}
                    onChange={() => setFormData(prev => ({ ...prev, abnormalLabParameter: false }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>If Yes, To repeat the sample:</span>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.repeatSample === true}
                    onChange={() => setFormData(prev => ({ ...prev, repeatSample: true }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={formData.repeatSample === false}
                    onChange={() => setFormData(prev => ({ ...prev, repeatSample: false }))}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Post study repeat sample:</h3>
              <button
                type="button"
                onClick={addLabParameter}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Parameter
              </button>
            </div>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left border-r">Lab parameter</th>
                  <th className="px-4 py-2 text-left border-r">Repeat after</th>
                  <th className="px-4 py-2 text-left">Sign and date</th>
                </tr>
              </thead>
              <tbody>
                {formData.labParameters.map((param, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={param.parameter}
                        onChange={(e) => updateLabParameter(index, 'parameter', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={param.repeatAfter}
                        onChange={(e) => updateLabParameter(index, 'repeatAfter', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={param.signAndDate}
                        onChange={(e) => updateLabParameter(index, 'signAndDate', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-600">(Tick (✓) the appropriate)</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Comments:</label>
            <textarea
              value={formData.comments}
              onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <SignatureFields
              label="Evaluated by:"
              value={formData.evaluatedBy}
              onChange={(value) => setFormData(prev => ({ ...prev, evaluatedBy: value }))}
            />
            <div className="text-sm text-gray-500 text-center">(Sign & Date)</div>
          </div>

          <div className="space-y-4">
            <SignatureFields
              label="Verified by:"
              value={formData.verifiedBy}
              onChange={(value) => setFormData(prev => ({ ...prev, verifiedBy: value }))}
            />
            <div className="text-sm text-gray-500 text-center">(Sign & Date)</div>
          </div>
        </div>
      </div>
    </div>
  );
};