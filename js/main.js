// Get HTML elements
let inputUserName = document.querySelector("[name='userName']");
let inputUserKm = document.querySelector("[name='userKm']");
let inputUserAge = document.querySelector("[name='userAge']");
const generaBtn = document.querySelector("#generaBtn");

// Create variables
let userName = "";
let userKm = "";
let userAge = "";
const kmPrice = 0.21;
let ticketPrice = kmPrice * userKm;
let ticketDiscount = 0;

// Calculate ticket price
if (userAge < 18) {
    ticketDiscount = 0.2;
} else if (userAge > 65) {
    ticketDiscount = 0.4;
};

// Add event listener to Genera button
generaBtn.addEventListener("click", function() {
    userName = inputUserName.value;
    userKm = parseInt(inputUserKm.value);
    userAge = parseInt(inputUserAge.value);
    console.log(ticketPrice);
});