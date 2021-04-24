import fetch from "isomorphic-fetch";

export interface ProductProps {
  name: string;
  variants: VariantProp[];
}

export interface VariantProp {
  size: string;
  price: string;
}

const fetchProducts = async (): Promise<ProductProps[] | null> => {
  const productsUrl = `http://localhost:3000/api/products`;

  try {
    const response = await fetch(productsUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export default fetchProducts;
