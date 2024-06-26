'use client';
import { FormEvent, useEffect, useState } from 'react';
import { PencilIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { getCurrentUserInfo, updateCurrentUser } from '@/lib/user';
import clsx from 'clsx';

export function ProfileConfig() {
  const [nome, setNewNome] = useState('');
  const [cpf, setNewCpf] = useState('');
  const [email, setNewEmail] = useState('');
  const [nomeDisabled, setNomeDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [nomeBorderColor, setnomeBorderColor] = useState('grey');
  const [emailBorderColor, setEmailBorderColor] = useState('grey');
  const [showAlerta, setNewShowAlerta] = useState(false);
  const [warning, setWarning] = useState('');

  useEffect(() => {
    getAndShowUserData();
  }, []);

  async function getAndShowUserData() {
    const userInfo = await getCurrentUserInfo();
    console.log(userInfo);
    if (userInfo) {
      setNewNome(userInfo['nome']);
      setNewEmail(userInfo['email']);
      setNewCpf(userInfo['cpf']);
    }
  }

  function onTodoChangeNome(value: string) {
    setNewNome(value);
  }

  function onTodoChangeEmail(value: string) {
    setNewEmail(value);
  }

  function toggleNomeInput() {
    console.log('chamou');
    setNomeDisabled(!nomeDisabled);
    if (!nomeDisabled) {
      setnomeBorderColor('grey');
    } else {
      setnomeBorderColor('green');
    }
  }

  function toggleEmailInput() {
    setEmailDisabled(!emailDisabled);
    if (!emailDisabled) {
      setEmailBorderColor('grey');
    } else {
      setEmailBorderColor('green');
    }
  }

  const sendUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (nome != null && email != null) {
      console.log('ok');
      const isUpdated = await updateCurrentUser(nome, email);
      console.log(isUpdated);

      if (isUpdated == true) {
        getAndShowUserData();
        setEmailDisabled(true);
        setEmailBorderColor('grey');
        setNomeDisabled(true);
        setnomeBorderColor('grey');

        setWarning('Dados atualizados com sucesso!');
        showWarning();

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setWarning('Não foi possível atualizar os dados');
        showWarning();
      }
    }
  };

  const showWarning = async () => {
    setNewShowAlerta(true);

    setTimeout(() => {
      setNewShowAlerta(false);
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <form onSubmit={sendUpdateUser}>
        <div className="mb-4 mt-10">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="nome"
          >
            Nome
          </label>
          <div className={'flex items-center border border-' + nomeBorderColor + '-300 rounded py-2 px-3'}>
            <input
              type="text"
              id="nome"
              name="nome"
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              value={nome}
              onChange={(e) => onTodoChangeNome(e.target.value)}
              disabled={nomeDisabled}
            />
            <PencilIcon
              className="text-corPrincipal w-4 absolute  right-96 cursor-pointer"
              onClick={toggleNomeInput}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className={'flex items-center border border-' + emailBorderColor + '-300 rounded py-2 px-3'}>
            <input
              type="text"
              id="email"
              name="email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              value={email}
              onChange={(e) => onTodoChangeEmail(e.target.value)}
              disabled={emailDisabled}
            />
            <PencilIcon
              className="text-corPrincipal w-4 absolute right-96 cursor-pointer"
              onClick={toggleEmailInput}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="cpf"
          >
            CPF
          </label>
          <div className="flex items-center border border-grey-300 rounded py-2 px-3">
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={cpf}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none text-sm"
              disabled={true}
            />
          </div>
        </div>
        <div
          className={clsx('bg-orange-100 border-orange-500 text-orange-700 my-5', {
            hidden: !showAlerta,
            block: showAlerta,
          })}
          role="alert"
        >
          <p className="font-bold">{warning}</p>
        </div>

        <button
          className="w-full bg-corPrincipal text-white py-2 rounded hover:bg-corPrincipal-dark"
          type="submit"
        >
          Salvar alterações
        </button>
      </form>
    </div>
  );
}
