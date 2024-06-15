'use client';

import React, { useState } from 'react';
import IconButton from '../components/IconButton';
import { ArrowUpTrayIcon, TrashIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import InputCustom from '../components/InputCustom/InputCustom';
import Login from '@/components/login/login';
import ContainerLogin from '@/components/containerLogin/containerLogin';

export default function HomePage() {
  // const [text, setText] = useState<string>('');
  // console.log(text);
  return (
    //   <div className="w-40 mb-4">
    //     <InputCustom
    //       label="Título"
    //       type="text"
    //       error={true}
    //       helperText="Campo obrigatório"
    //       onChange={(e) => setText(e.target.value)}
    //     />
    //     <div className="box bg-white p-4">
    //       <IconButton
    //         icon={<ArrowUpTrayIcon className="w-6 h-6 text-white" />}
    //         backgroundColor="#052A76"
    //         ariaLabel="Upload"
    //       />
    //       <IconButton
    //         icon={<div className="w-6 h-6"></div>}
    //         backgroundImage="next.svg" // Caminho da imagem na pasta public
    //         ariaLabel="Image 1"
    //       />
    //       <IconButton
    //         icon={<XMarkIcon className="w-6 h-6 text-red-600" />}
    //         backgroundImage="/next.svg" // Caminho da imagem na pasta public
    //         ariaLabel="Remove Image"
    //       />
    //       <IconButton
    //         icon={<TrashIcon className="w-6 h-6 text-white" />}
    //         backgroundColor="#FF4444"
    //         ariaLabel="Delete"
    //       />
    //       <IconButton
    //         icon={<PlusIcon className="w-6 h-6 text-white" />}
    //         backgroundColor="#052A76"
    //         ariaLabel="Add"
    //       />
    //     </div>
    //   </div>
    <div className="flex h-screen justify-center items-center bg-corNeutro">
      <ContainerLogin />
    </div>
  );
}
