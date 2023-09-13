// greet the user
const greet = document.getElementById("greet");

greet.addEventListener("click", function () {
    const joy = prompt("What sparks joy the most for you?")

    alert("I agree, " + joy + " does spark joy!")
})

// This is the new JS
let message;

let username = prompt("What is your name?");
// concatenation
// console.log("Hello " + username);

let time = prompt("What hour is it? (0-23)");

if (time <= 11) {
    message = "Good morning";
} else if (time <= 17) {
    message = "Good afternoon";
} else if (time < 24) {
    message = "Good evening";
} else {
    message = "My friend, that is not a time!";
}

message = "Hello " + username + ". " + message;
document.write(message);