import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';

interface DepressionItem {
  title: string;
  options: {
    score: number;
    text: string;
  }[];
  selectedScore: number | null;
}

export const DepressionScale = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    crbVersion: '02',
    date: '',
    studyPeriod: '',
    checkType: '',
    depressionItems: [
      {
        title: 'DEPRESSED MOOD (Gloomy attitude, pessimism about the future, feeling of sadness, tendency to weep)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Sadness, etc.' },
          { score: 2, text: 'Occasional weeping' },
          { score: 3, text: 'Frequent weeping' },
          { score: 4, text: 'Extreme symptoms' }
        ],
        selectedScore: null
      },
      {
        title: 'FEELINGS OF GUILT',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Self-reproach, feels he/she has let people down' },
          { score: 2, text: 'Ideas of guilt' },
          { score: 3, text: 'Present illness is a punishment, Delusions of guilt' },
          { score: 4, text: 'Hallucinations of guilt' }
        ],
        selectedScore: null
      },
      {
        title: 'SUICIDE',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Feels life is not worth living' },
          { score: 2, text: 'Wishes he/she were dead' },
          { score: 3, text: 'Suicidal ideas or gestures' },
          { score: 4, text: 'Attempts at suicide' }
        ],
        selectedScore: null
      },
      {
        title: 'INSOMNIA: Initial (Difficulty in falling asleep)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Occasional' },
          { score: 2, text: 'Frequent' }
        ],
        selectedScore: null
      },
      {
        title: 'INSOMNIA: Middle (Complains of being restless and disturbed during the night. Waking during the night)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Occasional' },
          { score: 2, text: 'Frequent' }
        ],
        selectedScore: null
      },
      {
        title: 'INSOMNIA: Delayed (Waking in early hours of the morning and unable to fall asleep again)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Occasional' },
          { score: 2, text: 'Frequent' }
        ],
        selectedScore: null
      },
      {
        title: 'WORK AND INTERESTS',
        options: [
          { score: 0, text: 'No difficulty' },
          { score: 1, text: 'Feelings of incapacity, listlessness, indecision and vacillation' },
          { score: 2, text: 'Loss of interest in hobbies, decreased social activities' },
          { score: 3, text: 'Productivity decreased' },
          { score: 4, text: 'Unable to work. Stopped working because of present illness only. (Absence from work after treatment or recovery may rate a lower score.)' }
        ],
        selectedScore: null
      },
      {
        title: 'RETARDATION (Slowness of thought, speech, and activity; apathy; stupor.)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Slight retardation at interview' },
          { score: 2, text: 'Obvious retardation at interview' },
          { score: 3, text: 'Interview difficult' },
          { score: 4, text: 'Complete stupor' }
        ],
        selectedScore: null
      },
      {
        title: 'AGITATION (Restlessness associated with anxiety)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Occasional' },
          { score: 2, text: 'Frequent' }
        ],
        selectedScore: null
      },
      {
        title: 'ANXIETY PSYCHIC',
        options: [
          { score: 0, text: 'No difficulty' },
          { score: 1, text: 'Tension and irritability' },
          { score: 2, text: 'Worrying about minor matters' },
          { score: 3, text: 'Apprehensive attitude' },
          { score: 4, text: 'Fears' }
        ],
        selectedScore: null
      },
      {
        title: 'ANXIETY SOMATIC (Gastrointestinal, indigestion Cardiovascular, palpitation, Headaches Respiratory, Genito-urinary, etc.)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Mild' },
          { score: 2, text: 'Moderate' },
          { score: 3, text: 'Severe' },
          { score: 4, text: 'Incapacitating' }
        ],
        selectedScore: null
      },
      {
        title: 'SOMATIC SYMPTOMS GASTROINTESTINAL (Loss of appetite, heavy feeling in abdomen; constipation)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Mild' },
          { score: 2, text: 'Severe' }
        ],
        selectedScore: null
      },
      {
        title: 'SOMATIC SYMPTOMS – GENERAL (Heaviness in limbs, back or head; diffuse backache; loss of energy and fatigability)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Mild' },
          { score: 2, text: 'Severe' }
        ],
        selectedScore: null
      },
      {
        title: 'GENITAL SYMPTOMS (Loss of libido, menstrual disturbances)',
        options: [
          { score: 0, text: 'Absent' },
          { score: 1, text: 'Mild' },
          { score: 2, text: 'Severe' }
        ],
        selectedScore: null
      },
      {
        title: 'HYPOCHONDRIASIS',
        options: [
          { score: 0, text: 'Not present' },
          { score: 1, text: 'Self-absorption (bodily)' },
          { score: 2, text: 'Preoccupation with health' },
          { score: 3, text: 'Frequent complaints' },
          { score: 4, text: 'Hypochondriacal delusions' }
        ],
        selectedScore: null
      },
      {
        title: 'WEIGHT LOSS',
        options: [
          { score: 0, text: 'No weight loss' },
          { score: 1, text: 'Slight' },
          { score: 2, text: 'Obvious or severe' }
        ],
        selectedScore: null
      },
      {
        title: 'INSIGHT (Insight must be interpreted in terms of volunteers understanding and background.)',
        options: [
          { score: 0, text: 'No loss' },
          { score: 1, text: 'Partial or doubtful loss' },
          { score: 2, text: 'Loss of insight' }
        ],
        selectedScore: null
      }
    ] as DepressionItem[],
    totalScore: 0,
    depressionScreen: null as boolean | null,
    comments: '',
    evaluatedBy: ''
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateScore = (index: number, score: number) => {
    setFormData(prev => {
      const newItems = [...prev.depressionItems];
      newItems[index].selectedScore = score;
      
      // Calculate total score
      const totalScore = newItems.reduce((sum, item) => 
        sum + (item.selectedScore || 0), 0
      );

      return {
        ...prev,
        depressionItems: newItems,
        totalScore,
        depressionScreen: totalScore > 7
      };
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Clians</h1>
          <div className="text-right">
            <p className="text-sm italic">Gabapentin enacarbil extended-release tablets 600 mg Fed BE Study</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-center">Annexure – 4 Depression Scale</h2>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2">
            <span className="font-medium">Study No:</span>
            <span>{formData.studyNo}</span>
            <span className="font-medium ml-4">CRB Version no.:</span>
            <span>{formData.crbVersion}</span>
          </div>
          <FormField
            label="Date:"
            type="date"
            value={formData.date}
            onChange={(value) => updateForm('date', value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Study Period:"
            value={formData.studyPeriod}
            onChange={(value) => updateForm('studyPeriod', value)}
          />
          <FormField
            label="Volunteer ID/Subject No.:"
            value={volunteerId}
            onChange={() => {}}
            disabled
          />
        </div>

        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={formData.checkType === 'check-in'}
              onChange={() => updateForm('checkType', 'check-in')}
              className="form-checkbox h-4 w-4"
            />
            <span className="ml-2">Check-in: □</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={formData.checkType === 'post-study'}
              onChange={() => updateForm('checkType', 'post-study')}
              className="form-checkbox h-4 w-4"
            />
            <span className="ml-2">Post study safety evaluation: □</span>
          </label>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm mb-4">Below is a list of ways that volunteer might felt or behaved recently. Please tick in the column that tells how often volunteer have felt this way during the past week. Please tick (✓) in appropriate boxes.</p>
          
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">S. No.</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {formData.depressionItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <p className="font-medium">{item.title}</p>
                    <div className="space-y-2 mt-2">
                      {item.options.map((option, optIndex) => (
                        <label key={optIndex} className="flex items-start gap-2">
                          <input
                            type="radio"
                            checked={item.selectedScore === option.score}
                            onChange={() => updateScore(index, option.score)}
                            className="mt-1"
                          />
                          <span>{option.score}. {option.text}</span>
                        </label>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    {item.selectedScore !== null ? item.selectedScore : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t pt-4 space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-medium">Total Score:</span>
            <div className="border px-4 py-2 rounded">
              {formData.totalScore}
            </div>
            <span className="text-sm text-gray-600">
              (If total score of 0-7 is a normal range and above this range is positive depression).
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-medium">Depression Screen:</span>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.depressionScreen === true}
                  onChange={() => updateForm('depressionScreen', true)}
                  className="form-radio"
                />
                <span className="ml-2">Positive</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  checked={formData.depressionScreen === false}
                  onChange={() => updateForm('depressionScreen', false)}
                  className="form-radio"
                />
                <span className="ml-2">Negative</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Comments (If any):</label>
            <textarea
              value={formData.comments}
              onChange={(e) => updateForm('comments', e.target.value)}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Evaluated By (Sign & Date):</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={formData.evaluatedBy}
                onChange={(e) => updateForm('evaluatedBy', e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="(PI/CI/Physician)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};