import "tailwindcss/tailwind.css";
import style from "../styles/global.module.css";

import type { AppProps } from "next/app";
import Header from "../components/Header";
import { TransactionProvider } from "../contexts/transaction.context";

const styles = {
  wrapper: `min-h-screen max-w-full	bg-black text-white select-none flex flex-col`,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <div className={styles.wrapper}>
        <Header />
        <Component {...pageProps} />
      </div>
    </TransactionProvider>
  );
}

export default MyApp;
