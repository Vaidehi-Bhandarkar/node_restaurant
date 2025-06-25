const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true,
    },
    "age": {
        type: Number,
    },
    "designation": {
        type: String,
        enum: ['Chef', 'Manager', 'Owner', 'Waiter'],
        required: true,
    },
    "mobile": {
        type: Number,
        required: true,
    },
    "email": {
        type: String,
        unique: true,
    },
    "address": {
        type: String,
    },
    "salary": {
        type: Number,
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = {
    Person,
}