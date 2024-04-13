export interface Product extends Products {
    id: string
}

export interface Products {
    productName: string,
    productDescription: string,
    productPrice: string,
    inStock: boolean,
    productDiscount: string,
}