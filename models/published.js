"use strict";

// @IMPORTS
const Application = require("neat-base").Application;
const crypto = require("crypto");
const passwordHash = require('password-hash');
const Promise = require("bluebird");
const mongoose = require('mongoose');

let schema = new mongoose.Schema({

    model: {
        type: String
    },

    projection: {
        type: String,
    },

    data: {
        type: mongoose.Schema.Types.Mixed
    },

    refId: {
        type: String
    }

}, {
    permissions: {
        find: false,
        findOne: false,
        count: false,
        save: false,
        remove: false
    },
    read: 'secondaryPreferred',
});

module.exports = schema;
