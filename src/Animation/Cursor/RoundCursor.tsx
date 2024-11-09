"use client";

import React, { useEffect, useState } from "react";
import { CursorPosition } from "../../Types/cursorTypes";

const RoundCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `${position.y - 20}px`,
        left: `${position.x - 20}px`,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "solid 1px black",
        pointerEvents: "none",
        transition: "transform 0.1s ease-out",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default RoundCursor;
