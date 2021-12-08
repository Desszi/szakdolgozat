const Storage = require('../../models/storage.model');

exports.create = storageData => {
    const storage = new Storage(storageData);
    return storage.save();
};

exports.findAll = () => Storage.find();

exports.findOne = id => Storage.findById(id);

exports.update = (id, updateData) => Storage.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Storage.findByIdAndRemove(id);
