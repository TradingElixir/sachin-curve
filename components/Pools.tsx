import React,{useState} from "react";
import bscLogo from "../public/bsc.png";


interface PoolData {
  name: string;
  address: string;
  coins: string[];
  type: string;
  apy: string;
  crvApy?: string;
  tvlUSD: string;
  poolShare: string;
}

const poolData: PoolData[] = [
  {
    name: "tricrypto2",
    address: "0xd5...ae46",
    coins: ["ETH", "USDT", "WBTC", "CRYPTO V2"],
    type: "0.73%",
    apy: "6.78% → 16.95% CRV",
    tvlUSD: "$36.3m",
    poolShare: "$181.8m",
  },
  {
    name: "3pool",
    address: "0xbe...f1c7",
    coins: ["DAI", "USDC", "USDT", "USD"],
    type: "0.093%",
    apy: "0.51% → 1.28% CRV",
    tvlUSD: "$26.1m",
    poolShare: "$542.4m",
  },
  {
    name: "fraxusdc",
    address: "0xdc...41a2",
    coins: ["FRAX", "USDC", "USD"],
    type: "0.036%",
    apy: "0.93% → 2.33% CRV",
    tvlUSD: "$8.8m",
    poolShare: "$520.1m",
  },
  {
    name: "ETHstETH",
    address: "0xdc...7022",
    coins: ["ETH", "stETH", "ETH"],
    type: "2.27%",
    apy: "0.00059% → 0.0014% CRV",
    tvlUSD: "$4.4m",
    poolShare: "$1.7b",
  },
  {
    name: "lusd",
    address: "0xed...f0ca",
    coins: ["DAI", "LUSD", "USDC", "USDT", "USD"],
    type: "0.71%",
    apy: "0.60% → 1.52% CRV",
    tvlUSD: "$3.2m",
    poolShare: "$35.7m",
  },
  {
    name: "STG/USDC",
    address: "0x32...5860",
    coins: ["STG", "USDC", "Factory", "CRYPTO V2"],
    type: "1.97%",
    apy: "21.36% → 53.40% CRV",
    tvlUSD: "$1.7m",
    poolShare: "$25.4m",
  },
  {
    name: "busdv2",
    address: "0x48...085a",
    coins: ["BUSD", "DAI", "USDC", "USDT", "USD"],
    type: "0.020%",
    apy: "2.44% → 6.11% CRV",
    tvlUSD: "$1.7m",
    poolShare: "$9.6m",
  },

  {
    name: "cvxETH",
  address: "0xb5...e0d4",
  coins: ["CVX", "ETH"],
  type: "1.057%",
  apy: "7.26% → 18.16% CRV",
  tvlUSD: "$1.1m",
  poolShare: "$51.0m",
  },
  
  {
  name: "susd",
  address: "0xa5...fbfd",
  coins: ["DAI", "USDC", "USDT", "sUSD", "USD"],
  type: "0.065%",
  apy: "1.36% → 3.41% CRV",
  tvlUSD: "$1.3m",
  poolShare: "$83.7m",
  },

  {
  name: "ETHsETH",
  address: "0xc5...4567",
  coins: ["ETH", "sETH"],
  type: "0.14%",
  apy: "3.17% → 7.94% CRV",
  tvlUSD: "$1.3m",
  poolShare: "$41.2m",
  },
  
  {
    name: "ETHfrxETH",
  address: "0xa1...e577",
  coins: ["ETH", "frxETH"],
  type: "0.22%",
  apy: "2.13% → 5.34% CRV",
  tvlUSD: "$840.3k",
  poolShare: "$119.9m",
  }

];



const Pools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredPoolData = poolData.filter((pool) =>
    pool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="bg-white  mx-auto text-black mt-4">
      <div className="border py-4">
        <div className="mb-4 flex justify-start">
        

          <div className=" relative w-full pl-1 pr-1 text-black">
            <input
              className="border px-4 py-2  text-black h-17  w-full pl-8"
              type="text"
              placeholder="Search by pool name, pool address or token name , token address"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute top-0 left-0 mt-3 ml-3">
            <svg
             className="text-black w-5 h-5"
               xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                 >
                   <path
                    fill="none"
                     stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                     strokeWidth="2"
                   d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 0l5 5"
                      />
                    </svg>
            </div>
          </div>
          
        </div>
        <div className="flex justify-start mb-4">
  <button className="text-l shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center px-4 ml-5 " style={{ boxShadow: "5px 5px grey" }}>
    All
  </button>
  <button className="text-l shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center px-4 ml-5 " style={{ boxShadow: "5px 5px grey" }}>
    USD
  </button>
  <button className="text-l shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center px-4 ml-5 " style={{ boxShadow: "5px 5px grey" }}>
    BTC
  </button>
  <button className="text-l shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center px-4 ml-5 " style={{ boxShadow: "5px 5px grey" }}>
  ETH
  </button>
  <button className="text-l shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center px-4 ml-5 " style={{ boxShadow: "5px 5px grey" }}>
    CRYPTO
  </button>
  <button className="text-l shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center px-4 ml-5 " style={{ boxShadow: "5px 5px grey" }}>
    OTHERS
  </button>
</div>

<table className="w-full">
  <thead>
    <tr>
      <th className="px-4 py-2"></th>
      <th className="px-4 py-2 pl-80">Base vAPY</th>
      <th className="px-4 py-2 pl-10">APY</th>
      <th className="px-4 py-2 pl-10">Volume</th>
      <th className="px-4 py-2 pl-10">TVL</th>
    </tr>
  </thead>
  <tbody>
    {filteredPoolData.map((pool, index) => (
      <tr
        key={pool.address}
        className={`${
          index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-gray-100"
        } hover:bg-gray-100 border border-black`}
      >
        <td className="px-4 py-2">
          <div>
            <span className="font-bold">{pool.name}</span>
          </div>
          <div>{pool.address}</div>
          <div>{pool.coins.join(", ")}</div>
        </td>
        <td className="px-4 py-2 pl-80">{pool.type}</td>
        <td className="px-4 py-2 pl-10">{pool.apy}</td>
        <td className="px-4 py-2 pl-10">{pool.tvlUSD}</td>
        <td className="px-4 py-2 pl-10">{pool.poolShare}</td>
      </tr>
    ))}
  </tbody>
</table>

        
      </div>
    </div>
  );
  
  
  
};

export default Pools;