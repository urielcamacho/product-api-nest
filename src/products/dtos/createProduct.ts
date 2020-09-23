export class CreateProductDto {
    readonly idProduct: string;
    readonly nameProduct: string;
    readonly category: string;
    readonly description: string;
    readonly productQuantity: Int8Array;
    readonly status: boolean;
    readonly timeStamp: Date;
}