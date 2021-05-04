import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { IVariant, IProduct } from "services/products";

export const ProductContext = React.createContext({});

export interface DetailsProps {
  size?: string;
  price?: number;
  quantity?: number;
}

export interface ShippingProps {
  name: string;
  email: string;
  address: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface OrderProps {
  name?: string;
  datail?: DetailsProps;
  variants?: IVariant[];
  shipping?: ShippingProps;
}

export interface ContextProps {
  products?: IProduct[];
  product?: OrderProps;
  isComplete?: boolean;
}

export interface ContextType {
  productsContext: ContextProps;
  setProductsContext: React.Dispatch<React.SetStateAction<ContextProps>>;
}

function MyApp({ Component, pageProps, ...props }: AppProps) {
  const [productsContext, setProductsContext] = useState<ContextProps>({});

  return (
    <ProductContext.Provider value={{ productsContext, setProductsContext }}>
      <Component {...pageProps} />
    </ProductContext.Provider>
  );
}

export default appWithTranslation(MyApp);
