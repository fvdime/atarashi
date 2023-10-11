import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import {generateAccessToken, generateRefreshToken} from '@/lib/utils/helper'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()
  
    const hashedPassword = await bcrypt.hash(password, 12)
  
    const user = await prisma.user.create({
      data: { name, email, hashedPassword }
    })

    if (user) {
      const accessToken = generateAccessToken({user: user})
      const refreshToken = generateRefreshToken({user:user})

      const response = NextResponse.json({data: user, success: true, message: "User Created", token: accessToken, refreshToken}, {status: 201})

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
      
    } else{
      return NextResponse.json({ message: "User not created!" }, { status: 400 })
    }
  
  } catch (error) {
    return NextResponse.json({ message: "Server error, please try again" }, { status: 500 })
  }
}