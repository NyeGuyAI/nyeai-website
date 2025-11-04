import Image from "next/image";

export default function PurpleRayBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background image with purple neural network pattern */}
      <Image
        src="/background.png"
        alt=""
        fill
        className="object-cover opacity-80"
        priority
        quality={100}
      />

      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Center radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/10 to-background/30" />
    </div>
  );
}
