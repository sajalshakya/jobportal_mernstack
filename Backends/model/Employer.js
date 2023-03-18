const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EmployerSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    company_email: {
        type: String,
        required: true,
        unique: true
    },
    website: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    company_contact: {
        type: Number,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true
    },
    company_industry: {
        type: String,
        enum: ["Account","Bank","IT","Government"],
        required: true
    },
    person_name: {
        type: String,
        required: true
    },
    person_email: {
        type: String,
        required: true,
        unique: true
    },
    person_contact: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    }
    
})

module.exports = mongoose.model("Employer", EmployerSchema)