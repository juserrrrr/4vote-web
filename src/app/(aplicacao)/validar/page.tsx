import PageParticipateValidate from '@/components/participateValidate/PageParticipateValidate';

export default function ValidatePage() {
  return (
    <>
      <PageParticipateValidate
        title="VALIDAR SEU VOTO"
        description="A chave de verificação foi encaminhada para o e-mail cadastrado."
        type="validate"
      />
    </>
  );
}
