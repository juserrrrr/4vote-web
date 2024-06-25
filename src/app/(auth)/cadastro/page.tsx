'use client';
import { useState } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';
import clsx from 'clsx';
import api from '@/lib/app';

// retirei o export daqui
const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Página de Cadastro',
};

export default function Cadastro() {
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');
  const [nome, setNewNome] = useState('');
  const [cpf, setNewCpf] = useState('');
  const [confSenha, setNewConfSenha] = useState('');
  const [alerta, setNewAlerta] = useState('Senhas não conferem');
  const [showAlerta, setNewShowAlerta] = useState(false);

  const sendSignUp = (email: any, senha: any, confSenha: any, cpf: any, nome: any) => {
    if (confSenha != senha) {
      setNewAlerta('Senhas não conferem');
      setNewShowAlerta(true);

      setTimeout(() => {
        setNewShowAlerta(false);
      }, 3000);

      return;
    } else if (email == '' || senha == '' || cpf == '' || nome == '') {
      setNewAlerta('Preencha todos os campos');
      setNewShowAlerta(true);

      setTimeout(() => {
        setNewShowAlerta(false);
      }, 3000);
      return;
    }

    api
      .post('/auth/cadastro', {
        email: email,
        senha: senha,
        cpf: cpf,
        nome: nome,
      })
      .then((res: any) => {
        setNewAlerta('Cadastro efetuado com sucesso!');
        setNewShowAlerta(true);

        setTimeout(() => {
          setNewShowAlerta(false);
        }, 3000);
      })
      .catch((err: any) => {
        setNewAlerta('Não foi possível realizar o cadastro');
        setNewShowAlerta(true);

        setTimeout(() => {
          setNewShowAlerta(false);
        }, 3000);
      });
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">CADASTRO</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-1">
          <div className="w-full flex flex-col justify-between gap-3">
            <InputCustom
              label="Nome"
              helperText="Campo Obrigatório"
              onChange={(e) => setNewNome(e.target.value)}
              error={true}
            />
            <InputCustom
              label="Email"
              onChange={(e) => setNewEmail(e.target.value)}
              helperText="Campo Obrigatório"
              error={true}
            />
            <InputCustom
              label="CPF"
              onChange={(e) => setNewCpf(e.target.value)}
              helperText="Campo Obrigatório"
              error={true}
            />
            <InputCustom
              label="Senha"
              onChange={(e) => setNewSenha(e.target.value)}
              helperText="Campo Obrigatório"
              type="password"
              error={true}
            />
            <InputCustom
              label="Confirmar Senha"
              onChange={(e) => setNewConfSenha(e.target.value)}
              helperText="Campo Obrigatório"
              type="password"
              error={true}
            />
            <div
              className={clsx('bg-orange-100 border-orange-500 text-orange-700', {
                hidden: !showAlerta,
                block: showAlerta,
              })}
              role="alert"
            >
              <p className="font-bold">{alerta}</p>
            </div>
          </div>
          <div className="w-full py-5">
            <Butao
              onClick={() => sendSignUp(email, senha, confSenha, cpf, nome)}
              texto="Confirmar Cadastro"
              variant="rounded"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
