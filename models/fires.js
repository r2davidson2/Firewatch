const mongoose = require('mongoose')
const fireSchema = mongoose.Schema({
    fireName: String,
    fireBeginDate: String,
    fireEndDate: String,
    comments: String
})

const Fire = mongoose.model('Fire', fireSchema)

module.exports = Fire