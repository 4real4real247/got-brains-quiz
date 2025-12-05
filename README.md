# Got Brains 🧠 Quiz Game

A fun and interactive multi-level quiz app built with React, testing your knowledge across HTML, CSS, JavaScript, React, and SQL! As you progress, the questions get harder, unlocking confetti and a celebratory victory screen if you master them all.

Features
3 Difficulty Levels: Easy, Medium, Hard – unlock each by scoring 70% or higher on the previous one

Multiple Topics: Covers web development (HTML, CSS, JavaScript, React) and SQL basics

Question Types: Multiple-choice and True/False

Progression & Feedback: See score, wrong answers, and instant result feedback

Celebrations: Brain-themed confetti animation on level completion, and a glowing victory screen when you win

Responsive & Accessible UI: Looks good on all devices, keyboard navigable, semantic HTML

## Project Structure

src/
├─ App.jsx
├─ Component/
│ └─ QuizGame.jsx
├─ QuizData.js
├─ BrainConfetti.jsx
└─ VictoryScreen.jsx

## How It Works

Start at the easy level and answer each question by selecting an option.

Submit your answer to move to the next question. Your progress, score, and wrong tally update live.

Finish a level: if your score is 70% or higher, unlock the next level and see a fun brain confetti animation!

Master all levels? Be rewarded with a custom animated "You Got Brains!" victory screen. Restart any time.

## Add/Edit Questions

All quiz questions live in QuizData.js as an array of objects.

Each question supports configurable:

topic

difficulty ("easy", "medium", "hard")

type ("mcq", "trueFalse")

options

correctOptionIndex

## Change Passing Requirement

The passing score (percent) is set in QuizGame.jsx at PASS_PERCENT.

## Tech Stack

React (functional components with hooks)

Plain CSS (easy to restyle, animations for confetti and victory)

## ScreenShots

## Credits

Built by Cassy / using Claude, ChatGPT, Perplexity

Emoji art and confetti powered by Unicode brains 🧠

## License

This project is open source and free for educational or non-commercial use.
