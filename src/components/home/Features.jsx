import {
  FaUsers,
  FaFolderOpen,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: FaUsers,
    title: "Employee Management",
    description: "Manage employees, roles, and workspace members easily.",
  },
  {
    icon: FaFolderOpen,
    title: "Project Management",
    description: "Create projects and monitor progress in one place.",
  },
  {
    icon: FaClipboardCheck,
    title: "Task Tracking",
    description: "Assign tasks, track status, and meet deadlines.",
  },
  {
    icon: FaChartLine,
    title: "Analytics",
    description: "View reports and productivity insights instantly.",
  },
];

function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Powerful Features
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything your company needs to manage employees, projects, and
            tasks efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="text-4xl text-blue-600" />

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;