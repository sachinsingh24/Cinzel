import BrandWordmark from "./BrandWordmark.jsx";
import { SITE } from "../config.js";

export default function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="hero-overlay" aria-hidden="true" />

      <div className="wrap hero-content">
        <BrandWordmark className="hero-logo" />
        <h1 className="hero-title">Luxury Travel Concierge</h1>
        <p className="hero-tagline">Go somewhere worth the jet lag.</p>
        <a className="btn hero-cta" href={SITE.actions.memberRegistration}>
          Member Requests Registration
        </a>
      </div>
    </header>
  );
}
