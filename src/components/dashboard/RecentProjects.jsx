import Card from "../ui/Card";
import { recentProjects } from "../../data/dashboard";

function RecentProjects() {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-semibold">
        Recent Projects
      </h2>

      <div className="space-y-4">
        {recentProjects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between border-b pb-3 last:border-none"
          >
            <div>
              <p className="font-medium">
                {project.name}
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default RecentProjects;