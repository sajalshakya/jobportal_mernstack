const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true,
    },
    job_preference: {
        type: String,
        enum: ["Account","Bank","IT","Government"],
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    }
    
})

module.exports = mongoose.model("Client", ClientSchema)