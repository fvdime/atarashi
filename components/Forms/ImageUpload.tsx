"use client"

import { CldUploadWidget} from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'

declare global {
  var cloudinary: any
}

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

const ImageUpload = ({value, onChange}: ImageUploadProps) => {
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url)
  }, [onChange])

  return (
    <div className="mb-6">
    <CldUploadWidget onUpload={handleUpload} uploadPreset='yxg4fasq' options={{maxFiles: 1}} >{({open}) => {return( 
    <div 
      onClick={() => open?.()}
      className='relative cursor-pointer hover:opacity-50 transition duration-200 ease-in border-dashed border-2 p-20 flex flex-col border-slate-600 justify-center items-center text-slate-800'
      >
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
    </svg>
    <h2 className='font-semibold text-lg'>Click to upload</h2>
    {value && (
      <div className='absolute inset-0 w-full h-full'>
        <Image alt='upload' fill style={{ objectFit: 'cover'}} src={value}/>
      </div>
      )}
      </div>)}}</CldUploadWidget>
  </div>
  )
}

export default ImageUpload