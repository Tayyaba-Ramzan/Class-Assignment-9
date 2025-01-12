import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  image?: string[] | StaticImageData | undefined;
  productDetails: string;
  price: number;
  allCategory: string;
  discount?: number;
  quantity: number;
};

export type Cart = {
  id: number;
  title: string;
  image: string | undefined | StaticImageData;
  productDetails: string;
  price: number;
  allCategory: string;
  size: string;
  color: string;
  quantity: number;
  uuid: number | string | undefined;
};