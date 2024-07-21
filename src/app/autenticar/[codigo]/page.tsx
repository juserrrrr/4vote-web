import { ValidationResult } from '@/components/validation/validationResult';

const validateCodeUser = async (codigo: string) => {
  console.log(codigo);
};

async function Resposta({ params }: { params: { codigo: string } }) {
  const { codigo } = params;
  validateCodeUser(codigo);
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <ValidationResult isCorrect={true} />
      </div>
    </>
  );
}

export default Resposta;
