import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Handshake, Code, DollarSign, TrendingUp } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Partners = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Partner With Skill Match
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Integrate our smart-contract backend into your gaming platform and unlock new revenue streams while enhancing player engagement.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <FeatureCard
              icon={Code}
              title="White-Label API"
              description="Seamlessly integrate our battle system into your platform with our comprehensive API."
            />
            <FeatureCard
              icon={DollarSign}
              title="Revenue Sharing"
              description="Earn a percentage of every match fee. Grow your revenue as your players compete."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Increase Engagement"
              description="Keep players coming back with competitive stakes and automated tournaments."
            />
            <FeatureCard
              icon={Handshake}
              title="Full Support"
              description="Dedicated integration support and documentation to get you up and running quickly."
            />
          </div>

          {/* Integration Explanation */}
          <div className="mb-16 p-8 rounded-2xl bg-glass-bg/80 backdrop-blur-sm border border-glass-border">
            <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our platform provides a complete smart-contract infrastructure that handles:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure escrow of player stakes on the Ethereum blockchain</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Automated matchmaking based on skill ratings (ELO)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Result verification and instant payouts to winners</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tournament management and leaderboards</span>
                </li>
              </ul>
              <p className="mt-4">
                Your platform retains full control of the gaming experience while we handle the blockchain complexity.
              </p>
            </div>
          </div>

          {/* Partnership Form */}
          <div className="p-8 rounded-2xl bg-glass-bg/80 backdrop-blur-sm border border-glass-border">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Apply for Partnership</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required className="bg-muted/50 border-glass-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" required className="bg-muted/50 border-glass-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email *</Label>
                  <Input id="email" type="email" required className="bg-muted/50 border-glass-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" className="bg-muted/50 border-glass-border" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description of Platform *</Label>
                <Textarea 
                  id="description" 
                  required 
                  className="bg-muted/50 border-glass-border min-h-32"
                  placeholder="Tell us about your gaming platform, user base, and why you're interested in partnering..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
