export default function ServiceCard({ image, alt, title }) {
  return (
    <article className="service-card">
      <div className="service-media">
        <img className="service-img" src={image} alt={alt} loading="lazy" width="612" height="408" />
        <span className="service-scrim" aria-hidden="true" />
        <h3 className="service-label">{title}</h3>
      </div>
    </article>
  );
}
