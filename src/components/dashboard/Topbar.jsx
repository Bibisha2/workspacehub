import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Topbar({ toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-5 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
        >
          <FaBars className="text-xl" />
        </button>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Workspace Dashboard
          </h2>

          <p className="text-gray-500">
            Welcome back 👋
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() =>
            setOpenMenu(!openMenu)
          }
          className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            B
          </div>

          <span className="hidden font-semibold md:block">
            Bibisha
          </span>
        </button>

        {openMenu && (
          <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border bg-white shadow-xl">

            <Link
              to="/profile"
              onClick={() => setOpenMenu(false)}
              className="block px-5 py-3 hover:bg-slate-100"
            >
              👤 My Profile
            </Link>

            <Link
              to="/settings"
              onClick={() => setOpenMenu(false)}
              className="block px-5 py-3 hover:bg-slate-100"
            >
              ⚙️ Settings
            </Link>

            <hr />

            <button
              className="w-full px-5 py-3 text-left hover:bg-red-50 hover:text-red-600"
            >
              🚪 Logout
            </button>

          </div>
        )}
      </div>
    </header>
  );
}

export default Topbar;