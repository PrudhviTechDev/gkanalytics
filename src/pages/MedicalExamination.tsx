import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface GeneralExaminationItem {
  site: string;
  yesNo: string;
  remarks: string;
}

interface PhysicalExaminationItem {
  site: string;
  normal: string;
  abnormality: string;
  remarks: string;
}

const yesNoOptions = ['Yes', 'No'];

const initialGeneralExamination: GeneralExaminationItem[] = [
  { site: 'Pallor', yesNo: '', remarks: '' },
  { site: 'Cyanosis', yesNo: '', remarks: '' },
  { site: 'Lymphadenopathy', yesNo: '', remarks: '' },
];

const initialPhysicalExamination: PhysicalExaminationItem[] = [
  { site: 'Head', normal: '', abnormality: '', remarks: '' },
  { site: 'Eyes', normal: '', abnormality: '', remarks: '' },
  { site: 'Ears', normal: '', abnormality: '', remarks: '' },
  { site: 'Nose', normal: '', abnormality: '', remarks: '' },
  { site: 'Throat', normal: '', abnormality: '', remarks: '' },
  { site: 'Neck', normal: '', abnormality: '', remarks: '' },
  { site: 'Chest', normal: '', abnormality: '', remarks: '' },
  { site: 'Musculoskeletal System', normal: '', abnormality: '', remarks: '' },
  { site: 'Upper Extremities', normal: '', abnormality: '', remarks: '' },
  { site: 'Lower Extremities', normal: '', abnormality: '', remarks: '' },
  { site: 'Skin', normal: '', abnormality: '', remarks: '' },
  { site: 'Nails', normal: '', abnormality: '', remarks: '' },
  { site: 'Spinal Cord', normal: '', abnormality: '', remarks: '' },
];

export const MedicalExamination = () => {
  const { volunteerId } = useVolunteer();
  const [vitalSigns, setVitalSigns] = useState({
    bodyTemperature: '',
    pulseRate: '',
    respirationRate: '',
    bloodPressure: '',
  });
  const [mentalStatus, setMentalStatus] = useState('');
  const [generalAppearance, setGeneralAppearance] = useState('');
  const [generalExamination, setGeneralExamination] = useState(initialGeneralExamination);
  const [physicalExamination, setPhysicalExamination] = useState(initialPhysicalExamination);

  const updateGeneralExamination = (index: number, field: keyof GeneralExaminationItem, value: string) => {
    setGeneralExamination(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const updatePhysicalExamination = (index: number, field: keyof PhysicalExaminationItem, value: string) => {
    setPhysicalExamination(prev => prev.map((item, i) => 
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
          <div className="text-right text-sm text-gray-700">Page 3 of 6</div>
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
            <h3 className="section-title">Medical Examination</h3>
            <div className="grid grid-cols-4 gap-4">
              <FormField
                label="Body Temperature (°F)"
                type="number"
                step="0.1"
                value={vitalSigns.bodyTemperature}
                onChange={(value) => setVitalSigns(prev => ({ ...prev, bodyTemperature: value }))}
              />
              <FormField
                label="Pulse rate"
                type="number"
                value={vitalSigns.pulseRate}
                onChange={(value) => setVitalSigns(prev => ({ ...prev, pulseRate: value }))}
              />
              <FormField
                label="Respiration per minute"
                type="number"
                value={vitalSigns.respirationRate}
                onChange={(value) => setVitalSigns(prev => ({ ...prev, respirationRate: value }))}
              />
              <FormField
                label="Blood Pressure (mmHg)"
                value={vitalSigns.bloodPressure}
                onChange={(value) => setVitalSigns(prev => ({ ...prev, bloodPressure: value }))}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Mental Status :</h3>
            <FormField
              value={mentalStatus}
              onChange={setMentalStatus}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">General Appearance :</h3>
            <FormField
              value={generalAppearance}
              onChange={setGeneralAppearance}
            />
          </div>

          <div>
            <h3 className="section-title">General Examination</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Site</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Yes / No</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {generalExamination.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{item.site}</td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={yesNoOptions}
                          value={item.yesNo}
                          onChange={(value) => updateGeneralExamination(index, 'yesNo', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updateGeneralExamination(index, 'remarks', value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="section-title">Physical Examination</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Site</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Normal</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Any Abnormality detected</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalExamination.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{item.site}</td>
                      <td className="px-4 py-2">
                        <FormField
                          type="select"
                          options={yesNoOptions}
                          value={item.normal}
                          onChange={(value) => updatePhysicalExamination(index, 'normal', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.abnormality}
                          onChange={(value) => updatePhysicalExamination(index, 'abnormality', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <FormField
                          value={item.remarks}
                          onChange={(value) => updatePhysicalExamination(index, 'remarks', value)}
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