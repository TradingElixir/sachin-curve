import { createContext, FC, useContext, useState, useEffect, ChangeEvent } from 'react';
import { contractABI, contractAddress } from '../lib/constants';



import { client } from '../lib/sanityClient';
import { useRouter } from 'next/router';
import { Web3Provider } from '@ethersproject/providers';

export interface TransactionContext {
  currentAccount?: string;
  connectWallet: () => Promise<void>;
  sendTransaction: (metamask: unknown, connectedAccount?: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  formData: {
    addressTo: string;
    amount: string;
  };
  isLoading?: boolean;
}


export interface UserDoc {
  _type: 'users';
  _id: string;
  userName: string;
  address: string;
}

export interface TransactionDoc {
  _type: 'transactions';
  _id: string;
  fromAddress: string;
  toAddress: string;
  timestamp: string;
  txHash: string;
  amount: number;
}

const TransactionContextImp = createContext<TransactionContext>({
  currentAccount: undefined,
  connectWallet: () => Promise.resolve(),
  sendTransaction: () => {},
  handleChange: () => {},
  formData: {
    addressTo: '',
    amount: '',
  },
  isLoading: false,
});

export function useTransaction() {
  return useContext(TransactionContextImp);
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

let eth: any;

if (typeof window !== 'undefined') {
  eth = window.ethereum;
}

let transactionContract: any;


export const TransactionProvider: FC = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
  });
  const router = useRouter();

  async function connectWallet(metamask = eth) {
    try {
      if (!metamask) return alert('Please install MetaMask');

      const accounts = await metamask.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error: any) {
      if (error?.code === 4001) return;
      throw new Error('No ethereum object');
    }
  }

  async function checkIfWalletIsConnected(metamask = eth) {
    try {
      if (!metamask) return alert('Please install MetaMask');

      const accounts = await metamask.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log('wallet is already connected');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);


  useEffect(() => {
    if (!currentAccount) return
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: currentAccount,
        userName: 'Unnamed',
        address: currentAccount,
      }

      await client.createIfNotExists(userDoc)
    })()
  }, [currentAccount])


  async function sendTransaction(metamask = eth, connectedAccount = currentAccount) {
    if (!metamask) return alert('Please install MetaMask');
  
    try {
      const { addressTo, amount } = formData;

   
  
      setIsLoading(false);
      setFormData({ addressTo: '', amount: '' });
    } catch (error) {
      console.log(error);
    }
  }
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, name: string): void {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
  }

  async function saveTransaction(
    txHash: string,
    amount: string,
    fromAddress: string = currentAccount!,
    toAddress: string,
  ) {
    const txDoc = {
      _type: 'transactions',
      _id: txHash,
      fromAddress: fromAddress,
      toAddress: toAddress,
      timestamp: new Date(Date.now()).toISOString(),
      txHash: txHash,
      amount: parseFloat(amount),
    }
  
    await client.createIfNotExists(txDoc);
  
    await client
      .patch(currentAccount!)
      .setIfMissing({ transactions: [] })
      .insert('after', 'transactions[-1]', [
        {
          _key: txHash,
          _ref: txHash,
          _type: 'reference',
        },
      ])
      .commit();
  
    return;
  }
  

  useEffect(() => {
    if (isLoading) {
      router.push(`/?loading=${currentAccount}`)
    } else {
      router.push(`/`)
    }
  }, [isLoading])

  
  return (
    <TransactionContextImp.Provider
      value={{
        currentAccount,
        connectWallet,
        sendTransaction,
        handleChange,
        formData,
        isLoading,
      }}
    >
      {children}
    </TransactionContextImp.Provider>
  )
}
