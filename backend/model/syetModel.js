const mongoose = require('mongoose')

const syetSchema = mongoose.Schema({
    text: {
        type: String, 
        require: [true, 'please add a text value']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Syet', syetSchema)