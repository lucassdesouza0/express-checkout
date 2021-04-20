import Head from "next/head";

import { Button } from "./styles";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Teste</div>
      <Button>Teste</Button>
    </div>
  );
};

export default Home;
