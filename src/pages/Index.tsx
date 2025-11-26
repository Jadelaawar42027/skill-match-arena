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
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skill Match
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Connect Wallet
            </Button>
            <Link to="/games">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get Started
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-muted-foreground">Decentralized Gaming</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-glow-pulse" />
              <span className="text-muted-foreground">Powered by Ethereum Smart Contracts</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-muted-foreground">Compete. Win. Earn.</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A decentralized competitive gaming platform where skill meets blockchain. 
            Play against real opponents, stake ETH, and win automatically through smart contracts.
          </p>
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Why Skill Match?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Shield}
            title="Smart Contract Escrow"
            description="Stakes held in blockchain escrow. Automatic payouts when match completes."
          />
          <FeatureCard
            icon={Zap}
            title="Instant Payouts"
            description="ETH transferred to the winner instantly after verification."
          />
          <FeatureCard
            icon={Users}
            title="Skill-Based Matching"
            description="Fair algorithm pairs players of similar skill."
          />
          <FeatureCard
            icon={Gamepad2}
            title="Multiple Games"
            description="Chess, 8 Ball Pool, Poker, and more."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { step: "1", title: "Connect Your Wallet", desc: "Link your Ethereum wallet" },
            { step: "2", title: "Choose Game & Set Stake", desc: "Select game and stake amount" },
            { step: "3", title: "Play & Compete", desc: "Face your matched opponent" },
            { step: "4", title: "Automatic Payout", desc: "~85% goes to the winner" },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Gaming Platforms Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-glass-bg/80 backdrop-blur-sm border border-glass-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            For Gaming Platforms
          </h2>
          
          <ul className="space-y-3 mb-8 text-muted-foreground">
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>White-label Integration</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Revenue Sharing Model</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Full API Access</span>
            </li>
          </ul>
          
          <Link to="/partners">
            <Button className="bg-gradient-secondary hover:shadow-cyan transition-all duration-300">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
