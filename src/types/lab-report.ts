export interface LabReportHeaderData {
  age: string;
  studyNo: string;
  subjectId: string;
  sampleAndSid: string;
  sex: string;
  collectionCentre: string;
  sampleCollectionDate: string;
  registrationDate: string;
  reportDate: string;
}

export interface LabReportBaseForm {
  headerData: LabReportHeaderData;
  pathologist1: PathologistData;
  pathologist2: PathologistData;
}

export interface PathologistData {
  name: string;
  specialty: string;
}

export interface BiochemistryTest {
  result: string;
  unit: string;
  referenceRange: string;
}

export const REFERENCE_RANGES = {
  glucose: {
    unit: 'mg/dL',
    range: '79-160'
  },
  creatinine: {
    male: '0.7 - 1.2',
    female: '0.5 - 0.9',
    unit: 'mg/dL'
  },
  uricAcid: {
    male: '3.4 - 7.0',
    female: '2.4 - 5.7',
    unit: 'mg/dL'
  },
  bilirubinTotal: {
    unit: 'mg/dL',
    range: '0 - 1.2'
  },
  ast: {
    male: 'Up to 40',
    female: 'Up to 32',
    unit: 'U/L'
  },
  alt: {
    male: 'Up to 41',
    female: 'Up to 33',
    unit: 'U/L'
  },
  alp: {
    male: '40 - 129',
    female: '35 - 104',
    unit: 'U/L'
  },
  proteinTotal: {
    unit: 'g/dL',
    range: '6.6 - 8.7'
  },
  albumin: {
    unit: 'g/dL',
    range: '3.97 - 4.94'
  },
  cholesterolTotal: {
    unit: 'mg/dL',
    range: '< 200'
  },
  sodium: {
    unit: 'mmol/L',
    range: '136 - 145'
  },
  potassium: {
    unit: 'mmol/L',
    range: '3.5 - 5.1'
  },
  chloride: {
    unit: 'mmol/L',
    range: '98 - 107'
  }
} as const;