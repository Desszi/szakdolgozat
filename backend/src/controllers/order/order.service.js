const Order = require('../../models/order.model');

exports.create = orderData => {
    const order = new Order(orderData);
    return order.save();
};

exports.findAll = () => Order.find().populate('customer', 'saller', 'product', 'transport');

exports.findOne = id => Order.findById(id).populate('customer', 'saller', 'product', 'transport');

exports.update = (id, updateData) => Order.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Order.findByIdAndRemove(id);
