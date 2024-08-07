import validate from "../../services/credit-card/credit-card";
import  { Request, Response } from 'express';
import Joi from 'joi';


const creditCardSchema = Joi.object({
    creditCardNumber: Joi.string()
                         .trim()
                         .regex(/^\d+$/) 
                         .required()
});




const validateCreditCard = (req: Request, res: Response) => {
  const { error, value } = creditCardSchema.validate(req.body);
  const isValid = validate(value.creditCardNumber);
  if (error) {
    return res.status(400).json({ message: `Invalid credit card number`});
}

  if (isValid) {
      res.status(200).json({ valid: true });
  } else {
      res.status(400).json({ valid: false });
  }
};

  export default validateCreditCard