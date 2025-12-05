export const questions = [
  //==========EASy==========

  //HTML
  {
    id: 1,
    topic: "HTML",
    difficulty: "easy",
    type: "mcq",
    questionText: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink and Text Markup Language",
      "Home To Million Languages",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 2,
    topic: "html",
    difficulty: "easy",
    type: "trueFalse",
    questionText:
      "True or False: Every HTML page should have <html>, <head>, and <body> tags.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },
  {
    id: 3,
    topic: "html",
    difficulty: "easy",
    type: "mcq",
    questionText: "Which tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctOptionIndex: 1,
  },

  // CSS easy
  {
    id: 4,
    topic: "css",
    difficulty: "easy",
    type: "mcq",
    questionText: "Which CSS property changes the text color?",
    options: ["font-color", "color", "text-style", "foreground"],
    correctOptionIndex: 1,
  },
  {
    id: 5,
    topic: "css",
    difficulty: "easy",
    type: "trueFalse",
    questionText:
      "True or False: An external CSS file is linked with the <link> tag in the <head>.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },
  {
    id: 6,
    topic: "css",
    difficulty: "easy",
    type: "mcq",
    questionText: "What symbol is used to select a class in CSS?",
    options: ["#", ".", "@", "$"],
    correctOptionIndex: 1,
  },

  // JavaScript easy
  {
    id: 7,
    topic: "javascript",
    difficulty: "easy",
    type: "mcq",
    questionText:
      "Which keyword is best for declaring a variable that can change value in modern JavaScript?",
    options: ["const", "let", "var", "static"],
    correctOptionIndex: 1,
  },
  {
    id: 8,
    topic: "javascript",
    difficulty: "easy",
    type: "trueFalse",
    questionText:
      "True or False: console.log() can be used to print messages to the browser console.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },
  {
    id: 9,
    topic: "javascript",
    difficulty: "easy",
    type: "mcq",
    questionText: "What is the result type of typeof 42?",
    options: ['"number"', '"string"', '"integer"', '"value"'],
    correctOptionIndex: 0,
  },

  // React easy
  {
    id: 10,
    topic: "react",
    difficulty: "easy",
    type: "mcq",
    questionText:
      "React is mainly used for building which part of a web application?",
    options: [
      "User interfaces",
      "Databases",
      "Web servers",
      "Operating systems",
    ],
    correctOptionIndex: 0,
  },
  {
    id: 11,
    topic: "react",
    difficulty: "easy",
    type: "trueFalse",
    questionText:
      "True or False: React components can be written as functions.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },
  {
    id: 12,
    topic: "react",
    difficulty: "easy",
    type: "mcq",
    questionText: "Which hook is used to add state to a function component?",
    options: ["useEffect", "useState", "useContext", "useRef"],
    correctOptionIndex: 1,
  },

  // SQL easy
  {
    id: 13,
    topic: "sql",
    difficulty: "easy",
    type: "mcq",
    questionText: "Which keyword is used to get data from a table?",
    options: ["GET", "SELECT", "FETCH", "PULL"],
    correctOptionIndex: 1,
  },
  {
    id: 14,
    topic: "sql",
    difficulty: "easy",
    type: "trueFalse",
    questionText:
      "True or False: The WHERE clause is used to filter rows in a query.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },
  {
    id: 15,
    topic: "sql",
    difficulty: "easy",
    type: "mcq",
    questionText:
      "Which clause is used to sort the result of a query in ascending or descending order?",
    options: ["GROUP BY", "FILTER BY", "ORDER BY", "SORT"],
    correctOptionIndex: 2,
  },

  // ========== MEDIUM ==========

  // HTML medium
  {
    id: 16,
    topic: "html",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which HTML tag pair correctly creates a numbered (ordered) list?",
    options: ["<ul><li>", "<ol><li>", "<list><item>", "<order><li>"],
    correctOptionIndex: 1,
  },
  {
    id: 17,
    topic: "html",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which attribute is recommended for improving accessibility for images?",
    options: ["href", "src", "alt", "title"],
    correctOptionIndex: 2,
  },
  {
    id: 18,
    topic: "html",
    difficulty: "medium",
    type: "trueFalse",
    questionText:
      "True or False: The <section> and <article> tags are examples of semantic HTML elements.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // CSS medium
  {
    id: 19,
    topic: "css",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which selector targets all <p> elements that are inside any <div>?",
    options: ["div + p", "div > p", "div p", ".div p"],
    correctOptionIndex: 2,
  },
  {
    id: 20,
    topic: "css",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which CSS layout module is best for aligning items in a row or column with space-between?",
    options: ["Float", "Grid", "Flexbox", "Position absolute"],
    correctOptionIndex: 2,
  },
  {
    id: 21,
    topic: "css",
    difficulty: "medium",
    type: "trueFalse",
    questionText:
      "True or False: The box model in CSS includes content, padding, border, and margin.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // JavaScript medium
  {
    id: 22,
    topic: "javascript",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "What is the main difference between == and === in JavaScript?",
    options: [
      "No difference, they are the same",
      "=== compares value and type, == only compares value",
      "== compares value and type, === only compares value",
      "=== is only for numbers",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 23,
    topic: "javascript",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which array method creates a new array with elements that pass a test function?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correctOptionIndex: 2,
  },
  {
    id: 24,
    topic: "javascript",
    difficulty: "medium",
    type: "trueFalse",
    questionText:
      "True or False: Functions in JavaScript are first-class citizens and can be passed as arguments.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // React medium
  {
    id: 25,
    topic: "react",
    difficulty: "medium",
    type: "mcq",
    questionText: "What is the main purpose of props in React?",
    options: [
      "To manage local component state",
      "To pass data from parent to child components",
      "To directly manipulate the DOM",
      "To style components",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 26,
    topic: "react",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which hook is commonly used for side effects such as data fetching?",
    options: ["useState", "useEffect", "useMemo", "useReducer"],
    correctOptionIndex: 1,
  },
  {
    id: 27,
    topic: "react",
    difficulty: "medium",
    type: "trueFalse",
    questionText:
      "True or False: In React, state updates may be batched and are not guaranteed to be applied immediately.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // SQL medium
  {
    id: 28,
    topic: "sql",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which SQL keyword is used to combine rows from two tables based on a related column?",
    options: ["MERGE", "JOIN", "COMBINE", "LINK"],
    correctOptionIndex: 1,
  },
  {
    id: 29,
    topic: "sql",
    difficulty: "medium",
    type: "mcq",
    questionText:
      "Which clause groups rows that have the same values into summary rows?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "DISTINCT"],
    correctOptionIndex: 0,
  },
  {
    id: 30,
    topic: "sql",
    difficulty: "medium",
    type: "trueFalse",
    questionText:
      "True or False: The HAVING clause is used to filter groups created by GROUP BY.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // ========== HARD ==========

  // HTML hard
  {
    id: 31,
    topic: "html",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which HTML element is best for wrapping the main content of a page (excluding header, footer, and navigation)?",
    options: ["<section>", "<main>", "<article>", "<div>"],
    correctOptionIndex: 1,
  },
  {
    id: 32,
    topic: "html",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which attribute helps screen readers describe the purpose of a landmark region like navigation?",
    options: ["role", "class", "style", "data-label"],
    correctOptionIndex: 0,
  },
  {
    id: 33,
    topic: "html",
    difficulty: "hard",
    type: "trueFalse",
    questionText:
      "True or False: Using multiple <h1> tags on a single page is always invalid HTML.",
    options: ["True", "False"],
    correctOptionIndex: 1,
  },

  // CSS hard
  {
    id: 34,
    topic: "css",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which CSS layout tool is more suitable for creating a two-dimensional page layout (rows and columns)?",
    options: ["Flexbox", "Grid", "Float", "Inline-block"],
    correctOptionIndex: 1,
  },
  {
    id: 35,
    topic: "css",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which property is most commonly used for making a layout responsive without fixed widths?",
    options: ["position", "display", "max-width", "z-index"],
    correctOptionIndex: 2,
  },
  {
    id: 36,
    topic: "css",
    difficulty: "hard",
    type: "trueFalse",
    questionText:
      "True or False: Using rem units makes it easier to scale typography across the entire site.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // JavaScript hard
  {
    id: 37,
    topic: "javascript",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which concept describes an inner function having access to variables from an outer function even after the outer function finishes?",
    options: ["Hoisting", "Closure", "Currying", "Shadowing"],
    correctOptionIndex: 1,
  },
  {
    id: 38,
    topic: "javascript",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which syntax is used to pause execution inside an async function until a Promise is resolved?",
    options: ["wait", "yield", "await", "defer"],
    correctOptionIndex: 2,
  },
  {
    id: 39,
    topic: "javascript",
    difficulty: "hard",
    type: "trueFalse",
    questionText:
      "True or False: The event loop allows JavaScript to handle asynchronous callbacks in a single-threaded environment.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // React hard
  {
    id: 40,
    topic: "react",
    difficulty: "hard",
    type: "mcq",
    questionText: "What is a common reason to use React Context?",
    options: [
      "To style components with CSS",
      "To avoid prop drilling by sharing data deeply in the tree",
      "To replace all local state",
      "To improve bundle size automatically",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 41,
    topic: "react",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Why is using a stable key prop important when rendering lists in React?",
    options: [
      "It improves CSS specificity",
      "It prevents memory leaks",
      "It helps React correctly track elements between renders",
      "It makes components render on the server",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 42,
    topic: "react",
    difficulty: "hard",
    type: "trueFalse",
    questionText:
      "True or False: Expensive computations can be optimized with useMemo to avoid recalculating on every render.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },

  // SQL hard
  {
    id: 43,
    topic: "sql",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which index type is typically used to enforce uniqueness on a column such as an email address?",
    options: [
      "Clustered index",
      "Non-clustered index",
      "Unique index",
      "Full-text index",
    ],
    correctOptionIndex: 2,
  },
  {
    id: 44,
    topic: "sql",
    difficulty: "hard",
    type: "mcq",
    questionText:
      "Which query pattern is most likely to benefit from an index on the filtered column?",
    options: [
      "SELECT * FROM users",
      "SELECT * FROM users WHERE email = 'user@example.com'",
      "SELECT COUNT(*) FROM users",
      "SELECT * FROM users ORDER BY id DESC",
    ],
    correctOptionIndex: 1,
  },
  {
    id: 45,
    topic: "sql",
    difficulty: "hard",
    type: "trueFalse",
    questionText:
      "True or False: A subquery can be used inside a WHERE clause to filter rows based on another query.",
    options: ["True", "False"],
    correctOptionIndex: 0,
  },
];
