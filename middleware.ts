import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Handle redirects from old /auth/* paths to /(auth)/* paths
  if (pathname.startsWith('/auth/')) {
    const newPath = pathname.replace(/^\/auth\//, '/(auth)/');
    const url = new URL(newPath + (searchParams.toString() ? '?' + searchParams.toString() : ''), request.url);
    return NextResponse.redirect(url);
  }

  // Handle redirects from old /dashboard/* paths to /(dashboard)/* paths
  if (pathname.startsWith('/dashboard/')) {
    const newPath = pathname.replace(/^\/dashboard\//, '/(dashboard)/');
    const url = new URL(newPath + (searchParams.toString() ? '?' + searchParams.toString() : ''), request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/auth/:path*',
    '/dashboard/:path*',
  ],
};

