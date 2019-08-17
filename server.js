//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();
const app = express ();
const db = mongoose.connection;

// PORT
const PORT = process.env.PORT || 3000;
// DATABASE
const PROJECT3_DB = process.env.PROJECT3_DB;

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(PROJECT3_DB ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json());
app.use(express.static('public'));
app.use(session({
   secret: process.env.SECRET,
   resave: false,
   saveUninitialized: false
}));

// AUTH ROUTE
app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.json(req.session.currentUser)
    } else {
        res.status(401).json({
           status: 401,
           message: 'not logged in'
        })
    }
})

// CONTROLLERS
const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const firesController = require('./controllers/fires.js');
app.use('/fires', firesController);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
