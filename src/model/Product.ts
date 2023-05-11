export interface Product {
    id: number;
    productType: string,
    image: string,
    isActive: boolean,
    originalPrice: string,
    discountPrice: string,
    offersStartsIn: string;
}