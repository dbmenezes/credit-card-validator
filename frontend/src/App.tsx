import React, { useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { validateCardNumber } from "./api/credit-card/validate-card-number";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const App: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const validCardLengths = [14, 15, 16];

  const validateCardNumberLength = () => {
    const cardNumberLength = cardNumber.replace(/\D/g, "").length;
    if (!validCardLengths.includes(cardNumberLength)) {
      setError(`Your card number is incomplete.`);
      setIsValid(false);
    } else {
      setError("");
      return true;
    }
    return false;
  };

  const validateCardsNumberHandler = async () => {
    try {
      const result = await validateCardNumber(cardNumber);
      if (result.valid) {
        setIsValid(true);
        setError("");
      } else {
        setIsValid(false);
        setError("Invalid card number");
      }
    } catch (err) {
      setIsValid(false);
      setError("Error validating your card");
    }
  };
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
    setError("");
    setIsValid(false);
  };

  const handleCardNumberBlur = async () => {
    if (validateCardNumberLength()) {
      await validateCardsNumberHandler();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!error) {
      console.log("Card Number:", cardNumber);
    }
  };

  return (
    <div className="app-container">
      <main className="main">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="payment-container">
              <span className="title">Insert Payment data</span>

              <div className="card-number">
                <div className="card-number-label">
                  <CreditCardIcon />
                  <span>Card number</span>
                  {isValid && (
                    <CheckCircleIcon sx={{ color: "success.main" }} />
                  )}
                </div>

                <TextField
                  id="outlined-size-small"
                  label="1234 1234 1234 1234"
                  variant="filled"
                  onChange={handleCardNumberChange}
                  onBlur={handleCardNumberBlur}
                  helperText={error}
                  error={!!error}
                  inputProps={{ maxLength: 16 }}
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              disabled={!isValid}
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
