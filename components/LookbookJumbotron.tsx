import Image from 'next/image'
import React from 'react'

const LookBookJumbotron = () => {
  return (
    <div className='w-full p-16 mb-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='max-w-full h-[512px] relative'>
          <Image src="/chanel.webp" fill alt='' className='object-cover'/>
        </div>
        <div className='grid grid-rows-1 gap-4'>
        <div className='max-w-full h-[256px] relative'>
          <Image src="/chanel.webp" fill alt='' className='object-cover'/>
        </div>
          <div>
            <h1 className='uppercase font-bold py-4'>fall-winter 2023/24 haute couture</h1>
            <p className='text-slate-950 text-xs md:text-sm font-medium'>
              Inspired by a Parisian allure, the CHANEL Fall-Winter 2023/24 Haute Couture collection imagined by Virginie Viard unveils a portrait of a delicate yet bold femininity. The collection, presented on the riverbanks of the Seine, is adorned with embroidered fruits and flowers motifs reminiscent of the still-lives dear to pictural arts. Silhouettes play with masculine codes, mixing together rigour and asymmetry, a self-confident and discreet figure. Inspired by a Parisian allure, the CHANEL Fall-Winter 2023/24 Haute Couture collection imagined by Virginie Viard unveils a portrait of a delicate yet bold femininity. The collection, presented on the riverbanks of the Seine, is adorned with embroidered fruits and flowers motifs reminiscent of the still-lives dear to pictural arts. Silhouettes play with masculine codes, mixing together rigour and asymmetry, a self-confident and discreet figure.
            </p>
          </div>
        </div>
      </div>
        <div className='my-4 mx-8 md:mx-32'>
          <div className="block h-[1px] border-0 border-t-[1px] mt-8 p-0 border-slate-950"/>
        </div>
    </div>
  )
}

export default LookBookJumbotron