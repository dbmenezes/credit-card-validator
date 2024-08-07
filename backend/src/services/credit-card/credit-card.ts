const validate = (creditCardNumber: string): boolean => {
  if(creditCardNumber.length === 0) return false
    if(/[^0-9-\s]+/.test(creditCardNumber)) return false;
 
  
    let checkSum = 0, currentDigit = 0, doubleDigit = false;
    creditCardNumber = creditCardNumber.replace(/\D/g, "");
  
    for (let n = creditCardNumber.length - 1; n >= 0; n--) {
      const cDigit = creditCardNumber.charAt(n);
      currentDigit = parseInt(cDigit, 10);
  
      if (doubleDigit) {
        if ((currentDigit *= 2) > 9) currentDigit -= 9;
      }
  
      checkSum += currentDigit;
      doubleDigit = !doubleDigit;
    }
  
    return (checkSum % 10) === 0;
  };
  
  export default validate;
  