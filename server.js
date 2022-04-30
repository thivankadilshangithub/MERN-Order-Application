const express = require('express');
const db = require("./db.js");

const Pizza = require('./models/pizzaModel');


const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute');
const userRouter = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

app.use('/api/pizzas/' , pizzasRoute);
app.use('/api/users/' , userRouter);
app.use('/api/orders/' , ordersRoute);


app.get("/" , (req,res)=>{
    res.send("Server is working");
});


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}`);
})

/*
app.get('/getpizzas' , (req,res)=>{ 

Pizza.find({} , (err , docs)=>{

    if(err){
        console.log(err);
    }
    else{
        res.send(docs);
        console.log(docs)
    }
})
})
*/