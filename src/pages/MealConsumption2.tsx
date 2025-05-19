import React, { useState } from 'react';
import { useVolunteer } from '../context/VolunteerContext';
import { FormField } from '../components/FormField';
import { SignatureFields } from '../components/SignatureFields';
import type { SignatureData } from '../types/common';

interface MealEntry {
  mealType: string;
  date: string;
  scheduledTime: string;
  startTime: string;
  endTime: string;
  mealConsumed: boolean | null;
  supervisedBy: SignatureData;
  remarks: string;
}

export const MealConsumption2 = () => {
  const { volunteerId } = useVolunteer();
  const [formData, setFormData] = useState({
    studyNo: '079-24',
    periodNo: '2',
    subjectNumber: '',
    dosingDate: '',
    dosingTime: '',
    meals: [
      // Day 0
      { mealType: 'Check-in Dinner', date: '', scheduledTime: 'NA', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      // Day 1 (Dosing Day)
      { mealType: 'High fat high calorie meal (breakfast)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      { mealType: 'Lunch (4.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      { mealType: 'Snacks (8.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      { mealType: 'Dinner (12.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      // Day 2
      { mealType: 'Breakfast (24.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      { mealType: 'Lunch (28.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      { mealType: 'Snacks (32.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' },
      { mealType: 'Dinner (36.0 hours Post-dose)', date: '', scheduledTime: '', startTime: '', endTime: '', mealConsumed: null, supervisedBy: { name: '', date: '', time: '' }, remarks: '' }
    ] as MealEntry[],
    softWaterDetails: '',
    comments: '',
    reviewedBy: {
      name: '',
      date: '',
      time: ''
    } as SignatureData
  });

  const updateMeal = (index: number, field: keyof MealEntry, value: any) => {
    setFormData(prev => ({
      ...prev,
      meals: prev.meals.map((meal, i) =>
        i === index ? { ...meal, [field]: value } : meal
      )
    }));
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Clians</h1>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">STUDY CASE REPORT FORM</h2>
            <p className="text-sm text-gray-600">Page 1 of 1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-2">
            <span className="font-medium">Study No.:</span>
            <span>{formData.studyNo}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-medium">Period No.:</span>
            <span>{formData.periodNo}</span>
          </div>
        </div>

        <div className="border-t border-b py-4">
          <h3 className="text-lg font-bold mb-4">Section-II: MEAL CONSUMPTION FORM</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <FormField
                label="Subject Number:"
                value={formData.subjectNumber}
                onChange={(value) => setFormData(prev => ({ ...prev, subjectNumber: value }))}
              />
              <FormField
                label="Dosing Date:"
                type="date"
                value={formData.dosingDate}
                onChange={(value) => setFormData(prev => ({ ...prev, dosingDate: value }))}
              />
              <FormField
                label="*Dosing Time:"
                type="time"
                value={formData.dosingTime}
                onChange={(value) => setFormData(prev => ({ ...prev, dosingTime: value }))}
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Day</th>
                    <th className="px-4 py-2 text-left">Meal Type & Schedule</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Scheduled Time (Hrs)</th>
                    <th className="px-4 py-2 text-left">Start Time (Hrs)</th>
                    <th className="px-4 py-2 text-left">End Time (Hrs)</th>
                    <th className="px-4 py-2 text-center">Meal consumed (Yes/No)</th>
                    <th className="px-4 py-2 text-left">Supervised By (Sign and Date)</th>
                    <th className="px-4 py-2 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Day 0 */}
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2" rowSpan={1}>Day-0</td>
                    <td colSpan={8} className="px-4 py-2 font-medium">Check-in</td>
                  </tr>
                  {formData.meals.slice(0, 1).map((meal, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2">{meal.mealType}</td>
                      <td className="px-4 py-2">
                        <input
                          type="date"
                          value={meal.date}
                          onChange={(e) => updateMeal(index, 'date', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">{meal.scheduledTime}</td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.startTime}
                          onChange={(e) => updateMeal(index, 'startTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.endTime}
                          onChange={(e) => updateMeal(index, 'endTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center gap-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              checked={meal.mealConsumed === true}
                              onChange={() => updateMeal(index, 'mealConsumed', true)}
                              className="form-radio"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              checked={meal.mealConsumed === false}
                              onChange={() => updateMeal(index, 'mealConsumed', false)}
                              className="form-radio"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <SignatureFields
                          value={meal.supervisedBy}
                          onChange={(value) => updateMeal(index, 'supervisedBy', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={meal.remarks}
                          onChange={(e) => updateMeal(index, 'remarks', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                    </tr>
                  ))}

                  {/* Day 1 */}
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2" rowSpan={4}>Day-1<br/>(Dosing Day)</td>
                    <td colSpan={8} className="px-4 py-2 font-medium">Dosing Day</td>
                  </tr>
                  {formData.meals.slice(1, 5).map((meal, index) => (
                    <tr key={index + 1} className="border-b">
                      <td className="px-4 py-2">{meal.mealType}</td>
                      <td className="px-4 py-2">
                        <input
                          type="date"
                          value={meal.date}
                          onChange={(e) => updateMeal(index + 1, 'date', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.scheduledTime}
                          onChange={(e) => updateMeal(index + 1, 'scheduledTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.startTime}
                          onChange={(e) => updateMeal(index + 1, 'startTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.endTime}
                          onChange={(e) => updateMeal(index + 1, 'endTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center gap-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              checked={meal.mealConsumed === true}
                              onChange={() => updateMeal(index + 1, 'mealConsumed', true)}
                              className="form-radio"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              checked={meal.mealConsumed === false}
                              onChange={() => updateMeal(index + 1, 'mealConsumed', false)}
                              className="form-radio"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <SignatureFields
                          value={meal.supervisedBy}
                          onChange={(value) => updateMeal(index + 1, 'supervisedBy', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={meal.remarks}
                          onChange={(e) => updateMeal(index + 1, 'remarks', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                    </tr>
                  ))}

                  {/* Day 2 */}
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-2" rowSpan={4}>Day-2</td>
                    <td colSpan={8} className="px-4 py-2 font-medium">Post-dose Day</td>
                  </tr>
                  {formData.meals.slice(5).map((meal, index) => (
                    <tr key={index + 5} className="border-b">
                      <td className="px-4 py-2">{meal.mealType}</td>
                      <td className="px-4 py-2">
                        <input
                          type="date"
                          value={meal.date}
                          onChange={(e) => updateMeal(index + 5, 'date', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.scheduledTime}
                          onChange={(e) => updateMeal(index + 5, 'scheduledTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.startTime}
                          onChange={(e) => updateMeal(index + 5, 'startTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="time"
                          value={meal.endTime}
                          onChange={(e) => updateMeal(index + 5, 'endTime', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center gap-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              checked={meal.mealConsumed === true}
                              onChange={() => updateMeal(index + 5, 'mealConsumed', true)}
                              className="form-radio"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              checked={meal.mealConsumed === false}
                              onChange={() => updateMeal(index + 5, 'mealConsumed', false)}
                              className="form-radio"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <SignatureFields
                          value={meal.supervisedBy}
                          onChange={(value) => updateMeal(index + 5, 'supervisedBy', value)}
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={meal.remarks}
                          onChange={(e) => updateMeal(index + 5, 'remarks', e.target.value)}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-sm text-gray-600 mt-4">
              <p>Note: Standard meal shall be provided as per protocol.</p>
              <p>Details of leftover food items (if any): _______________________________</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Comments (if any):</label>
                <textarea
                  value={formData.comments}
                  onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                  className="w-full p-2 border rounded"
                  rows={3}
                />
              </div>

              <div className="border-t pt-4">
                <SignatureFields
                  label="Reviewed By (Coordinator/Designee):"
                  value={formData.reviewedBy}
                  onChange={(value) => setFormData(prev => ({ ...prev, reviewedBy: value }))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};