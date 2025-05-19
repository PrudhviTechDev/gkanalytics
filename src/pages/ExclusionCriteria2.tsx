import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';

interface ExclusionCriterion {
  criterion: string;
  response: 'Yes' | 'No' | 'NA' | null;
}

export const ExclusionCriteria2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    sopNumber: 'FPL-003',
    studyNo: '079-24',
    periodNo: '02',
    subjectNumber: '',
    version: '02',
    date: '',
    criteria: [
      {
        criterion: 'Systolic Blood pressure > 90 mmHg and >140 mmHg.\nDiastolic Blood pressure > 60 mmHg and > 90 mmHg.',
        response: null
      },
      {
        criterion: 'Body temperature below 96.5° F or above 98.9°F and Pulse rate below 60/min or above 100/min and respiration rate below 12 breaths/minute or above 20 breaths/minute.',
        response: null
      },
      {
        criterion: 'Suffering from diarrhea, vomiting or any other reason within a period of 24.0 hours prior to study check-in.',
        response: null
      },
      {
        criterion: 'Donation of blood and participation in any clinical study after check out/last visit.',
        response: null
      },
      {
        criterion: 'Any general illness since the check out/last visit.',
        response: null
      },
      {
        criterion: 'Consumption of any xanthine containing food and beverages (chocolates, tea, coffee or soft drinks) since the check out/last visit.',
        response: null
      },
      {
        criterion: 'Consumption of alcohol, alcoholic products and recreational drugs since the check out/last visit.',
        response: null
      },
      {
        criterion: 'Consumption of grapefruit juice since the check out/last visit.',
        response: null
      },
      {
        criterion: 'Positive results for drugs of abuse (benzodiazepines, opioids, cannabinoids, cannabinoids, cocaine and barbiturates) in urine during check in.',
        response: null
      },
      {
        criterion: 'Positive results for alcohol breathe analysis or Urine alcohol test during check-in.',
        response: null
      },
      {
        criterion: 'Received any prescription drugs or over the counter drugs (OTC) (e.g.: Cold and cough preparations, vitamins, minerals and natural products used for therapeutic benefits) after check-out/last visit.',
        response: null
      },
      {
        criterion: 'If the depression assessment scale score is positive.',
        response: null
      },
      {
        criterion: 'Female Subjects who are pregnant, currently breast-feeding or who are likely to become pregnant during the study.',
        response: null
      },
      {
        criterion: 'Female Subject demonstrating a positive pregnancy test.',
        response: null
      }
    ] as ExclusionCriterion[],
    isEligible: null as boolean | null,
    specifyReasons: '',
    evaluatedBy: {
      name: '',
      date: '',
      time: ''
    },
    verifiedBy: {
      name: '',
      date: '',
      time: ''
    }
  });

  const updateCriterion = (index: number, response: 'Yes' | 'No' | 'NA') => {
    setFormData(prev => ({
      ...prev,
      criteria: prev.criteria.map((item, i) => 
        i === index ? { ...item, response } : item
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
              <span className="text-sm font-medium">SOP Number: </span>
              <span className="text-sm">{formData.sopNumber}</span>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">EXCLUSION CRITERIA</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-medium">Study No:</span>
              <span>{formData.studyNo}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Period No:</span>
              <span>{formData.periodNo}</span>
            </div>
          </div>
          <FormField
            label="Subject Number:"
            value={formData.subjectNumber}
            onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
          />
        </div>

        <div className="border-t border-b py-4">
          <div className="italic mb-4">
            Gabapentin enacarbil extended-release tablets 600 mg Fed BE Study
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2">
              <span className="font-medium">Version No.:</span>
              <span>{formData.version}</span>
            </div>
            <FormField
              label="Date:"
              type="date"
              value={formData.date}
              onChange={(value) => setFormData(prev => ({ ...prev, date: value }))}
            />
          </div>
        </div>

        <div className="space-y-4">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">S. No.</th>
                <th className="px-4 py-2 text-left">Exclusion Criteria</th>
                <th className="px-4 py-2 text-center">Yes</th>
                <th className="px-4 py-2 text-center">No</th>
                <th className="px-4 py-2 text-center">NA</th>
              </tr>
            </thead>
            <tbody>
              {formData.criteria.map((criterion, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{index + 1}.</td>
                  <td className="px-4 py-2 whitespace-pre-line">{criterion.criterion}</td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="radio"
                      checked={criterion.response === 'Yes'}
                      onChange={() => updateCriterion(index, 'Yes')}
                      className="form-radio"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="radio"
                      checked={criterion.response === 'No'}
                      onChange={() => updateCriterion(index, 'No')}
                      className="form-radio"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="radio"
                      checked={criterion.response === 'NA'}
                      onChange={() => updateCriterion(index, 'NA')}
                      className="form-radio"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <p className="text-sm">Please tick (✓) in appropriate boxes.</p>
          
          <div className="flex items-center gap-8">
            <span>Subject is eligible for check-in:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.isEligible === true}
                  onChange={() => setFormData(prev => ({ ...prev, isEligible: true }))}
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.isEligible === false}
                  onChange={() => setFormData(prev => ({ ...prev, isEligible: false }))}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">If No, specify the reasons:</label>
            <textarea
              value={formData.specifyReasons}
              onChange={(e) => setFormData(prev => ({ ...prev, specifyReasons: e.target.value }))}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <SignatureFields
              label="Evaluated By (Sign & Date):"
              value={formData.evaluatedBy}
              onChange={(value) => setFormData(prev => ({ ...prev, evaluatedBy: value }))}
            />
            <div className="text-sm text-gray-500 text-center">(Physician/Designee)</div>
          </div>

          <div className="space-y-4">
            <SignatureFields
              label="Verified By (Sign & Date):"
              value={formData.verifiedBy}
              onChange={(value) => setFormData(prev => ({ ...prev, verifiedBy: value }))}
            />
            <div className="text-sm text-gray-500 text-center">(Investigator/Designee)</div>
          </div>

          <div className="text-sm text-gray-500">Annexure No.-03</div>
        </div>
      </div>
    </div>
  );
};