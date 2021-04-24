import React, { useState } from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import { VariantProp } from "services/products";

export const ProductContext = React.createContext({});

export interface SelectedProductProps {
  size?: string;
  price?: string;
  isComplete?: boolean;
}

export interface ProductProps {
  name?: string;
  datail?: SelectedProductProps;
  variants?: VariantProp[] | null;
  shipping?: {
    name: string;
    email: string;
    address: string;
    postalCode: string;
    country: string;
    phone: string;
  };
}

export interface ContextProps {
  products:
    | {
        name: string;
        variants: VariantProp[];
      }[]
    | null;
  product?: ProductProps;
}

export interface ContextType {
  productsContext: ContextProps;
  setProductsContext: React.Dispatch<React.SetStateAction<ContextProps>>;
}

function MyApp({ Component, pageProps, ...props }: AppProps) {
  const [productsContext, setProductsContext] = useState<ContextProps>({
    products: null,
    product: undefined,
  });

  return (
    <ProductContext.Provider value={{ productsContext, setProductsContext }}>
      <Component {...pageProps} />
    </ProductContext.Provider>
  );
}

export default appWithTranslation(MyApp);
