import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface MedicalHistoryItem {
  particulars: string;
  yesNo: string;
  remarks: string;
}

interface FamilyHistoryItem {
  disease: string;
  yesNo: string;
  remarks: string;
}

interface AllergyItem {
  type: string;
  yesNo: string;
  remarks: string;
}

const yesNoOptions = ['Yes', 'No'];

const initialMedicalHistory: MedicalHistoryItem[] = [
  { particulars: 'Any present History', yesNo: '', remarks: '' },
  { particulars: 'Any relevant / past medical History', yesNo: '', remarks: '' },
  { particulars: 'Surgical History', yesNo: '', remarks: '' },
  { particulars: 'Past Medication', yesNo: '', remarks: '' },
];

const initialFamilyHistory: FamilyHistoryItem[] = [
  { disease: 'Hypertension', yesNo: '', remarks: '' },
  { disease: 'Diabetes Mellitus', yesNo: '', remarks: '' },
  { disease: 'Bleeding Disorder', yesNo: '', remarks: '' },
  { disease: 'Epilepsy', yesNo: '', remarks: '' },
  { disease: 'Bronchial Asthma', yesNo: '', remarks: '' },
  { disease: 'Jaundice', yesNo: '', remarks: '' },
  { disease: 'Renal Disease', yesNo: '', remarks: '' },
  { disease: 'Neurological Disease', yesNo: '', remarks: '' },
  { disease: 'Tuberculosis', yesNo: '', remarks: '' },
  { disease: 'Thyroid Disease', yesNo: '', remarks: '' },
  { disease: 'Other (Specify)', yesNo: '', remarks: '' },
];

const initialAllergies: AllergyItem[] = [
  { type: 'Food Allergy', yesNo: '', remarks: '' },
  { type: 'Drug Allergy', yesNo: '', remarks: '' },
  { type: 'Allergy to animal', yesNo: '', remarks: '' },
];

export const MedicalHistory = () => {
  const { volunteerId } = useVolunteer();
  const [medicalHistory, setMedicalHistory] = useState(initialMedicalHistory);
  const [familyHistory, setFamilyHistory] = useState(initialFamilyHistory);
  const [allergies, setAllergies] = useState(initialAllergies);
  const [generalRemarks, setGeneralRemarks] = useState('');

  const updateMedicalHistory = (index: number, field: keyof MedicalHistoryItem, value: string) => {
    setMedicalHistory(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updateFamilyHistory = (index: number, field: keyof FamilyHistoryItem, value: string) => {
    setFamilyHistory(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updateAllergies = (index: number, field: keyof AllergyItem, value: string) => {
    setAllergies(prev => prev.map((item, i) => 
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
          <div className="text-right text-sm text-gray-700">Page 2 of 6</div>
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
            <h3 className="section-title">Medical History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sl.No.</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Particulars</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Yes / No</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalHistory.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{item.particulars}</td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={yesNoOptions}
                          value={item.yesNo}
                          onChange={(value) => updateMedicalHistory(index, 'yesNo', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updateMedicalHistory(index, 'remarks', value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <FormField
                label="Remarks"
                value={generalRemarks}
                onChange={setGeneralRemarks}
              />
            </div>
          </div>

          <div>
            <h3 className="section-title">Family History</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sl.No.</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type of diseases</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Yes / No</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {familyHistory.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{item.disease}</td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={yesNoOptions}
                          value={item.yesNo}
                          onChange={(value) => updateFamilyHistory(index, 'yesNo', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updateFamilyHistory(index, 'remarks', value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="section-title">History of Allergies</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sl.No.</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type of allergy</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Yes / No</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {allergies.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{item.type}</td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={yesNoOptions}
                          value={item.yesNo}
                          onChange={(value) => updateAllergies(index, 'yesNo', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updateAllergies(index, 'remarks', value)}
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