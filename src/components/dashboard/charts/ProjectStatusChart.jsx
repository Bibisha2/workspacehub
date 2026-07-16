import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import Card from "../../ui/Card";

const data = [
  { name: "Active", value: 8 },
  { name: "Completed", value: 5 },
  { name: "Pending", value: 3 },
];

const COLORS = ["#2563eb", "#22c55e", "#f59e0b"];

function ProjectStatusChart() {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold text-slate-800">
        Project Status
      </h2>

      <div className="flex justify-center">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>
    </Card>
  );
}

export default ProjectStatusChart;