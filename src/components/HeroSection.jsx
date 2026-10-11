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

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
          <path
            d="M0,72 C180,120 360,24 540,32 C720,40 900,116 1080,104 C1260,92 1360,52 1440,64 L1440,120 L0,120 Z"
            fill="var(--ivory)"
          />
        </svg>
      </div>
    </header>
  );
}
