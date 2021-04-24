import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "molecules/Header/Header";
import SuccessSection from "organisms/SuccessSection/SuccessSection";

interface SuccessProps {}

export async function getStaticProps({ locale, pr }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "price"])),
    },
  };
}

const Success = ({}: SuccessProps) => {
  return (
    <>
      <Header />

      <SuccessSection />
    </>
  );
};

export default Success;
