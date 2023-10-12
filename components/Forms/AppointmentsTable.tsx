import Link from 'next/link'
import React from 'react'

const AppointmentsTable = () => {
  return (
    <div>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between pb-4 bg-slate-800">
      <h1 className='text-gray-100 pt-3 pl-2 uppercase '>Appointments</h1>
    </div>
    <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase bg-slate-300/30">
            <tr>
              <th scope="col" className="px-6 py-3 text-slate-950">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-slate-950">
                Information
              </th>
              <th scope="col" className="px-6 py-3 text-slate-950">
                Date
              </th>
            </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent border-b">
            <td className="px-6 py-4">
              <div className="flex items-center text-base font-semibold">
                Neil Sims
              </div>
            </td>
            <td className="px-6 py-4">
              <div>
                <div className="text-md font-semibold text-slate-800">neil.sims@flowbite.com</div>
                <div className="font-normal text-xs pt-1 text-slate-500">0123 456 7890</div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                17.12.2023
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="bg-transparent border-b">
            <td className="px-6 py-4">
              <div className="flex items-center text-base font-semibold">
                Neil Sims
              </div>
            </td>
            <td className="px-6 py-4">
              <div>
                <div className="text-md font-semibold text-slate-800">neil.sims@flowbite.com</div>
                <div className="font-normal text-xs pt-1 text-slate-500">0123 456 7890</div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                17.12.2023
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="bg-transparent border-b">
            <td className="px-6 py-4">
              <div className="flex items-center text-base font-semibold">
                Neil Sims
              </div>
            </td>
            <td className="px-6 py-4">
              <div>
                <div className="text-md font-semibold text-slate-800">neil.sims@flowbite.com</div>
                <div className="font-normal text-xs pt-1 text-slate-500">0123 456 7890</div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                17.12.2023
              </div>
            </td>
          </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AppointmentsTable