'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'O Nome é obrigatório.'],
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    tags: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Foundation', schema);