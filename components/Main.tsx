import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { RiSettings3Fill } from "react-icons/ri";
import { useTransaction } from "../contexts/transaction.context";
import Modal from "react-modal";


import { useRouter } from "next/router";

import TransactionLoader from "./TransactionLoader";

Modal.setAppElement("#__next");

const styles = {
  wrapper: `w-screen flex items-center justify-center mt-8`,
  content: `bg-black  shadow-md border-2 border-gray-300  p-4 w-150 h-180`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-white my-3  p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl h-7 w-40`,
  currencySelector: `flex w-40 h-10`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-black hover:bg-[#41444F] text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton:
    "text-2xl shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center w-100 h-10",
  settingsIcon: "cursor-pointer color-black",
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#0a0b0d",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

function Main() {
  const { formData, handleChange, sendTransaction } = useTransaction();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    const { addressTo, amount } = formData;
  
    if (!addressTo || !amount) return;
  
    // sendTransaction();
  }
  return (
    <main className={styles.wrapper}>
      <div className={styles.content} style={{ boxShadow: "10px 10px grey" }}>
        <div className={styles.formHeader}>
          <div className="flex-1"></div>
          <div className="flex-2 text-center">Swap</div>
          <div className="flex-1"></div>
          <div>
            <RiSettings3Fill className={styles.settingsIcon} />
          </div>
        </div>
        <div className={styles.transferPropContainer}>
          <input
            type="text"
            className={styles.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, "amount")}
          />
          <div
            className={styles.currencySelector}
            style={{ boxShadow: "3px 3px grey" }}
          >
            <div className={styles.currencySelectorContent}>
              <div className={styles.currencySelectorIcon}>
                <Image src="/eth.png" alt="eth logo" height={20} width={20} />
              </div>
              <div className={styles.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={styles.currencySelectorArrow} />
            </div>
          </div>
        </div>

        <div className={styles.transferPropContainer}>
          <input
            type="text"
            className={styles.transferPropInput}
            placeholder="0x..."
            onChange={(e) => handleChange(e, "addressTo")}
          />
          <div
            className={styles.currencySelector}
            style={{ boxShadow: "3px 3px grey" }}
          >
            <div className={styles.currencySelectorContent}>
              <div className={styles.currencySelectorIcon}>
                <Image src="/bsc.png" alt="Bsc logo" height={20} width={20} />
              </div>
              <div className={styles.currencySelectorTicker}>BSC</div>
              <AiOutlineDown className={styles.currencySelectorArrow} />
            </div>
          </div>
        </div>
        <div className="text-white text-center mt-6">
          <div className="text-lg mb-1 flex justify-between ">
            Exchange rate (incl. fees):
            <div className="text-l font-bold mb-2 mr-2">
              <div className="flex justify-center">
                ETH/USDT{": "}
                <span className="ml-1">
                  <text>1,569.751702</text>
                </span>
              </div>
              <div className="text-l font-bold mb-2 ">
                USDT/ETH{": "}
                <span className="ml-1">
                  <text>0.00063704</text>
                </span>
              </div>
            </div>
          </div>

          <div className=" flex  item-center justify-between text-l font-bold mb-2">
            <span>Price impact:</span>
            <div>0.0005%</div>
          </div>
          <div className=" flex  item-center justify-between text-l font-bold mb-2">
            <span>Trage routed through:</span>
            <div>tricrypto2</div>
          </div>
        </div>
        <div onClick={(e) => handleSubmit(e)} className={styles.confirmButton}>
          swap
        </div>
      </div>
      <Modal isOpen={!!router.query.loading} style={customStyles}>
        <TransactionLoader />
      </Modal>
    </main>
  );
}

export default Main;
