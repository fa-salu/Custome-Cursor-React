"use client";

import React, { useEffect, useState } from "react";
import { CursorPosition } from "../../Types/cursorTypes";

const RippleCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [ripple, setRipple] = useState<boolean>(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setRipple(true);
      setTimeout(() => setRipple(false), 300);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `${position.y - 20}px`,
        left: `${position.x - 20}px`,
        width: ripple ? "80px" : "40px",
        height: ripple ? "80px" : "40px",
        borderRadius: "50%",
        backgroundColor: ripple ? "rgba(15, 164, 175, 0.3)" : "#0FA4AF",
        transition: "all 0.3s ease-out",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default RippleCursor;
