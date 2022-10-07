// Product, sub total

import mongoose from "mongoose"

const shoppingCartSchema = new mongoose.Schema ({
    subTotal: {
        type: Number,
        required: true
},
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }]
})

export default mongoose.model('shoppingCart', shoppingCartSchema)