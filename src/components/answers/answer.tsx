import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface ProgressBarProps {
  progress: number;
}

interface AnswerProps {
  imageUrl?: string;
  label: string;
  count: number;
  progress: number;
  isMostVoted: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-corNeutro rounded-full h-6 overflow-hidden">
      <div
        className="bg-corSecundaria h-6 rounded-full flex items-center justify-center"
        style={{ width: `${progress}%` }}
      >
        <span className="text-white text-sm font-bold leading-none">{progress}%</span>
      </div>
    </div>
  );
};

const Answer: React.FC<AnswerProps> = ({ imageUrl, label, count, progress, isMostVoted }) => {
  return (
    <div className={`flex items-center space-x-4 ${isMostVoted ? 'border-4 border-corPrincipal p-2 rounded-lg' : ''}`}>
      <img
        src={imageUrl}
        alt={label}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="font-bold text-corPrincipal flex items-center">
            {label}
            {isMostVoted && <CheckCircleIcon className="w-8 h-8 text-corPrincipal pl-2" />}
          </span>
          <span className="font-bold text-corPrincipal">{count}</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Answer;
