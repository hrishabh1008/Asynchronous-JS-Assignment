# Asynchronous Programming Assignment

This repository contains an assignment focused on **asynchronous programming in JavaScript**. The assignment covers three key topics: **Callbacks**, **Promises**, and **Async/Await**. Each section demonstrates how to handle asynchronous tasks using these techniques, including fetching data from an API and handling delays.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Part 1: Callbacks](#part-1-callbacks)
- [Part 2: Promises](#part-2-promises)
- [Part 3: Async/Await](#part-3-asyncawait)
- [How to Run](#how-to-run)
- [License](#license)

## Introduction

The objective of this assignment is to understand the different ways to handle asynchronous programming in JavaScript. The focus is on:
- **Callbacks**: Traditional way of handling async code.
- **Promises**: A more modern approach to manage asynchronous operations.
- **Async/Await**: Simplifies working with Promises and makes the code look more synchronous.

Each part of the assignment contains:
- **HTML file** for the structure.
- **CSS** for basic styling.
- **JavaScript** file with the logic to handle the asynchronous tasks.

---

## Installation

To run this project locally:
1. Download or clone the repository.
2. Open the folder in a text editor or IDE.
3. Open the `.html` files in a browser to see the assignment in action.

Alternatively, if you have the files locally, you can simply open the HTML files in a browser.

---

## Part 1: Callbacks

**Objective**: Demonstrate the use of callbacks to handle asynchronous tasks.

### Files:
- `callbacks.html`: Contains the structure for the page.
- `callbacks.js`: Handles the callback logic.

### Logic:
1. **`simulateDelay(callback)`**: Simulates a 5-second delay using `setTimeout` and calls the `callback` function once the delay is over.
2. **`fetchData(callback)`**: Fetches data from the API and passes the fetched posts to the callback function.
3. When the button is clicked, the page waits for 5 seconds (using `simulateDelay`), then fetches data from an API and displays the post titles in the `div` element.

---

## Part 2: Promises

**Objective**: Demonstrate the use of Promises to handle asynchronous tasks and improve error handling.

### Files:
- `promises.html`: Contains the structure for the page.
- `promises.js`: Handles the promise logic.

### Logic:
1. **`fetchDataWithPromise()`**: 
   - Creates a new Promise.
   - If the API call takes more than 5 seconds, the promise is rejected with a timeout error.
   - If successful, the promise is resolved with the fetched data.
2. **Handling `.then()` and `.catch()`**:
   - `.then()` is used to process the successful API response.
   - `.catch()` is used to handle errors such as timeouts or failed fetch requests.

---

## Part 3: Async/Await

**Objective**: Demonstrate how async/await simplifies the handling of asynchronous operations and makes the code more readable.

### Files:
- `async-await.html`: Contains the structure for the page.
- `async-await.js`: Handles the async/await logic.

### Logic:
1. **`fetchDataWithAsyncAwait()`**:
   - Uses `async` and `await` to fetch data and simulate a 2-second delay.
   - If the fetch is successful, it proceeds to display the posts.
   - If any error occurs (e.g., network failure), the error is caught using `try/catch`.

2. **Error Handling**: The `try/catch` block handles any errors during the fetch operation, including network issues or timeouts.

---

## How to Run

To run the assignment:
1. Open the `callbacks.html` file in your browser to see how the callback function works.
2. Open the `promises.html` file to observe how promises handle asynchronous operations and timeouts.
3. Open the `async-await.html` file to see how async/await simplifies handling of asynchronous tasks.

Each HTML file has a button that triggers the JavaScript functions to fetch data from the API and display the results.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
