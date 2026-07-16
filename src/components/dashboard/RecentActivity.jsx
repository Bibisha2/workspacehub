import Card from "../ui/Card";
import {
  FaUserPlus,
  FaFolderOpen,
  FaTasks,
  FaTrash,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    icon: <FaUserPlus className="text-green-600" />,
    title: "Employee Added",
    description: "John Doe joined the IT department.",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: <FaFolderOpen className="text-blue-600" />,
    title: "Project Created",
    description: "WorkspaceHub UI started.",
    time: "15 minutes ago",
  },
  {
    id: 3,
    icon: <FaTasks className="text-yellow-500" />,
    title: "Task Assigned",
    description: "Landing Page assigned to Sarah.",
    time: "1 hour ago",
  },
  {
    id: 4,
    icon: <FaTrash className="text-red-500" />,
    title: "Employee Deleted",
    description: "Old employee account removed.",
    time: "Yesterday",
  },
];

function RecentActivity() {
  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 rounded-lg border p-4 hover:bg-slate-50"
          >
            <div className="rounded-full bg-slate-100 p-3">
              {activity.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-sm text-slate-500">
                {activity.description}
              </p>
            </div>

            <span className="text-xs text-slate-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentActivity;