import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface EcgEvaluationData {
  takenBy: {
    name: string;
    date: string;
    time: string;
  };
  normal: boolean;
  abnormal: boolean;
  remarks: string;
  evaluatedBy: {
    name: string;
    date: string;
    time: string;
  };
}

interface SampleCollectionData {
  sample: string;
  sampleType: string;
  volume: string;
  collectionTime: string;
  collectionDate: string;
  doneBy: {
    name: string;
    date: string;
    time: string;
  };
}

interface LabReportData {
  test: string;
  doneBy: {
    name: string;
    date: string;
    time: string;
  };
  normal: boolean;
  abnormal: boolean;
  cns: boolean;
  cs: boolean;
  remarks: string;
}

interface FinalEvaluationData {
  isEligible: boolean;
  specification: string;
  comments: string;
  completedBy: {
    name: string;
    date: string;
    time: string;
  };
}

export const EcgEvaluation = () => {
  const { volunteerId } = useVolunteer();
  
  const [ecgEvaluation, setEcgEvaluation] = useState<EcgEvaluationData>({
    takenBy: { name: '', date: '', time: '' },
    normal: false,
    abnormal: false,
    remarks: '',
    evaluatedBy: { name: '', date: '', time: '' },
  });

  const [sampleCollections, setSampleCollections] = useState<SampleCollectionData[]>([{
    sample: '',
    sampleType: '',
    volume: '',
    collectionTime: '',
    collectionDate: '',
    doneBy: { name: '', date: '', time: '' },
  }]);

  const [labReports, setLabReports] = useState<LabReportData[]>([
    { test: 'Haematology', doneBy: { name: '', date: '', time: '' }, normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
    { test: 'Biochemistry', doneBy: { name: '', date: '', time: '' }, normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
    { test: 'Urine Analysis', doneBy: { name: '', date: '', time: '' }, normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
    { test: 'Serology', doneBy: { name: '', date: '', time: '' }, normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
  ]);

  const [finalEvaluation, setFinalEvaluation] = useState<FinalEvaluationData>({
    isEligible: true,
    specification: '',
    comments: '',
    completedBy: {
      name: '',
      date: '',
      time: '',
    },
  });

  const addSampleCollection = () => {
    setSampleCollections(prev => [...prev, {
      sample: '',
      sampleType: '',
      volume: '',
      collectionTime: '',
      collectionDate: '',
      doneBy: { name: '', date: '', time: '' },
    }]);
  };

  const updateSampleCollection = (index: number, field: keyof SampleCollectionData, value: string) => {
    setSampleCollections(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updateSampleCollectionSignature = (index: number, field: keyof typeof sampleCollections[0]['doneBy'], value: string) => {
    setSampleCollections(prev => prev.map((item, i) => 
      i === index ? {
        ...item,
        doneBy: { ...item.doneBy, [field]: value }
      } : item
    ));
  };

  const updateLabReport = (index: number, field: keyof LabReportData, value: boolean | string) => {
    setLabReports(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updateLabReportSignature = (index: number, field: keyof typeof labReports[0]['doneBy'], value: string) => {
    setLabReports(prev => prev.map((item, i) => 
      i === index ? {
        ...item,
        doneBy: { ...item.doneBy, [field]: value }
      } : item
    ));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Volunteer Medical Screening Record</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 5 of 6</div>
        </div>
      </div>

      <div className="space-y-6">
        <FormField
          label="VOLUNTEER ID"
          value={volunteerId}
          onChange={() => {}}
          disabled
        />

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">ECG Evaluation</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Test</th>
                    <th className="px-4 py-2 text-left">Taken by (Sign & Date)</th>
                    <th className="px-4 py-2 text-center" colSpan={2}>Evaluation Status</th>
                    <th className="px-4 py-2 text-left">Remarks</th>
                    <th className="px-4 py-2 text-left">Evaluated by (Sign & Date)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">ECG</td>
                    <td className="px-4 py-2">
                      <div className="space-y-2">
                        <FormField
                          value={ecgEvaluation.takenBy.name}
                          onChange={(value) => setEcgEvaluation(prev => ({
                            ...prev,
                            takenBy: { ...prev.takenBy, name: value }
                          }))}
                          placeholder="Name"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <FormField
                            type="date"
                            value={ecgEvaluation.takenBy.date}
                            onChange={(value) => setEcgEvaluation(prev => ({
                              ...prev,
                              takenBy: { ...prev.takenBy, date: value }
                            }))}
                          />
                          <FormField
                            type="time"
                            value={ecgEvaluation.takenBy.time}
                            onChange={(value) => setEcgEvaluation(prev => ({
                              ...prev,
                              takenBy: { ...prev.takenBy, time: value }
                            }))}
                            step="1"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={ecgEvaluation.normal}
                        onChange={(e) => setEcgEvaluation(prev => ({ ...prev, normal: e.target.checked, abnormal: false }))}
                        className="form-checkbox h-5 w-5"
                      />
                      <span className="ml-2">Normal</span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={ecgEvaluation.abnormal}
                        onChange={(e) => setEcgEvaluation(prev => ({ ...prev, abnormal: e.target.checked, normal: false }))}
                        className="form-checkbox h-5 w-5"
                      />
                      <span className="ml-2">Abnormal</span>
                    </td>
                    <td className="px-4 py-2">
                      <FormField
                        value={ecgEvaluation.remarks}
                        onChange={(value) => setEcgEvaluation(prev => ({ ...prev, remarks: value }))}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <div className="space-y-2">
                        <FormField
                          value={ecgEvaluation.evaluatedBy.name}
                          onChange={(value) => setEcgEvaluation(prev => ({
                            ...prev,
                            evaluatedBy: { ...prev.evaluatedBy, name: value }
                          }))}
                          placeholder="Name"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <FormField
                            type="date"
                            value={ecgEvaluation.evaluatedBy.date}
                            onChange={(value) => setEcgEvaluation(prev => ({
                              ...prev,
                              evaluatedBy: { ...prev.evaluatedBy, date: value }
                            }))}
                          />
                          <FormField
                            type="time"
                            value={ecgEvaluation.evaluatedBy.time}
                            onChange={(value) => setEcgEvaluation(prev => ({
                              ...prev,
                              evaluatedBy: { ...prev.evaluatedBy, time: value }
                            }))}
                            step="1"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sample Collection</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Sample</th>
                    <th className="px-4 py-2 text-left">Sample Type</th>
                    <th className="px-4 py-2 text-left">Volume (in ml)</th>
                    <th className="px-4 py-2 text-left">Collection Time</th>
                    <th className="px-4 py-2 text-left">Collection Date</th>
                    <th className="px-4 py-2 text-left">Done by (Sign & Date)</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCollections.map((sample, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">
                        <FormField
                          value={sample.sample}
                          onChange={(value) => updateSampleCollection(index, 'sample', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={sample.sampleType}
                          onChange={(value) => updateSampleCollection(index, 'sampleType', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={sample.volume}
                          onChange={(value) => updateSampleCollection(index, 'volume', value)}
                          type="number"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          type="time"
                          value={sample.collectionTime}
                          onChange={(value) => updateSampleCollection(index, 'collectionTime', value)}
                          step="1"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          type="date"
                          value={sample.collectionDate}
                          onChange={(value) => updateSampleCollection(index, 'collectionDate', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="space-y-2">
                          <FormField
                            value={sample.doneBy.name}
                            onChange={(value) => updateSampleCollectionSignature(index, 'name', value)}
                            placeholder="Name"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <FormField
                              type="date"
                              value={sample.doneBy.date}
                              onChange={(value) => updateSampleCollectionSignature(index, 'date', value)}
                            />
                            <FormField
                              type="time"
                              value={sample.doneBy.time}
                              onChange={(value) => updateSampleCollectionSignature(index, 'time', value)}
                              step="1"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addSampleCollection}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Sample
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Screening Lab Reports Evaluation</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Srl No.</th>
                    <th className="px-4 py-2 text-left">Test</th>
                    <th className="px-4 py-2 text-left">Done by (Sign & Date)</th>
                    <th className="px-4 py-2 text-center">Normal</th>
                    <th className="px-4 py-2 text-center">Ab Normal</th>
                    <th className="px-4 py-2 text-center">CNS</th>
                    <th className="px-4 py-2 text-center">CS</th>
                    <th className="px-4 py-2 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {labReports.map((report, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{report.test}</td>
                      <td className="px-4 py-2">
                        <div className="space-y-2">
                          <FormField
                            value={report.doneBy.name}
                            onChange={(value) => updateLabReportSignature(index, 'name', value)}
                            placeholder="Name"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <FormField
                              type="date"
                              value={report.doneBy.date}
                              onChange={(value) => updateLabReportSignature(index, 'date', value)}
                            />
                            <FormField
                              type="time"
                              value={report.doneBy.time}
                              onChange={(value) => updateLabReportSignature(index, 'time', value)}
                              step="1"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.normal}
                          onChange={(e) => updateLabReport(index, 'normal', e.target.checked)}
                          className="form-checkbox h-5 w-5"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.abnormal}
                          onChange={(e) => updateLabReport(index, 'abnormal', e.target.checked)}
                          className="form-checkbox h-5 w-5"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.cns}
                          onChange={(e) => updateLabReport(index, 'cns', e.target.checked)}
                          className="form-checkbox h-5 w-5"
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.cs}
                          onChange={(e) => updateLabReport(index, 'cs', e.target.checked)}
                          className="form-checkbox h-5 w-5"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={report.remarks}
                          onChange={(value) => updateLabReport(index, 'remarks', value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                After review of the volunteer medical screening record and screening investigations, the volunteer is
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="fit"
                    checked={finalEvaluation.isEligible}
                    onChange={() => setFinalEvaluation(prev => ({ ...prev, isEligible: true }))}
                    className="form-radio h-4 w-4"
                  />
                  <label htmlFor="fit" className="text-sm">fit for study participation</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="not-fit"
                    checked={!finalEvaluation.isEligible}
                    onChange={() => setFinalEvaluation(prev => ({ ...prev, isEligible: false }))}
                    className="form-radio h-4 w-4"
                  />
                  <label htmlFor="not-fit" className="text-sm">not fit for study participation</label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">If No, Specify :</h3>
              <FormField
                value={finalEvaluation.specification}
                onChange={(value) => setFinalEvaluation(prev => ({ ...prev, specification: value }))}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Comments :</h3>
              <FormField
                value={finalEvaluation.comments}
                onChange={(value) => setFinalEvaluation(prev => ({ ...prev, comments: value }))}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Completed by :</h3>
              <div className="space-y-2">
                <FormField
                  value={finalEvaluation.completedBy.name}
                  onChange={(value) => setFinalEvaluation(prev => ({
                    ...prev,
                    completedBy: { ...prev.completedBy, name: value }
                  }))}
                  placeholder="Name"
                />
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    type="date"
                    value={finalEvaluation.completedBy.date}
                    onChange={(value) => setFinalEvaluation(prev => ({
                      ...prev,
                      completedBy: { ...prev.completedBy, date: value }
                    }))}
                  />
                  <FormField
                    type="time"
                    value={finalEvaluation.completedBy.time}
                    onChange={(value) => setFinalEvaluation(prev => ({
                      ...prev,
                      completedBy: { ...prev.completedBy, time: value }
                    }))}
                    step="1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}