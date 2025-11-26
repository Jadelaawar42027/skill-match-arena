import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface GameCardProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

const GameCard = ({ icon: Icon, title, isActive, onClick }: GameCardProps) => {
  return (
    <div 
      className={`
        relative p-8 rounded-2xl border transition-all duration-300 
        ${isActive 
          ? 'bg-glass-bg/80 border-primary hover:shadow-glow cursor-pointer' 
          : 'bg-glass-bg/30 border-glass-border opacity-60'
        }
      `}
      onClick={isActive ? onClick : undefined}
    >
      {!isActive && (
        <Badge className="absolute top-4 right-4 bg-muted text-muted-foreground">
          Coming Soon
        </Badge>
      )}
      
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-6 rounded-2xl ${isActive ? 'bg-primary/10' : 'bg-muted/10'}`}>
          <Icon className={`h-12 w-12 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        
        {isActive && (
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Play Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
