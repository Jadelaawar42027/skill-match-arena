import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Shield, Users, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const ChessGame = () => {
  const [stake, setStake] = useState("10");
  const userElo = 1450; // Placeholder ELO

  const handleFindMatch = () => {
    console.log("Finding match with stake:", stake);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10">
              <Brain className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Play Chess for ETH
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Compete in skill-based chess matches with real ETH stakes. Winner takes ~85% of the pot.
          </p>

          {/* Main Game Setup Card */}
          <div className="p-8 rounded-2xl bg-glass-bg/80 backdrop-blur-sm border border-glass-border mb-8">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Your ELO Rating
                </label>
                <div className="text-3xl font-bold text-foreground">{userElo}</div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Select Stake Amount
                </label>
                <Select value={stake} onValueChange={setStake}>
                  <SelectTrigger className="w-full bg-muted/50 border-glass-border h-12 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">0.01 ETH (~$10)</SelectItem>
                    <SelectItem value="100">0.1 ETH (~$100)</SelectItem>
                    <SelectItem value="1000">1 ETH (~$1,000)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleFindMatch}
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg h-14"
              >
                Find Match
              </Button>
            </div>
          </div>

          {/* How It Works */}
          <div className="p-8 rounded-2xl bg-glass-bg/80 backdrop-blur-sm border border-glass-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Shield className="mr-2 h-6 w-6 text-primary" />
              How It Works
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">1. Connect Chess.com Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Link your Chess.com profile to verify your skill level and match history.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">2. Smart Match-Making</h3>
                  <p className="text-sm text-muted-foreground">
                    Our algorithm pairs you with an opponent of similar ELO rating for fair competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">3. Play on Chess.com</h3>
                  <p className="text-sm text-muted-foreground">
                    Play your match on Chess.com's platform with your preferred time controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 rounded-lg bg-secondary/10">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">4. Return to Verify Result</h3>
                  <p className="text-sm text-muted-foreground">
                    Come back to verify the match result. Smart contract automatically pays out ~85% to the winner.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted/20 border border-muted">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Both players' stakes are held in a secure smart contract escrow. The platform takes a 15% fee to cover operational costs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChessGame;
