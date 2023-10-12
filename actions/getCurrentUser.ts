import { getServerSession } from "next-auth/next";
import prisma from '@/lib/prisma'
import getToken from "@/lib/getToken";

export async function getSession(){
  // return await getServerSession(getToken)
}

export default async function getCurrentUser() {
  try {
    const session = getSession()

    if (!session?.user?.email) {
      return null
    }

    const currentUser = await prisma.user.findUnique({
      where:{
        email: session.user.email as string
      }
    })

    if(!currentUser){
      return null
    }

    return currentUser
  } catch (error) {
    return null
  }
}
