"use client";

import React, { useEffect, useState } from "react";
import { CursorState } from "../../Types/cursorTypes";

const AnimatedCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    isHovered: false,
    position: { x: 0, y: 0 },
  });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    const handleMouseEnter = () =>
      setCursor((prev) => ({ ...prev, isHovered: true }));
    const handleMouseLeave = () =>
      setCursor((prev) => ({ ...prev, isHovered: false }));

    window.addEventListener("mousemove", updateCursorPosition);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `${cursor.position.y - 15}px`,
        left: `${cursor.position.x - 15}px`,
        width: cursor.isHovered ? "60px" : "30px",
        height: cursor.isHovered ? "60px" : "30px",
        borderRadius: "50%",
        backgroundColor: cursor.isHovered ? "#FF6347" : "#0FA4AF",
        transition: "all 0.2s ease-out",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default AnimatedCursor;
