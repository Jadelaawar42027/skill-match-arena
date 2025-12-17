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
  const [winnerAddress, setWinnerAddress] = useState(""); 
  const [winner, setWinner] = useState("");

  // Join a match
  const handleJoinMatch = async () => {
    if (!wallet || !provider) return alert("Connect wallet first!");
    if (!matchId) return alert("Enter match ID!");

    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, SkillMatchEscrowABI, signer);

      const matchInfo = await contract.matches(BigInt(matchId));

      const tx = await contract.joinMatch(BigInt(matchId), { value: matchInfo.stake });
      await tx.wait();

      setJoined(true);
      alert("Joined match successfully!");
    } catch (err: any) {
      console.error(err);
      alert("Failed to join match: " + err.message);
    }
  };

  // Finalize match with winner
  const handleSubmitResult = async () => {
    if (!wallet || !provider) return alert("Connect wallet first!");
    if (!matchId) return alert("Enter match ID!");
    if (!gameLink) return alert("Paste your game link!");
    if (!winnerAddress) return alert("Enter winner wallet address!");

    try {
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, SkillMatchEscrowABI, signer);

      // Call finalizeMatch on the contract
      const tx = await contract.finalizeMatch(BigInt(matchId), winnerAddress);
      await tx.wait();

      setWinner(winnerAddress);
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

          {/* Join Match */}
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

          {/* Submit Result / Finalize Match */}
          {joined && !winner && (
            <div className="p-8 rounded-2xl bg-glass-bg/80 border border-glass-border space-y-4">
              <Input
                placeholder="Paste game link"
                value={gameLink}
                onChange={(e) => setGameLink(e.target.value)}
              />
              <Input
                placeholder="Winner wallet address"
                value={winnerAddress}
                onChange={(e) => setWinnerAddress(e.target.value)}
              />
              <Button
                onClick={handleSubmitResult}
                className="bg-gradient-primary w-full hover:shadow-glow"
              >
                Finalize Match
              </Button>
            </div>
          )}

          {/* Display Winner */}
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
