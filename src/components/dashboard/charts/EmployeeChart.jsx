import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Card from "../../ui/Card";

const data = [
  { department: "HR", employees: 8 },
  { department: "IT", employees: 15 },
  { department: "Sales", employees: 10 },
  { department: "Marketing", employees: 6 },
  { department: "Finance", employees: 5 },
];

function EmployeeChart() {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold text-slate-800">
        Employees by Department
      </h2>

      <div className="flex justify-center">
        <BarChart width={450} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="employees"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </div>
    </Card>
  );
}

export default EmployeeChart;