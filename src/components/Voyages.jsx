const DETAILS = [
  {
    region: "Private Homes",
    title: "The Right Villa",
    body: "A villa that feels like it was chosen for you, in the places that matter most.",
  },
  {
    region: "Tables & Occasions",
    title: "The Perfect Table",
    body: "A reservation worth changing the itinerary for \u2014 and the celebrations it was made for.",
  },
  {
    region: "Local Insight",
    title: "The Private Guide",
    body: "A guide who knows the place beyond the guidebook, arranged before you arrive.",
  },
];

export default function Voyages() {
  return (
    <section className="section voyages" id="details">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Details We Take Care Of</span>
          <h2>Luxury Is What Happens Quietly Behind It</h2>
          <p>
            The right villa. The perfect table. The unhurried morning. The unexpected
            experience. Everything thoughtfully considered, and quietly taken care of.
          </p>
        </div>

        <div className="voyage-grid">
          {DETAILS.map((v) => (
            <article className="card" key={v.title}>
              <span className="region">{v.region}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>

        <div className="voyage-note">
          <p>
            &ldquo;Because true luxury is not having more.
            <br />
            It is having everything considered.&rdquo;
          </p>
          <span className="signature">SAINTS VOYAGER</span>
        </div>
      </div>
    </section>
  );
}