const validator = {
  isValid: (creditCardNumber) => {
    console.log(creditCardNumber)
    const n = creditCardNumber.length;
    let digitsSum = 0
    for (let i = 0; i < n; i++) {
      let currDigit = parseInt(creditCardNumber[i]);
      if (i % 2 === 0) {
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
    if (creditCardNumber.length < 4)
      return creditCardNumber;
    return '🐱'.repeat(n - 4) + creditCardNumber.slice(-4);
  }
};

export default validator;
