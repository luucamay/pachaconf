const validator = {
  isValid: (CardNumber) => {
    const n = CardNumber.length;
    let digitsSum = 0

    let arrayCardNumber = CardNumber.split('');
    arrayCardNumber = arrayCardNumber.reverse();
    const creditCardNumber = arrayCardNumber.join('');

    for (let i = 0; i < n; i++) {
      let currDigit = parseInt(creditCardNumber[i]);
      if (i % 2 === 1) {
        currDigit *= 2;
        if (currDigit > 9)
          currDigit -= 9;
      }
      digitsSum += currDigit;
    }
    if (digitsSum % 10 === 0)
      return true;
    return false;
  },

  maskify: (creditCardNumber) => {
    const n = creditCardNumber.length;
    if (n < 4)
      return creditCardNumber;
    return 'X'.repeat(n - 4) + creditCardNumber.slice(-4);
  }
};

export default validator;
