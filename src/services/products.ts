import fetch from "isomorphic-fetch";

export interface IVariant {
  size: string;
  price: number;
}

export interface IProduct {
  name: string;
  variants: IVariant[];
}

const fetchProducts = async (): Promise<IProduct[] | undefined> => {
  const productsUrl = `${process.env.NEXT_PUBLIC_URL}/api/products`;

  try {
    const response = await fetch(productsUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    return undefined;
  }
};

export default fetchProducts;
