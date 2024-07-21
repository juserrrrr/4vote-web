import { Metadata } from 'next';
import RegisterForm from './RegisterForm';

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Página de Cadastro',
};

export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
    </>
  );
}
