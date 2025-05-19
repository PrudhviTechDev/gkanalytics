import React from 'react';
import { FormField } from './FormField';
import type { BiochemistryTest } from '../types/lab-report';

interface LabReportTableProps {
  tests: Record<string, BiochemistryTest>;
  displayNames: Record<string, string>;
  methods?: Record<string, string>;
  onUpdateTest: (testName: string, field: keyof BiochemistryTest, value: string) => void;
  showUnits?: boolean;
  showReferenceRanges?: boolean;
}

export const LabReportTable: React.FC<LabReportTableProps> = ({
  tests,
  displayNames,
  methods = {},
  onUpdateTest,
  showUnits = true,
  showReferenceRanges = true,
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">TEST DESCRIPTION</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">RESULT</th>
          {showUnits && (
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">UNITS</th>
          )}
          {showReferenceRanges && (
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">REFERENCE RANGES</th>
          )}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tests).map(([key, test]) => (
          <tr key={key} className="border-b">
            <td className="px-4 py-2">
              <div className="text-sm">{displayNames[key]}</div>
              {methods[key] && (
                <div className="text-xs text-gray-500">{methods[key]}</div>
              )}
            </td>
            <td className="px-4 py-2">
              <FormField
                value={test.result}
                onChange={(value) => onUpdateTest(key, 'result', value)}
                className="input-field"
              />
            </td>
            {showUnits && (
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={test.unit}
                  disabled
                  className="input-field bg-gray-50"
                />
              </td>
            )}
            {showReferenceRanges && (
              <td className="px-4 py-2">
                <input
                  type="text"
                  value={test.referenceRange}
                  disabled
                  className="input-field bg-gray-50"
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};