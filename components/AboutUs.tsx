import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-8 px-4 text-slate-950'>
      <div> 
        <h6 className='py-4 uppercase text-xs font-semibold'>About Us</h6> 
        <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl uppercase"><mark className="px-2 bg-slate-400 rounded-md">Pieces just for you</mark> made for you and done it for you. <br /> Also just for you!</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='flex-1'>     
          <div className="max-w-full border rounded-sm shadow border-slate-600 flex flex-row justify-center items-center">
          <div className="p-5">
              <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'></span>
                  <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'>System</span>
                  <div className='mt-4'>
                      <h5 className="mb-2 text-xl font-bold tracking-tight uppercase">Appointment</h5>
                  </div>
                  <p className="my-3 font-medium text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod, minus iste doloribus, aut cum enim praesentium. わからない全然書かないよ</p>
                  <div className="block h-[1px] border-0 border-t-[1px] mt-8 p-0 border-slate-950"/>
                  <Link href='/' className="inline-flex items-center px-3 py-2 text-xs font-semibold text-center uppercase hover:underline focus:outline-none mt-2">
                      Get Started 
                      <span 
                        className='bg-slate-900 px-1 py-0.5 rounded-full text-gray-200 text-xs ml-4'>
                          ►</span>
                  </Link>
              </div>
          </div>
        </div>
        <div className='flex-1 w-full'>     
          <div className="w-full border rounded-sm shadow border-slate-300 flex flex-row justify-stretch items-center">
          <div className="py-4 px-5">
              <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'></span>
                  <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'>newsletter</span>
                  <div className='mt-4'>
                      <h5 className="mb-2 text-xl font-bold tracking-tight uppercase">Sign up to our newsletter</h5>
                  </div>
                  <p className="my-3 font-medium text-sm text-gray-800">If you liked our work and wanna keep in touch please subscribe to our newsletter. Thank you for your interest!</p>
                  <div>
                  <input type="email" name="email" className="bg-transparent text-slate-950 text-sm rounded-full block w-full p-1.5 pl-4 border border-slate-500 placeholder-slate-400" placeholder="name@company.com" required />
              </div>
                  <button type="submit" className="w-full text-slate-950 hover:bg-slate-950 hover:text-white transition duration-500 ease-in focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2 text-center mt-1">Subscribe</button>
              </div>
          </div>
        </div>
      </div>
      <div className='my-8 w-full flex-1 '> 
        <span className='font-semibold text-sm flex items-center justify-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, optio voluptas quo quasi, <br/> laboriosam aspernatur rem veniam ratione quam odio ad.
        </span>
      </div>
    </div>
  )
}

export default AboutUs