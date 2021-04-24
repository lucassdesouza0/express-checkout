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
  const productsUrl = `${process.env.NEXT_URL}/api/products`;
  console.log("productsUrl: ", productsUrl);

  try {
    const response = await fetch(productsUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export default fetchProducts;
