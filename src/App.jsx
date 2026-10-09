import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Now from './components/Now.jsx'
import Projects from './components/Projects.jsx'
import KernelArchitecture from './components/KernelArchitecture.jsx'
import ToolkitBento from './components/ToolkitBento.jsx'
import Vouches from './components/Vouches.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Hero />
        <hr className="section-spacer" />
        <Now />
        <hr className="section-spacer" />
        <Projects />
        <hr className="section-spacer" />
        <KernelArchitecture />
        <hr className="section-spacer" />
        <ToolkitBento />
        <hr className="section-spacer" />
        <Vouches />
        <hr className="section-spacer" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
