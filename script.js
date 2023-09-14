

let username = prompt("What is your name?");
// concatenation
// console.log("Hello " + username);

let time = prompt("You do want to change your life?");

let message;

if (time == yes) {
    message = "Feel free to fill out the form";
} else if (time == no) {
    message = "You like living in nonsense?";
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