import StatsCard from "./StatsCard";
import { dashboardStats } from "../../data/dashboard";

function StatsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {dashboardStats.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
        />
      ))}
    </div>
  );
}

export default StatsSection;