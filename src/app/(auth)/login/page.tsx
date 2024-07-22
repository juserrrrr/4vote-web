import { Metadata } from 'next';
import LoginForm from './LoginForm';

// retirei o export daqui
const metadata: Metadata = {
  title: 'Login',
  description: 'Página de Login',
};

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
