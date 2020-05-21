import validator from './validator.js';

// console.log(validator.isValid('4137894711755904'));
let total = 0.00;

const homeView = document.getElementById("homeView");
const checkoutView = document.getElementById("checkoutView");
const thanksView = document.getElementById("thanksView");
const buyTicketsBtn = document.getElementById("buyTickets");
const placeOrderBtn = document.getElementById("placeOrder");
// Variables from buyView
const buyView = document.getElementById("buyView");
const checkoutBtn = document.getElementById("checkout");
const generalTicketQuantity = document.getElementById("ticket-quantity-1");
const partyTicketQuantity = document.getElementById("ticket-quantity-2");
const agreeTermsConditions = document.getElementById("agreeTermsConditions");
const totalBuy = document.getElementById("totalBuy")
const totalCheckout = document.getElementById("totalCheckout")
// Variables from checkoutView
const firstName = document.getElementById("first-name");
const inputFirstName = document.getElementById("input-fname");
const email = document.getElementById("email");
// Variables from thanksView
const thanksName = document.getElementById("thanks-name");
const thanksEmail = document.getElementById("thanks-email");
const transformedCard = document.getElementById("transformed-card");

const buyTickets = function () {
    homeView.classList.add("hide");
    buyView.classList.remove("hide");
}

const checkout = function (evt) {
    evt.preventDefault();
    if (total > 0 && agreeTermsConditions.checked) {
        buyView.classList.add("hide");
        checkoutView.classList.remove("hide");
        totalCheckout.textContent = '$ ' + total.toFixed(2);
    }
}

const placeOrder = function (evt) {
    evt.preventDefault();
    // when card number is valid
    const cardNumber = document.getElementById("card-number").value;
    if (validator.isValid(cardNumber)) {
        checkoutView.classList.add("hide");
        thanksView.classList.remove("hide");
        thanksName.textContent = firstName.value;
        thanksEmail.textContent = email.value;
        transformedCard.textContent = validator.maskify(cardNumber);
    } else {
        alert("card number not valid, try again");
    }
}

const updateTotalPrice = function () {
    total = 0.00
    total += generalTicketQuantity.value * 500;
    total += partyTicketQuantity.value * 100;
    totalBuy.textContent = '$ ' + total.toFixed(2);
}

const validateInput = (value) => {
    if (value === '') {
        return 'is required';
    }
    return '';
}
const checkRequired = (e) => {
    const currentElement = e.target;
    let errorMessageText = validateInput(currentElement.value);
    const errorMessageElement = currentElement.nextElementSibling;
    if (errorMessageText === '') {
        currentElement.classList.remove('required');
        errorMessageElement.classList.add('hide');
    } else {
        currentElement.classList.add('required');
        errorMessageElement.classList.remove('hide');
        errorMessageElement.textContent = `${currentElement.placeholder} ${errorMessageText}`;
    }
}

buyTicketsBtn.addEventListener("click", buyTickets);
checkoutBtn.addEventListener("click", checkout);
placeOrderBtn.addEventListener("click", placeOrder);
generalTicketQuantity.addEventListener("change", updateTotalPrice);
partyTicketQuantity.addEventListener("change", updateTotalPrice);
// firstName.addEventListener("change", checkRequired);
firstName.onblur = checkRequired;