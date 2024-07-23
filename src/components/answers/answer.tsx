import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface ProgressBarProps {
  progress: number;
}

interface AnswerProps {
  imageUrl: string;
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
    <div
      className={`flex gap-5 items-center space-x-4 ${isMostVoted ? 'border-4 border-corPrincipal p-2 rounded-lg' : ''}`}
    >
      <Image
        src={
          imageUrl ||
          'https://nydqbchcfgkevfdmbifx.supabase.co/storage/v1/object/public/Files4vote/Screenshot%202024-07-22%20211835.png'
        }
        alt={label}
        width={10}
        height={10}
        className="w-10 h-10 md:w-20 md:h-20 rounded-full"
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
