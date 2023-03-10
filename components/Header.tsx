import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { useTransaction } from "../contexts/transaction.context";
import Main from "./Main";
import Pools from "./Pools";



const styles = {
  wrapper: `p-1 h-32 flex flex-col w-full`,
  socialMediaContainer: `flex items-left justify-start h-16 w-full items-center`,
  socialMediaIcon: `mx-2 text-2xl text-black  hover:text-black cursor-pointer ml-1`,
  headerLogo: `flex w-1/20 items-left justify-start pl-4 mt-1 `,
  nav: `flex-1 flex justify-start mt-1 items-center`,
  navItemsContainer: `flex bg-white text-black h-10`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-bold text-[0.95rem] cursor-pointer `,
  activeNavItem: `bg-[#20242A] h-10 text-white`,
  buttonsContainer: `flex w-full mt-1 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] mx-2 text-[0.9rem] font-semibold cursor-pointer mr-10`,
  buttonPadding: `p-1 `,
  LanguageSelectorArrow: `text-black mt-2 ml-1`,
  currencySelectorArrow: `text-white ml-4`,
  buttonTextContainer: `h-8 flex items-center `,
  buttonIconContainer: `flex items-center justify-center w-8 h-8 text-black `,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full  flex items-center justify-center text-[#4F90EA] h-8.5 w-40 `,
};

function Header() {
  const router = useRouter();
  const [selectedNav, setSelectedNav] = useState<string>("swap");
  const { currentAccount, connectWallet } = useTransaction();
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    if (!currentAccount) return;

    setUserName(`${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`);
  }, [currentAccount]);
  const renderComponent = () => {
    if (selectedNav === "swap") {
      return <Main />;
    } else if (selectedNav === "pool") {
      return <Pools />;
    }
  };
  return (
    <>
      <header className={`${styles.wrapper} bg-white`}>
        <div
          className={`${styles.socialMediaContainer} border-b-2 border-black`}
        >
          <div className="text-black font-bold ml-8">
            <text>Total Deposits: $4,698,969,899</text>
          </div>
          <div className="text-black font-bold ml-4">
            <text>Daily Volume: $51,646,390</text>
          </div>
          <div className="text-white font-bold ml-80">
            <text>Visit old UI</text>
          </div>
          <div className="text-black font-bold ml-40">
            <text>Governance</text>
          </div>
          <div className="text-black font-bold ml-20 ">
            <text>ENGLISH</text>
          </div>
          <div>
            <AiOutlineDown className={styles.LanguageSelectorArrow} />
          </div>
          <div className="ml-20">
            <div className={`${styles.socialMediaIcon}`}>
              <AiOutlineTwitter />
            </div>
          </div>
          <div className={`${styles.socialMediaIcon}`}>
            <FaTelegramPlane />
          </div>
          <div className={`${styles.socialMediaIcon}`}>
            <AiFillGithub />
          </div>
          <div className={`${styles.socialMediaIcon} mr-10`}>
            <FaDiscord />
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-1.5">
          <div className={`${styles.headerLogo} flex items-center ml-4 `}>
            <Image src="/icon.png" alt="icon" height={60} width={60} />
            <div className="text-black font-bold ml-1">Curve</div>
          </div>
          <nav
            className={`${styles.nav} flex items-center flex-1 ml-8`}
            style={{ justifyContent: "flex-start" }}
          >
            <div className={`${styles.navItemsContainer} flex items-center`}>
              <button
                onClick={() => router.push("/swap")}
                className={`${styles.navItem} ${
                  router.pathname.includes("swap") ? styles.activeNavItem : ""
                }`}
              >
                Swap
              </button>
              <button
                onClick={() => router.push("/pool")}
                className={`${styles.navItem} ${
                  router.pathname.includes("pool") ? styles.activeNavItem : ""
                }`}
              >
                Pool
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className={`${styles.navItem} ${
                  router.pathname.includes("dashboard")
                    ? styles.activeNavItem
                    : ""
                }`}
              >
                Dashboard
              </button>
            </div>
          </nav>
          <div className={`${styles.buttonsContainer} flex items-center`}>
            <div
              className={`${styles.button} ${styles.buttonPadding} flex items-center`}
            >
              <div className={`${styles.buttonIconContainer} mr-2 ml-1`}>
                <Image src="/eth.png" alt="eth logo" height={20} width={20} />
              </div>
              <p>Eth</p>
              <AiOutlineDown className={`${styles.currencySelectorArrow} mr-2`} />
            </div>
            {currentAccount ? (
              <div className={`${styles.button} ${styles.buttonPadding}`}>
                <div className={`${styles.buttonTextContainer} font-bold`}>
                  {userName}
                </div>
              </div>
            ) : (
              <div
                onClick={() => connectWallet()}
                className={`${styles.button} ${styles.buttonPadding}`}
              >
                <div
                  className={`${styles.buttonAccent} ${styles.buttonPadding} font-bold`}
                >
                  Connect Wallet
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
