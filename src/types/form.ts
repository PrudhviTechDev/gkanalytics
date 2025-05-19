export interface PatientForm {
  // Demographic Details
  volunteerId: string;
  screeningDate: string;
  gender: string;
  maritalStatus: string;
  dateOfBirth: string;
  age: {
    years: string;
    months: string;
    days: string;
  };
  ethnicOrigin: string;
  height: string;
  weight: string;
  bmi: string;
  literacy: string;

  // General Information
  foodHabits: string;
  smokingHistory: {
    status: string;
    remarks: string;
  };
  tobaccoConsumption: {
    status: string;
    remarks: string;
  };
  alcoholConsumption: {
    status: string;
    remarks: string;
  };
  bloodDonation: {
    lastDonationDate: string;
    amount: string;
    status: string;
  };
  clinicalResearch: {
    lastParticipationDate: string;
    organization: string;
    remarks: string;
    status: string;
  };
  recordedBy: {
    name: string;
    date: string;
  };
  generatedBy: string;
  generatedDate: string;
}