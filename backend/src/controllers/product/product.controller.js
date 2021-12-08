const express = require('express');
const createError = require('http-errors');

const productService = require('./product.service');

exports.create = (req, res, next) => {
    const { name, description, price, available } = req.body;
    if (!name || !price || !available) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newProduct = {
       name: name,
       description: description || '',
       price: price,
       available: available
    };

    return productService.create(newProduct)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return productService.findAll()
        .then( products => {
            res.json(products);
        });
};

exports.findOne = (req, res, next) => {
    return productService.findOne(req.params.id)
        .then( product => {
            if (!product) {
                return next(new createError.NotFound("Product is not found"));
            }
            return res.json(product);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, description, price, available } = req.body;
    if (!name || !price || !available) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return productService.update(req.params.id, req.body)
        .then(product => {
            res.json(product);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return productService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
