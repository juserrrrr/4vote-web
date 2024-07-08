'use client';

import { useState } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email) {
      setError(true);
      setMessage('Email é obrigatório');
      return;
    }

    const payload = {
      from: 'your-email@example.com', // Opcional: pode ser configurado no backend
      recipientName: 'Recipient Name', // Opcional: adicionar se tiver essa informação
      recipientEmail: email,
      subject: 'Redefinição de senha',
      html: '<p>Para redefinir sua senha, clique no link a seguir...</p>',
      text: 'Para redefinir sua senha, clique no link a seguir...',
    };

    try {
      const response = await fetch('http://localhost:4000/mailer/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage('Instruções de redefinição de senha enviadas para seu email');
        setError(false);
      } else {
        setMessage('Erro ao enviar o email');
        setError(true);
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('Erro ao enviar o email');
      setError(true);
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col text-corPrincipal text-center px-10 gap-10">
          <h2 className="font-bold text-3xl">Esqueci minha senha</h2>
          <p className="text-xl">Informe seu e-mail cadastrado para enviarmos as instruções de redefinição de senha.</p>
        </div>

        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
          <div className="w-full flex flex-col justify-between gap-5">
            <InputCustom
              label="Email"
              helperText="Campo Obrigatório"
              error={error}
              onChange={handleEmailChange}
            />
          </div>
          <div className="w-full">
            <Butao
              texto="Enviar"
              variant="rounded"
              className="w-full"
              onClick={handleSubmit}
            />
          </div>
        </div>
        {message && <div className={`text-center ${error ? 'text-red-500' : 'text-green-500'}`}>{message}</div>}
      </div>
    </>
  );
}
