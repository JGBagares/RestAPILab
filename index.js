const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user1:Y5nWFYnJ4k9Uz6Jr@bagares.o0h9sqt.mongodb.net/?retryWrites=true&w=majority&appName=bagares')
.then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


console.log('Connection attempt started...');
    
const EmployeeRoute = require('./Routes/Employee.route');
app.use('/Employee', EmployeeRoute);

const UserRoute = require('./Routes/User.route');
app.use('/User', UserRoute);

const ProductRoute = require('./Routes/products.route');
app.use('/product', ProductRoute);

//Error id wrong endpoint
app.use((req, res, next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
}) 

//Middleware Express
app.use((req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
        
    })
}) 

app.listen(3000, ()=>{
    console.log('Listening on port 3000....')
})