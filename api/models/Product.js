/*Los campos necesarios para registrar un producto son:
    - Nombre del producto
    - Cantidad en inventario
    - Precio
    - Especificaciones
    - Descripción
    - Proveedor */

    import mongoose from 'mongoose'

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        inventory: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        specs: {
            type: String
        },
        description: {
            type: String,
            required: true
        },
        providor: {
            type: String
        }
    })