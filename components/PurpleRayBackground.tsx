export default function PurpleRayBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradient center */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-primary/20 via-transparent to-transparent opacity-50" />

      {/* Animated rays */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-[1px] w-full origin-left animate-pulse"
            style={{
              transform: `rotate(${i * 30}deg)`,
              background: `linear-gradient(90deg, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0) 70%)`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Purple glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
    </div>
  );
}
