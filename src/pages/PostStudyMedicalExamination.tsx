import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface SystemicExamItem {
  system: string;
  normal: boolean;
  abnormal: boolean;
  observations: string;
}

interface VitalSign {
  date: string;
  temperature: string;
  respirationRate: string;
  pulseRate: string;
  bloodPressure: string;
  actualTime: string;
  checkedBy: SignatureData;
}

interface ExaminationTest {
  name: string;
  evaluation: string;
  remarks: string;
  doneBy: string;
}

export const PostStudyMedicalExamination = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '',
    crbVersion: '02',
    date: '18 Dec 2024',
    subjectNo: '',
    presentComplaints: null as boolean | null,
    complaintsSpecify: '',
    generalAppearance: {
      normal: false,
      abnormal: false,
      observations: ''
    },
    systemicExamination: [
      { system: 'Cardiovascular System', normal: false, abnormal: false, observations: '' },
      { system: 'ENT and Respiratory', normal: false, abnormal: false, observations: '' },
      { system: 'Abdominal and Genitourinary System', normal: false, abnormal: false, observations: '' },
      { system: 'Central Nervous System', normal: false, abnormal: false, observations: '' },
      { system: 'Skin and Musculoskeletal system', normal: false, abnormal: false, observations: '' }
    ] as SystemicExamItem[],
    remarks: '',
    doneBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData,
    vitals: {
      date: '',
      temperature: '',
      respirationRate: '',
      pulseRate: '',
      bloodPressure: '',
      actualTime: '',
      checkedBy: {
        name: '',
        date: '',
        time: ''
      }
    } as VitalSign,
    pregnancyTest: null as boolean | null,
    otherTest: '',
    examinations: [] as ExaminationTest[]
  });

  const updateGeneralAppearance = (field: keyof typeof formData.generalAppearance, value: any) => {
    if (field === 'normal' && value === true) {
      setFormData(prev => ({
        ...prev,
        generalAppearance: { ...prev.generalAppearance, normal: true, abnormal: false }
      }));
    } else if (field === 'abnormal' && value === true) {
      setFormData(prev => ({
        ...prev,
        generalAppearance: { ...prev.generalAppearance, normal: false, abnormal: true }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        generalAppearance: { ...prev.generalAppearance, [field]: value }
      }));
    }
  };

  const updateSystemicExam = (index: number, field: keyof SystemicExamItem, value: any) => {
    setFormData(prev => ({
      ...prev,
      systemicExamination: prev.systemicExamination.map((item, i) => {
        if (i !== index) return item;
        
        if (field === 'normal' && value === true) {
          return { ...item, normal: true, abnormal: false };
        } else if (field === 'abnormal' && value === true) {
          return { ...item, normal: false, abnormal: true };
        } else {
          return { ...item, [field]: value };
        }
      })
    }));
  };

  const addExamination = () => {
    setFormData(prev => ({
      ...prev,
      examinations: [...prev.examinations, { name: '', evaluation: '', remarks: '', doneBy: '' }]
    }));
  };

  const updateExamination = (index: number, field: keyof ExaminationTest, value: string) => {
    setFormData(prev => ({
      ...prev,
      examinations: prev.examinations.map((exam, i) => 
        i === index ? { ...exam, [field]: value } : exam
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
            <p className="text-sm text-right">Page 1 of 2</p>
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

        <div className="border p-4 rounded-lg">
          <h3 className="text-center font-bold mb-4">POST STUDY SAFETY EVALUATION<br />MEDICAL EXAMINATION</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span>Present complaints:</span>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.presentComplaints === true}
                      onChange={() => setFormData(prev => ({ ...prev, presentComplaints: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.presentComplaints === false}
                      onChange={() => setFormData(prev => ({ ...prev, presentComplaints: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              {formData.presentComplaints && (
                <div className="ml-4">
                  <FormField
                    label="If Yes Specify:"
                    value={formData.complaintsSpecify}
                    onChange={(value) => setFormData(prev => ({ ...prev, complaintsSpecify: value }))}
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Medical Examination:</label>
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left border-r">System</th>
                    <th className="px-4 py-2 text-center" colSpan={2}>Status</th>
                    <th className="px-4 py-2 text-left">Observations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 border-r">General appearance</td>
                    <td className="px-4 py-2 text-center border-r">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.generalAppearance.normal}
                          onChange={() => updateGeneralAppearance('normal', true)}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Normal</span>
                      </label>
                    </td>
                    <td className="px-4 py-2 text-center border-r">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.generalAppearance.abnormal}
                          onChange={() => updateGeneralAppearance('abnormal', true)}
                          className="form-checkbox"
                        />
                        <span className="ml-2">Abnormal</span>
                      </label>
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={formData.generalAppearance.observations}
                        onChange={(e) => updateGeneralAppearance('observations', e.target.value)}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 border-r" colSpan={4}>
                      <p className="font-medium">Systemic examination which includes the examination of the following systems</p>
                    </td>
                  </tr>
                  {formData.systemicExamination.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 border-r">{item.system}</td>
                      <td className="px-4 py-2 text-center border-r">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={item.normal}
                            onChange={() => updateSystemicExam(index, 'normal', true)}
                            className="form-checkbox"
                          />
                          <span className="ml-2">Normal</span>
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center border-r">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={item.abnormal}
                            onChange={() => updateSystemicExam(index, 'abnormal', true)}
                            className="form-checkbox"
                          />
                          <span className="ml-2">Abnormal</span>
                        </label>
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={item.observations}
                          onChange={(e) => updateSystemicExam(index, 'observations', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-600">Please tick ☑ appropriate boxes; if abnormal, specify in remarks.</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Remarks:</label>
              <textarea
                value={formData.remarks}
                onChange={(e) => setFormData(prev => ({ ...prev, remarks: e.target.value }))}
                className="w-full p-2 border rounded"
                rows={2}
              />
            </div>

            <SignatureFields
              label="Done By (Sign & Date):"
              value={formData.doneBy}
              onChange={(value) => setFormData(prev => ({ ...prev, doneBy: value }))}
            />

            <div className="space-y-4">
              <h3 className="font-medium">Vitals:</h3>
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left border-r">Date</th>
                    <th className="px-4 py-2 text-left border-r">Temp (°F)</th>
                    <th className="px-4 py-2 text-left border-r">Respiratory rate(/min)</th>
                    <th className="px-4 py-2 text-left border-r">Pulse rate (per min)</th>
                    <th className="px-4 py-2 text-left border-r">Blood Pressure (mm of Hg)</th>
                    <th className="px-4 py-2 text-left border-r">Actual time (Hrs)</th>
                    <th className="px-4 py-2 text-left">Checked by (Sign and Date)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="date"
                        value={formData.vitals.date}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, date: e.target.value }
                        }))}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={formData.vitals.temperature}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, temperature: e.target.value }
                        }))}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={formData.vitals.respirationRate}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, respirationRate: e.target.value }
                        }))}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={formData.vitals.pulseRate}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, pulseRate: e.target.value }
                        }))}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="text"
                        value={formData.vitals.bloodPressure}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, bloodPressure: e.target.value }
                        }))}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border-r">
                      <input
                        type="time"
                        value={formData.vitals.actualTime}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, actualTime: e.target.value }
                        }))}
                        className="w-full p-1 border rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <SignatureFields
                        value={formData.vitals.checkedBy}
                        onChange={(value) => setFormData(prev => ({
                          ...prev,
                          vitals: { ...prev.vitals, checkedBy: value }
                        }))}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span>Serum pregnancy test for female as per protocol:</span>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.pregnancyTest === true}
                      onChange={() => setFormData(prev => ({ ...prev, pregnancyTest: true }))}
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.pregnancyTest === false}
                      onChange={() => setFormData(prev => ({ ...prev, pregnancyTest: false }))}
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={formData.pregnancyTest === null}
                      onChange={() => setFormData(prev => ({ ...prev, pregnancyTest: null }))}
                      className="form-radio"
                    />
                    <span className="ml-2">NA</span>
                  </label>
                </div>
              </div>
              <FormField
                label="Any other test:"
                value={formData.otherTest}
                onChange={(value) => setFormData(prev => ({ ...prev, otherTest: value }))}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Examinations:</h3>
                <button
                  type="button"
                  onClick={addExamination}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Examination
                </button>
              </div>
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left border-r">Name of the Examination/test</th>
                    <th className="px-4 py-2 text-left border-r">Evaluation</th>
                    <th className="px-4 py-2 text-left border-r">Remarks</th>
                    <th className="px-4 py-2 text-left">Done by</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.examinations.map((exam, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 border-r">
                        <input
                          type="text"
                          value={exam.name}
                          onChange={(e) => updateExamination(index, 'name', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border-r">
                        <input
                          type="text"
                          value={exam.evaluation}
                          onChange={(e) => updateExamination(index, 'evaluation', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border-r">
                        <input
                          type="text"
                          value={exam.remarks}
                          onChange={(e) => updateExamination(index, 'remarks', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={exam.doneBy}
                          onChange={(e) => updateExamination(index, 'doneBy', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};