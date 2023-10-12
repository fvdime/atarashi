import jwt, { VerifyErrors } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export default async function auth(req: NextRequest): Promise<NextRequest | NextResponse> {
  try {
    const token = req?.cookies?.get('accessToken')?.value || (req?.headers?.get('authorization') || '').split(' ')[1];
    if (!token) {
      return NextResponse.json({ message: 'Token not found' }, { status: 401});
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY!) as { user: any };
    req.user = { ...decoded.user };

    return req;
  } catch (error) {
    // Handle JWT verification errors
    console.error('JWT verification failed:', error);
  return NextResponse.json({ message: 'Token verification failed' }, {status: 401});
  }
}
