import { EyeSlashIcon, PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[190px] bg-corPrincipal border-none my-5">
        <div className="top-20 relative inline-block">
          <div className="absolute top-28 left-28 bg-white p-2 rounded-full">
            <PencilIcon className="text-corPrincipal w-6" />
          </div>
          <Image
            width={150}
            height={150}
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-md mx-auto px-4">
        <div className="mb-4 mt-10">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="nome"
          >
            Nome
          </label>
          <div className="flex items-center border border-gray-300 rounded py-2 px-3">
            <input
              type="text"
              id="nome"
              name="nome"
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              value="Francisco da Silva"
            />
            <PencilIcon className="text-corPrincipal w-4 absolute right-96 cursor-pointer" />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded py-2 px-3">
            <input
              type="text"
              id="email"
              name="email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              value="franciscodasilva@email.com"
            />
            <PencilIcon className="text-corPrincipal w-4 absolute right-96 cursor-pointer" />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="cpf"
          >
            CPF
          </label>
          <div className="flex items-center border border-gray-300 rounded py-2 px-3">
            <input
              type="text"
              id="cpf"
              name="cpf"
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              value="123.456.789-00"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="senha"
          >
            Senha
          </label>
          <div className="flex items-center border border-gray-300 rounded py-2 px-3">
            <input
              type="password"
              id="senha"
              name="senha"
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              value="******"
            />
            <EyeSlashIcon className="text-corPrincipal w-5 ml-3" />
            <PencilIcon className="text-corPrincipal w-4 absolute right-96 cursor-pointer" />
          </div>
        </div>
        <button className="w-full bg-corPrincipal text-white py-2 rounded hover:bg-corPrincipal-dark">
          Salvar alterações
        </button>
      </div>
    </div>
  );
}
