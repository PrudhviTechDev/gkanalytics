import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import clsx from 'clsx';

interface NavItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Volunteer Medical Screening Record',
    path: '/screening',
    children: [
      { title: 'Demographic Details', path: '/screening/demographics' },
      { title: 'Medical History', path: '/screening/medical-history' },
      { title: 'Medical Examination', path: '/screening/medical-exam' },
      { title: 'Systemic Examination', path: '/screening/systemic-exam' },
      { title: 'ECG Evaluation', path: '/screening/ecg-evaluation' },
      { title: 'X-Ray Evaluation', path: '/screening/xray' },
      { title: 'Pregnancy Test', path: '/screening/pregnancy' }
    ]
  },
  {
    title: 'Laboratory Test Report',
    path: '/lab-report',
    children: [
      { title: 'Clinical Biochemistry1', path: '/lab-report/biochemistry-1' },
      { title: 'Clinical Biochemistry2', path: '/lab-report/biochemistry-2' },
      { title: 'Clinical Pathology', path: '/lab-report/pathology' },
      { title: 'Hematology', path: '/lab-report/hematology' },
      { title: 'Immunology/Serology', path: '/lab-report/immunology' }
    ]
  },
  {
    title: 'Period 01',
    path: '/period-01',
    children: [
      { title: 'Eligibility Tests for Check-In', path: '/period-01/EligibilityTests1' },
      { title: 'COVID-19 Screening', path: '/period-01/CovidScreening1' },
      { title: 'Urine Pregnancy Test', path: '/period-01/urine-pregnancy' },
      { title: 'β-HCG Test Report', path: '/period-01/bhcg-test' },
      { title: 'Depression Scale', path: '/period-01/DepressionScale' },
      { title: 'Inclusion and Exclusion Criteria', path: '/period-01/criteria' },
      { title: 'Study Case Report Form', path: '/period-01/case-report' },
      { title: 'Subject Check-In Form', path: '/period-01/check-in' },
      { title: 'Meal Consumption Form', path: '/period-01/meal' },
      { title: 'Subject Vital Signs Form', path: '/period-01/vital-signs' },
      { title: 'Blood Sample Collection Form', path: '/period-01/blood-sample' },
      { title: 'Pre-Dose and Post-Dose Restrictions', path: '/period-01/restrictions' },
      { title: 'Drug Administration Form', path: '/period-01/drug-admin' },
      { title: 'Subject Check-Out Form', path: '/period-01/check-out' },
      { title: 'Any Other Information', path: '/period-01/other-info' }
    ]
  },
  {
    title: 'Period 02',
    path: '/period-02',
    children: [
      { title: 'Eligibility Tests for Check-In', path: '/period-02/EligibilityTests2' },
      { title: 'COVID-19 Screening', path: '/period-02/CovidScreening2' },
      { title: 'Urine Pregnancy Test', path: '/period-02/UrinePregnancyTest2' },
      { title: 'β-HCG Test Report', path: '/period-02/bhcg-test' },
      { title: 'Depression Scale', path: '/period-02/DepressionScale2' },
      { title: 'Exclusion Criteria', path: '/period-02/criteria' },
      { title: 'Study Case Report Form', path: '/period-02/case-report' },
      { title: 'Subject Check-In Form', path: '/period-02/check-in' },
      { title: 'Meal Consumption Form', path: '/period-02/meal' },
      { title: 'Subject Vital Signs Form', path: '/period-02/vital-signs' },
      { title: 'Blood Sample Collection Form', path: '/period-02/blood-sample' },
      { title: 'Pre-Dose and Post-Dose Restrictions', path: '/period-02/restrictions' },
      { title: 'Drug Administration Form', path: '/period-02/drug-admin' },
      { title: 'Subject Check-Out Form', path: '/period-02/check-out' },
      { title: 'Any Other Information', path: '/period-02/other-info' }
    ]
  },
  {
    title: 'Post Study',
    path: '/post-study',
    children: [
      { title: 'Medical Examination', path: '/post-study/medical-exam' },
      { title: 'POST/REPEAT POST STUDY SAFETY EVALUATION AND SAMPLE COLLECTION FORM ', path: '/post-study/safety-evaluation' },
      { title: 'Depression Scale', path: '/post-study/depression-scale' },
      { title: 'COVID-19 Screening', path: '/post-study/covid-screening' },
      { title: 'Laboratory Reports', path: '/post-study/lab-reports',
        children: [
          { title: 'Clinical Biochemistry 1', path: '/post-study/biochemistry-1' },
          { title: 'Clinical Biochemistry 2', path: '/post-study/biochemistry-2' },
          { title: 'Hematology', path: '/post-study/hematology' },
        ]
      },
      { title: 'Adverse Event Recording', path: '/post-study/adverse-events' },
      { title: 'Concomitant Medication', path: '/post-study/concomitant-meds' },
      { title: 'Subject Withdrawal Form', path: '/post-study/withdrawal' },
      { title: 'Subject Dropout Form', path: '/post-study/dropout' },
      { title: 'Repeat Assessment Form', path: '/post-study/repeat-assessment' },
      { title: 'Telephone Notes', path: '/post-study/telephone-notes' }

    ]
  }
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['/screening']);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleExpanded = (path: string) => {
    setExpandedItems(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const isExpanded = expandedItems.includes(item.path);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.path} className="w-full">
        <div className={clsx(
          "flex items-center w-full",
          depth > 0 && "pl-4",
          "hover:bg-gray-100 rounded-md"
        )}>
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.path)}
              className="p-2 hover:bg-gray-200 rounded-md"
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
          <NavLink
            to={hasChildren ? '#' : item.path}
            className={({ isActive }) =>
              clsx(
                "flex items-center w-full p-2 text-sm rounded-md",
                isActive ? "text-blue-600 font-medium" : "text-gray-700",
                !isCollapsed && "hover:bg-gray-100"
              )
            }
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                toggleExpanded(item.path);
              }
            }}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {!isCollapsed && (
              <span className="truncate">{item.title}</span>
            )}
          </NavLink>
        </div>
        {hasChildren && isExpanded && !isCollapsed && (
          <div className="ml-2 border-l border-gray-200">
            {item.children.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && <h1 className="text-xl font-bold">Clians</h1>}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        {navigation.map(item => renderNavItem(item))}
      </nav>
    </div>
  );
}