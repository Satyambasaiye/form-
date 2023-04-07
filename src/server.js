const express = require('express');
const bodyParser = require('body-parser');
const bookingsRouter = require('./bookings');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api/bookings', bookingsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
