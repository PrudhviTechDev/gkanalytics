import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

export const FinalEvaluation = () => {
  const { volunteerId } = useVolunteer();
  const [isParticipationFit, setIsParticipationFit] = useState(true);
  const [specification, setSpecification] = useState('');
  const [comments, setComments] = useState('');
  const [completedBy, setCompletedBy] = useState('');

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
          <div className="text-right text-sm text-gray-700">Page 6 of 6</div>
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
          <div className="space-y-4">
            <p className="text-sm text-gray-700">
              After review of the volunteer medical screening record and screening investigations, the volunteer is
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="fit"
                  checked={isParticipationFit}
                  onChange={() => setIsParticipationFit(true)}
                  className="form-radio"
                />
                <label htmlFor="fit" className="text-sm">fit for study participation</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="not-fit"
                  checked={!isParticipationFit}
                  onChange={() => setIsParticipationFit(false)}
                  className="form-radio"
                />
                <label htmlFor="not-fit" className="text-sm">not fit for study participation</label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">If No, Specify :</h3>
            <FormField
              value={specification}
              onChange={setSpecification}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Comments :</h3>
            <FormField
              value={comments}
              onChange={setComments}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Completed by :</h3>
            <FormField
              value={completedBy}
              onChange={setCompletedBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};