"use client"
import Image from "next/image";
import { useState } from "react"
import DatePicker from "./DatePicker";


const LookImage = () => {

  const [selectedImage, setSelectedImage] = useState(0);

  const data = ["/chanel-2.webp","/chanel.webp"];

  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 text-slate-950'>
        <div className='flex flex-row items-center justify-start p-8'>
          <div className='flex flex-col items-start justify-start pr-4'>
            <Image 
            src={data[0]} 
            onClick={(e) => setSelectedImage(0)}
            height={128}
            width={128} 
            alt=""
            className="object-cover rounded-md mb-2"/>
            <Image 
            src={data[1]} 
            onClick={(e) => setSelectedImage(1)}
            height={128}
            width={128} 
            alt=""
            className="object-cover rounded-md"/>
          </div>
          <div className='flex-1 relative h-[512px] max-w-full'>
          <Image 
            src={data[selectedImage]}
            fill 
            alt=""
            className="object-cover"/>
          </div>
        </div>
        <div className='p-8'>
          <div className='mb-16'>
            <h1 className='text-lg font-bold uppercase'>look 12</h1>
            <div className="block h-[1px] border-0 border-t-2 my-4 p-0 border-slate-950"/>
            <span className='font-semibold uppercase'>fall-winter 2023/24 haute couture</span>
          </div>
          <div className="mb-16"> 
            
            <div>
            <label className="block mb-2 text-sm font-medium text-slate-950">Select Date</label>
              <DatePicker/>
            </div>
            <div className="max-w-full pt-4">
              <label className="block mb-2 text-sm font-medium text-slate-950">Your email</label>
              <input type="text" className="bg-transparent border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@example.com" />
            </div>
          </div>
          <div className='flex flex-row justify-end items-center'>
            <button type="button" className="text-gray-100 border bg-slate-900 border-slate-900 focus:outline-none hover:bg-transparent hover:text-slate-950 focus:ring-2 focus:ring-gray-200/50 font-bold text-sm px-5 py-2.5 mr-2 mb-2 uppercase transition-all duration-500 ease-in">book an appointment</button>         
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookImage