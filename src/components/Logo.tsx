import React from "react";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 450 50"
    className={className}
    fill="currentColor"
  >
    <text
      x="10"
      y="35"
      fontFamily="var(--font-inter), sans-serif"
      fontSize="32"
      fontWeight="600"
      letterSpacing="1"
    >
      GEN X
    </text>
    <text
      x="130"
      y="35"
      fontFamily="var(--font-playfair), serif"
      fontSize="32"
      fontStyle="italic"
      fontWeight="300"
    >
      Rebirth Mentor
    </text>
  </svg>
);
