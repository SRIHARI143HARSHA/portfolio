import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalProfile from './components/ProfessionalProfile';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import CodingProfiles from './components/CodingProfiles';
import RecruiterCTA from './components/RecruiterCTA';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#090D16] dark:bg-[#090D16] light:bg-[#F8FAFC] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProfessionalProfile />
          <Skills />
          <Internships />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <CodingProfiles />
          <RecruiterCTA />
          <ResumeCTA />
          <Contact />
        </main>
        <Footer />
        <ChatAssistant />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
