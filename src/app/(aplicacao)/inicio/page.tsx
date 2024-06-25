'use client';
import { useEffect, useState } from 'react';
import { axiosClient, getCookie, getCurrentUserId } from '../../../../lib';

export default function Home() {
  const [nomeUser, setNewNomeUser] = useState('Estou no início');

  // Para rodar assim que a página iniciar
  useEffect(() => {
    const userId = getCurrentUserId();
    const token = getCookie('accessToken');

    if (userId != null) {
      axiosClient
        .get('/usuarios/' + userId, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setNewNomeUser('Bem-vindo ' + res.data.nome + '!');
        })
        .catch((err) => {
          return null;
        });
    }
  }, []);

  return (
    <>
      <h2 className=" bg-corNeutro">{nomeUser}</h2>
    </>
  );
}
