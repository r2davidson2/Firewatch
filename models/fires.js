const mongoose = require('mongoose')
const fireSchema = mongoose.Schema({
   fireName: String,
   image: String,
   fireBeginDate: String,
   fireEndDate: String,
   lat: String,
   long: String,
   comments: String,
   showModal: {
         type: Boolean,
         default: false
      },
   createdBy: String
}, {timestamp: true})

const Fire = mongoose.model('Fire', fireSchema)

module.exports = Fire
