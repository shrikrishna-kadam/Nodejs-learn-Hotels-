const mongoose =require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    taste:{
        type :String,
        enum : ['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [],
        default:[]
    }
})

const menuItem = mongoose.model('menuItem', menuItemSchema) // we need model to export
module.exports = menuItem;