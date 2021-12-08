const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    grandTotal: {
        type: Number,
        require: true
    },
    paid: {
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
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Bill', BillSchema);
