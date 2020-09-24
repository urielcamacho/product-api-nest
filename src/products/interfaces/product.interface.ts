import { Document } from 'mongoose';

export interface IProduct extends Document {
    idProduct: string;
    nameProduct: string;
    category: string;
    description: string;
    productQuantity: Int8Array;
    status: boolean;
    timeStamp: Date;
}