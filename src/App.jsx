import HeroSection from "./components/HeroSection.jsx";
import HeroWave from "./components/HeroWave.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ContactCTA from "./components/ContactCTA.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

export default function App() {
  return (
    <>
      <HeroSection />
      <HeroWave />
      <main>
        <ServicesSection />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
