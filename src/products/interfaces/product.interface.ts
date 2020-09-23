export interface IProduct {
    idProduct: string;
    nameProduct: string;
    category: string;
    description: string;
    productQuantity: Int8Array;
    status: boolean;
    timeStamp: Date;
}