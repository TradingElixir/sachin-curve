import React, { useState } from 'react';

const Dashboard = () => {
  const [address, setAddress] = useState('');

  

  return (
    <div className="bg-gray-600 w-auto mx-auto text-white mt-4  gap-4" >
    <div className="bg-gray-600 w-auto mx-auto text-white mt-4 grid grid-cols-3 gap-4">
  <div className="border-r-2 pr-4">
    <p className="font-bold ml-20 mt-4 text-xl">Total Balances</p>
    <p className="text-2xl font-bold ml-20 mt-4">0</p>
  </div>
  <div className="border-r-2 border-l-1 px-4">
    <p className="font-bold ">veCRV <u>Adjust veCrv</u></p>
    <p>Balance in voting escrow: 0 veCRV</p>
    <p><b>0.00% </b>share of total</p>
    <p className=" mt-4" >CRV locked: <b>0.00</b></p>
    <p>Locked until: -</p>
    <p className=" mt-4">veCRV rewards: <b>0.00 </b>3CRV</p>
    <button className="text-2xl  mt-2 shadow-solid-primary border-2 border-black py-1 px-1 transition-colors ease-out duration-500 text-white bg-gradient-to-r from-gray-900 to-black hover:from-white hover:to-gray-100 hover:text-black hover:border-black font-raleway-sans-serif grid place-content-center items-center w-80 h-8" style={{ boxShadow: "5px 5px gray" }} type="submit">Claim LP rewards</button>
  </div>
  <div className="pl-4 ml-40">
    <form className="flex items-center">
      <label className="mr-4 ">
        <p className= "mr-4  mt-4">view address</p>
        <input className='mr-20 w-70 h-10' style={{ boxShadow: "5px 5px black" }} type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      
    </form>
  </div>
    
</div>   

<div className="bg-gray-200  mx-auto text-black mt-4 grid grid-cols-2 gap-4">
<div className="my-4">
  <p className="font-bold ml-40 mt-4">Total Daily Profits</p>
  <div className="my-4  flex justify-center">
    <table className="divide-y divide-gray-400 mt-1">
      <tbody className="divide-y divide-gray-400 ">
        <tr>
          <td className="py-2 px-4 w-20">Base</td>
          <td className="py-2 px-4 w-80 text-right pr-2">0</td>
        </tr>
        <tr>
          <td className="py-2 px-4">CRV</td>
          <td className="py-2 px-4 text-right pr-2">0</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="py-2 px-4">Total</td>
          <td className="py-2 px-4 text-right pr-2">$0</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

<div className="my-4">
  <p className="font-bold ml-4  mt-4">Claimable Tokens</p>
  <div className="my-4 flex justify-start">
    <table className="divide-y divide-gray-400 ">
      <tbody className="divide-y divide-gray-400 ">
        <tr>
          <td className="py-2 px-4 w-20">CRV</td>
          <td className="py-2 px-4 w-80 text-right pr-2">0</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="py-2 px-4">Total</td>
          <td className="py-2 px-4 text-right pr-2">$0</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

</div>
</div>
    
  );
  
  
  
}

export default Dashboard;
