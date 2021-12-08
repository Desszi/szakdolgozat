const express = require('express');
const createError = require('http-errors');

const sallerService = require('./saller.service');

exports.create = (req, res, next) => {
    const { first_name, last_name, birthDate, birthPlace, email, address, phone, active, password, accessToken } = req.body;
    if (!first_name || !last_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newSaller = {
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

    return sallerService.create(newSaller)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return sallerService.findAll()
        .then( sallers => {
            res.json(sallers);
        });
};

exports.findOne = (req, res, next) => {
    return sallerService.findOne(req.params.id)
        .then( saller => {
            if (!saller) {
                return next(new createError.NotFound("Saller is not found"));
            }
            return res.json(saller);
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
    return sallerService.update(req.params.id, req.body)
        .then(saller => {
            res.json(saller);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return sallerService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
