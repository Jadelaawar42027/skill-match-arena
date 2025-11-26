import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Navbar = () => {
  const handleConnectWallet = () => {
    // Placeholder for wallet connection logic
    console.log("Connect wallet clicked");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-glass-border bg-glass-bg/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
          <span className="text-xl font-bold text-foreground">Skill Match</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
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
        </div>

        <Button 
          onClick={handleConnectWallet}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
