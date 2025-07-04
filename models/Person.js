const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    "address": {
        type: String,
    },
    "salary": {
        type: Number,
    },
    "username": {
        required: true,
        type: String,
        unique: true
    },
    "password": {
        required: true,
        type: String
    }
});

personSchema.pre('save',async function(next) {
    const person = this;

    if(!person.isModified('password'))
        return next();

    try{
        //generate hash passwd
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashPasswd = await bcrypt.hash(person.password, salt);

        //Override plain password with new one
        person.password = hashPasswd;
        next();
    } catch(err){
        return next(err);
    }
});

personSchema.methods.comparePassword = async function (userPasswd) {
    try{
        const isMatch = await bcrypt.compare(userPasswd, this.password);
        return isMatch;
    } catch(err){
        throw err;
    }
};

const Person = mongoose.model('Person', personSchema);
module.exports = {
    Person,
}