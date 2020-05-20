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

const buyTickets = function () {
    homeView.classList.add("hide");
    buyView.classList.remove("hide");
}

const checkout = function (evt) {
    evt.preventDefault();
    if (total > 0 && agreeTermsConditions.checked) {
        buyView.classList.add("hide");
        checkoutView.classList.remove("hide");
        totalCheckout.innerHTML = '$ ' + total.toFixed(2);
    }
}

const placeOrder = function () {
    checkoutView.classList.add("hide");
    thanksView.classList.remove("hide");
}

const updateTotalPrice = function () {
    total = 0.00
    total += generalTicketQuantity.value * 500;
    total += partyTicketQuantity.value * 100;
    totalBuy.innerHTML = '$ ' + total.toFixed(2);
}

buyTicketsBtn.addEventListener("click", buyTickets);
checkoutBtn.addEventListener("click", checkout);
placeOrderBtn.addEventListener("click", placeOrder);
generalTicketQuantity.addEventListener("change", updateTotalPrice);
partyTicketQuantity.addEventListener("change", updateTotalPrice);
