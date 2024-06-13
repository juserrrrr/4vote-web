'use client';
import SideMenu from './components/sideMenu/SideMenu';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState<string>('');
  console.log(text);
  return (
    <>
      <div className=" bg-corNeutro">LandingPage</div>
    </>
  );
}
