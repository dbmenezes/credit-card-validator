# Card Number Validator

This project is divided into two main parts: the backend, which performs the validation of card numbers, and the frontend, which provides a user interface for entering the card number and viewing the validation results.

## How to Run the Projects

To run these projects, you will need to have Node.js and Npm installed on your machine. Follow the steps below to start both the backend and the frontend.

### Backend

The backend is an API that validates credit card numbers. To run it :

cd backend && npm install && npm start


### Frontend

The frontend is a simple user interface that allows users to input a card number and get feedback on its validity. To run the frontend:

cd frontend && npm instal && npm start



### Unit tests

Unit tests were made with Jest, testing empty cardNumber and common types of cards such as (Maestro,Visa,Dinners Club, Mastercard)

to run it:
cd backend && npm install && npm run test
