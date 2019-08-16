const mongoose = require('mongoose')
const fireSchema = mongoose.Schema({
    fireName: String,
    fireBeginDate: String,
    fireEndDate: String,
    lat: Number,
    long: Number,
    comments: String
})

const Fire = mongoose.model('Fire', fireSchema)

module.exports = Fire