"use client";

import React, { useEffect, useState } from "react";
import { CursorPosition } from "../../Types/cursorTypes";

const TrailingCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animateTrail = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [position]);

  return (
    <div
      style={{
        position: "fixed",
        top: `${trailingPosition.y - 20}px`,
        left: `${trailingPosition.x - 20}px`,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#0FA4AF",
        opacity: 0.8,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default TrailingCursor;
