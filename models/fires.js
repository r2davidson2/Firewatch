const mongoose = require('mongoose')
const fireSchema = mongoose.Schema({
    fireName: String,
    image: String,
    fireBeginDate: Date,
    fireEndDate: Date,
    lat: Number,
    long: Number,
    comments: String
}, {timestamp: true})

const Fire = mongoose.model('Fire', fireSchema)

module.exports = Fire
