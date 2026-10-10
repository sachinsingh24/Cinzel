import { useEffect, useState } from "react";

const LINKS = [
  { label: "The Details", href: "#details" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${solid ? " solid" : ""}`}>
      <div className="wrap nav-inner">
        <a className="nav-logo" href="#top" aria-label="Saints Voyager home">
          <img
            className="logo-ivory"
            src="/assets/brand/SaintsVoyager_Logo_IvoryType_Transparent_3000.png"
            alt="Saints Voyager"
          />
          <img
            className="logo-navy"
            src="/assets/brand/SaintsVoyager_Logo_NavyType_Transparent_3000.png"
            alt="Saints Voyager"
          />
        </a>

        <nav className={`nav-links${open ? " open" : ""}`} id="site-nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Consider It Arranged
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>
    </header>
  );
}
