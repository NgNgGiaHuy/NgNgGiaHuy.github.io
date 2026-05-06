
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <main className="w-full min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA] font-sans selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
