import React from 'react';
import { ValidationResult } from '@/components/validation/validationResult';

export default function HomePage({}) {
  return (
    <div className="flex h-screen justify-center items-center">
      <ValidationResult answer={true}></ValidationResult>
    </div>
  );
}
