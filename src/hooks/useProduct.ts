import useSWR from "swr";
import fetchProducts from "services/products";

interface useProductProps {
  url: string;
  initialData: any;
}

const useProduct = ({ url }: useProductProps) => {
  const response = useSWR(url, fetchProducts);

  return response;
};

export default useProduct;
