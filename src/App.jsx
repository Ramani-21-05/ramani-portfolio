import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import NowSection from './components/NowSection.jsx'
import LinuxPlumbingSection from './components/LinuxPlumbingSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import ProgressStepper from './components/ProgressStepper.jsx'
import CustomCursor from './components/CustomCursor.jsx'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <ProgressStepper />
      <main>
        <HeroSection />
        <NowSection />
        <LinuxPlumbingSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
