const mongoose= require('mongoose');

// creating person schema
const personSchema = new mongoose.Schema({
    name:{
        type : String,
        required :true
    },
    age:{
        type: Number
    },
    work:{
        type :String,
        enum : ['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

// creating person model from schema as we need odel to export 
const person = mongoose.model('person', personSchema);
module.exports = person;