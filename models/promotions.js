const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var PromotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        mi: 0
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: String,
        default: false
    }
}, {timestamps: true});

var Promotions = mongoose.model('promotion', PromotionSchema);

module.exports = Promotions;