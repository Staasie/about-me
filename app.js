function askQuestions() {
  const userName = prompt("Hey, Whats your name?");
  document.getElementById(`response`).innerHTML =
  `Welcome, ${userName}! I am glad you came by!`;
}



'use strict';

let answer1 = prompt('staas has one pet? (yes or no)');
    if (answer1.toLowerCase()=== 'No') {
      document.write('<p>not quite! I have 2 pets, Loki and Zii.</p>');
    } else {
      document.write('<p>Not quite. I actually have 2 pets, Loki and Zii.</p>');
    }

    let answer2 = prompt('Staas work\'s 2 jobs? (yes or no)');
    if (answer2.toLowerCase() === 'Yes') {
      document.write('<p>Yep, I do, and yes, I am tired!!</p>');
    } else {
      document.write('<p>Actually, I work 2 jobs and could use a break!</p>');
    }

    let answer3 = prompt('Does Staas know sign language? (yes or no)');
    if (answer3.toLowerCase() === 'Yes') {
      document.write('<p>Oh, you\'re good at this! That is correct!</p>');
    } else {
      document.write('<p>Nope, I studied it for over 5 years!</p>');
    }

    let answer4 = prompt('Is Staas\'s favorite color green? (yes or no)');
    if (answer4.toLowerCase() === 'Yes') {
      document.write('<p>Heck yeah it is, how\'d ya know?</p>');
    } else {
      document.write('<p>Good try! Not many know this one.</p>');
    }

    let answer5 = prompt('does Staas play ukulele? (yes or no)');
    if (answer5.toLowerCase() === 'Yes') {
      document.write('<p> yep i do! </p>');
    } else {
      document.write('<p>Oh come on, you have no faith :) .</p>');
    }






// let answer1 = prompt('Staas only has one pet?');
// if (answer1 === false) {
//   document.write('I have 2 pets, Loki and Zii');
// } else {
//   document.write('Not quite.');
// }

// let answer2 = confirm('Does Staas work 2 jobs?');
// if (answer2 === true) {
//   console.log('Yep I do and yes I am tired!!');
// } else {
//   console.log('I sure wish I didn\'t');
// }

// let answer3 = confirm('Does Staas know sign language?');
// if (answer3 === true) {
//   console.log('Oh your good at this! That is correct!');
// } else {
//   console.log('Nope I studied it for over 5 years!');
// }

// let answer4 = confirm('Is staas\s favorite color green?');
// if (answer4 === true) {
//   console.log('Heck yeah it is, how\'d ya know?');
// } else {
//   console.log('It was a good try, not many know this one!');
// }

// let first = false
// let second = true
// let third = true
// let fourth = true
