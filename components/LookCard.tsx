import Image from 'next/image'
import React from 'react'

const LookCard = () => {
  return (
    <div>
      <div>
        <h1>1</h1>
      </div>
      <div className='max-w-full h-64 relative'>
      <Image 
        fill
        className="object-cover" 
        src="/chanel.webp" 
        alt="" />
      </div>
    </div>
  )
}

export default LookCard