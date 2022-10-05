// Product, sub total

import mongoose from "mongoose"

const shoppingCartSchema = new mongoose.Schema ({
    subTotal: {
        type: Number,
        required: true
},
})

export default mongoose.model('shoppingCart', shoppingCartSchema)