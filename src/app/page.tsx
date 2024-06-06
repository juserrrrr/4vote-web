'use client';
import InputCustom from './lib/components/InputCustom';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState<string>('');
  console.log(text);
  return (
    <>
      <div className=" w-40">
        <InputCustom
          label="Título"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
}
