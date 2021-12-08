const Bill = require('../../models/bill.model');

exports.create = billData => {
    const bill = new Bill(billData);
    return bill.save();
};

exports.findAll = () => Bill.find().populate('customer').populate('saller').populate('product');

exports.findOne = id => Bill.findById(id).populate('customer').populate('saller').populate('product');

exports.update = (id, updateData) => Bill.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Bill.findByIdAndRemove(id);
