import { ValidationResult } from '@/components/validation/validationResult';
import { authService } from '@/lib/auth';

const validateCodeUser = async (codigo: string) => {
  const response = await authService.validateUser(codigo);
  return response;
};

async function Resposta({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  const data = await validateCodeUser(codigo);
  if (data instanceof Error) {
    return (
      <div className="w-screen h-screen p-2 flex justify-center items-center">
        <ValidationResult
          titleInvalid="Esse código expirou ou não é mais válido"
          isCorrect={false}
        />
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <ValidationResult
          titleValid="Conta ativada com sucesso"
          isCorrect={true}
        />
      </div>
    </>
  );
}

export default Resposta;
