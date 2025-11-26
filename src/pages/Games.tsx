import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { Brain, Circle, Home as MonopolyIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Choose Your Game
        </h1>
        
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Select a game to start competing. More games coming soon!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GameCard
            icon={Brain}
            title="Chess"
            isActive={true}
            onClick={() => navigate("/games/chess")}
          />
          
          <GameCard
            icon={Circle}
            title="8 Ball Pool"
            isActive={false}
          />
          
          <GameCard
            icon={MonopolyIcon}
            title="Monopoly"
            isActive={false}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Games;
