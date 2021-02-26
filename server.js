const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})