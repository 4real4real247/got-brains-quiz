import { useState, useEffect } from "react";

const BrainConfetti = ({
  active = false,
  duration = 3000,
  count = 3000,
  onComplete,
}) => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (active) {
      const newPieces = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 2 + Math.random() * 2,
        animationDelay: Math.random() * 0.5,
        fontSize: 20 + Math.random() * 20,
        rotation: Math.random() * 360,
        drift: (Math.random() - 0.5) * 100,
      }));

      setPieces(newPieces);

      const timer = setTimeout(() => {
        setPieces([]);
        if (onComplete) onComplete();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, duration, count, onComplete]);

  if (!active && pieces.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            left: `${piece.left}%`,
            top: "-50px",
            fontSize: `${piece.fontSize}px`,
            animation: `brainConfettiFall ${piece.animationDuration}s ease-in forwards`,
            animationDelay: `${piece.animationDelay}s`,
            transform: `rotate(${piece.rotation}deg)`,
            "--drift": `${piece.drift}px`,
          }}
        >
          🧠
        </div>
      ))}
      <style>{`
            @keyframes brainConfettiFall {
            to {
            transform: translatey(calc(100vh + 100px)) translateX(var(--drift)) rotate(720deg); opacity: 0;
            }
            }
            `}</style>
    </div>
  );
};

export default BrainConfetti;
