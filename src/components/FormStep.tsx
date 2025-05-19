import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';

interface FormStepProps {
  currentPage: string;
  nextPage?: string;
  prevPage?: string;
  onSave: () => void;
  children: React.ReactNode;
}

export const FormStep: React.FC<FormStepProps> = ({
  currentPage,
  nextPage,
  prevPage,
  onSave,
  children,
}) => {
  const navigate = useNavigate();

  const handleSave = async () => {
    await onSave();
    if (nextPage) {
      navigate(nextPage);
    }
  };

  const handlePrev = () => {
    if (prevPage) {
      navigate(prevPage);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-6">{children}</div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={!prevPage}
          className={`flex items-center px-4 py-2 rounded-lg ${
            !prevPage
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Save className="w-5 h-5 mr-2" />
          {nextPage ? 'Save & Continue' : 'Save'}
          {nextPage && <ChevronRight className="w-5 h-5 ml-2" />}
        </button>
      </div>
    </div>
  );
};