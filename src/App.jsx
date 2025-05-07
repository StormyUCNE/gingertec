
import './App.css'
import EntranceAnimation from './assets/Components/EntranceAnimation/EntranceAnimation'
import { LanguageProvider } from './Languages/LanguageContext'
import HeroSection from './Layouts/HeroSection/HeroSection'
import NavbarSection from './Layouts/NavbarSection/NavbarSection'
import ProjectsSection from './Layouts/ProjectsSection/ProjectsSection'
import ReviewSection from './Layouts/ReviewSection/ReviewSection'
import ServicesSection from './Layouts/ServicesSection/ServicesSection'

function App() {
  return (
    <>
      <EntranceAnimation/>
      <LanguageProvider>
          <NavbarSection/>
          <HeroSection/>
          <ServicesSection/>
          <ReviewSection/>
          <ProjectsSection/>
      </LanguageProvider>

    </>
  )
}

export default App
