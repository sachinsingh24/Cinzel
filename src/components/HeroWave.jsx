export default function HeroWave() {
  return (
    <div className="hero-wave" aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <path
          d="M0,50
         C240,85 480,85 720,50
         C960,15 1200,15 1440,50
         L1440,100
         L0,100 Z"
          fill="#f5f0e7"
        />
      </svg>
    </div>
  );
}
