import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { DemographicDetails } from './pages/DemographicDetails';
import { MedicalHistory } from './pages/MedicalHistory';
import { MedicalExamination } from './pages/MedicalExamination';
import { SystemicExamination } from './pages/SystemicExamination';
import { EcgEvaluation } from './pages/EcgEvaluation';
import { XRayEvaluation } from './pages/XRayEvaluation';
import { PregnancyTestEvaluation } from './pages/PregnancyTestEvaluation';
import { VolunteerProvider } from './context/VolunteerContext';
import { ClinicalBiochemistry1 } from './pages/ClinicalBiochemistry1';
import { ClinicalBiochemistry2 } from './pages/ClinicalBiochemistry2';
import { ClinicalPathology } from './pages/ClinicalPathology';
import { Hematology } from './pages/Hematology';
import { Immunology } from './pages/Immunology';
import { EligibilityTests1 } from './pages/EligibilityTests-period1';
import { EligibilityTests2 } from './pages/EligibilityTests-period2';
import { CovidScreening } from './pages/CovidScreening1';
import { CovidScreening2 } from './pages/CovidScreening2';
import { UrinePregnancyTest1 } from './pages/UrinePregnancyTest1';
import { UrinePregnancyTest2 } from './pages/UrinePregnancyTest2';
import { BhcgTest1 } from './pages/BhcgTest1';
import { BhcgTest2 } from './pages/BhcgTest2';
import { DepressionScale } from './pages/DepressionScale';
import { DepressionScale2 } from './pages/DepressionScale2';
import { ExclusionCriteria1 } from './pages/ExclusionCriteria1';
import { ExclusionCriteria2 } from './pages/ExclusionCriteria2';
import { OtherInformation1 } from './pages/OtherInformation1';
import { OtherInformation2 } from './pages/OtherInformation2';
import { SubjectCheckIn1 } from './pages/SubjectCheckIn1';
import { SubjectCheckIn2 } from './pages/SubjectCheckIn2';
import { SubjectCheckOut1 } from './pages/SubjectCheckOut1';
import { SubjectCheckOut2 } from './pages/SubjectCheckOut2';
import { DrugAdministration1 } from './pages/DrugAdministration1';
import { DrugAdministration2 } from './pages/DrugAdministration2';
import { Restrictions1 } from './pages/Restrictions1';
import { Restrictions2 } from './pages/Restrictions2';
import { BloodSampleCollection1 } from './pages/BloodSampleCollection1';
import { BloodSampleCollection2 } from './pages/BloodSampleCollection2';
import { VitalSigns1 } from './pages/VitalSigns1';
import { VitalSigns2 } from './pages/VitalSigns2';
import { MealConsumption1 } from './pages/MealConsumption1';
import { MealConsumption2 } from './pages/MealConsumption2';
import { StudyCaseReport1 } from './pages/StudyCaseReport1';
import { StudyCaseReport2 } from './pages/StudyCaseReport2';
import { TelephoneNotes } from './pages/TelephoneNotes';
import { RepeatAssessment } from './pages/RepeatAssessment';
import { SubjectDropoutForm } from './pages/SubjectDropoutForm';
import { SubjectWithdrawalForm } from './pages/SubjectWithdrawalForm';
import { ConcomitantMedication } from './pages/ConcomitantMedication';
import { AdverseEventRecording } from './pages/AdverseEventRecording';
import { PostStudyMedicalExamination } from './pages/PostStudyMedicalExamination';
import { PostStudySafetyEvaluation } from './pages/PostStudySafetyEvaluation';
import { PostStudyDepressionScale } from './pages/PostStudyDepressionScale';
import { PostStudyCovidScreening } from './pages/PostStudyCovidScreening';
import { PostStudyClinicalBiochemistry1 } from './pages/PostStudyClinicalBiochemistry1';
import { PostStudyClinicalBiochemistry2 } from './pages/PostStudyClinicalBiochemistry2';
import { PostStudyHematology } from './pages/PostStudyHematology';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <VolunteerProvider>
      <Router>
        <ScrollToTop />
        <div className="flex h-screen bg-gray-50">
          <Sidebar className="flex-shrink-0" />
          <div className="flex-1 overflow-auto">
            <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/screening/demographics" replace />} />
                  <Route path="/screening/demographics" element={<DemographicDetails />} />
                  <Route path="/screening/medical-history" element={<MedicalHistory />} />
                  <Route path="/screening/medical-exam" element={<MedicalExamination />} />
                  <Route path="/screening/systemic-exam" element={<SystemicExamination />} />
                  <Route path="/screening/ecg-evaluation" element={<EcgEvaluation />} />
                  <Route path="/screening/xray" element={<XRayEvaluation />} />
                  <Route path="/screening/pregnancy" element={<PregnancyTestEvaluation />} />
                  <Route path="/lab-report/biochemistry-1" element={<ClinicalBiochemistry1 />} />
                  <Route path="/lab-report/biochemistry-2" element={<ClinicalBiochemistry2 />} />
                  <Route path="/lab-report/pathology" element={<ClinicalPathology />} />
                  <Route path="/lab-report/hematology" element={<Hematology />} />
                  <Route path="/lab-report/immunology" element={<Immunology />} />
                  <Route path="/period-01/EligibilityTests1" element={<EligibilityTests1 />} />
                  <Route path="/period-02/EligibilityTests2" element={<EligibilityTests2 />} />
                  <Route path="/period-01/CovidScreening1" element={<CovidScreening />} />
                  <Route path="/period-02/CovidScreening2" element={<CovidScreening2 />} />
                  <Route path="/period-01/urine-pregnancy" element={<UrinePregnancyTest1 />} />
                  <Route path="/period-02/UrinePregnancyTest2" element={<UrinePregnancyTest2 />} />
                  <Route path="/period-01/bhcg-test" element={<BhcgTest1 />} />
                  <Route path="/period-02/bhcg-test" element={<BhcgTest2 />} />
                  <Route path="/period-01/DepressionScale" element={<DepressionScale />} />
                  <Route path="/period-02/DepressionScale2" element={<DepressionScale2 />} />
                  <Route path="/period-01/criteria" element={<ExclusionCriteria1 />} />
                  <Route path="/period-02/criteria" element={<ExclusionCriteria2 />} />
                  <Route path="/period-01/other-info" element={<OtherInformation1 />} />
                  <Route path="/period-02/other-info" element={<OtherInformation2 />} />
                  <Route path="/period-01/check-in" element={<SubjectCheckIn1 />} />
                  <Route path="/period-02/check-in" element={<SubjectCheckIn2 />} />
                  <Route path="/period-01/check-out" element={<SubjectCheckOut1 />} />
                  <Route path="/period-02/check-out" element={<SubjectCheckOut2 />} />
                  <Route path="/period-01/drug-admin" element={<DrugAdministration1 />} />
                  <Route path="/period-02/drug-admin" element={<DrugAdministration2 />} />
                  <Route path="/period-01/restrictions" element={<Restrictions1 />} />
                  <Route path="/period-02/restrictions" element={<Restrictions2 />} />
                  <Route path="/period-01/blood-sample" element={<BloodSampleCollection1 />} />
                  <Route path="/period-02/blood-sample" element={<BloodSampleCollection2 />} />
                  <Route path="/period-01/vital-signs" element={<VitalSigns1 />} />
                  <Route path="/period-02/vital-signs" element={<VitalSigns2 />} />
                  <Route path="/period-01/meal" element={<MealConsumption1 />} />
                  <Route path="/period-02/meal" element={<MealConsumption2 />} />
                  <Route path="/period-01/case-report" element={<StudyCaseReport1 />} />
                  <Route path="/period-02/case-report" element={<StudyCaseReport2 />} />
                  <Route path="/post-study/telephone-notes" element={<TelephoneNotes />} />
                  <Route path="/post-study/repeat-assessment" element={<RepeatAssessment />} />
                  <Route path="/post-study/dropout" element={<SubjectDropoutForm />} />
                  <Route path="/post-study/withdrawal" element={<SubjectWithdrawalForm />} />
                  <Route path="/post-study/concomitant-meds" element={<ConcomitantMedication />} />
                  <Route path="/post-study/adverse-events" element={<AdverseEventRecording />} />
                  <Route path="/post-study/medical-exam" element={<PostStudyMedicalExamination />} />
                  <Route path="/post-study/safety-evaluation" element={<PostStudySafetyEvaluation />} />
                  <Route path="/post-study/depression-scale" element={<PostStudyDepressionScale />} />
                  <Route path="/post-study/covid-screening" element={<PostStudyCovidScreening />} />
                  <Route path="/post-study/biochemistry-1" element={<PostStudyClinicalBiochemistry1 />} />
                  <Route path="/post-study/biochemistry-2" element={<PostStudyClinicalBiochemistry2 />} />
                  <Route path="/post-study/hematology" element={<PostStudyHematology />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </VolunteerProvider>
  );
}

export default App;