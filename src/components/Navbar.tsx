import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Plus } from "lucide-react";
import { ethers } from "ethers";
import SkillMatchEscrowABI from "./SkillMatchEscrow.json"; // adjust path if needed

const CONTRACT_ADDRESS = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";

const Navbar = () => {
  const [account, setAccount] = useState<string | null>(null);

  // Auto-detect wallet accounts
  useEffect(() => {
    if ((window as any).ethereum) {
      (window as any).ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) setAccount(accounts[0]);
      });

      // Listen for account changes
      (window as any).ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts.length > 0 ? accounts[0] : null);
      });
    }
  }, []);

  const handleConnectWallet = async () => {
    if (!(window as any).ethereum) return alert("Install MetaMask!");
    try {
      const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet");
    }
  };

  const handleCreateGame = async () => {
    if (!account) return alert("Connect wallet first!");

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, SkillMatchEscrowABI.abi, signer);

      const stakeWei = ethers.parseEther("0.01"); // default stake
      const durationMinutes = 10; // default duration

      const tx = await contract.createMatch(stakeWei, durationMinutes);
      const receipt = await tx.wait();
      const matchIdEvent = receipt.events?.find((e: any) => e.event === "MatchCreated");
      const matchId = matchIdEvent?.args?.matchId.toString();

      alert(`Game created! Match ID: ${matchId}`);
    } catch (err: any) {
      console.error(err);
      alert("Failed to create game: " + err.message);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-medium" />
          <span className="text-xl font-bold text-foreground">Skill Match</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/games" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Games
          </Link>
          <Link to="/partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Partners
          </Link>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Docs
          </a>

          {/* Show Create Game for everyone; contract enforces onlyOwner */}
          <Button
            onClick={handleCreateGame}
            className="bg-gradient-secondary hover:shadow-glow flex items-center"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Game
          </Button>
        </div>

        <Button 
          onClick={handleConnectWallet}
          className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {account ? account.slice(0, 6) + "..." + account.slice(-4) : "Connect Wallet"}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
