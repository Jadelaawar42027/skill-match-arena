import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ethers } from "ethers";
import { useWallet } from "@/components/WalletProvider";
import SkillMatchEscrowABI from "./SkillMatchEscrow.json";

const CONTRACT_ADDRESS = "0x1FEB709EEB97A022401a249Ec816342F65515b0F";

const ChessGame = () => {
  const { wallet, provider } = useWallet();

  const [matchId, setMatchId] = useState("");
  const [joined, setJoined] = useState(false);
  const [gameLink, setGameLink] = useState("");
  const [winner, setWinner] = useState("");

  const handleJoinMatch = async () => {
    if (!wallet || !provider) {
      alert("Connect wallet first!");
      return;
    }

    if (!matchId) {
      alert("Enter match ID!");
      return;
    }

    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        SkillMatchEscrowABI.abi,
        signer
      );

      const matchInfo = await contract.matches(BigInt(matchId));

      const tx = await contract.joinMatch(BigInt(matchId), {
        value: matchInfo.stake,
      });

      await tx.wait();
      setJoined(true);
      alert("Joined match successfully!");
    } catch (err: any) {
      console.error(err);
      alert("Failed to join match: " + err.message);
    }
  };

  const handleSubmitResult = async () => {
    if (!wallet || !provider) {
      alert("Connect wallet first!");
      return;
    }

    if (!gameLink) {
      alert("Paste your game link!");
      return;
    }

    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        SkillMatchEscrowABI.abi,
        signer
      );

      const tx = await contract.finalizeMatch(
        BigInt(matchId),
        wallet
      );

      await tx.wait();
      setWinner("You");
      alert("Winner finalized and funds distributed!");
    } catch (err: any) {
      console.error(err);
      alert("Failed to finalize match: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold text-center text-foreground">
            Play Chess for ETH
          </h1>

          {!joined && (
            <div className="p-8 rounded-2xl bg-glass-bg/80 border border-glass-border space-y-4">
              <Input
                placeholder="Enter Match ID"
                value={matchId}
                onChange={(e) => setMatchId(e.target.value)}
              />
              <Button
                onClick={handleJoinMatch}
                className="bg-gradient-primary w-full hover:shadow-glow"
              >
                Join Game
              </Button>
            </div>
          )}

          {joined && !winner && (
            <div className="p-8 rounded-2xl bg-glass-bg/80 border border-glass-border space-y-4">
              <Input
                placeholder="Paste game link"
                value={gameLink}
                onChange={(e) => setGameLink(e.target.value)}
              />
              <Button
                onClick={handleSubmitResult}
                className="bg-gradient-primary w-full hover:shadow-glow"
              >
                Submit Result
              </Button>
            </div>
          )}

          {winner && (
            <div className="p-8 rounded-2xl bg-green-600/20 border border-green-600 text-green-900 text-center font-bold text-xl">
              Winner is: {winner} 🏆
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChessGame;
