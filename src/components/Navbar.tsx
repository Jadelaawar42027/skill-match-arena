import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Plus, LogOut } from "lucide-react";
import { ethers } from "ethers";
import { useWallet } from "@/components/WalletProvider";
import SkillMatchEscrowABI from "./SkillMatchEscrow.json";

const CONTRACT_ADDRESS = "0x1FEB709EEB97A022401a249Ec816342F65515b0F";

const Navbar = () => {
  const { wallet, provider, connectWallet, disconnectWallet } = useWallet();

  const handleCreateGame = async () => {
    if (!wallet || !provider) {
      alert("Connect wallet first!");
      return;
    }

    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        SkillMatchEscrowABI,
        signer
      );

      const stakeWei = ethers.parseEther("0.01");
      const durationMinutes = 10;

      const tx = await contract.createMatch(stakeWei, durationMinutes);
      await tx.wait();

      alert("Game created successfully!");
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
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/games"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Games
          </Link>
          <Link
            to="/partners"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Partners
          </Link>

          <Button
            onClick={handleCreateGame}
            className="bg-gradient-secondary hover:shadow-glow flex items-center"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Game
          </Button>
        </div>

        {/* Wallet Buttons */}
        {wallet ? (
          <div className="flex items-center space-x-2">
            <Button
              className="bg-gradient-primary hover:shadow-medium transition-all duration-300 flex items-center"
              disabled
            >
              <Wallet className="mr-2 h-4 w-4" />
              {wallet.slice(0, 6) + "..." + wallet.slice(-4)}
            </Button>
            <Button
              onClick={disconnectWallet}
              className="bg-red-500 hover:bg-red-600 flex items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Disconnect
            </Button>
          </div>
        ) : (
          <Button
            onClick={connectWallet}
            className="bg-gradient-primary hover:shadow-medium transition-all duration-300 flex items-center"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
