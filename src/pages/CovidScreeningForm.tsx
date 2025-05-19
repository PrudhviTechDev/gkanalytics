import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface HistoryItem {
  question: string;
  answer: boolean | null;
}

export const CovidScreeningForm = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    safetyManualNo: 'SM-001',
    volunteerName: '',
    projectNo: '',
    periodNo: '',
    subjectNo: '',
    screeningType: '',
    otherScreeningType: '',
    temperature: '',
    temperatureStatus: '',
    historyItems: [
      { question: 'Have you been quarantined by the public health authorities for COVID-19 in last 14 days?', answer: null },
      { question: 'Any History of fever?', answer: null },
      { question: 'Any history of sore throat and Cough?', answer: null },
      { question: 'Any history of cold/Sneezing/Runny Nose?', answer: null },
      { question: 'Any history of Respiratory Distress?', answer: null },
      { question: 'Any history loss of taste and smell?', answer: null },
      { 
        question: 'Are your family members suffering from any of the symptoms like fever/ Cough/ cold/Sneezing/Runny Nose/ sore throat/ Respiratory Distress?',
        answer: null 
      }
    ],
    abnormalityObserved: null,
    covidSymptoms: null,
    eligibleForActivity: null,
    comments: '',
    screenedBy: '',
    screeningDate: '',
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateHistoryItem = (index: number, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      historyItems: prev.historyItems.map((item, i) => 
        i === index ? { ...item, answer: value } : item
      )
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">Clians</h1>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold">CORONAVIRUS DISEASE (COVID-19) SYMPTOMS</h2>
            <h3 className="text-md">SCREENING PROCEDURE FOR VOLUNTEERS/SUBJECTS</h3>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-sm">
            <p>SAFETY MANUAL NO.</p>
          </div>
          <div className="text-sm">
            <p>{formData.safetyManualNo}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Volunteer ID., VID-"
            value={volunteerId}
            onChange={() => {}}
            disabled
          />
          <FormField
            label="Name of the Volunteer"
            value={formData.volunteerName}
            onChange={(value) => updateForm('volunteerName', value)}
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project No.</label>
            <div className="mt-1">
              <FormField
                value={formData.projectNo}
                onChange={(value) => updateForm('projectNo', value)}
              />
              <span className="text-xs text-gray-500">(If applicable)</span>
            </div>
          </div>
          <FormField
            label="Period No."
            value={formData.periodNo}
            onChange={(value) => updateForm('periodNo', value)}
          />
          <FormField
            label="Subject No."
            value={formData.subjectNo}
            onChange={(value) => updateForm('subjectNo', value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex gap-4 items-center">
            {['Screening', 'Check in', 'check out', 'Post study safety'].map((type) => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.screeningType === type}
                  onChange={() => updateForm('screeningType', type)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">{type}</span>
              </label>
            ))}
            <div className="flex items-center gap-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.screeningType === 'Others'}
                  onChange={() => updateForm('screeningType', 'Others')}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Others:</span>
              </label>
              <input
                type="text"
                className="input-field"
                value={formData.otherScreeningType}
                onChange={(e) => updateForm('otherScreeningType', e.target.value)}
                disabled={formData.screeningType !== 'Others'}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium">Temperature recorded by IR Thermometer is _____ °F</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.temperatureStatus === 'Normal'}
                  onChange={() => updateForm('temperatureStatus', 'Normal')}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Normal</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.temperatureStatus === 'Abnormal'}
                  onChange={() => updateForm('temperatureStatus', 'Abnormal')}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Abnormal</span>
              </label>
            </div>
          </div>
          <FormField
            type="number"
            value={formData.temperature}
            onChange={(value) => updateForm('temperature', value)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">HISTORY</h3>
          <table className="w-full">
            <tbody>
              {formData.historyItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 pr-4">{item.question}</td>
                  <td className="py-3 w-32">
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={item.answer === true}
                          onChange={() => updateHistoryItem(index, true)}
                          className="form-checkbox h-4 w-4"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={item.answer === false}
                          onChange={() => updateHistoryItem(index, false)}
                          className="form-checkbox h-4 w-4"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span>Any abnormality observed on examination:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.abnormalityObserved === true}
                  onChange={() => updateForm('abnormalityObserved', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">YES</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.abnormalityObserved === false}
                  onChange={() => updateForm('abnormalityObserved', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">NO</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span>Any symptoms/signs of COVID-19:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.covidSymptoms === true}
                  onChange={() => updateForm('covidSymptoms', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">YES</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.covidSymptoms === false}
                  onChange={() => updateForm('covidSymptoms', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">NO</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span>Volunteer is eligible for further activity:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.eligibleForActivity === true}
                  onChange={() => updateForm('eligibleForActivity', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">YES</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.eligibleForActivity === false}
                  onChange={() => updateForm('eligibleForActivity', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">NO</span>
              </label>
            </div>
          </div>
        </div>

        <FormField
          label="Comments:"
          value={formData.comments}
          onChange={(value) => updateForm('comments', value)}
        />

        <div className="space-y-2">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <FormField
                label="COVID-19 Screening done by (Physician):"
                value={formData.screenedBy}
                onChange={(value) => updateForm('screenedBy', value)}
                required
              />
            </div>
            <div className="text-sm text-gray-500 mb-2">(Sign and Date)</div>
          </div>
        </div>

        <div className="text-sm text-gray-500">ATTACHMENT NO-3</div>
      </div>
    </div>
  );
};