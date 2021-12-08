const mongoose = require('mongoose');

const StorageSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    opened: {
        type: Boolean,
        require: true 
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Storage', StorageSchema);
