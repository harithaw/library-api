const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//server port & DB uri
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

//express app
const app = express();

//midleware
app.use(cors());
app.use(express.json());

//import routes
const bookRoutes = require('./routes/books')
const userRoutes = require('./routes/users')
const lendRoutes = require('./routes/lends')

app.use('/books',bookRoutes)
app.use('/users',userRoutes)
app.use('/lends',lendRoutes)
    

//connect DB
mongoose.connect(uri,{useNewUrlParser: true})
    .then(()=>{
        app.listen(port, ()=>{
            console.log('Connected to DB && server running on port:'+port);
        })
    });