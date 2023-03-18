const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken');

const Employer =  require('../model/Employer')
const Client =  require('../model/Client')

const employerSignup =  async (req,res,next) => {
    try{
        let hashed_password = "";
        if(req.body.password){
            hashed_password = await bcrypt.hash(req.body.password,10)
        }
        let employer = await Employer.create({
            company_name: req.body.company_name,
            company_email: req.body.company_email,
            website: req.body.website,
            address: req.body.address,
            company_contact: req.body.company_contact,
            company_industry: req.body.company_industry,
            description: req.body.description,
            person_name: req.body.person_name,
            person_email: req.body.person_email,
            person_contact: req.body.person_contact,
            password: hashed_password
        })
        employer = employer.toObject();
        delete employer.password;
        res.send(employer)
    }catch(err){
        next(err);
    }
}
const employerLogin =  async(req,res,next) => {
    try{
        let employer =  await Employer.findOne({ company_email: req.body.company_email })
        if(employer){
            let employerPassword_obj = await Employer.findOne({ company_email: req.body.company_email}).select("password")
            let match_status = await bcrypt.compare(req.body.password, employerPassword_obj.password)
            if(match_status){
                const token = jwt.sign( employer.toObject(), 'shhhhh');
                return res.send({token:token})
            }
        }
        return res.status(401).send({
            msg:"Invalid Credentials"
        })
    }catch(err){
        next(err);
    }
}

const clientSignup = async(req,res,next) => {
    try{
        let hashed_password = ""
        if(req.body.password){
            hashed_password = await bcrypt.hash(req.body.password,10);
        }
        let client = await Client.create({
            name : req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            job_preference: req.body.job_preference,
            password: hashed_password,
        })
        client = client.toObject()
        delete client.password
        res.send(client)
    }catch(err){
        next(err);
    }
}

const clientLogin = async(req,res,next) => {
    try{
        let client = await Client.findOne( {email: req.body.email })
        if(client){
            let client_pass_obj = await Client.findOne({email: req.body.email}).select("password")
            match_status = await bcrypt.compare(req.body.password,client_pass_obj.password)
            if(match_status){
                var token = jwt.sign(client.toObject(), 'shhhhh');
                return res.send({
                    token:token
                })
            }
        }
        return res.status(401).send({
            msg: "invalid credentials"
        })
        }catch(err){
            next(err);
    }
}


module.exports = {
    employerSignup,
    employerLogin,
    clientSignup,
    clientLogin
}