import useSWR from "swr";
import fetchProducts from "services/products";

interface useProductProps {
  url: string;
  initialData?: any;
}

const useProduct = ({ url, initialData }: useProductProps) => {
  const response = useSWR(url, fetchProducts, initialData);

  return response;
};

export default useProduct;
