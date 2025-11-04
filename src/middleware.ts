import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode

const protectedRoutes = ['/dashboard', '/stories', '/payments', '/settings'];
const authRoutes = ['/login', '/signup', '/forgot-password'];
const adminRoutes = ['/dashboard', '/stories', '/payments', '/settings'];

interface JwtPayload {
  id?: string;
  email?: string;
  name?: string;
  role?: string;
  exp?: number;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('accessToken')?.value;

  let userRole: string | undefined;
  let isLoggedIn = false;

  if (token) {
    try {
      const payload = jwtDecode<JwtPayload>(token);
      userRole = payload.role;
      isLoggedIn = true;
    } catch (error) {
      console.warn("Invalid token", error);
    }
  }

  const isAdmin = userRole === 'ADMIN';

  // Redirect logged-in users away from auth pages
  if (isLoggedIn && authRoutes.some(route => pathname.startsWith(route))) {
    const redirectUrl = isAdmin ? '/dashboard' : '/start';
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  // Protect routes
  if (!isLoggedIn && protectedRoutes.some(route => pathname.startsWith(route))) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Block non-admins from admin routes
  if (isLoggedIn && !isAdmin && adminRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg)$).*)',
  ],
};