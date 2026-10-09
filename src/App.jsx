import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Now from './components/Now.jsx'
import Projects from './components/Projects.jsx'
import Toolkit from './components/Toolkit.jsx'
import Vouches from './components/Vouches.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Now />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Toolkit />
        <hr className="section-divider" />
        <Vouches />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
