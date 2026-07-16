import Button from "../ui/Button";
import { FaPlus, FaFolderPlus } from "react-icons/fa";

function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="mb-8 flex flex-col justify-between gap-6 rounded-2xl bg-white p-8 shadow-md lg:flex-row lg:items-center">
      <div>
        <p className="text-sm font-medium text-slate-500">
          {today}
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-800">
          {greeting}
        </h1>

        <p className="mt-3 text-slate-500">
          Here's what's happening in your workspace today.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="primary"
          className="flex items-center gap-2 px-5 py-3"
        >
          <FaPlus />
          Add Employee
        </Button>

        <Button
          variant="secondary"
          className="flex items-center gap-2 px-5 py-3"
        >
          <FaFolderPlus />
          New Project
        </Button>
      </div>
    </div>
  );
}

export default DashboardHeader;