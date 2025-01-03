import FAQSection from './components/Faq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProfessorSection from './components/Prof';
import Programme from './components/Program';
import ProgramObjectives from './components/ProgramObjectives';
import PublicSection from './components/Public';
import TestimonialsSection from './components/Testimonial';
import ToolsSection from './components/Tools';

import Location from './components/Location';
import Tarifs from './components/Pricing';
import Whatsapp from './components/Whatsapp';
import WhyJoin from './components/WhyJoin';
export default function Home() {
  return (
    <div className="w-full items-center justify-center">
      <Hero />
      <PublicSection />
      <WhyJoin />
      <ProgramObjectives />
      <Programme />
      <ToolsSection />
      <Tarifs />
      <ProfessorSection />
      <TestimonialsSection />
      <FAQSection />
      <Location />
      <Footer />
      <Whatsapp />
    </div>
  );
}
