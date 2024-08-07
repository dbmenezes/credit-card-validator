import config from "../../config/config";



export const validateCardNumber = async (cardNumber: string): Promise<{valid: boolean}> => {
    const response = await fetch(
      `${config.paymentApiUrl}/api/payment/validate-card-number`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ creditCardNumber: cardNumber }),
        }
      );

      const result = await response.json();
      return result
}