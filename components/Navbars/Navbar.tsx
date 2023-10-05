// import { getSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  // const session = getSession()

  const navbarList = [
    {
      id: 1,
      title: "About",
      href: '/',
      icon: "✧"
    },
    {
      id: 2,
      title: "Movement",
      href: '/',
      icon: "✦"
    },
    {
      id: 3,
      title: "Join",
      href: '/auth',
      icon: "✮"
    }
  ]
  return (
    <div className='border-b border-slate-950/30'>
      <nav className="text-slate-950">
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
              <Link href="/" className="flex items-center">
                  <span className="self-center text-xl font-semibold whitespace-nowrap uppercase">a t a r a s h i i</span>
              </Link>
          </div>
      </nav>
      <nav className="">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="">
                  <ul className="flex flex-row items-center justify-between font-medium mt-0 mr-6 space-x-8 text-sm">
                    {navbarList.map((item) => (
                      <li className='max-w-full border border-t border-slate-950/20 flex-1 text-center' key={item.id}>
                        <div className='flex flex-row justify-between items-center px-1'>
                          <Link href={item.href} className="hover:underline">{item.title}</Link>
                          <button 
                          type='button'
                          className='bg-slate-900 px-1 rounded-full text-gray-200 text-sm'>{item.icon}</button>
                        </div>
                      </li>
                      ))}
                  </ul>
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar