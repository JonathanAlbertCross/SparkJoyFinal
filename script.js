// concatenation
// console.log("Hello " + username);

function greet() {
  let username = prompt("Please enter your name.");
  alert("Hello " + username + ".");
  alert(" Welcome to the Spark Joy Website.");
  /*
  let message;
  let messageTwo;
*/
  let time = prompt(
    "Do you make positive daily changes in your life? 'yes' or 'no')",
    "yes"
  ).toLowerCase();

  while (time !== "yes" && time !== "no") {
    time = prompt("has to be yes or no").toLowerCase();
  }

  if (time == "yes") {
    alert("Me too!");
    alert("You will find a helpful form to help you on the website.");
  } else if (time == "no") {
    alert("You like living in nonsense?");
    alert("You will find a helpful form to help you on the website.");
  } else {
    alert("Try again!");
  }

  console.log(time);
}
/*
  message = "Dearest " + username + ",";

  document.write(message);
  document.write("<br>");
  document.write("<br>");
  document.write(messageOne);
  document.write("<br>");
  document.write(messageTwo);
}
*/
// greet the user
const greeter = document.getElementById("spark");

function spark() {
  const joy = prompt("What sparks joy the most for you?");

  alert("I agree, " + joy + " does spark joy!");
}

function getRating() {
  let rating = prompt("Rate my site between 1 - 5", "5");

  /*
  while (!(rating > 0; i < rating; i++) {
    document.write("<img src ='star.png' class='loops-image'/>");
  }
}
*/
  while (!(rating > 0 && rating <= 5)) {
    rating = prompt("Please enter a number between 1 and 5!");
  }
  for (let counter = 0; counter < rating; counter++) {
    document.write("<img src='images/star.png' class='loops-image'/>");
  }
}
