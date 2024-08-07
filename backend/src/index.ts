

import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import creditCardRoutes from './routes/credit-card';

const app = express();
const port = 4000;

app.use(cors());


app.use(bodyParser.json());


app.use('/api', creditCardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});