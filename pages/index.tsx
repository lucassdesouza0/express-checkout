import Head from "next/head";

import { Button } from "./index.styles";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App s</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Teste</div>
      <Button>Teste</Button>
    </div>
  );
};

export default Home;
