import { FaCheckCircle } from "react-icons/fa";

function AuthBranding() {
  const features = [
    "Employee Management",
    "Project Tracking",
    "Secure Multi-Tenant Workspace",
  ];

  return (
    <div className="hidden lg:flex flex-1 flex-col justify-center bg-blue-600 p-12 text-white">
      <h1 className="text-5xl font-bold">WorkspaceHub</h1>

      <p className="mt-6 text-lg text-blue-100">
        Manage your company from one secure workspace.
      </p>

      <div className="mt-10 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <FaCheckCircle />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthBranding;