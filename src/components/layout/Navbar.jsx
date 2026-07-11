import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          WorkspaceHub
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>

          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Pricing
          </Link>

          <Link to="/" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;