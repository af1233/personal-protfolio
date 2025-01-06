"use client";
import { useState, useEffect } from "react";

const NeonLightCursor = () => {
  const [trail, setTrail] = useState<{ id: number; x: number; y: number }[]>([]);

  const createTrail = (x: number, y: number) => {
    const newTrail = { id: Math.random(), x, y };
    setTrail((prev) => [...prev, newTrail]);

    // Remove trail after animation
    setTimeout(() => {
      setTrail((prev) => prev.filter((t) => t.id !== newTrail.id));
    }, 1000); // Matches CSS animation duration
  };

  const handleMouseMove = (e: MouseEvent) => {
    createTrail(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]; // Get the first touch point
    createTrail(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="neon-container">
      {trail.map((point) => (
        <div
          key={point.id}
          className="neon-circle"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
          }}
        />
      ))}
      <style jsx global>{`
        .neon-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        .neon-circle {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(180deg, #fdcbfc, #48adf1);
          z-index: -1;
          box-shadow: 0 0 5px #fdcbfc, 0 0 10px #fdcbfc, 0 0 20px #9c089a,
            0 0 30px #0e9297;
          animation: neon-glow 1s ease-out forwards;
        }

        @keyframes neon-glow {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(3);
          }
        }
      `}</style>
    </div>
  );
};

export default NeonLightCursor;
