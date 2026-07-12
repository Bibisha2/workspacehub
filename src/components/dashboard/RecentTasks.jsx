import Card from "../ui/Card";
import { recentTasks } from "../../data/dashboard";

function RecentTasks() {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-semibold">
        Recent Tasks
      </h2>

      <div className="space-y-4">
        {recentTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between border-b pb-3 last:border-none"
          >
            <p className="font-medium">
              {task.title}
            </p>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentTasks;