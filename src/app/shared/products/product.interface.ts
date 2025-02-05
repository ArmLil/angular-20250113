import { ProductImage } from "./product-image.interface";

export interface Product {
  _id: string;
  name: string;
  price: number;
  images: ProductImage[];
  subCategory: string;
  feedbacksCount: number;
  rating: number;
}

export interface ProductBuied extends Product {
  quantity: number;
}
