import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Redirect legacy /auth/* paths to their public routes
  if (pathname.startsWith('/auth/')) {
    const newPath = pathname.replace(/^\/auth/, '');
    const url = new URL(newPath + (searchParams.toString() ? '?' + searchParams.toString() : ''), request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*'],
};

