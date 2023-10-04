import Link from 'next/link'
import React from 'react'

const CollectionJumbotron = () => {
  return (
    <div className='my-4'>
      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1695844918823-8ec54d7d839c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60')] bg-slate-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="uppercase mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-3xl lg:text-4xl">spring-summer 2024 ready-to-wear show</h1>
              <p className='text-xs md:text-sm font-medium mb-8 text-slate-300'>
                Inspired by a Parisian allure, the CHANEL Fall-Winter 2023/24 Haute Couture collection imagined by Virginie Viard unveils a portrait of a delicate yet bold femininity. The collection, presented on the riverbanks of the Seine, is adorned with embroidered fruits and flowers motifs reminiscent of the still-lives dear to pictural arts.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <Link href="#" className="inline-flex justify-center text-slate-950 items-center py-3 px-5 text-xs font-semibold text-center hover:bg-transparent hover:text-gray-100 border border-white bg-gray-100 focus:ring-4 focus:ring-gray-400 uppercase transition duration-300">
                      See the collection
                  </Link>  
              </div>
          </div>
      </section>
    </div>
  )
}

export default CollectionJumbotron