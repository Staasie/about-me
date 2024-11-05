'use strict';

function yourName() {
  let name = prompt('What is your name?');
  if (name) {
    document.getElementById('displayName').textContent = `Welcome, ${name}!`;
  }
}

yourName();

let answer1 = prompt('Does Staas have only one pet? (yes or no)');
if (answer1.toLowerCase() === 'no') {
  document.write('<p>Does Staas have only one pet? Not quite! I have 2 pets, Loki and Zii.</p>');
} else {
  document.write('<p>Does Staas have only one pet? Yaay, you’re right! I have 2 pets, Loki and Zii.</p>');
}

let answer2 = prompt("Does Staas work two jobs? (yes or no)");
if (answer2.toLowerCase() === 'yes') {
  document.write("<p>Does Staas work two jobs? Yep, I do, and yes, I am tired!</p>");
} else {
  document.write("<p>Does Staas work two jobs? Actually, I work two jobs and could use a break!</p>");
}

let answer3 = prompt('Does Staas know sign language? (yes or no)');
if (answer3.toLowerCase() === 'yes') {
  document.write("<p>Does Staas know sign language? Oh, you’re good at this! That is correct!</p>");
} else {
  document.write("<p>Does Staas know sign language? Nope, I studied it for over 5 years!</p>");
}

let answer4 = prompt("Is Staas's favorite color green? (yes or no)");
if (answer4.toLowerCase() === 'yes') {
  document.write("<p>Is Staas's favorite color green? Heck yeah, it is! How’d ya know?</p>");
} else {
  document.write("<p>Is Staas's favorite color green? Good try! Not many know this one.</p>");
}

let answer5 = prompt("Does Staas play ukulele? (yes or no)");
if (answer5.toLowerCase() === 'yes') {
  document.write("<p>Does Staas play ukulele? Yep, I do!</p>");
} else {
  document.write("<p>Does Staas play ukulele? Oh, come on, you have no faith :)</p>");
}
