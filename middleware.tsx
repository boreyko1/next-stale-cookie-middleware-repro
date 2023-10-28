import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('--------');

  console.log(
    '[middleware] incoming value',
    request.cookies.get('test')?.value
  );

  const value = new Date().valueOf().toString();
  console.log('[middleware] updated value', value);

  request.cookies.set('test', value);
  console.log(
    '[middleware] check request cookie',
    request.cookies.get('test').value
  );

  const response = NextResponse.next({
    // uncomment to fix – explicitly pass headers on NextResponse init
    // request: { headers: new Headers(request.headers) },
  });
  response.cookies.set('test', value);
  console.log(
    '[middleware] check response cookie',
    response.cookies.get('test').value
  );

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
