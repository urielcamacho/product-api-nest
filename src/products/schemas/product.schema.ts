import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    nameProduct: String,
    category: String,
    description: String,
    productQuantity: Number,
    status: Boolean,
    timeStamp: Date,
});