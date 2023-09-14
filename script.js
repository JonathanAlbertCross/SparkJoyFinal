// concatenation
// console.log("Hello " + username);

function greet() {
    let username = prompt("Please enter your name.");
    let message;
    let messageTwo
    let time = prompt("Do want to make positive changes in your life?");
    if (time == "yes") {
        messageOne = "Let's get going!";
        messageTwo = "Fillout the form!";
    } else if (time == "no") {
        messageOne = "You like living in nonsense? ";
        messageTwo = "That is disappointing!";
    } else {
        messageOne = "";
        messageTwo = "Try again!";
    }
    message = "Dearest " + username + ",";

    document.write(message);
    document.write("<br>");
    document.write("<br>");
    document.write(messageOne);
    document.write("<br>");
    document.write(messageTwo);
}

// greet the user
const greeter = document.getElementById("spark");

function spark() {
    const joy = prompt("What sparks joy the most for you?")

    alert("I agree, " + joy + " does spark joy!")
}
