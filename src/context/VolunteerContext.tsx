import React, { createContext, useContext, useState } from 'react';

interface FormData {
  urinePregnancyTest2: {
    testKitId?: string;
    lotNumber?: string;
    expiryDate?: string;
    result?: string;
    comments?: string;
    evaluatedBy?: {
      name: string;
      date: string;
      time: string;
    };
  };
  [key: string]: any;
}

interface VolunteerContextType {
  volunteerId: string;
  screeningDate: string;
  formData: FormData;
  setVolunteerId: (id: string) => void;
  setScreeningDate: (date: string) => void;
  updateFormData: (path: string, value: any) => void;
}

const VolunteerContext = createContext<VolunteerContextType | undefined>(undefined);

export function VolunteerProvider({ children }: { children: React.ReactNode }) {
  const [volunteerId, setVolunteerId] = useState('');
  const [screeningDate, setScreeningDate] = useState('');
  const [formData, setFormData] = useState<FormData>({
    urinePregnancyTest2: {
      evaluatedBy: {
        name: '',
        date: '',
        time: ''
      }
    }
  });

  const updateFormData = (path: string, value: any) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  return (
    <VolunteerContext.Provider 
      value={{ 
        volunteerId, 
        screeningDate, 
        formData,
        setVolunteerId, 
        setScreeningDate,
        updateFormData 
      }}
    >
      {children}
    </VolunteerContext.Provider>
  );
}

export function useVolunteer() {
  const context = useContext(VolunteerContext);
  if (context === undefined) {
    throw new Error('useVolunteer must be used within a VolunteerProvider');
  }
  return context;
}