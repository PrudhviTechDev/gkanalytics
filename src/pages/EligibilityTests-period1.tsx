import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

export const EligibilityTests1 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    sopNumber: 'CL-013',
    projectNo: '',
    periodNo: '',
    date: '',
    breathAlcohol: {
      applicable: null as boolean | null,
      resultTime: '',
      result: null as boolean | null,
      doneBy: '',
    },
    urineSample: {
      applicable: null as boolean | null,
      volume: '',
      receivedTime: '',
      receivedBy: '',
    },
    urineAlcohol: {
      applicable: null as boolean | null,
      droppingTime: '',
      resultTime: '',
      result: null as boolean | null,
      doneBy: '',
    },
    urineDrugs: {
      applicable: null as boolean | null,
      droppingTime: '',
      resultTime: '',
      result: null as boolean | null,
      parameter: '',
      doneBy: '',
    },
    vitalSigns: {
      applicable: null as boolean | null,
      bloodPressure: '',
      pulseRate: '',
      respirationRate: '',
      temperature: '',
      actualTime: '',
      doneBy: '',
    },
    eligibleForCheckin: null as boolean | null,
    remarks: '',
    verifiedBy: '',
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateSection = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
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
            <h2 className="text-lg font-bold">ELIGIBILITY TESTS FOR CHECK-IN</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-sm">
            <p>SOP NUMBER</p>
          </div>
          <div className="text-sm">
            <p>{formData.sopNumber}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <FormField
            label="Project No.:"
            value={formData.projectNo}
            onChange={(value) => updateForm('projectNo', value)}
          />
          <FormField
            label="Period No.:"
            value={formData.periodNo}
            onChange={(value) => updateForm('periodNo', value)}
          />
          <FormField
            label="Date:"
            type="date"
            value={formData.date}
            onChange={(value) => updateForm('date', value)}
          />
        </div>

        <FormField
          label="Volunteer ID/Subject No.:"
          value={volunteerId}
          onChange={() => {}}
          disabled
        />

        {/* Breath Alcohol Test */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">BREATH ALCOHOL TEST:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.breathAlcohol.applicable === true}
                  onChange={() => updateSection('breathAlcohol', 'applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.breathAlcohol.applicable === false}
                  onChange={() => updateSection('breathAlcohol', 'applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormField
              label="Result Time (Hrs):"
              type="time"
              value={formData.breathAlcohol.resultTime}
              onChange={(value) => updateSection('breathAlcohol', 'resultTime', value)}
            />
            <div className="space-y-2">
              <span className="block text-sm font-medium text-gray-700">Test Result</span>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.breathAlcohol.result === true}
                    onChange={() => updateSection('breathAlcohol', 'result', true)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">Positive</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.breathAlcohol.result === false}
                    onChange={() => updateSection('breathAlcohol', 'result', false)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">Negative</span>
                </label>
              </div>
            </div>
            <FormField
              label="Done by:"
              value={formData.breathAlcohol.doneBy}
              onChange={(value) => updateSection('breathAlcohol', 'doneBy', value)}
              placeholder="(Sign & Date)"
            />
          </div>
        </div>

        {/* Urine Sample Collection */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">URINE SAMPLE COLLECTION:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineSample.applicable === true}
                  onChange={() => updateSection('urineSample', 'applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineSample.applicable === false}
                  onChange={() => updateSection('urineSample', 'applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormField
              label="Volume (approximately 15-20 mL)"
              value={formData.urineSample.volume}
              onChange={(value) => updateSection('urineSample', 'volume', value)}
            />
            <FormField
              label="Received Time (Hrs.):"
              type="time"
              value={formData.urineSample.receivedTime}
              onChange={(value) => updateSection('urineSample', 'receivedTime', value)}
            />
            <FormField
              label="Received by:"
              value={formData.urineSample.receivedBy}
              onChange={(value) => updateSection('urineSample', 'receivedBy', value)}
              placeholder="(Sign & Date)"
            />
          </div>
        </div>

        {/* Urine Alcohol Test */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">URINE ALCOHOL TEST:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineAlcohol.applicable === true}
                  onChange={() => updateSection('urineAlcohol', 'applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineAlcohol.applicable === false}
                  onChange={() => updateSection('urineAlcohol', 'applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Urine Dropping Time (Hrs):"
              type="time"
              value={formData.urineAlcohol.droppingTime}
              onChange={(value) => updateSection('urineAlcohol', 'droppingTime', value)}
            />
            <FormField
              label="Result Time (end time) (Hrs):"
              type="time"
              value={formData.urineAlcohol.resultTime}
              onChange={(value) => updateSection('urineAlcohol', 'resultTime', value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <span className="block text-sm font-medium text-gray-700">Test Result</span>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.urineAlcohol.result === true}
                    onChange={() => updateSection('urineAlcohol', 'result', true)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">Positive</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.urineAlcohol.result === false}
                    onChange={() => updateSection('urineAlcohol', 'result', false)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">Negative</span>
                </label>
              </div>
            </div>
            <FormField
              label="Done by:"
              value={formData.urineAlcohol.doneBy}
              onChange={(value) => updateSection('urineAlcohol', 'doneBy', value)}
              placeholder="(Sign & Date)"
            />
          </div>
        </div>

        {/* Urine Drugs of Abuse Test */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">URINE DRUGS OF ABUSE TEST:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineDrugs.applicable === true}
                  onChange={() => updateSection('urineDrugs', 'applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.urineDrugs.applicable === false}
                  onChange={() => updateSection('urineDrugs', 'applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Urine Dropping Time (Hrs):"
              type="time"
              value={formData.urineDrugs.droppingTime}
              onChange={(value) => updateSection('urineDrugs', 'droppingTime', value)}
            />
            <FormField
              label="Result Time (end time) (Hrs):"
              type="time"
              value={formData.urineDrugs.resultTime}
              onChange={(value) => updateSection('urineDrugs', 'resultTime', value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <div className="space-y-2">
                <span className="block text-sm font-medium text-gray-700">Test Result</span>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.urineDrugs.result === true}
                      onChange={() => updateSection('urineDrugs', 'result', true)}
                      className="form-checkbox h-4 w-4"
                    />
                    <span className="ml-2">Positive</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.urineDrugs.result === false}
                      onChange={() => updateSection('urineDrugs', 'result', false)}
                      className="form-checkbox h-4 w-4"
                    />
                    <span className="ml-2">Negative</span>
                  </label>
                </div>
              </div>
              <FormField
                label="Parameter (If Positive):"
                value={formData.urineDrugs.parameter}
                onChange={(value) => updateSection('urineDrugs', 'parameter', value)}
              />
            </div>
            <FormField
              label="Done by:"
              value={formData.urineDrugs.doneBy}
              onChange={(value) => updateSection('urineDrugs', 'doneBy', value)}
              placeholder="(Sign & Date)"
            />
          </div>
        </div>

        {/* Vital Signs */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-medium">VITAL SIGNS:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.vitalSigns.applicable === true}
                  onChange={() => updateSection('vitalSigns', 'applicable', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Applicable</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.vitalSigns.applicable === false}
                  onChange={() => updateSection('vitalSigns', 'applicable', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Not Applicable</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <FormField
              label="Blood Pressure (mmHg)"
              value={formData.vitalSigns.bloodPressure}
              onChange={(value) => updateSection('vitalSigns', 'bloodPressure', value)}
            />
            <FormField
              label="Pulse Rate (per min)"
              value={formData.vitalSigns.pulseRate}
              onChange={(value) => updateSection('vitalSigns', 'pulseRate', value)}
            />
            <FormField
              label="Respiration Rate (per min)"
              value={formData.vitalSigns.respirationRate}
              onChange={(value) => updateSection('vitalSigns', 'respirationRate', value)}
            />
            <FormField
              label="Temperature (°F)"
              value={formData.vitalSigns.temperature}
              onChange={(value) => updateSection('vitalSigns', 'temperature', value)}
            />
            <FormField
              label="Actual Time (Hrs)"
              type="time"
              value={formData.vitalSigns.actualTime}
              onChange={(value) => updateSection('vitalSigns', 'actualTime', value)}
            />
            <FormField
              label="Done by"
              value={formData.vitalSigns.doneBy}
              onChange={(value) => updateSection('vitalSigns', 'doneBy', value)}
              placeholder="(Sign & Date)"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-sm text-gray-600">(Tick (✓) the appropriate)</p>
          <div className="flex items-center gap-4">
            <span>Eligible for check-in:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.eligibleForCheckin === true}
                  onChange={() => updateForm('eligibleForCheckin', true)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.eligibleForCheckin === false}
                  onChange={() => updateForm('eligibleForCheckin', false)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <FormField
            label="Remarks:"
            value={formData.remarks}
            onChange={(value) => updateForm('remarks', value)}
          />

          <FormField
            label="Verified by:"
            value={formData.verifiedBy}
            onChange={(value) => updateForm('verifiedBy', value)}
            placeholder="(Sign & Date)"
          />
        </div>
      </div>
    </div>
  );
};