import validateCreditCard from '../../services/credit-card/credit-card';

describe('validateCreditCard', () => {
  it('should return true for a valid American express credit card number', () => {
    const validCardNumber = '371449635398431';
    expect(validateCreditCard(validCardNumber)).toBe(true);
  });

  it('should return true for a valid Dinners club credit card number', () => {
    const validCardNumber = '36259600000004'; 
    expect(validateCreditCard(validCardNumber)).toBe(true);
  });
  it('should return true for a valid Maestro credit card number', () => {
    const validCardNumber = '6304000000000000';
    expect(validateCreditCard(validCardNumber)).toBe(true);
  });
  it('should return true for a valid Mastercard credit card number', () => {
    const validCardNumber = '2223000048400011'; 
    expect(validateCreditCard(validCardNumber)).toBe(true);
  });
  it('should return true for a valid Visa credit card number', () => {
    const validCardNumber = '4005519200000004'; 
    expect(validateCreditCard(validCardNumber)).toBe(true);
  });

  
  it('should return false for an invalid credit card number', () => {
    const invalidCardNumber = '1234567890123456'; 
    expect(validateCreditCard(invalidCardNumber)).toBe(false);
  });

  it('should return false for a non-numeric input', () => {
    const nonNumericInput = 'abcd-efgh-ijkl-mnop'; 
    expect(validateCreditCard(nonNumericInput)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyInput = ''; 
    expect(validateCreditCard(emptyInput)).toBe(false);
  });


});
