import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ethers } from "ethers";
import SkillMatchEscrowABI from "./SkillMatchEscrow.json"; // your ABI JSON

const CONTRACT_ADDRESS = "0x1FEB709EEB97A022401a249Ec816342F65515b0F";

const ChessGame = ({ account }: { account: string | null }) => {
  const [matchId, setMatchId] = useState("");
  const [joined, setJoined] = useState(false);
  const [gameLink, setGameLink] = useState("");
  const [winner, setWinner] = useState("");

  const handleJoinMatch = async () => {
    if (!account) return alert("Connect wallet first!");
    if (!matchId) return alert("Enter match ID!");

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, SkillMatchEscrowABI.abi, signer);

      // Fetch match stake for sending
      const matchInfo = await contract.matches(matchId);
      const tx = await contract.joinMatch(matchId, { value: matchInfo.stake });
      await tx.wait();

      alert("Joined match successfully!");
      setJoined(true);
    } catch (err: any) {
      console.error(err);
      alert("Failed to join match: " + err.message);
    }
  };

  const handleSubmitResult = async () => {
    if (!gameLink) return alert("Paste your game link!");

    // For demo, randomly pick winner or hardcode "White"
    const winnerAddress = account; // just use the current connected wallet for demo
    setWinner("White"); // show in UI

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, SkillMatchEscrowABI.abi, signer);

      const tx = await contract.finalizeMatch(matchId, winnerAddress);
      await tx.wait();

      alert("Winner finalized and funds distributed!");
    } catch (err: any) {
      console.error(err);
      alert("Failed to finalize match: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar account={account} />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold text-center text-foreground mb-6">
            Play Chess for ETH
          </h1>
          <h1 className="text-5xl font-bold text-center text-foreground mb-6">
            (0.01 ETH = $30)
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
                placeholder="Paste game link (any URL)"
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
