/* Las compras deberán guardar:
- El total del carrito comprado
- La fecha de la compra */

import mongoose from 'mongoose'

const saleSchema = new mongoose.Schema({
    totalAmmount: {
        type: Number,
        required: true
},
    dateOfPurchase: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Sale', saleSchema)