import React from 'react';
import { ValidationResult } from '@/components/validation/validationResult';

interface Props {
  result: boolean;
}

export default function HomePage({ result }: Props) {
  return (
    <div className="flex h-screen justify-center items-center">
      <ValidationResult answer={result}></ValidationResult>
    </div>
  );
}
