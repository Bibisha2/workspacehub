import StatsCard from "./StatsCard";

const stats = [
  {
    title: "Employees",
    value: 24,
  },
  {
    title: "Projects",
    value: 8,
  },
  {
    title: "Pending Tasks",
    value: 18,
  },
];

function StatsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
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