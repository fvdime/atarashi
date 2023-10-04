import CollectionJumbotron from '@/components/CollectionJumbotron'
import Footer from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <HeroBanner/>
      <Footer/>
    </>
  )
}
