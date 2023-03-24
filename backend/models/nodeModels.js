const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NodesSchema = new Schema({
    id: { 
        type: String, 
        required: true 
    },
    className: { 
        type: String, 
        required: true 
    },
    text: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('Node', NodesSchema)