import BrandWordmark from "./BrandWordmark.jsx";
import { SITE } from "../config.js";

function InstagramIcon() {
  return (
    <svg
      className="footer-social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SiteFooter() {
  const { contact } = SITE;

  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <BrandWordmark className="footer-logo" />

        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-label">Email</span>
            <a href={contact.emailHref}>{contact.email}</a>
          </div>

          <div className="footer-col">
            <span className="footer-label">Phone</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>

          <div className="footer-col">
            <span className="footer-label">Social</span>
            <a
              className="footer-social"
              href={contact.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Saints Voyager on Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Saints Voyager. Luxury Travel Concierge.
        </p>
      </div>
    </footer>
  );
}
