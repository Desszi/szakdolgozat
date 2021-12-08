const express = require('express');
const createError = require('http-errors');

const customerService = require('./customer.service');

exports.create = (req, res, next) => {
    const { first_name, last_name, birthDate, birthPlace, email, address, phone, active, password, accessToken } = req.body;
    if (!first_name || !last_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newCustomer = {
        first_name: first_name,
        last_name: last_name,
        birthDate: birthDate || '',
        birthPlace: birthPlace || '',
        email: email,
        address: address || '',
        phone: phone || '',
        active: active || '',
        password: password || '',
        accessToken: accessToken || '',

    };

    return customerService.create(newCustomer)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return customerService.findAll()
        .then( customers => {
            res.json(customers);
        });
};

exports.findOne = (req, res, next) => {
    return customerService.findOne(req.params.id)
        .then( customer => {
            if (!customer) {
                return next(new createError.NotFound("Customer is not found"));
            }
            return res.json(customer);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, birthDate, birthPlace, email, address, phone, active, password, accessToken } = req.body;
    if (!first_name || !last_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }
    return customerService.update(req.params.id, req.body)
        .then(customer => {
            res.json(customer);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return customerService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
