import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface SystemicExamItem {
  site: string;
  normal: string;
  abnormal: string;
  remarks: string;
}

interface FemaleVolunteerItem {
  particulars: string;
  remarks: string;
}

const normalAbnormalOptions = ['Normal', 'Abnormal'];

const initialSystemicExam: SystemicExamItem[] = [
  { site: 'Cardio vascular system', normal: '', abnormal: '', remarks: '' },
  { site: 'ENT and respiratory system', normal: '', abnormal: '', remarks: '' },
  { site: 'Abdominal and genitourinary system', normal: '', abnormal: '', remarks: '' },
  { site: 'Central nervous system', normal: '', abnormal: '', remarks: '' },
  { site: 'Skin and musculoskeletal system', normal: '', abnormal: '', remarks: '' },
];

const initialFemaleVolunteer: FemaleVolunteerItem[] = [
  { particulars: 'Marital Status', remarks: '' },
  { particulars: 'No of Children', remarks: '' },
  { particulars: 'Did you attain menarche', remarks: '' },
  { particulars: 'Menstrual cycle', remarks: '' },
  { particulars: 'Menstrual flow', remarks: '' },
  { particulars: 'Did you attain menopause', remarks: '' },
  { particulars: 'Are you Pregnant', remarks: '' },
  { particulars: 'Are you lactating', remarks: '' },
  { particulars: 'History of sterilization', remarks: '' },
  { particulars: 'Using any contraception', remarks: '' },
  { particulars: 'Is the volunteer under any Hormone replacement Therapy', remarks: '' },
  { particulars: 'History of Others', remarks: '' },
];

export const SystemicExamination = () => {
  const { volunteerId } = useVolunteer();
  const [systemicExam, setSystemicExam] = useState(initialSystemicExam);
  const [femaleVolunteer, setFemaleVolunteer] = useState(initialFemaleVolunteer);
  const [otherRemarks, setOtherRemarks] = useState('');
  const [doneBy, setDoneBy] = useState('');

  const updateSystemicExam = (index: number, field: keyof SystemicExamItem, value: string) => {
    setSystemicExam(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updateFemaleVolunteer = (index: number, value: string) => {
    setFemaleVolunteer(prev => prev.map((item, i) => 
      i === index ? { ...item, remarks: value } : item
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
          <div className="text-right text-sm text-gray-700">Page 4 of 6</div>
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
            <h3 className="section-title">Systemic Examination</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Site</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Normal</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Abnormal</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {systemicExam.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{item.site}</td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={normalAbnormalOptions}
                          value={item.normal}
                          onChange={(value) => updateSystemicExam(index, 'normal', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={normalAbnormalOptions}
                          value={item.abnormal}
                          onChange={(value) => updateSystemicExam(index, 'abnormal', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updateSystemicExam(index, 'remarks', value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Other :</h3>
            <FormField
              value={otherRemarks}
              onChange={setOtherRemarks}
            />
          </div>

          <div>
            <h3 className="section-title">For female volunteer</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Srl No.</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Particulars</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {femaleVolunteer.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{item.particulars}</td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updateFemaleVolunteer(index, value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Done by :</h3>
            <FormField
              value={doneBy}
              onChange={setDoneBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};