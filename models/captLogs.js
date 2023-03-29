const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    entry: { type: String, required: true},
    shipIsBroken: { type: Boolean, default: true, required: true}
}, { timestamps: true })

const Log = mongoose.model('log', logSchema)

module.exports = Log