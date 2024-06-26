import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nova Senha',
  description: 'Página de Criação de Nova Senha',
};

export default function NovaSenha() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">NOVA SENHA</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
          <div className="w-full flex flex-col justify-between gap-5">
            <InputCustom
              label="Email"
              helperText="Campo Obrigatório"
              error={true}
            />
            <InputCustom
              label="Nova Senha"
              helperText="Campo Obrigatório"
              error={true}
            />
            <InputCustom
              label="Confirme sua Senha"
              helperText="Campo Obrigatório"
              error={true}
            />
          </div>
          <div className="w-full">
            <Butao
              texto="Alterar Senha"
              variant="rounded"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
