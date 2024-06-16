import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';

export default function Login() {
  return (
    <>
      <h2 className="text-corPrincipal text-center font-bold text-5xl">LOGIN</h2>
      <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10">
        <div className="w-full flex flex-col justify-between my-5">
          <InputCustom label="Email" />
          <InputCustom label="Senha" />
        </div>
        <div className="my-5">
          <Butao
            texto="Fazer Login"
            variante="rounded"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-gray-500 text-center font-open-sans font-bold text-lg underline">
        <a href="../auth/recuperar-senha">Esqueci a senha</a>
        <a href="../auth/cadastro">Novo aqui? Fazer Cadastro</a>
      </div>
    </>
  );
}
