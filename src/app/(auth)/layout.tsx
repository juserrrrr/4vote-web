import ContainerLogin from '@/components/containerLogin/containerLogin';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Login',
  description: 'Página de Login',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex h-screen justify-center items-center bg-corNeutro">
          <ContainerLogin>{children}</ContainerLogin>
        </div>
      </body>
    </html>
  );
}
