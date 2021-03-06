import validator from './validator.js';

let total = 0.00;
let allInputsValidPlaceOrder = true;

const homeView = document.getElementById('home-view');
const buyView = document.getElementById('buy-view');
const checkoutView = document.getElementById('checkout-view');
const thanksView = document.getElementById('thanks-view');
const goHomeBtn = document.getElementById('go-home');
const buyTicketsBtn = document.getElementById('buy-tickets');
const placeOrderBtn = document.getElementById('place-order');
// Variables from buyView
const checkoutBtn = document.getElementById('checkout');
const generalTicketQuantity = document.getElementById('ticket-quantity-1');
const partyTicketQuantity = document.getElementById('ticket-quantity-2');
const totalBuy = document.getElementById('total-buy')
const totalCheckout = document.getElementById('total-checkout')
// Variables from checkoutView
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('card-number');
const expDate = document.getElementById('exp-date');
const csv = document.getElementById('csv');
// Variables from thanksView
const thanksName = document.getElementById('thanks-name');
const thanksEmail = document.getElementById('thanks-email');
const transformedCard = document.getElementById('transformed-card');

const buyTickets = () => {
    homeView.classList.add('hide');
    buyView.classList.remove('hide');
}

const checkout = (evt) => {
    evt.preventDefault();
    if (total > 0) {
        buyView.classList.add('hide');
        checkoutView.classList.remove('hide');
        totalCheckout.textContent = '$ ' + total.toFixed(2);
    }
}

const updateTotalPrice = () => {
    total = 0.00
    total += generalTicketQuantity.value * 500;
    total += partyTicketQuantity.value * 100;
    totalBuy.textContent = '$ ' + total.toFixed(2);
}

const showErrorMessage = (element, errorText) => {
    const errorMessageElement = element.nextElementSibling;
    errorMessageElement.textContent = errorText;
    if (errorText === '') {
        element.classList.remove('required');
        errorMessageElement.classList.add('hide');
    } else {
        element.classList.add('required');
        errorMessageElement.classList.remove('hide');
    }
}

const onBlur = (e, errorText) => {
    const currentElement = e.target;
    showErrorMessage(currentElement, errorText);
}

const inputEmpty = (value) => {
    if (value === '') {
        return true;
    }
    return false;
}

const getEmailError = (element) => {
    const inputValue = element.value;
    if (inputEmpty(inputValue)) {
        allInputsValidPlaceOrder = false;
        return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValue)) {
        allInputsValidPlaceOrder = false;
        return 'Email is not valid';
    }
    return '';
}

const getFieldError = (element) => {
    const inputValue = element.value;
    if (inputEmpty(inputValue)) {
        allInputsValidPlaceOrder = false;
        return `${element.placeholder} is required`;
    }
    return '';
}

const getCardError = (element) => {
    const inputValue = element.value;
    if (inputEmpty(inputValue)) {
        allInputsValidPlaceOrder = false;
        return 'Card is required';
    } else if (/[^0-9]/.test(inputValue)) {
        allInputsValidPlaceOrder = false;
        return 'Fill out with only digits [0-9]';
    } else if (!validator.isValid(inputValue)) {
        allInputsValidPlaceOrder = false;
        return 'Card number is not valid';
    }
    return '';
}
const onBlurField = (e) => {
    const errorText = getFieldError(e.target);
    onBlur(e, errorText);
}

const onBlurEmail = (e) => {
    const errorText = getEmailError(e.target);
    onBlur(e, errorText);
}

const onBlurCard = (e) => {
    const errorText = getCardError(e.target);
    onBlur(e, errorText);
}

const placeOrder = (evt) => {
    evt.preventDefault();
    // check all inputs are validated
    const errors = ['', '', '', '', '', ''];
    allInputsValidPlaceOrder = true;
    errors[0] = getFieldError(firstName);
    errors[1] = getFieldError(lastName);
    errors[2] = getEmailError(email);
    errors[3] = getCardError(cardNumber);
    errors[4] = getFieldError(expDate);
    errors[5] = getFieldError(csv);

    if (allInputsValidPlaceOrder) {
        checkoutView.classList.add('hide');
        thanksView.classList.remove('hide');
        thanksName.textContent = firstName.value;
        thanksEmail.textContent = email.value;
        transformedCard.textContent = validator.maskify(cardNumber.value);
    } else {
        showErrorMessage(firstName, errors[0]);
        showErrorMessage(lastName, errors[1]);
        showErrorMessage(email, errors[2]);
        showErrorMessage(cardNumber, errors[3]);
        showErrorMessage(expDate, errors[4]);
        showErrorMessage(csv, errors[5]);
    }
}

const goHome = () => {
    generalTicketQuantity.value = 0;
    partyTicketQuantity.value = 0;
    totalBuy.textContent = '';
    totalCheckout.textContent = '';
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    cardNumber.value = '';
    expDate.value = '';
    csv.value = '';
    homeView.classList.remove('hide');
    buyView.classList.add('hide');
    checkoutView.classList.add('hide');
    thanksView.classList.add('hide');
}

buyTicketsBtn.addEventListener('click', buyTickets);
checkoutBtn.addEventListener('click', checkout);
placeOrderBtn.addEventListener('click', placeOrder);
generalTicketQuantity.addEventListener('change', updateTotalPrice);
partyTicketQuantity.addEventListener('change', updateTotalPrice);
goHomeBtn.addEventListener('click', goHome);

// firstName.addEventListener('blur', onBlurField);

firstName.onblur = onBlurField;
lastName.onblur = onBlurField;
email.onblur = onBlurEmail;
cardNumber.onblur = onBlurCard;
expDate.onblur = onBlurField;
csv.onblur = onBlurField;
