const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: Boolean,
    price: {
        type: Number,
        require: true
    },
    available: {
        type: Boolean,
        require: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
