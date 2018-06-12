const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const caseSchema = new Schema({
    size: String,
    material: String,
    color: String,
    price: Number
})

const caseModel = mongoose.model('Case', caseSchema)

module.exports = caseModel