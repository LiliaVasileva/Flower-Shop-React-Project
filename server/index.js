const express = require("express");
const routers = require('./routes');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { authentication } = require('./middlewares/authMiddleware');


const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        'priceFixed': function (price)  {
            return price.toFixed(2)
        }}
    })
);

app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(routers);

// TODO database name:
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/flowers');

app.listen(8000, () => console.log("Server is listening on port 8000 ..."))