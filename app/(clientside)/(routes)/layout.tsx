import SecondaryNavbar from '@/components/Navbars/SecondaryNavbar'
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