import AppointmentsTable from '@/components/Forms/AppointmentsTable'
import React from 'react'

const AdminHomePage = () => {
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className='font-extrabold text-xl my-8'>よこそうアドミン！！！</h1>
      <AppointmentsTable/>
    </div>
  )
}

export default AdminHomePage