import { Document } from 'mongoose';

export class UpdateProductDto extends Document {
    readonly idProduct?: string;
    readonly nameProduct: string;
    readonly category: string;
    readonly description: string;
    readonly productQuantity: Int8Array;
    readonly status: boolean;
    readonly timeStamp: Date;
}