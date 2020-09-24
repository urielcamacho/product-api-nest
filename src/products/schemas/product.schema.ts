import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    idProduct: { type: String, unique: true, required: true },
    nameProduct: { type: String, required: true, maxlength: 150 },
    category: { type: String},
    description: { type: String, required: true, maxlength: 450 },
    productQuantity: { type: Number, required: true, min: 0, max: 100 },
    status: { type: Boolean, required: true },
    timeStamp: { type: Date, default: Date.now() },
});