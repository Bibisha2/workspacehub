import { FaBars } from "react-icons/fa";

function Topbar({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-5 shadow-sm">

      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <FaBars className="text-xl" />
        </button>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Dashboard
          </h2>

          <p className="text-gray-500">
            Welcome back
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          B
        </div>

        <span className="hidden font-semibold md:block">
          Bibisha
        </span>

      </div>

    </header>
  );
}

export default Topbar;