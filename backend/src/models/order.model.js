const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    time: {
        type: Date,
        require: true
    },
    comment: String,
    active: {
        type: Boolean,
        require: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    saller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Saller',
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
    }, 
    transport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transport',
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
