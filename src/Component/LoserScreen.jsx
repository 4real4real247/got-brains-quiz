// src/Component/LoserScreen.jsx
import React, { useState, useEffect } from "react";

const LoserScreen = ({ onRetry }) => {
  const [zombies, setZombies] = useState([]);

  useEffect(() => {
    // Create 30 zombies with random positions and animations
    const newZombies = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 40 + Math.random() * 60,
      animationDuration: 1 + Math.random() * 2,
      animationDelay: Math.random() * 2,
    }));
    setZombies(newZombies);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        zIndex: 10000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated Zombies Background */}
      {zombies.map((zombie) => (
        <div
          key={zombie.id}
          style={{
            position: "absolute",
            left: `${zombie.left}%`,
            top: `${zombie.top}%`,
            fontSize: `${zombie.size}px`,
            animation: `popInOut ${zombie.animationDuration}s ease-in-out infinite`,
            animationDelay: `${zombie.animationDelay}s`,
            opacity: 0,
            transform: "scale(0)",
          }}
        >
          🧟
        </div>
      ))}

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          animation: "slideInScale 1s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: "bold",
            color: "#fff",
            textShadow:
              "0 0 20px rgba(255, 0, 0, 0.7), 0 0 40px rgba(0, 0, 0, 0.9)",
            marginBottom: "2rem",
            animation: "glow 2s ease-in-out infinite",
          }}
        >
          Zombies ate your brains 🧟
        </h1>

        <p
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "#ffd700",
            marginBottom: "3rem",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Try again!
        </p>

        <button
          onClick={onRetry}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            padding: "1.5rem 3rem",
            backgroundColor: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(255, 0, 0, 0.5)",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.backgroundColor = "#ff6b6b";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "#ff4d4f";
          }}
        >
          🔄 Retry Level
        </button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes popInOut {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 
              0 0 20px rgba(255, 0, 0, 0.7),
              0 0 40px rgba(0, 0, 0, 0.9),
              0 0 60px rgba(0, 0, 0, 0.8);
          }
          50% {
            text-shadow: 
              0 0 30px rgba(255, 80, 80, 1),
              0 0 60px rgba(0, 0, 0, 1),
              0 0 90px rgba(0, 0, 0, 0.9);
          }
        }

        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoserScreen;
