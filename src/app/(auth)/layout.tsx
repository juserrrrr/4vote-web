import ContainerLogin from '@/components/containerLogin/containerLogin';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '4Vote',
  description: 'NexusTech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-corNeutro px-5">
      <ContainerLogin>{children}</ContainerLogin>
    </div>
  );
}
