// src/QuizGame.jsx
import React, { useState, useEffect } from "react";
import { questions } from "./QuizData";
import BrainConfetti from "./BrainConfetti";
import VictoryScreen from "./VictoryScreen";
import LoserScreen from "./LoserScreen";
import "../App.css";

const levels = ["easy", "medium", "hard"];
const PASS_PERCENT = 70;
const QUESTION_TIME = 15; // seconds per question

const QuizGame = () => {
  const [levelIndex, setLevelIndex] = useState(0); // 0 = easy
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [passedLevel, setPassedLevel] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showVictory, setShowVictory] = useState(false);
  const [showLoser, setShowLoser] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [gameStarted, setGameStarted] = useState(false); // NEW

  const currentLevel = levels[levelIndex];

  const levelQuestions = questions.filter((q) => q.difficulty === currentLevel);

  const totalQuestions = levelQuestions.length;
  const currentQuestion = levelQuestions[currentQuestionIndex];

  const handleStartGame = () => {
    setGameStarted(true);
    setTimeLeft(QUESTION_TIME); // ensure full time when starting
  };

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
      setTimeLeft(QUESTION_TIME); // reset timer for next question
    } else {
      const finalScore = score + (isCorrect ? 1 : 0); // include last question
      const percent = totalQuestions ? (finalScore / totalQuestions) * 100 : 0;
      const passed = percent >= PASS_PERCENT;
      setPassedLevel(passed);
      setScore(finalScore);

      if (passed) {
        setShowConfetti(true);
      } else {
        setShowLoser(true);
      }

      setShowResult(true);
    }
  };

  // TIMER EFFECT: countdown for each question, only when gameStarted
  useEffect(() => {
    if (!gameStarted) return; // don't run timer until Start clicked
    if (showResult || showVictory || showLoser) return;
    if (!currentQuestion) return;

    if (timeLeft <= 0) {
      // Time is up: count as wrong and move on
      const isLastQuestion = currentQuestionIndex + 1 >= totalQuestions;

      setWrong((prev) => prev + 1);

      if (!isLastQuestion) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
        setTimeLeft(QUESTION_TIME);
      } else {
        const finalScore = score; // no extra correct
        const percent = totalQuestions
          ? (finalScore / totalQuestions) * 100
          : 0;
        const passed = percent >= PASS_PERCENT;
        setPassedLevel(passed);
        setScore(finalScore);

        if (passed) {
          setShowConfetti(true);
        } else {
          setShowLoser(true);
        }

        setShowResult(true);
      }

      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [
    gameStarted,
    timeLeft,
    showResult,
    showVictory,
    showLoser,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
  ]);

  const handleRestartLevel = () => {
    setScore(0);
    setWrong(0);
    setSelectedOption(null);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setPassedLevel(false);
    setShowConfetti(false);
    setShowLoser(false);
    setTimeLeft(QUESTION_TIME);
    setGameStarted(false); // go back to Start screen
  };

  const handleNextLevel = () => {
    if (levelIndex === levels.length - 1) {
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
    setShowConfetti(false);
    setShowLoser(false);
    setTimeLeft(QUESTION_TIME);
    setGameStarted(false); // require Start again on next level
  };

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
    setShowLoser(false);
    setTimeLeft(QUESTION_TIME);
    setGameStarted(false);
  };

  const handleLoserRetry = () => {
    handleRestartLevel();
  };

  // Show Victory Screen
  if (showVictory) {
    return <VictoryScreen onRestart={handleCompleteRestart} />;
  }

  // Show Loser Screen
  if (showLoser) {
    return <LoserScreen onRetry={handleLoserRetry} />;
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

  const difficultyClass = `question-difficulty ${currentLevel}`;

  // Start Screen (before gameStarted)
  if (!gameStarted) {
    return (
      <div className="game-container">
        <div className="game-header">
          <h1 className="game-title">Got Brains 🧠 Quiz</h1>
          <span className="level-pill">
            Level: {currentLevel.toUpperCase()}
          </span>
        </div>

        <button className="game-button" onClick={handleStartGame}>
          Start Quiz
        </button>

        <div className="game-footer-glow" />
      </div>
    );
  }

  // Main Quiz UI (after Start clicked)
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
        <div className="stat-badge">
          <span className="stat-label">Time</span>
          <span className="stat-value">{timeLeft}s</span>
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
