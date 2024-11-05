'use strict';

/*function yourName() {
  let name = prompt('What is your name?');
  if (name) {
    document.getElementById('displayName').textContent = `Hi, ${name}! Check out the quiz down below.`;
  }
}

yourName();

let answer1 = prompt('Does Staas have only one pet? (yes or no)');
if (answer1.toLowerCase() === 'no') {
  document.write('<p>Does Staas have only one pet? Not quite! I have 2 pets, Loki and Zii.</p>').classlist.add(answer1);
} else {
  document.write('<p>Does Staas have only one pet? Yaay, you’re right! I have 2 pets, Loki and Zii.</p>').classlist.add(answer1);
}

/*let answer2 = prompt("Does Staas work two jobs? (yes or no)");
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
}*/

document.getElementById("questionForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get answers from input fields
  const answer1 = document.getElementById("answer1-input").value;
  const answer2 = document.getElementById("answer2-input").value;
  const answer3 = document.getElementById("answer3-input").value;
  const answer4 = document.getElementById("answer4-input").value;
  const answer5 = document.getElementById("answer5-input").value;

  // Display answers in corresponding divs
  document.getElementById("answer1-display").innerText = `Your answer: ${answer1}`;
  document.getElementById("answer2-display").innerText = `Your answer: ${answer2}`;
  document.getElementById("answer3-display").innerText = `Your answer: ${answer3}`;
  document.getElementById("answer4-display").innerText = `Your answer: ${answer4}`;
  document.getElementById("answer5-display").innerText = `Your answer: ${answer5}`;
});
