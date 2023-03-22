const express = require("express");
const routers = require('./routes');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const {authentication} = require('./middlewares/authMiddleware');
const  httpLogger = require('./utils/httpLogger');
const logger = require('./utils/logger');

const whitelist = ['http://localhost:3000', "http://localhost:8001"]

const app = express();

app.use(httpLogger);

app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: {
            'priceFixed': function (price) {
                return price.toFixed(2)
            }
        }
    })
);

app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: whitelist, credentials: true}));
app.use(express.json());
app.use(cookieParser());
app.use(authentication);
app.use(routers);

// TODO database name:
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/flowers');

app.listen(8001, () => logger.info("Server is listening on port 8001 ..."))