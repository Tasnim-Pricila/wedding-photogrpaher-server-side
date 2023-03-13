const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbconnect = require('./Database/dbConnect');
const userRoute = require('./routes/user.routes');
const packageRoute = require('./routes/package.routes');
const queryRoute = require('./routes/query.routes');
const bookingRoute = require('./routes/booking.routes');
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

dbconnect();

app.get('/', (req, res) => {
    res.send("Wedding Photographer...");
})

app.use('/', userRoute)
app.use('/', packageRoute)
app.use('/queries', queryRoute)
app.use('/booking', bookingRoute)


app.listen(port, () => {
    console.log(`App is running on port ${port}`.white.bold);
})