interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300">
      <h3 className="text-4xl font-bold text-primary mb-2">
        {value}
      </h3>
      <p className="text-foreground font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
