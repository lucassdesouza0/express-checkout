import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";

import store from "../src/store/";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
