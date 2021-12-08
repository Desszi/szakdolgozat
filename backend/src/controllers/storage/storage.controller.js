const express = require('express');
const createError = require('http-errors');

const storageService = require('./storage.service');

exports.create = (req, res, next) => {
    const { name, address, opened, products } = req.body;
    if (!name || !address || !opened) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return storageService.create(newStorage)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return storageService.findAll()
        .then( storages => {
            res.json(storages);
        });
};

exports.findOne = (req, res, next) => {
    return storageService.findOne(req.params.id)
        .then( storage => {
            if (!storage) {
                return next(new createError.NotFound("storage is not found"));
            }
            return res.json(storage);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, address, opened, products } = req.body;
    if (!name || !address || !opened) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return storageService.update(req.params.id, req.body)
        .then(storage => {
            res.json(storage);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return storageService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
