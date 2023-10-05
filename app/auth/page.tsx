import AuthForm from '@/components/Forms/AuthForm'
import SecondaryNavbar from '@/components/Navbars/SecondaryNavbar'
import React from 'react'

const page = () => {
  return (
    <>
      <SecondaryNavbar/>
      <div className='h-full w-full flex items-center justify-center'>
        <AuthForm/>
      </div>
    </>
  )
}

export default page