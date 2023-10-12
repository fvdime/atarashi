import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import {generateAccessToken, generateRefreshToken} from '@/lib/utils/helper'


export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json()
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: { email: email }
    })
    if (!user) {
      return NextResponse.json({ user: null, message: 'User not found!' }, { status: 401 })
    }

    if (user.hashedPassword === null) {
      return NextResponse.json({ message: 'Password not set for this user' }, { status: 401 });
    }

    const passwordsMatch = await bcrypt.compare(password, user.hashedPassword);

    if (passwordsMatch) {
      // user.password = undefined

      const accessToken = generateAccessToken({
        user: {
          id: user.id,
          email: user.email
        }
      })

      const refreshToken = generateRefreshToken({
        user: {
          id: user.id,
          email: user.email
        }
      })

      const response = NextResponse.json({
        success: true, data: user, token: {accessToken, refreshToken}
      }, {status: 200})

      const EXP_TIME = 30* 24 * 60 * 60 * 1000;

      response.cookies.set({
        name: 'accessToken', 
        value: accessToken,
        path: '/',
        expires: Date.now() + EXP_TIME
      })

      response.cookies.set({
        name: 'refreshToken', 
        value: refreshToken,
        path: '/',
        expires: Date.now() + EXP_TIME
      })

      return response      
    } else {
      return NextResponse.json({ message: "Invalid credentials. Please try again!" }, { status: 401 })
    }

    // if (!passwordsMatch) {
    //   return NextResponse.json({ message: "Invalid credentials. Please try again!" }, { status: 401 })
    // }

    // if (email === process.env.ADMIN_EMAIL || password === process.env.ADMIN_PASSWORD) {
    //   return NextResponse.json({message: "hello admin"}, {status: 200})
    // }

    // const secret = process.env.JWT_SECRET || ""

    // const token = sign({email}, secret, {expiresIn: MAX_AGE})

    // const serialized = serialize('OurSiteJWT', token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   sameSite: 'strict',
    //   maxAge: MAX_AGE,
    //   path: '/'
    // })

    // const res = {message: "Authenticated!"}

    // return new Response(JSON.stringify(res), {status: 200, headers: {'Set-Cookie': serialized}})

    // return NextResponse.json({ message: 'Logged in successfully!' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Server error, please try again" }, { status: 500 })
  }
}