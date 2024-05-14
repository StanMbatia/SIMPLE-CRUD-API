const express = require('express');
const Product = require('./models/products.model.js');
const productRoute= require('./routes/product.routes.js');
const mongoose = require('mongoose');
const app = express()


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute);


app.get('/' ,(req, res) =>{
    res.send("Hello from Mtaani Info");
});



mongoose.connect("mongodb+srv://stanmbatia19:Wisefool1@backenddb.hqhjqps.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then( () => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch( () => {
    console.log("Connection Failed");
});