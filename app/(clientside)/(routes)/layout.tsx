import Footer from '@/components/Footer'
import SecondaryNavbar from '@/components/SecondaryNavbar'
import React from 'react'

const ClientLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <SecondaryNavbar/>
      {children}
    </div>
  )
}

export default ClientLayout