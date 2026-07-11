import { Link } from "react-router-dom";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">

      {/* Left Side */}
      <div className="max-w-2xl">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
           Multi-Tenant Workspace Platform
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
          Manage Your Team.
          <br />
          Deliver Projects Faster.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          WorkspaceHub helps companies manage employees,
          projects, and tasks in one secure workspace.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>

          <button className="rounded-lg border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100">
            Live Demo
          </button>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex justify-center">
        <DashboardPreview />
      </div>

    </section>
  );
}

export default Hero;