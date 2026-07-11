import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  console.log({
    email,
    password,
  });
};
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-gray-900">
          Welcome Back
        </h2>

        <p className="mt-2 text-gray-500">
          Login to your workspace.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
{errors.email && (
  <p className="mt-2 text-sm text-red-500">
    {errors.email}
  </p>
)}
          </div>

          <div>
  <label className="mb-2 block text-sm font-medium">
    Password
  </label>

  <div className="relative">

    <input
      type={showPassword ? "text" : "password"}
      placeholder="********"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500"
    />
    {errors.password && (
  <p className="mt-2 text-sm text-red-500">
    {errors.password}
  </p>
)}

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>

  </div>
</div>
          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Workspace
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginForm;