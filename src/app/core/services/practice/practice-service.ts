import { Injectable } from '@angular/core';
import { QuestionQuizWithOptions } from '../../model/interfaces/QuestionQuiz.model';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {

   questionsWithIptions: QuestionQuizWithOptions[] = [
  {
    indexBadge: "01",
    difficulty: "Easy",
    question: "What is the DOM and why is it important?",
    options: [
      "A tree-like representation of an HTML page that JavaScript can read and modify dynamically.",
      "A database used by browsers to store JavaScript variables permanently.",
      "A CSS framework used to automatically style HTML pages."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "02",
    difficulty: "Easy",
    question: "What's the difference between Flexbox and CSS Grid?",
    options: [
      "Flexbox is two-dimensional, while CSS Grid is only one-dimensional.",
      "Flexbox is one-dimensional for rows or columns, while CSS Grid is two-dimensional for rows and columns.",
      "Flexbox is only for text alignment, while CSS Grid is only for images."
    ],
    correctAnswerIndex: 1
  },
  {
    indexBadge: "03",
    difficulty: "Medium",
    question: "What is a closure in JavaScript?",
    options: [
      "A function that remembers variables from its outer scope even after that scope has returned.",
      "A function that can only be executed once.",
      "A JavaScript feature that automatically closes the browser window."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "04",
    difficulty: "Easy",
    question: "What's the difference between let, const, and var?",
    options: [
      "They all have exactly the same scope and behavior.",
      "let and const are block-scoped, while var is function-scoped; const also prevents reassignment.",
      "var is block-scoped, while let and const are always global."
    ],
    correctAnswerIndex: 1
  },
  {
    indexBadge: "05",
    difficulty: "Medium",
    question: "Explain event bubbling and event capturing.",
    options: [
      "Bubbling moves from the root to the target, while capturing moves from the target to the root.",
      "Bubbling and capturing are two different ways of preventing JavaScript events.",
      "Bubbling propagates from the target toward ancestors, while capturing travels from the root toward the target."
    ],
    correctAnswerIndex: 2
  },
  {
    indexBadge: "06",
    difficulty: "Medium",
    question: "What is a Promise and how does async/await relate to it?",
    options: [
      "A Promise represents a future value with pending, fulfilled, or rejected states; async/await provides a cleaner syntax for working with Promises.",
      "A Promise is only used for synchronous operations, while async/await replaces JavaScript functions.",
      "A Promise is a browser API for storing data, while async/await is used only for HTTP requests."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "07",
    difficulty: "Easy",
    question: "What's the difference between localStorage, sessionStorage, and cookies?",
    options: [
      "localStorage persists data, sessionStorage lasts for the tab session, and cookies can expire and are sent with HTTP requests.",
      "All three store data permanently and are never sent to the server.",
      "sessionStorage persists forever, while localStorage is deleted when the browser tab closes."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "08",
    difficulty: "Hard",
    question: "What is the virtual DOM and how does it improve performance?",
    options: [
      "It is a lightweight in-memory representation that helps frameworks calculate and apply only necessary real DOM updates.",
      "It is a second browser window that displays a copy of the website.",
      "It completely replaces the real DOM and prevents browsers from updating HTML."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "09",
    difficulty: "Medium",
    question: "How does CSS specificity work?",
    options: [
      "It determines which CSS rule wins when multiple selectors target the same element, based on selector weight.",
      "It determines how quickly a CSS file is downloaded by the browser.",
      "It only depends on the order in which HTML elements appear on the page."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "10",
    difficulty: "Hard",
    question: "What's the difference between debouncing and throttling?",
    options: [
      "Debouncing runs a function continuously, while throttling runs it only once.",
      "Debouncing waits for a pause before running a function, while throttling limits execution to a fixed interval.",
      "Debouncing and throttling are two names for exactly the same technique."
    ],
    correctAnswerIndex: 1
  },
  {
    indexBadge: "11",
    difficulty: "Medium",
    question: "What's the difference between REST and GraphQL?",
    options: [
      "REST typically uses predefined endpoints, while GraphQL lets clients request exactly the fields they need.",
      "GraphQL can only return fixed data structures, while REST lets clients choose any fields.",
      "REST and GraphQL are both CSS technologies used to structure web pages."
    ],
    correctAnswerIndex: 0
  },
  {
    indexBadge: "12",
    difficulty: "Easy",
    question: "Why is semantic HTML important?",
    options: [
      "It replaces JavaScript and makes websites interactive without code.",
      "It uses meaningful tags like <header>, <article>, and <nav>, improving accessibility, SEO, and readability.",
      "It forces every HTML element to have the same visual appearance."
    ],
    correctAnswerIndex: 1
  }
];



getQuestionsQuizWithOptions() : QuestionQuizWithOptions[]{
  return this.questionsWithIptions;
}
  
}
