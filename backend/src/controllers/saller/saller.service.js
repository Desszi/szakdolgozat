const Saller = require('../../models/saller.model');

exports.create = sallerData => {
    const saller = new Saller(sallerData);
    return saller.save();
};

exports.findAll = () => Saller.find();

exports.findOne = id => Saller.findById(id);

exports.update = (id, updateData) => Saller.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Saller.findByIdAndRemove(id);
