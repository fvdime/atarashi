import React from 'react'
import LookCard from './LookCard'

const Looks = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <div>
        <div>
          <h1 className='uppercase font-semibold text-2xl text-center mb-8'>looks</h1>
        </div>
        <div className='px-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
          <LookCard/>
        </div>
      </div>
    </div>
  )
}

export default Looks