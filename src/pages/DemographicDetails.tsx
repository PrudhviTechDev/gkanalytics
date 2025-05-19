import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

const genderOptions = ['Male', 'Female'];
const maritalStatusOptions = ['Unmarried', 'Married', 'Divorced', 'Widowed'];

interface AgeFields {
  years: string;
  months: string;
  days: string;
}

export function DemographicDetails() {
  const { volunteerId, setVolunteerId, setScreeningDate } = useVolunteer();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    screeningDate: '',
    gender: '',
    maritalStatus: '',
    dateOfBirth: '',
    age: {
      years: '',
      months: '',
      days: ''
    } as AgeFields,
    ethnicOrigin: '',
    height: '',
    weight: '',
    bmi: '',
    literacy: '',
    foodHabits: '',
    historyOfSmoking: {
      status: '',
      remarks: ''
    },
    historyOfTobacco: {
      status: '',
      remarks: ''
    },
    historyOfAlcohol: {
      status: '',
      remarks: ''
    },
    historyOfBloodDonation: {
      status: '',
      lastDonationDate: '',
      amount: ''
    },
    historyOfLastParticipation: {
      status: '',
      lastParticipationDate: '',
      participatedOrganization: '',
      remarks: ''
    },
    recordedBy: {
      initials: '',
      date: '',
      time: ''
    }
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields validation
    if (!formData.screeningDate) newErrors.screeningDate = 'Date of Screening is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.height) newErrors.height = 'Height is required';
    if (!formData.weight) newErrors.weight = 'Weight is required';
    if (!formData.literacy) newErrors.literacy = 'Literacy is required';
    if (!formData.foodHabits) newErrors.foodHabits = 'Food Habits is required';

    // Age validation (18-45 years)
    const years = parseInt(formData.age.years);
    if (isNaN(years) || years < 18 || years > 45) {
      newErrors.dateOfBirth = 'Age must be between 18 and 45 years';
    }

    // Height and weight validation
    if (formData.height && (isNaN(Number(formData.height)) || Number(formData.height) <= 0)) {
      newErrors.height = 'Please enter a valid height';
    }
    if (formData.weight && (isNaN(Number(formData.weight)) || Number(formData.weight) <= 0)) {
      newErrors.weight = 'Please enter a valid weight';
    }

    // BMI validation (18.50-24.90)
    const bmi = parseFloat(formData.bmi);
    if (isNaN(bmi) || bmi < 18.50 || bmi > 24.90) {
      newErrors.bmi = 'BMI must be between 18.50 and 24.90';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBMI = () => {
    const height = parseFloat(formData.height) / 100; // convert cm to m
    const weight = parseFloat(formData.weight);
    
    if (height && weight && !isNaN(height) && !isNaN(weight)) {
      const bmi = (weight / (height * height)).toFixed(2);
      setFormData(prev => ({
        ...prev,
        bmi
      }));
    }
  };

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setFormData(prev => ({
      ...prev,
      age: {
        years: years.toString(),
        months: months.toString(),
        days: days.toString()
      }
    }));
  };

  useEffect(() => {
    if (formData.height && formData.weight) {
      calculateBMI();
    }
  }, [formData.height, formData.weight]);

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'dateOfBirth') {
      calculateAge(value);
    }
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const updateAge = (field: keyof AgeFields, value: string) => {
    setFormData(prev => ({
      ...prev,
      age: {
        ...prev.age,
        [field]: value
      }
    }));
  };

  const updateNestedForm = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setScreeningDate(formData.screeningDate);
      navigate('/screening/medical-history');
    }
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
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="VOLUNTEER ID"
          value={volunteerId}
          onChange={setVolunteerId}
          required
          error={errors.volunteerId}
        />

        <div className="form-section">
          <h2 className="text-xl font-semibold mb-4">DEMOGRAPHIC DETAILS</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <FormField
              label="Date of Screening"
              type="date"
              value={formData.screeningDate}
              onChange={(value) => updateForm('screeningDate', value)}
              required
              error={errors.screeningDate}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Gender"
                type="select"
                options={genderOptions}
                value={formData.gender}
                onChange={(value) => updateForm('gender', value)}
                required
                error={errors.gender}
              />
              <FormField
                label="Marital Status"
                type="select"
                options={maritalStatusOptions}
                value={formData.maritalStatus}
                onChange={(value) => updateForm('maritalStatus', value)}
                required
                error={errors.maritalStatus}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Date of Birth (DD/MM/YYYY)"
                type="date"
                value={formData.dateOfBirth}
                onChange={(value) => updateForm('dateOfBirth', value)}
                required
                error={errors.dateOfBirth}
              />
              <div className="grid grid-cols-3 gap-2">
                <FormField
                  label="Years"
                  type="number"
                  value={formData.age.years}
                  onChange={(value) => updateAge('years', value)}
                  required
                  min="18"
                  max="45"
                />
                <FormField
                  label="Months"
                  type="number"
                  value={formData.age.months}
                  onChange={(value) => updateAge('months', value)}
                  required
                  min="0"
                  max="11"
                />
                <FormField
                  label="Days"
                  type="number"
                  value={formData.age.days}
                  onChange={(value) => updateAge('days', value)}
                  required
                  min="0"
                  max="30"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField
                label="Height in (cm)"
                type="number"
                value={formData.height}
                onChange={(value) => updateForm('height', value)}
                required
                error={errors.height}
              />
              <FormField
                label="Weight in (Kgs)"
                type="number"
                value={formData.weight}
                onChange={(value) => updateForm('weight', value)}
                required
                error={errors.weight}
              />
              <div>
                <FormField
                  label="BMI"
                  value={formData.bmi}
                  onChange={() => {}}
                  disabled
                  error={errors.bmi}
                />
                {formData.bmi && (
                  <p className="text-xs text-gray-500 mt-1">
                    Valid range: 18.50 - 24.90
                  </p>
                )}
              </div>
            </div>

            <FormField
              label="Ethnic Origin"
              value={formData.ethnicOrigin}
              onChange={(value) => updateForm('ethnicOrigin', value)}
            />

            <FormField
              label="Literacy"
              value={formData.literacy}
              onChange={(value) => updateForm('literacy', value)}
              required
              error={errors.literacy}
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="text-xl font-semibold mb-4">GENERAL INFORMATION</h2>
          
          <div className="space-y-4">
            <FormField
              label="Food Habits"
              value={formData.foodHabits}
              onChange={(value) => updateForm('foodHabits', value)}
              required
              error={errors.foodHabits}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="History of Smoking"
                value={formData.historyOfSmoking.status}
                onChange={(value) => updateNestedForm('historyOfSmoking', 'status', value)}
              />
              <FormField
                label="Remarks"
                value={formData.historyOfSmoking.remarks}
                onChange={(value) => updateNestedForm('historyOfSmoking', 'remarks', value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="History of Tobacco consumption"
                value={formData.historyOfTobacco.status}
                onChange={(value) => updateNestedForm('historyOfTobacco', 'status', value)}
              />
              <FormField
                label="Remarks"
                value={formData.historyOfTobacco.remarks}
                onChange={(value) => updateNestedForm('historyOfTobacco', 'remarks', value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="History of Alcohol consumption"
                value={formData.historyOfAlcohol.status}
                onChange={(value) => updateNestedForm('historyOfAlcohol', 'status', value)}
              />
              <FormField
                label="Remarks"
                value={formData.historyOfAlcohol.remarks}
                onChange={(value) => updateNestedForm('historyOfAlcohol', 'remarks', value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="History of blood donation"
                value={formData.historyOfBloodDonation.status}
                onChange={(value) => updateNestedForm('historyOfBloodDonation', 'status', value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Date of last blood donation"
                  type="date"
                  value={formData.historyOfBloodDonation.lastDonationDate}
                  onChange={(value) => updateNestedForm('historyOfBloodDonation', 'lastDonationDate', value)}
                />
                <FormField
                  label="Amount of blood (in ml)"
                  type="number"
                  value={formData.historyOfBloodDonation.amount}
                  onChange={(value) => updateNestedForm('historyOfBloodDonation', 'amount', value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="History of last participation in clinical research study"
                value={formData.historyOfLastParticipation.status}
                onChange={(value) => updateNestedForm('historyOfLastParticipation', 'status', value)}
              />
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  label="Date of last participation"
                  type="date"
                  value={formData.historyOfLastParticipation.lastParticipationDate}
                  onChange={(value) => updateNestedForm('historyOfLastParticipation', 'lastParticipationDate', value)}
                />
                <FormField
                  label="Participated organization"
                  value={formData.historyOfLastParticipation.participatedOrganization}
                  onChange={(value) => updateNestedForm('historyOfLastParticipation', 'participatedOrganization', value)}
                />
                <FormField
                  label="Remarks"
                  value={formData.historyOfLastParticipation.remarks}
                  onChange={(value) => updateNestedForm('historyOfLastParticipation', 'remarks', value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField
                label="Recorded by (Initials Date)"
                value={formData.recordedBy.initials}
                onChange={(value) => updateNestedForm('recordedBy', 'initials', value)}
                required
              />
              <FormField
                label="Date"
                type="date"
                value={formData.recordedBy.date}
                onChange={(value) => updateNestedForm('recordedBy', 'date', value)}
                required
              />
              <FormField
                label="Time"
                type="time"
                value={formData.recordedBy.time}
                onChange={(value) => updateNestedForm('recordedBy', 'time', value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}