const express = require('express');
const createError = require('http-errors');

const billService = require('./bill.service');

exports.create = (req, res, next) => {
    const { grandTotal, paid, customer, saller, products } = req.body;
    if (!grandTotal || !paid) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newBill = {
       grandTotal: grandTotal,
       paid: paid,
       customer: customer || null,
       saller: saller || null,
       products: products || []
    };

    return billService.create(newBill)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return billService.findAll()
        .then( bills => {
            res.json(bills);
        });
};

exports.findOne = (req, res, next) => {
    return billService.findOne(req.params.id)
        .then( bill => {
            if (!bill) {
                return next(new createError.NotFound("bill is not found"));
            }
            return res.json(bill);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { grandTotal, paid, customer, saller, products } = req.body;
    if (!grandTotal || !paid) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return billService.update(req.params.id, req.body)
        .then(bill => {
            res.json(bill);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return billService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
