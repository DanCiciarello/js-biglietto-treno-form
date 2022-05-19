// Get form HTML elements
let inputUserName = document.querySelector("[name='userName']");
let inputUserKm = document.querySelector("[name='userKm']");
let inputUserAge = document.querySelector("[name='userAge']");
const generaBtn = document.querySelector("#generaBtn");

// Get ticket HTML elements
let userNameElement = document.querySelector("#userNameElement");
let userTicketPriceElement = document.querySelector("#userTicketPriceElement");
let userCarrozzaElement = document.querySelector("#userCarrozzaElement");
let userCpCodeElement = document.querySelector("#userCpCodeElement");
let userTicketTypeElement = document.querySelector("#userTicketTypeElement");


// Create variables
let userName = "";
let userTicketType = "Biglietto Standard";
let userKm = 0;
let userAge = 0;
let ticketDiscount = 0;
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
    userTicketType = "Biglietto Young";
    } else if (userAge > 65) {
    ticketDiscount = 0.4;
    userTicketType = "Biglietto Senior";
    } else {
    ticketDiscount = 0;
    userTicketType = "Biglietto Standard";
    };
    
    // Calculate ticket price
    let ticketPrice = (kmPrice * userKm) - (kmPrice * userKm) * ticketDiscount;
    
    // Print the data in the HTML ticket
    userNameElement.innerHTML = userName;
    userTicketTypeElement.innerHTML = userTicketType;
    userCarrozzaElement.innerHTML = Math.floor(Math.random() * 10) + 1;
    userCpCodeElement.innerHTML = Math.floor(Math.random() * 100000);
    userTicketPriceElement.innerHTML = ticketPrice + " €";

});