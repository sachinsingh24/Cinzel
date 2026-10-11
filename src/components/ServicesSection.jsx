import ServiceCard from "./ServiceCard.jsx";

const SERVICES = [
  {
    image: "/assets/yacht-deck-bespoke-travel.jpg",
    alt: "Fine dining set on the deck of a luxury motor yacht",
    title: "Bespoke Travel Packages",
  },
  {
    image: "/assets/dinner-party-corporate-events.jpg",
    alt: "Elegant outdoor dinner party arranged for guests",
    title: "Events & Corporate Parties",
  },
  {
    image: "/assets/beach-wedding-destination-events.jpg",
    alt: "Beach wedding ceremony framed by a floral arch",
    title: "Destination Events",
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services-head">
          <h2>Services</h2>
          <p className="services-intro">
            <span>From exceptional stays to extraordinary experiences,</span>
            <span>
              We curate bespoke journeys shaped around your tastes, your pace, and your idea
              of luxury.
            </span>
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
