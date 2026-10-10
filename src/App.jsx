import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Voyages from "./components/Voyages.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Voyages />
      </main>
      <Footer />
    </>
  );
}
