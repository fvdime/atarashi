import Link from 'next/link'
import React from 'react'

const SecondaryNavbar = () => {
  return (
    <div>
      <nav className="bg-transparent border-b border-slate-800 text-slate-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center justify-between w-full">
            <span className="self-center text-xl font-semibold whitespace-nowrap uppercase">a t a r a s h i i</span>
            <span className="self-center text-xl font-semibold whitespace-nowrap uppercase">新しい</span>
          </Link>
          {/* <div className="">
            <ul className="font-semibold text-sm flex flex-row">
              <li>
                <Link href="/" className="block px-4 border border-slate-950/20 mr-2 hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/" className="block px-4 border border-slate-950/20 mr-2 hover:underline">Contact</Link>
              </li>
              <li>
                <Link href="/auth" className="block px-4 border border-slate-950/20 mr-2 hover:underline">Login</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  )
}

export default SecondaryNavbar