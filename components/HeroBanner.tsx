import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-8 px-4 text-slate-950'>
      <div> 
        <h6 className='py-4 uppercase text-xs font-semibold'>Services List</h6> 
        <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl uppercase"><mark className="px-2 bg-lime-400 rounded-md">Process control</mark> in technology and industry with robotics.</h1>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex-1 mr-5'>     
          <div className="max-w-full border rounded-sm shadow border-slate-600 flex flex-row justify-center items-center">
          <div className="p-5">
              <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'></span>
                  <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'>System</span>
                  <div className='mt-4'>
                      <h5 className="mb-2 text-xl font-bold tracking-tight uppercase">Measuring Devices</h5>
                  </div>
                  <p className="my-3 font-medium text-sm text-gray-800">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <div className="block h-[1px] border-0 border-t-[1px] mt-8 p-0 border-slate-950"/>
                  <Link href='/' className="inline-flex items-center px-3 py-2 text-xs font-semibold text-center uppercase hover:underline focus:outline-none mt-2">
                      Get Started <span 
                          className='bg-slate-900 px-1 py-0.5 rounded-full text-gray-200 text-xs ml-4'>►</span>
                  </Link>
              </div>
          </div>
        </div>
        <div className='flex-1'>     
          <div className="max-w-full border rounded-sm shadow border-slate-300 flex flex-row justify-center items-center">
          <div className="p-5">
              <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'></span>
                  <span className='uppercase border border-slate-800 text-slate-950 rounded-xl px-2 text-sm font-semibold'>services</span>
                  <div className='mt-4'>
                      <h5 className="mb-2 text-xl font-bold tracking-tight uppercase">Visualization Process</h5>
                  </div>
                  <p className="my-3 font-medium text-sm text-gray-800">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <div className="block h-[1px] border-0 border-t-[1px] mt-8 p-0 border-slate-950"/>
                  <Link href='/' className="inline-flex items-center px-3 py-2 text-xs font-semibold text-center uppercase hover:underline focus:outline-none mt-2">
                      Get Started <span 
                          className='bg-slate-900 px-1 py-0.5 rounded-full text-gray-200 text-xs ml-4'>►</span>
                  </Link>
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

export default HeroBanner