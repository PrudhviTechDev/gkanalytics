import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface ECGEvaluation {
  takenBy: string;
  normal: boolean;
  abnormal: boolean;
  remarks: string;
  evaluatedBy: string;
}

interface SampleCollection {
  sample: string;
  sampleType: string;
  volume: string;
  collectionTime: string;
  collectionDate: string;
  doneBy: string;
}

interface XRayEvaluation {
  takenBy: string;
  normal: boolean;
  abnormal: boolean;
  remarks: string;
  evaluatedBy: string;
}

interface LabReport {
  test: string;
  doneBy: string;
  normal: boolean;
  abnormal: boolean;
  cns: boolean;
  cs: boolean;
  remarks: string;
}

const initialLabReports: LabReport[] = [
  { test: 'Haematology', doneBy: '', normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
  { test: 'Biochemistry', doneBy: '', normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
  { test: 'Urine Analysis', doneBy: '', normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
  { test: 'Serology', doneBy: '', normal: false, abnormal: false, cns: false, cs: false, remarks: '' },
];

export const Evaluations = () => {
  const { volunteerId } = useVolunteer();
  const [ecgEvaluation, setEcgEvaluation] = useState<ECGEvaluation>({
    takenBy: '',
    normal: false,
    abnormal: false,
    remarks: '',
    evaluatedBy: '',
  });

  const [sampleCollections, setSampleCollections] = useState<SampleCollection[]>([{
    sample: '',
    sampleType: '',
    volume: '',
    collectionTime: '',
    collectionDate: '',
    doneBy: '',
  }]);

  const [xrayEvaluation, setXrayEvaluation] = useState<XRayEvaluation>({
    takenBy: '',
    normal: false,
    abnormal: false,
    remarks: '',
    evaluatedBy: '',
  });

  const [labReports, setLabReports] = useState(initialLabReports);

  // Final Evaluation States
  const [isParticipationFit, setIsParticipationFit] = useState(true);
  const [specification, setSpecification] = useState('');
  const [comments, setComments] = useState('');
  const [completedBy, setCompletedBy] = useState('');

  const addSampleCollection = () => {
    setSampleCollections(prev => [...prev, {
      sample: '',
      sampleType: '',
      volume: '',
      collectionTime: '',
      collectionDate: '',
      doneBy: '',
    }]);
  };

  const updateSampleCollection = (index: number, field: keyof SampleCollection, value: string) => {
    setSampleCollections(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updateLabReport = (index: number, field: keyof LabReport, value: boolean | string) => {
    setLabReports(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="form-container">
      <div className="form-header mb-8">
        <div className="flex items-start justify-between">
          <div className="logo-section">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="flex-1 text-center px-4">
            <h2 className="text-xl font-bold uppercase">Volunteer Medical Screening Record</h2>
          </div>
          <div className="text-right text-sm text-gray-700">Page 5 of 5</div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="border-b pb-4">
          <FormField
            label="VOLUNTEER ID"
            value={volunteerId}
            disabled
            onChange={() => {}}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="section-title">ECG Evaluation</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Test</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Taken by (Sign & Date)</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700" colSpan={2}>Evaluation Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Evaluated by (Sign & Date)</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th></th>
                    <th></th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Normal</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Abnormal</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 text-sm">ECG</td>
                    <td className="px-4 py-2">
                      <FormField
                        value={ecgEvaluation.takenBy}
                        onChange={(value) => setEcgEvaluation(prev => ({ ...prev, takenBy: value }))}
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={ecgEvaluation.normal}
                        onChange={(e) => setEcgEvaluation(prev => ({ ...prev, normal: e.target.checked }))}
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={ecgEvaluation.abnormal}
                        onChange={(e) => setEcgEvaluation(prev => ({ ...prev, abnormal: e.target.checked }))}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <FormField
                        value={ecgEvaluation.remarks}
                        onChange={(value) => setEcgEvaluation(prev => ({ ...prev, remarks: value }))}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <FormField
                        value={ecgEvaluation.evaluatedBy}
                        onChange={(value) => setEcgEvaluation(prev => ({ ...prev, evaluatedBy: value }))}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="section-title">Sample Collection</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sample</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sample Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Volume (in ml)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Collection Time (Hrs.)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Collection Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Done by (Sign & Date)</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCollections.map((sample, index) => (
                    <tr key={index} className="border-b">
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
                          type="number"
                          value={sample.volume}
                          onChange={(value) => updateSampleCollection(index, 'volume', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          type="time"
                          value={sample.collectionTime}
                          onChange={(value) => updateSampleCollection(index, 'collectionTime', value)}
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
                        <FormField
                          value={sample.doneBy}
                          onChange={(value) => updateSampleCollection(index, 'doneBy', value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addSampleCollection}
                className="mt-4 btn-secondary"
              >
                Add Sample
              </button>
            </div>
          </div>

          <div>
            <h3 className="section-title">X-ray Evaluation</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Test</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Taken by (Sign & Date)</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700" colSpan={2}>Evaluation Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Evaluated by (Sign & Date)</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th></th>
                    <th></th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Normal</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Abnormal</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 text-sm">X-ray</td>
                    <td className="px-4 py-2">
                      <FormField
                        value={xrayEvaluation.takenBy}
                        onChange={(value) => setXrayEvaluation(prev => ({ ...prev, takenBy: value }))}
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={xrayEvaluation.normal}
                        onChange={(e) => setXrayEvaluation(prev => ({ ...prev, normal: e.target.checked }))}
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={xrayEvaluation.abnormal}
                        onChange={(e) => setXrayEvaluation(prev => ({ ...prev, abnormal: e.target.checked }))}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <FormField
                        value={xrayEvaluation.remarks}
                        onChange={(value) => setXrayEvaluation(prev => ({ ...prev, remarks: value }))}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <FormField
                        value={xrayEvaluation.evaluatedBy}
                        onChange={(value) => setXrayEvaluation(prev => ({ ...prev, evaluatedBy: value }))}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="section-title">Screening Lab Reports Evaluation</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Srl No.</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Test</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Done by (Sign & Date)</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Normal</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Ab Normal</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">CNS</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">CS</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {labReports.map((report, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{report.test}</td>
                      <td className="px-4 py-2">
                        <FormField
                          value={report.doneBy}
                          onChange={(value) => updateLabReport(index, 'doneBy', value)}
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.normal}
                          onChange={(e) => updateLabReport(index, 'normal', e.target.checked)}
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.abnormal}
                          onChange={(e) => updateLabReport(index, 'abnormal', e.target.checked)}
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.cns}
                          onChange={(e) => updateLabReport(index, 'cns', e.target.checked)}
                        />
                      </td>
                      <td className="px-4 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={report.cs}
                          onChange={(e) => updateLabReport(index, 'cs', e.target.checked)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={report.remarks}
                          onChange={(value) => updateLabReport(index, 'remarks', value.toString())}
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
                    checked={isParticipationFit}
                    onChange={() => setIsParticipationFit(true)}
                    className="form-radio"
                  />
                  <label htmlFor="fit" className="text-sm">fit for study participation</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="not-fit"
                    checked={!isParticipationFit}
                    onChange={() => setIsParticipationFit(false)}
                    className="form-radio"
                  />
                  <label htmlFor="not-fit" className="text-sm">not fit for study participation</label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">If No, Specify :</h3>
              <FormField
                value={specification}
                onChange={setSpecification}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Comments :</h3>
              <FormField
                value={comments}
                onChange={setComments}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Completed by :</h3>
              <FormField
                value={completedBy}
                onChange={setCompletedBy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evaluations;