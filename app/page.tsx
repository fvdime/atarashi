import Footer from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <Newsletter/>
      <Footer/>
    </>
  )
}
