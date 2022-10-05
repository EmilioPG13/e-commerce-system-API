/*Los datos necesario para registrar a un cliente, son:
  - Nombre
  - Apellidos
  - Teléfono
  - Correo
  - Contraseña
  - No. de tarjeta
  - Dirección de envío*/

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
},
    lastName: {
    type: String,
},
    phone: {
    type: String,
},
    email: {
    type: String,
    required: true,
    unique: true,
},
    password: {
    type: String,
    required: true
},
    cardNumber: {
        type: Number,
        required: true,
        unique: true
},
    shippingAddress: {
        type: String,
        required: true,
    }

});

export default mongoose.model('User', userSchema);