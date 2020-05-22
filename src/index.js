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
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const cardNumber = document.getElementById("card-number");
const expDate = document.getElementById("exp-date");
const csv = document.getElementById("csv");
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
    cardNumber.value;
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

const onBlur = (e, errorText) => {
    const currentElement = e.target;
    const errorMessageElement = currentElement.nextElementSibling;
    errorMessageElement.textContent = errorText;
    if (errorText === '') {
        currentElement.classList.remove('required');
        errorMessageElement.classList.add('hide');
    } else {
        currentElement.classList.add('required');
        errorMessageElement.classList.remove('hide');
    }
}

const inputEmpty = (value) => {
    if (value === '') {
        return true;
    }
    return false;
}

const getEmailError = (e) => {
    const currentElement = e.target;
    const inputValue = currentElement.value;
    if (inputEmpty(inputValue)) {
        return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValue)) {
        return 'Email is not valid';
    }
    return '';
}

const getFieldError = (e) => {
    const currentElement = e.target;
    const inputValue = currentElement.value;
    if (inputEmpty(inputValue)) {
        return `${currentElement.placeholder} is required`;
    }
    return '';
}

const getCardError = (e) => {
    const currentElement = e.target;
    const inputValue = currentElement.value;
    if (inputEmpty(inputValue)) {
        return 'Card is required';
    } else if (/[^0-9]/.test(inputValue)) {
        return 'Fill out with only digits [0-9]';
    } else if (!validator.isValid(inputValue)){
        return 'Card number is not valid';
    }
    return '';
}
const onBlurField = (e) => {
    const errorText = getFieldError(e);
    onBlur(e, errorText);
}

const onBlurEmail = (e) => {
    const errorText = getEmailError(e);
    onBlur(e, errorText);
}

const onBlurCard = (e) => {
    const errorText = getCardError(e);
    onBlur(e, errorText);
}

buyTicketsBtn.addEventListener("click", buyTickets);
checkoutBtn.addEventListener("click", checkout);
placeOrderBtn.addEventListener("click", placeOrder);
generalTicketQuantity.addEventListener("change", updateTotalPrice);
partyTicketQuantity.addEventListener("change", updateTotalPrice);

// firstName.addEventListener("blur", onBlurField);

firstName.onblur = onBlurField;
lastName.onblur = onBlurField;
email.onblur = onBlurEmail;
cardNumber.onblur = onBlurCard;
expDate.onblur = onBlurField;
csv.onblur = onBlurField;
