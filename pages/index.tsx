import type { NextPage } from "next";
import { useRouter } from "next/router";
import TransactionLoader from "../components/TransactionLoader";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/swap");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <TransactionLoader />;
};

export default Home;
