import React from 'react';

interface ProgressBarProps {
  progress: number;
}

interface AnswerProps {
  imageUrl: string;
  label: string;
  count: number;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-corNeutro rounded-full h-4 overflow-hidden">
      <div
        className="bg-corSecundaria h-4 rounded-full flex items-center justify-center"
        style={{ width: `${progress}%` }}
      >
        <span className="text-white text-xs font-medium leading-none">{progress}%</span>
      </div>
    </div>
  );
};

const Answer: React.FC<AnswerProps> = ({ imageUrl, label, count, progress }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={imageUrl}
        alt={label}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="font-bold text-corPrincipal">{label}</span>
          <span className="font-bold text-corPrincipal">{count}</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Answer;
