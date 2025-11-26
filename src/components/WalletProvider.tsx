"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

interface WalletContextProps {
  wallet: string | null;
  provider: ethers.BrowserProvider | null;
  connectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextProps>({
  wallet: null,
  provider: null,
  connectWallet: async () => {},
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallet, setWallet] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
      });

      const instance = await web3Modal.connect();

      // ⚡ ethers v6: use BrowserProvider
      const provider = new ethers.BrowserProvider(instance as any); // type-cast instance
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWallet(address);
      setProvider(provider);
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  useEffect(() => {
    const web3Modal = new Web3Modal({ cacheProvider: true });
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, provider, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
