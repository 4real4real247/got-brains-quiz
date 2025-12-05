// src/QuizGame.jsx
import React, { useState, useEffect } from "react"; // CHANGED: Added useEffect
import { questions } from "./QuizData";
import BrainConfetti from "./BrainConfetti";
import VictoryScreen from "./VictoryScreen"; // NEW: Import VictoryScreen
import "../App.css";

const levels = ["easy", "medium", "hard"];
const PASS_PERCENT = 70;

const QuizGame = () => {
  const [levelIndex, setLevelIndex] = useState(0); // 0 = easy
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [passedLevel, setPassedLevel] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showVictory, setShowVictory] = useState(false); // NEW: State for victory screen

  const currentLevel = levels[levelIndex];

  const levelQuestions = questions.filter((q) => q.difficulty === currentLevel);

  const totalQuestions = levelQuestions.length;
  const currentQuestion = levelQuestions[currentQuestionIndex];

  const handleAnswer = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctOptionIndex;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < totalQuestions) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
    } else {
      const finalScore = score + (isCorrect ? 1 : 0); // include last question
      const percent = (finalScore / totalQuestions) * 100;
      const passed = percent >= PASS_PERCENT;
      setPassedLevel(passed);
      setScore(finalScore); // ensure state holds final score

      // 🎉 TRIGGER CONFETTI IF PASSED! 🎉
      if (passed) {
        setShowConfetti(true);
      }

      setShowResult(true);
    }
  };

  // NEW: Show victory screen after confetti finishes on hard level
  useEffect(() => {
    if (passedLevel && levelIndex === 2 && showConfetti) {
      const timer = setTimeout(() => {
        setShowVictory(true);
      }, 4000); // Wait for confetti to finish

      return () => clearTimeout(timer);
    }
  }, [passedLevel, levelIndex, showConfetti]);

  const handleRestartLevel = () => {
    setScore(0);
    setWrong(0);
    setSelectedOption(null);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setPassedLevel(false);
    setShowConfetti(false); // Reset confetti
  };

  const handleNextLevel = () => {
    if (levelIndex === levels.length - 1) {
      // restart from easy if at hard
      setLevelIndex(0);
    } else {
      setLevelIndex((prev) => prev + 1);
    }
    setScore(0);
    setWrong(0);
    setSelectedOption(null);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setPassedLevel(false);
    setShowConfetti(false); // Reset confetti
  };

  // NEW: Handle complete restart from victory screen
  const handleCompleteRestart = () => {
    setLevelIndex(0);
    setScore(0);
    setWrong(0);
    setSelectedOption(null);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setPassedLevel(false);
    setShowConfetti(false);
    setShowVictory(false);
  };

  // NEW: Show Victory Screen
  if (showVictory) {
    return <VictoryScreen onRestart={handleCompleteRestart} />;
  }

  if (!currentQuestion && !showResult) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h2 className="game-title">Got Brains 🧠 Quiz</h2>
          <span className="level-pill">Level: {currentLevel}</span>
        </div>
        <p>No questions for this level yet.</p>
        <div className="game-footer-glow" />
      </div>
    );
  }

  const progressPercent =
    totalQuestions > 0
      ? ((currentQuestionIndex + (showResult ? 1 : 0)) / totalQuestions) * 100
      : 0;

  if (showResult) {
    const percent = totalQuestions ? (score / totalQuestions) * 100 : 0;

    return (
      <div className="game-container">
        <div className="game-header">
          <h2 className="game-title">Got Brains 🧠 Quiz</h2>
          <span className="level-pill">
            Level: {currentLevel.toUpperCase()}
          </span>
        </div>

        <div className="result-screen">
          <h3 className={"result-title " + (passedLevel ? "pass" : "fail")}>
            {passedLevel ? "Level Cleared!" : "Level Failed"}
          </h3>
          <p className="result-details">
            {passedLevel
              ? "Nice work! You unlocked the next difficulty."
              : "You didn't hit the pass score. Try the level again!"}
          </p>

          <div className="result-grid">
            <div className="result-card">
              <div className="result-label">Correct</div>
              <div className="result-value">{score}</div>
            </div>
            <div className="result-card">
              <div className="result-label">Wrong</div>
              <div className="result-value">{wrong}</div>
            </div>
            <div className="result-card">
              <div className="result-label">Score</div>
              <div className="result-value">{percent.toFixed(0)}%</div>
            </div>
          </div>

          <div className="result-actions">
            {!passedLevel && (
              <button className="game-button" onClick={handleRestartLevel}>
                Retry Level
              </button>
            )}

            {passedLevel && (
              <button className="game-button" onClick={handleNextLevel}>
                {levelIndex === levels.length - 1
                  ? "Restart on Easy"
                  : "Next Level"}
              </button>
            )}
          </div>
        </div>

        {/* 🧠 ADD CONFETTI COMPONENT HERE 🧠 */}
        <BrainConfetti
          active={showConfetti}
          duration={4000}
          count={400}
          onComplete={() => setShowConfetti(false)}
        />

        <div className="game-footer-glow" />
      </div>
    );
  }

  // helper for difficulty badge class
  const difficultyClass = `question-difficulty ${currentLevel}`;

  return (
    <div className="game-container">
      {/* Header */}
      <div className="game-header">
        <h1 className="game-title">Got Brains 🧠 Quiz</h1>
        <span className="level-pill">Level: {currentLevel.toUpperCase()}</span>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-badge">
          <span className="stat-label">Question</span>
          <span className="stat-value">
            {currentQuestionIndex + 1}/{totalQuestions}
          </span>
        </div>
        <div className="stat-badge">
          <span className="stat-label">Score</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-badge">
          <span className="stat-label">Wrong</span>
          <span className="stat-value">{wrong}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-wrapper">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="question-card">
        <div className="question-meta">
          <span className="question-topic">
            Topic: {currentQuestion.topic.toUpperCase()}
          </span>
          <span className={difficultyClass}>{currentLevel.toUpperCase()}</span>
        </div>
        <h3 className="question-text">{currentQuestion.questionText}</h3>

        <ul className="options-list">
          {currentQuestion.options.map((opt, index) => {
            const isSelected = selectedOption === index;
            return (
              <li className="option-item" key={index}>
                <label
                  className={
                    "option-label " + (isSelected ? "option-selected" : "")
                  }
                >
                  <input
                    className="option-input"
                    type="radio"
                    name="option"
                    checked={isSelected}
                    onChange={() => setSelectedOption(index)}
                  />
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="actions-row">
        <button className="game-button" onClick={handleAnswer}>
          Submit Answer
        </button>
      </div>

      <div className="game-footer-glow" />
    </div>
  );
};

export default QuizGame;
