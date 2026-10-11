import { SITE } from "../config.js";

export default function ContactCTA() {
  return (
    <section className="cta-section" id="connect">
      <div className="wrap">
        <a className="btn cta-btn" href={SITE.actions.connect}>
          Let&rsquo;s Connect for your Upcoming Plans
        </a>
      </div>
    </section>
  );
}
