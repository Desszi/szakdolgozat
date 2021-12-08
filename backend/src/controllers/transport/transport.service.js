const Transport = require('../../models/transport.model');

exports.create = transportData => {
    const transport = new transport(transportData);
    return transport.save();
};

exports.findAll = () => Transport.find().populate('saller', 'product');

exports.findOne = id => Transport.findById(id).populate('saller', 'product');

exports.update = (id, updateData) => Transport.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Transport.findByIdAndRemove(id);
