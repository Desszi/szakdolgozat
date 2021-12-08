const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    birthDate: Date,
    birthPlace: String,
    email: {
        type: String,
        require: true
    },
    address: String,
    phone: String,
    active: Boolean,
    password: String,
    accessToken: String
}, {
    timeStamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);
