import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import fetchProducts, { ProductProps } from "services/products";

import Header from "molecules/Header/Header";
import ProductsSection from "organisms/ProductsSection/ProductsSection";
interface HomeProps {
  products: ProductProps[];
}

export async function getStaticProps({ locale, ...props }: any) {
  const products = await fetchProducts();
  return {
    props: {
      products: products,
      ...(await serverSideTranslations(locale, ["common", "price"])),
    },
  };
}

const Home = ({ products }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Your Dog's Store</title>
      </Head>
      <Header />
      <ProductsSection products={products} />
    </>
  );
};

export default Home;
