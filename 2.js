var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthYear = parseInt(prompt("Enter your birth year:", "0"));

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

var message = document.createElement("p");
message.id = "output";
message.textContent = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;

document.body.appendChild(message);

var outputElement = document.getElementById("output");
console.log(outputElement.textContent);
