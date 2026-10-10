export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero-bg-word" aria-hidden="true">
        VOYAGER
      </span>
      <div className="wrap hero-inner">
        <span className="eyebrow">Luxury Travel Concierge</span>
        <h1>
          You Dream of the Journey.
          <br />
          <em>We Take Care of the Details.</em>
        </h1>
        <p className="hero-lead">
          Personal, discreet and distinctly yours. From your first conversation to your
          return home, one dedicated travel curator stays at your side, arranging every
          villa, table, transfer and surprise along the way.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#details">
            Consider It Arranged
          </a>
          <a className="btn ghost" href="#contact">
            Speak with a Curator
          </a>
        </div>
      </div>
    </section>
  );
}