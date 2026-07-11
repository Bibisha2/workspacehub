import { FaUsers, FaFolderOpen, FaClipboardCheck } from "react-icons/fa";

function DashboardPreview() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Dashboard
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <FaUsers className="text-blue-600" />

            <span>Employees</span>

          </div>

          <span className="font-bold">24</span>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <FaFolderOpen className="text-green-600" />

            <span>Projects</span>

          </div>

          <span className="font-bold">8</span>

        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            <FaClipboardCheck className="text-orange-500" />

            <span>Completed Tasks</span>

          </div>

          <span className="font-bold">126</span>

        </div>

      </div>

    </div>
  );
}

export default DashboardPreview;