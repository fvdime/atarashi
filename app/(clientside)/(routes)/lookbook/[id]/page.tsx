import CategoryJumbotron from '@/components/Jumbotrons/CollectionJumbotron'
import LookBookJumbotron from '@/components/Jumbotrons/LookbookJumbotron'
import Looks from '@/components/Looks'
import React from 'react'

const page = () => {
  return (
    <>
      <LookBookJumbotron/>
      <Looks/>
    </>
  )
}

export default page