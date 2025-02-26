import React from "react";

interface BackgroundVideoProps {
  className: string;
}

export default function BackgroundVideo({ className }: BackgroundVideoProps) {
  return (
    <video
      className={className}
      width="100%"
      height="100%"
      preload="none"
      autoPlay
      muted
      loop
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
  );
}
