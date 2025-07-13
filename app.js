const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const reviewRoutes = require('./routes/review');
const flash = require('connect-flash');
const session = require('express-session');

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log("DB Connected successfully");
})
.catch((err) => {
    console.log("DB error");
    console.log(err);
});

let configSession = session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
// seedDB();

app.use(methodOverride('_method'));
app.use(configSession);
app.use(flash());

//  Flash variables middleware
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.use(productRoutes);
app.use(reviewRoutes);

app.listen(8080, () => {
    console.log("server connected");
});
