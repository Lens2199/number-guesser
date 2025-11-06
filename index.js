
// index.js
const prompt = require('prompt-sync')();


// Simple Number Guessing Game
console.log("Welcome to the Number Guessing Game!");


// Game Instructions
console.log("I'm thinking of a number between 1 and 100.");


// Generate a random target number
const targetNumber = Math.floor(Math.random() * 100) + 1;


// Get user input
let userGuess = Number( prompt("Enter a guess: "));


//
if(userGuess < targetNumber) {
    console.log(`Too low! The number was ${targetNumber}.`);
} else if(userGuess > targetNumber) {
    console.log(`Too high! The number was ${targetNumber}.`);
} else {
    console.log("Congratulations! You guessed the number!");
}
