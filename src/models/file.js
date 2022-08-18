'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'O Nome é obrigatório.'],
        trim: true
    },
    path: {
        type: String,
        required: false,
        trim: true
    },
    extension: {
        type: String,
        required: true,
        trim: true
    },
    byte: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('File', schema);