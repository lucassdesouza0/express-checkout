import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import fetchProducts, { IProduct } from "services/products";

import Header from "atoms/Header/Header";
import ProductsSection from "organisms/ProductsSection/ProductsSection";
import useProduct from "hooks/useProduct";
interface HomeProps {
  products: IProduct[];
  initialData: IProduct[];
}

export async function getServerSideProps({ locale }: any) {
  const data = await fetchProducts();
  return {
    props: {
      initialData: data,
      ...(await serverSideTranslations(locale, ["common", "price"])),
    },
  };
}

const Home = ({ initialData }: HomeProps) => {
  const { data } = useProduct({
    url: "api/products",
    initialData: initialData,
  });

  return (
    <>
      <Head>
        <title>Your Dog's Store</title>
      </Head>
      <Header />
      <ProductsSection products={data} />
    </>
  );
};

export default Home;
