export default function PurpleRayBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Intense center glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/40 via-purple-primary/20 to-transparent" />

      {/* Dramatic purple rays - THICK and BRIGHT */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              transform: `rotate(${i * 15}deg)`,
              width: '150%',
              height: '12px',
              background: `linear-gradient(90deg,
                rgba(217, 70, 239, 0.9) 0%,
                rgba(168, 85, 247, 0.8) 20%,
                rgba(168, 85, 247, 0.6) 40%,
                rgba(168, 85, 247, 0.3) 60%,
                rgba(168, 85, 247, 0) 100%)`,
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>

      {/* Additional brighter inner rays */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <div
            key={`inner-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              transform: `rotate(${i * 22.5}deg)`,
              width: '100%',
              height: '8px',
              background: `linear-gradient(90deg,
                rgba(217, 70, 239, 1) 0%,
                rgba(168, 85, 247, 0.9) 15%,
                rgba(168, 85, 247, 0.5) 35%,
                rgba(168, 85, 247, 0) 70%)`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Bright center point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-purple-accent rounded-full opacity-60 blur-3xl" />
        <div className="absolute inset-0 w-16 h-16 bg-white rounded-full opacity-40 blur-2xl m-auto" />
      </div>

      {/* Intense glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-fuchsia-500/25 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
    </div>
  );
}
