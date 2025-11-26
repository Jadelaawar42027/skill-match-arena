import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import FeatureCard from "@/components/FeatureCard";
import { Shield, Zap, Users, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-foreground">
            Skill Match
          </h1>
          
          <Button className="mb-8 bg-gradient-primary hover:shadow-medium transition-all duration-300">
            Connect Wallet
          </Button>
          
          <div className="space-y-2 mb-6">
            <p className="text-lg font-semibold text-primary">Decentralized Gaming</p>
            <p className="text-muted-foreground">Powered by Ethereum Smart Contracts</p>
            <p className="text-xl font-bold text-foreground">Compete. Win. Earn.</p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A decentralized competitive gaming platform where skill meets blockchain. 
            Play against real opponents, stake ETH, and win automatically through smart contracts.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/games">
              <Button size="lg" className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-purple-light">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard value="500+" label="Active Players" />
          <StatCard value="25+ ETH" label="Total Winnings" />
          <StatCard value="1,250+" label="Matches Played" />
        </div>
      </section>

      {/* Why Skill Match Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Skill Match?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent, trustless, and fair competitive gaming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Shield}
            title="Smart Contract Escrow"
            description="Stakes are held in blockchain escrow. Automatic payouts when match completes."
          />
          <FeatureCard
            icon={Zap}
            title="Instant Payouts"
            description="Win instantly. ETH transferred to your wallet immediately after match verification."
          />
          <FeatureCard
            icon={Users}
            title="Skill-Based Matching"
            description="Fair matchmaking algorithm pairs you with players of similar skill level."
          />
          <FeatureCard
            icon={Gamepad2}
            title="Multiple Games"
            description="Chess, 8 Ball Pool, Poker and more. Expand your skills across different games."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent, and secure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300">
            <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-medium">
              1
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Connect Your Wallet</h3>
            <p className="text-sm text-muted-foreground">
              Connect your Ethereum wallet (MetaMask, WalletConnect, etc.) to get started.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300">
            <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-medium">
              2
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Choose Game & Set Stake</h3>
            <p className="text-sm text-muted-foreground">
              Select your game and entry stake. Both players must agree on the amount before match starts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300">
            <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-medium">
              3
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Play & Compete</h3>
            <p className="text-sm text-muted-foreground">
              Get matched with an opponent of similar skill. Compete and show your skills!
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300">
            <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-medium">
              4
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Automatic Payout</h3>
            <p className="text-sm text-muted-foreground">
              Smart contract verifies results and transfers winnings to your wallet instantly. Winner receives ~85% of the total pool.
            </p>
          </div>
        </div>
      </section>

      {/* For Gaming Platforms Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-purple-light border border-border shadow-medium">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            For Gaming Platforms
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Integrate our decentralized backend to enable skill-based competitions, micro-tournaments, and automated prize pools on your platform.
          </p>
          
          <ul className="space-y-3 mb-8 text-muted-foreground">
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>White-label Integration</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Revenue Sharing Model</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Full API Access</span>
            </li>
          </ul>
          
          <Link to="/partners">
            <Button className="bg-gradient-primary hover:shadow-medium transition-all duration-300">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-large">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Start Winning?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of players competing in skill-based games on the blockchain
          </p>
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 shadow-medium"
          >
            Connect Wallet & Play
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
