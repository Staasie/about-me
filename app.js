document.getElementById("startGameButton").addEventListener("click", startGame);

function startGame() {
  const userName = prompt("What is your name?");
  document.getElementById("welcomeMessage").textContent = `Hello, ${userName}! Welcome! I hope you learn something new!`;

  const questions = [
    { question: "Do I ONLY have one pet?", answer: "no" },
    { question: "Do I work 2 jobs?", answer: "yes" },
    { question: "Do I play ukulele?", answer: "yes" },
    { question: "Do I know Sign Language?", answer: "yes" },
    { question: "Is my favorite color green?", answer: "yes" }
  ];
  let correctAnswers = 0;
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question + " (yes/no or y/n)").toLowerCase();

    if (userAnswer === 'y') userAnswer = 'yes';
    if (userAnswer === 'n') userAnswer = 'no';

    if (userAnswer === questions[i].answer) {
      alert("Correct!");
      correctAnswers++;
    } else {
      alert("Nope! Not quite.");
    }
  }

  alert(`Thanks for playing, ${userName}! You got ${correctAnswers} out of 5 questions correct. You really did pay attention, huh! :)`);
  // / Guess the number


  let guessANumber = 'What number am I thinking of between one and 20';
  let attempts = 4;
  let answer = 16;
  let response = null;
  
  while (response !== answer) {
  
      if (!attempts) {
        alert('No more attempt. Nice try!');
        break;
      }
  
      response = parseInt(prompt(guessANumber));
    attempts -= 1;
    if (response === answer) {
      alert('You must be psychic!');
      userscore += 1;
    }
  
    if (response < answer) {
      alert('Wow, that\'s too low! Try again.');
    }
  
    if (response > answer) {
      alert('Oooo, too high! Try again.');
    }
  };
  // Guessing Game //fix this for yourself to fit your page later and then acp again
  // let userPoints = 0;
  
  // console.log('Welcome to Jason\'s page!');
  
  // // Guessing Game
  // alert('Welcome to my guessing game!');
  
  // let user = prompt('What is your name?');
  // // Ensure the user provides a name (not null or empty)
  // while (!user) {
  //     user = prompt('Come on! Just tell me your name');
  // }
  // let firstName = user;
  
  // // Movie list
  // let favMovie = ['Indiana Jones & the Temple of Doom', 'Matrix', 'Star Wars', 'Snatch', 'Happy Gilmore'];
  // let correctAnswer = 'Star Wars';
  
  // alert('Try to guess Jason\'s favorite movie from the following list: ' + favMovie.join(', ') + '. You have 5 tries!');
  
  // let guessedCorrectly = false; // Track if the correct movie is guessed
  
  // for (let i = 0; i < 5; i++) {
  //     let answer = prompt('Guess the favorite movie!').trim();
      
  //     if (answer === correctAnswer) {
  //         userPoints++;
  //         alert('Correct! Jason\'s favorite movie is indeed ' + correctAnswer + '.');
  //         guessedCorrectly = true; // Set flag to true to indicate correct guess
  //         break; // Exit the loop if guessed correctly
  //     } else {
  //         alert('Incorrect guess. Try again!');
  //     }
  // }
  
  // // Final alert
  // if (!guessedCorrectly) {
  //     alert('You\'ve used all your guesses! The correct answer was ' + correctAnswer + '.');
  // }
  
  // alert('Greetings ' + firstName + '! You have ' + userPoints + ' point(s). Thanks for playing!');


}





// 'use strict';

/*function yourName() {
  let name = prompt('What is your name?');
  if (name) {
    document.getElementById('displayName').textContent = `Hi, ${name}! Check out the quiz down below.`;
  }
*/