// Get form HTML elements
let inputUserName = document.querySelector("[name='userName']");
let inputUserKm = document.querySelector("[name='userKm']");
let inputUserAge = document.querySelector("[name='userAge']");
const generaBtn = document.querySelector("#generaBtn");
const annullaBtn = document.querySelector("#annullaBtn");


// Get ticket HTML elements
let ticketDivElement = document.querySelector("#ticketDiv");
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
let correctData = true;


// Add event listener to Genera button
generaBtn.addEventListener("click", function() {

    // Assign variables
    userName = inputUserName.value;
    userKm = inputUserKm.value;
    userAge = inputUserAge.value;

    // Check if the data are correct
    if (isNaN(userKm) || isNaN(userAge)) {

        // Change the status of the data and show an alert
        correctData = false;
        alert("Controlla i dati inseriti, i km e l'età devono essere dei numeri!");

    } else if (correctData = true) {

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
        userKm = parseInt(inputUserKm.value);
        userAge = parseInt(inputUserAge.value);
        let ticketPrice = (kmPrice * userKm) - (kmPrice * userKm) * ticketDiscount;
        
        // Print the data in the HTML ticket
        userNameElement.innerHTML = userName;
        userTicketTypeElement.innerHTML = userTicketType;
        userCarrozzaElement.innerHTML = Math.floor(Math.random() * 10) + 1;
        userCpCodeElement.innerHTML = Math.floor(Math.random() * 100000);
        userTicketPriceElement.innerHTML = ticketPrice.toFixed(2) + " €";
    
        // Show the ticket section
        ticketDivElement.classList.remove("d-none");

    }
    
});


// Add event listener to Annulla button
annullaBtn.addEventListener("click", function() {

    // Clear the data in input fields
    inputUserName.value = "";
    inputUserKm.value = "";
    inputUserAge.value = "";

    // Hide the ticket section
    if (!(ticketDivElement.classList.contains("d-none"))) {
        ticketDivElement.classList.add("d-none");
    }

});