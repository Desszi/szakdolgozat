const express = require('express');
const createError = require('http-errors');

const transportService = require('./transport.service');

exports.create = (req, res, next) => {
    const { travelBy, destination, saller, products } = req.body;
    if (!destination) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newTransport = {
        travelBy: travelBy || '',
        destination: destination,
        saller: saller || null,
        products: products || []
    };

    return transportService.create(newTransport)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return transportService.findAll()
        .then( transports => {
            res.json(transports);
        });
};

exports.findOne = (req, res, next) => {
    return transportService.findOne(req.params.id)
        .then( transport => {
            if (!transport) {
                return next(new createError.NotFound("Transport is not found"));
            }
            return res.json(transport);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { travelBy, destination, saller, products } = req.body;
    if (!destination) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return transportService.update(req.params.id, req.body)
        .then(transport => {
            res.json(transport);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return transportService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
