let message;

let username = prompt("What is your name?");
// concatenation
// console.log("Hello " + username);

let time = prompt("Choose a number between 1 and 3");

if (time == 1) {
    message = "Yes! You are number one!";
} else if (time == 2) {
    message = "Why choose number 2?";
} else if (time == "") {
    message = "Does this 3 spark ";
} else {
    message = "My friend, that is not a time!";
}

message = "Hello " + username + " -  " + message;
document.write(message);

// greet the user
const greet = document.getElementById("greet");

greet.addEventListener("click", function () {
    const joy = prompt("What sparks joy the most for you?")

    alert("I agree, " + joy + " does spark joy!")
})