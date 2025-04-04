/*const API_URL = "https://api.quotable.io/random"; // Working API
    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");
    const btnEl = document.getElementById("btn");

    async function getQuote() {
      try {
        quoteEl.textContent = "Loading...";
        authorEl.textContent = "";
        
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("API request failed");
        
        const data = await response.json();
        quoteEl.textContent = `"${data.content}"`;
        authorEl.textContent = `— ${data.author}`;
      } catch (error) {
        console.error("Error:", error);
        quoteEl.textContent = "Failed to load quote. Try again later.";
        authorEl.textContent = "";
      }
    }

    // Load quote on button click and page load
    btnEl.addEventListener("click", getQuote);
    window.addEventListener("load", getQuote);*/


    // Built-in quotes as fallback
    const localQuotes = [
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
      {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      }
    ];

    // DOM elements
    const quoteEl = document.getElementById('quote');
    const authorEl = document.getElementById('author');
    const btnEl = document.getElementById('btn');

    // Function to get random quote
    function getQuote() {
      // Try API first, fallback to local quotes if it fails
      fetch("https://api.quotable.io/random")
        .then(response => {
          if (!response.ok) throw new Error('API failed');
          return response.json();
        })
        .then(data => {
          quoteEl.textContent = `"${data.content}"`;
          authorEl.textContent = `— ${data.author}`;
        })
        .catch(error => {
          console.log("Using local quotes due to:", error);
          const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
          quoteEl.textContent = `"${randomQuote.text}"`;
          authorEl.textContent = `— ${randomQuote.author}`;
        });
    }

    // Event listeners
    btnEl.addEventListener('click', getQuote);
    window.addEventListener('load', getQuote); // Get first quote on load
  