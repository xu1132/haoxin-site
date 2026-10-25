import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Equipment from './components/Equipment'
import Team from './components/Team'
import Process from './components/Process'
import Areas from './components/Areas'
import Gallery from './components/Gallery'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Equipment />
        <Team />
        <Process />
        <Areas />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
