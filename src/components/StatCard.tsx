interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-glass-bg/50 backdrop-blur-sm border border-glass-border hover:border-primary/50 transition-all duration-300">
      <h3 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {value}
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCard;
