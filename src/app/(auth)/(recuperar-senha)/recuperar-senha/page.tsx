import { Metadata } from 'next';
import RecoverPasswordForm from './RecoverPasswordForm';

export const metadata: Metadata = {
  title: 'Recuperar Senha',
  description: 'Página de Recuperação de Senha',
};

export default function RecoverPasswordPage() {
  return (
    <>
      <RecoverPasswordForm />
    </>
  );
}
