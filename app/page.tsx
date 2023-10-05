import CollectionJumbotron from '@/components/Jumbotrons/CollectionJumbotron'
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbars/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <CollectionJumbotron/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
