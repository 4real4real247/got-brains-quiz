import React, { useState, useEffect } from "react";

const VictoryScreen = ({ onRestart }) => {
  const [brains, setBrains] = useState([]);

  useEffect(() => {
    // Create 30 brains with random positions and animations
    const newBrains = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 40 + Math.random() * 60,
      animationDuration: 1 + Math.random() * 2,
      animationDelay: Math.random() * 2,
    }));
    setBrains(newBrains);
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
      {/* Animated Brains Background */}
      {brains.map((brain) => (
        <div
          key={brain.id}
          style={{
            position: "absolute",
            left: `${brain.left}%`,
            top: `${brain.top}%`,
            fontSize: `${brain.size}px`,
            animation: `popInOut ${brain.animationDuration}s ease-in-out infinite`,
            animationDelay: `${brain.animationDelay}s`,
            opacity: 0,
            transform: "scale(0)",
          }}
        >
          🧠
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
              "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(138, 43, 226, 0.8)",
            marginBottom: "2rem",
            animation: "glow 2s ease-in-out infinite",
          }}
        >
          YOU GOT BRAINS! 🧠
        </h1>

        <p
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "#ffd700",
            marginBottom: "3rem",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          🎉 Congratulations! You've mastered all levels! 🎉
        </p>

        <button
          onClick={onRestart}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            padding: "1.5rem 3rem",
            backgroundColor: "#8a2be2",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(138, 43, 226, 0.5)",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.backgroundColor = "#9d4edd";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "#8a2be2";
          }}
        >
          🔄 Restart Quiz
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
              0 0 20px rgba(255, 255, 255, 0.5),
              0 0 40px rgba(138, 43, 226, 0.8),
              0 0 60px rgba(138, 43, 226, 0.6);
          }
          50% {
            text-shadow: 
              0 0 30px rgba(255, 255, 255, 0.8),
              0 0 60px rgba(138, 43, 226, 1),
              0 0 90px rgba(138, 43, 226, 0.8);
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

export default VictoryScreen;
