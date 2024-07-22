import { NextRequest, NextResponse } from 'next/server';

// Rotas que redirecionam para /inicio se o usuário estiver autenticado
const authenticatedRedirectRoutes = new Set(['/login', '/recuperar-senha', '/cadastro']);
// Rotas que redirecionam para /login se o usuário não estiver autenticado
const unauthenticatedRedirectRoutes = new Set(['/criar', '/participar', '/historico', '/validar', '/perfil']);

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Função auxiliar para redirecionar
  const redirect = (path: string) => NextResponse.redirect(new URL(path, request.url));

  if (token) {
    if (authenticatedRedirectRoutes.has(pathname)) {
      return redirect('/inicio');
    }
  } else {
    if (unauthenticatedRedirectRoutes.has(pathname)) {
      return redirect('/login');
    }
  }

  // Se nenhuma das condições de redirecionamento for atendida, continue com a requisição
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
