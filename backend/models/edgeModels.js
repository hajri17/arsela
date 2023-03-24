const mongoose = require('mongoose')
const Schema = mongoose.Schema

const edgesSchema = new Schema({
    id: { 
        type: String, 
        required: true 
    },
    from: { 
        type: String, 
        required: true 
    },
    to: { 
        type: String, 
        required: true 
    },
    text: { 
        type: String, 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('edge', edgesSchema)