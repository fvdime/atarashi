import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
      <nav className="bg-transparent border-b border-slate-800 text-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap uppercase">新しい</span>
          </Link>
          <div>
            <ul className="font-semibold text-sm flex flex-row">
              <li>
                <Link href="/admin" className="block px-4 border border-slate-950/20 mr-2 hover:underline">Appointments</Link>
              </li>
              <li>
                <Link href="/admin/collections" className="block px-4 border border-slate-950/20 mr-2 hover:underline">Collections</Link>
              </li>
              <li>
                <Link href="/admin/looks" className="block px-4 border border-slate-950/20 mr-2 hover:underline">Looks</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavbar