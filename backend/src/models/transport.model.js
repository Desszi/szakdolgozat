const mongoose = require('mongoose');

const TransportSchema = mongoose.Schema({
    travelBy: String,
    destination: {
        type: String,
        require: true
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

module.exports = mongoose.model('Transport', TransportSchema);
