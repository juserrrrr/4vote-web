import PageParticipateValidate from '@/components/participateValidate/PageParticipateValidate';
import ParticipateForm from '../../../components/participateValidate/participateForm';

export default function ParticipatePage() {
  return (
    <>
      <PageParticipateValidate
        title="ENTRAR EM VOTAÇÃO/ENQUETE PRIVADA"
        description="Utilize o código da votação/enquete que deseja participar"
        type="participate"
      />
    </>
  );
}
