import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import CheckoutSection from "organisms/CheckoutSection/CheckoutSection";
import Header from "molecules/Header/Header";

interface CheckoutProps {}

export async function getStaticProps({ locale, pr }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "price"])),
    },
  };
}

const Checkout = ({}: CheckoutProps) => {
  return (
    <>
      <Header />
      <CheckoutSection />
    </>
  );
};

export default Checkout;
