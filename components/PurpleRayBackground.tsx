import Image from "next/image";

export default function PurpleRayBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background image with purple neural network pattern */}
      <Image
        src="/background.png"
        alt=""
        fill
        className="object-cover opacity-90"
        priority
        quality={100}
      />

      {/* Optional overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/40" />
    </div>
  );
}
