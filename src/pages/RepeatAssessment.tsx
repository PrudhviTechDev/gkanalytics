import React, { useState } from 'react';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface LabTest {
  name: string;
  normal: boolean;
  abnormalCS: boolean;
  abnormalNCS: boolean;
  remarks: string;
}

interface SampleCollection {
  type: string;
  volume: string;
  collectionTime: string;
  reason: string;
  collectedBy: SignatureData;
}

interface ECGEvaluation {
  takenBy: SignatureData;
  normal: boolean;
  abnormal: boolean;
  remarks: string;
  evaluatedBy: SignatureData;
}

interface LabParameter {
  srNo: string;
  parameter: string;
  repeatAfterDays: string;
}

export const RepeatAssessment = () => {
  const [formData, setFormData] = useState({
    sopNumber: 'CL-022',
    documentNo: 'CL-022-F-001-04',
    studyProjectNo: '',
    date: '',
    subjectNo: '',
    followUpDateTime: '',
    clinicalExamination: '',
    vitals: {
      bloodPressure: '',
      temperature: '',
      pulseRate: ''
    },
    remarks: '',
    doneBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    sampleCollections: [] as SampleCollection[],
    others: '',
    ecgPerformed: null as boolean | null,
    ecgEvaluation: {
      takenBy: {
        name: '',
        date: '',
        time: ''
      },
      normal: false,
      abnormal: false,
      remarks: '',
      evaluatedBy: {
        name: '',
        date: '',
        time: ''
      }
    } as ECGEvaluation,
    labTests: [] as LabTest[],
    adverseEvent: null as boolean | null,
    labParameters: [] as LabParameter[],
    comments: '',
    evaluatedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const addSampleCollection = () => {
    setFormData(prev => ({
      ...prev,
      sampleCollections: [
        ...prev.sampleCollections,
        {
          type: '',
          volume: '',
          collectionTime: '',
          reason: '',
          collectedBy: {
            name: '',
            date: '',
            time: ''
          }
        }
      ]
    }));
  };

  const updateSampleCollection = (index: number, field: keyof SampleCollection, value: any) => {
    setFormData(prev => ({
      ...prev,
      sampleCollections: prev.sampleCollections.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addLabTest = () => {
    setFormData(prev => ({
      ...prev,
      labTests: [
        ...prev.labTests,
        {
          name: '',
          normal: false,
          abnormalCS: false,
          abnormalNCS: false,
          remarks: ''
        }
      ]
    }));
  };

  const updateLabTest = (index: number, field: keyof LabTest, value: any) => {
    setFormData(prev => ({
      ...prev,
      labTests: prev.labTests.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addLabParameter = () => {
    setFormData(prev => ({
      ...prev,
      labParameters: [
        ...prev.labParameters,
        {
          srNo: '',
          parameter: '',
          repeatAfterDays: ''
        }
      ]
    }));
  };

  const updateLabParameter = (index: number, field: keyof LabParameter, value: string) => {
    setFormData(prev => ({
      ...prev,
      labParameters: prev.labParameters.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
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
            <h2 className="text-xl font-bold">REPEAT POST STUDY ASSESSMENT FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <FormField
            label="Study/Project No.:"
            value={formData.studyProjectNo}
            onChange={(value) => setFormData(prev => ({ ...prev, studyProjectNo: value }))}
          />
          <FormField
            label="Date:"
            type="date"
            value={formData.date}
            onChange={(value) => setFormData(prev => ({ ...prev, date: value }))}
          />
          <FormField
            label="Subject No.:"
            value={formData.subjectNo}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNo: value }))}
          />
        </div>

        <FormField
          label="Follow up Date & Time:"
          type="datetime-local"
          value={formData.followUpDateTime}
          onChange={(value) => setFormData(prev => ({ ...prev, followUpDateTime: value }))}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Clinical Examination:</label>
          <textarea
            value={formData.clinicalExamination}
            onChange={(e) => setFormData(prev => ({ ...prev, clinicalExamination: e.target.value }))}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Vitals:</h3>
          <table className="w-full border border-gray-300">
            <tbody>
              <tr>
                <td className="border-r border-gray-300 p-4 w-1/3">
                  <div className="text-sm font-medium mb-2">Blood Pressure</div>
                  <input
                    type="text"
                    value={formData.vitals.bloodPressure}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      vitals: { ...prev.vitals, bloodPressure: e.target.value }
                    }))}
                    className="w-full p-2 border rounded"
                  />
                </td>
                <td className="border-r border-gray-300 p-4 w-1/3">
                  <div className="text-sm font-medium mb-2">Temperature</div>
                  <input
                    type="text"
                    value={formData.vitals.temperature}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      vitals: { ...prev.vitals, temperature: e.target.value }
                    }))}
                    className="w-full p-2 border rounded"
                  />
                </td>
                <td className="p-4 w-1/3">
                  <div className="text-sm font-medium mb-2">Pulse Rate</div>
                  <input
                    type="text"
                    value={formData.vitals.pulseRate}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      vitals: { ...prev.vitals, pulseRate: e.target.value }
                    }))}
                    className="w-full p-2 border rounded"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <FormField
          label="Remarks:"
          value={formData.remarks}
          onChange={(value) => setFormData(prev => ({ ...prev, remarks: value }))}
        />

        <SignatureFields
          label="Done By:"
          value={formData.doneBy}
          onChange={(value) => setFormData(prev => ({ ...prev, doneBy: value }))}
        />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Sample Collection:</h3>
            <button
              type="button"
              onClick={addSampleCollection}
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Sample
            </button>
          </div>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Type of sample</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Volume in (mL)</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Collection Time (Hrs.)</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Reason for sample collection (Specify lab Parameter)</th>
                <th className="border-b border-gray-300 px-4 py-2 text-left font-medium">Collected by (Sign & Date)</th>
              </tr>
            </thead>
            <tbody>
              {formData.sampleCollections.map((sample, index) => (
                <tr key={index}>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={sample.type}
                      onChange={(e) => updateSampleCollection(index, 'type', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={sample.volume}
                      onChange={(e) => updateSampleCollection(index, 'volume', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    <input
                      type="time"
                      value={sample.collectionTime}
                      onChange={(e) => updateSampleCollection(index, 'collectionTime', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={sample.reason}
                      onChange={(e) => updateSampleCollection(index, 'reason', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    <SignatureFields
                      value={sample.collectedBy}
                      onChange={(value) => updateSampleCollection(index, 'collectedBy', value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FormField
          label="Others (if any)"
          value={formData.others}
          onChange={(value) => setFormData(prev => ({ ...prev, others: value }))}
        />

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>ECG performed (as per protocol):</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.ecgPerformed === true}
                  onChange={() => setFormData(prev => ({ ...prev, ecgPerformed: true }))}
                  className="form-checkbox"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.ecgPerformed === false}
                  onChange={() => setFormData(prev => ({ ...prev, ecgPerformed: false }))}
                  className="form-checkbox"
                />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.ecgPerformed === null}
                  onChange={() => setFormData(prev => ({ ...prev, ecgPerformed: null }))}
                  className="form-checkbox"
                />
                <span className="ml-2">NA</span>
              </label>
            </div>
          </div>

          {formData.ecgPerformed && (
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Taken by</th>
                  <th className="border-b border-r border-gray-300 px-4 py-2 text-center font-medium" colSpan={2}>Evaluation</th>
                  <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Remarks</th>
                  <th className="border-b border-gray-300 px-4 py-2 text-left font-medium">Evaluated by</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-gray-300 px-4 py-2">
                    <SignatureFields
                      value={formData.ecgEvaluation.takenBy}
                      onChange={(value) => setFormData(prev => ({
                        ...prev,
                        ecgEvaluation: { ...prev.ecgEvaluation, takenBy: value }
                      }))}
                    />
                  </td>
                  <td className="border-r border-gray-300 px-4 py-2 text-center">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.ecgEvaluation.normal}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          ecgEvaluation: { ...prev.ecgEvaluation, normal: true, abnormal: false }
                        }))}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Normal</span>
                    </label>
                  </td>
                  <td className="border-r border-gray-300 px-4 py-2 text-center">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.ecgEvaluation.abnormal}
                        onChange={() => setFormData(prev => ({
                          ...prev,
                          ecgEvaluation: { ...prev.ecgEvaluation, normal: false, abnormal: true }
                        }))}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Abnormal</span>
                    </label>
                  </td>
                  <td className="border-r border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={formData.ecgEvaluation.remarks}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        ecgEvaluation: { ...prev.ecgEvaluation, remarks: e.target.value }
                      }))}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <SignatureFields
                      value={formData.ecgEvaluation.evaluatedBy}
                      onChange={(value) => setFormData(prev => ({
                        ...prev,
                        ecgEvaluation: { ...prev.ecgEvaluation, evaluatedBy: value }
                      }))}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">LAB REPORT EVALUATION</h3>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Sr. No.</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Name of the Test</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-center font-medium">Normal</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-center font-medium" colSpan={2}>Abnormal</th>
                <th className="border-b border-gray-300 px-4 py-2 text-left font-medium">Remarks</th>
              </tr>
              <tr className="bg-gray-50">
                <th className="border-b border-r border-gray-300"></th>
                <th className="border-b border-r border-gray-300"></th>
                <th className="border-b border-r border-gray-300"></th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-center font-medium">CS</th>
                <th className="border-b border-r border-gray-300 px-4 py-2 text-center font-medium">NCS</th>
                <th className="border-b border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {formData.labTests.map((test, index) => (
                <tr key={index}>
                  <td className="border-r border-b border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border-r border-b border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={test.name}
                      onChange={(e) => updateLabTest(index, 'name', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                  <td className="border-r border-b border-gray-300 px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={test.normal}
                      onChange={(e) => updateLabTest(index, 'normal', e.target.checked)}
                      className="form-checkbox"
                    />
                  </td>
                  <td className="border-r border-b border-gray-300 px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={test.abnormalCS}
                      onChange={(e) => updateLabTest(index, 'abnormalCS', e.target.checked)}
                      className="form-checkbox"
                    />
                  </td>
                  <td className="border-r border-b border-gray-300 px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={test.abnormalNCS}
                      onChange={(e) => updateLabTest(index, 'abnormalNCS', e.target.checked)}
                      className="form-checkbox"
                    />
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      value={test.remarks}
                      onChange={(e) => updateLabTest(index, 'remarks', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={addLabTest}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Test
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>Did the subject experienced any Adverse Event:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.adverseEvent === true}
                  onChange={() => setFormData(prev => ({ ...prev, adverseEvent: true }))}
                  className="form-checkbox"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.adverseEvent === false}
                  onChange={() => setFormData(prev => ({ ...prev, adverseEvent: false }))}
                  className="form-checkbox"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {formData.adverseEvent && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>If yes, please specify below:</span>
                <button
                  type="button"
                  onClick={addLabParameter}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Parameter
                </button>
              </div>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Sr. No.</th>
                    <th className="border-b border-r border-gray-300 px-4 py-2 text-left font-medium">Lab parameter</th>
                    <th className="border-b border-gray-300 px-4 py-2 text-left font-medium">Repeat after(days)</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.labParameters.map((param, index) => (
                    <tr key={index}>
                      <td className="border-r border-b border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={param.srNo}
                          onChange={(e) => updateLabParameter(index, 'srNo', e.target.value)}
                          className="w-full p-2 border rounded"
                        />
                      </td>
                      <td className="border-r border-b border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={param.parameter}
                          onChange={(e) => updateLabParameter(index, 'parameter', e.target.value)}
                          className="w-full p-2 border rounded"
                        />
                      </td>
                      <td className="border-b border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={param.repeatAfterDays}
                          onChange={(e) => updateLabParameter(index, 'repeatAfterDays', e.target.value)}
                          className="w-full p-2 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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
          <SignatureFields
            label="Evaluated by PI/CI/Physician:"
            value={formData.evaluatedBy}
            onChange={(value) => setFormData(prev => ({ ...prev, evaluatedBy: value }))}
          />
          <div className="text-sm text-gray-500 text-center">(Sign and Date)</div>
        </div>

        <div className="text-sm text-gray-500 mt-4">{formData.documentNo}</div>
      </div>
    </div>
  );
};