export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-cta">
          <div>
            <span className="eyebrow">Turn &ldquo;Can We Do This?&rdquo;</span>
            <h2>Into Consider It Arranged.</h2>
            <p>
              The things you know you want &mdash; and the things you didn&rsquo;t know to
              ask for. Tell us where your heart is drawn.
            </p>
          </div>
          <div className="footer-actions">
            <a className="btn" href="mailto:hello@saintsvoyager.com">
              hello@saintsvoyager.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <img
            className="footer-logo"
            src="/assets/brand/SaintsVoyager_Logo_IvoryType_Transparent_3000.png"
            alt="Saints Voyager"
          />
          <span>&copy; {new Date().getFullYear()} Saints Voyager. Luxury Travel Concierge.</span>
        </div>
      </div>
    </footer>
  );
}