import AdminNavbar from '@/components/Navbars/AdminNavbar'
import React from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <AdminNavbar/>
      {children}
    </div>
  )
}

export default AdminLayout