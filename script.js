// greet the user
const greet = document.getElementById("greet");

greet.addEventListener("click", function () {
    const joy = prompt("What sparks joy the most for you?")

    alert("I agree, " + joy + " does spark joy!")
})