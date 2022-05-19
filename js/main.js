// Get HTML elements
let inputUserName = document.querySelector("[name='userName']");
let inputUserKm = document.querySelector("[name='userKm']");
let inputUserAge = document.querySelector("[name='userAge']");
const generaBtn = document.querySelector("#generaBtn");

// Create variable for km price
const kmPrice = 0.21;

// Add event listener to Genera button
generaBtn.addEventListener("click", function() {
    // Assign variables
    userName = inputUserName.value;
    userKm = parseInt(inputUserKm.value);
    userAge = parseInt(inputUserAge.value);
    // Calculate ticket discount
    if (userAge < 18) {
    ticketDiscount = 0.2;
    } else if (userAge > 65) {
    ticketDiscount = 0.4;
    } else {
    ticketDiscount = 0;
    };
    // Calculate ticket price
    let ticketPrice = (kmPrice * userKm) - (kmPrice * userKm) * ticketDiscount;
    console.log(ticketPrice);
});