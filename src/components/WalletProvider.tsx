"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ethers } from "ethers";

interface WalletContextProps {
  wallet: string | null;
  provider: ethers.BrowserProvider | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextProps>({
  wallet: null,
  provider: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [wallet, setWallet] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const connectWallet = async () => {
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) return alert("Install MetaMask!");

      // Force MetaMask to show account selection modal
      const accounts: string[] = await ethereum.request({
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
      });

      if (accounts.length > 0) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        setWallet(address);
        setProvider(provider);

        // Listen for account changes
        ethereum.on("accountsChanged", (accounts: string[]) => {
          setWallet(accounts.length > 0 ? accounts[0] : null);
        });

        ethereum.on("chainChanged", () => window.location.reload());
      }
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  const disconnectWallet = () => {
    setWallet(null);
    setProvider(null);
  };

  return (
    <WalletContext.Provider
      value={{ wallet, provider, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
