const LOGOS = {
  ivory: "/assets/brand/SaintsVoyager_Logo_IvoryType_Transparent_3000.png",
  navy: "/assets/brand/SaintsVoyager_Logo_NavyType_Transparent_3000.png",
};

export default function BrandWordmark({ variant = "ivory", className = "" }) {
  return (
    <img
      className={`brand-wordmark ${className}`.trim()}
      src={LOGOS[variant] ?? LOGOS.ivory}
      alt="Saints Voyager — Travel & Concierge"
    />
  );
}
