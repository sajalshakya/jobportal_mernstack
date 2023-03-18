const express = require('express');
const cors = require('cors');

const auth_route =  require('./route/auth')

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())

app.use('/api', auth_route)

app.use((err,req,res,next) => {
    console.log(err.message);
    let status_code = 500;
    let msg = "Server Error"
    let errors = [];
    console.log();

    if(err.name === "ValidationError"){
        status_code = 400;
        msg = "Bad request"
        Object.entries(err.errors).map(error => {
            errors.push({
                params: error[0],
                msg:error[0].message
            })
        })
    }else{
        if(err.code === 11000){
            status_code = 400;
            msg = "Bad request"
            errors.push(
                {
                    param: Object.keys(err.keyPattern)[0],
                    msg:"Already in use"
                }
            )
        }
    }
    
    res.status(status_code).send({
        msg:msg,
        errors,
        error: err.message
    })
})

require('dotenv').config()
require("./config/database")
app.listen(process.env.PORT, () => {
    console.log(`Server started on port`);
});