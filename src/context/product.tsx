import React, { createContext, ReactNode, useState } from "react";
import { VariantProp } from "services/products";

export interface SelectedProductProps {
  name?: string;
  size?: string;
  price?: string;
  isComplete?: boolean;
}

export interface StateProps {
  selectedProduct: SelectedProductProps | null;
  variant?: VariantProp[] | null;
}

export interface ProductContextProps {
  children: ReactNode;
}

const ProductContext = ({ children }: ProductContextProps) => {
  const [product, setProduct] = useState<StateProps>({
    selectedProduct: null,
    variant: null,
  });

  const storeProduct = (product: StateProps) => {
    setProduct({
      selectedProduct: product.selectedProduct,
      variant: product.variant,
    });
  };

  const ProductContext = createContext({ product, storeProduct });

  const unselectProduct = () => {
    setProduct({
      selectedProduct: null,
      variant: null,
    });
  };

  return (
    <ProductContext.Provider value={{ product, storeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
