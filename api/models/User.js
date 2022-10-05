import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
},
    lastName: {
    type: String,
    required: true
},
    phone: {
    type: String,
    required: true
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
