import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function RegisterForm() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  company: "",
  admin: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = (e) => {
  e.preventDefault();

  const {
    company,
    admin,
    email,
    password,
    confirmPassword,
  } = formData;

  // Check empty fields
  if (
    !company ||
    !admin ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    toast.error("Please fill all fields.");
    return;
  }

  // Check password match
  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  // Save user
  const user = {
    company,
    admin,
    email,
    password,
  };

  localStorage.setItem(
    "workspacehub-user",
    JSON.stringify(user)
  );

  toast.success("Account created successfully!");

  navigate("/login");
};
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-gray-900">
          Create Workspace
        </h2>

        <p className="mt-2 text-gray-500">
          Create your company account to get started.
        </p>

<form
  onSubmit={handleSubmit}
  className="mt-8 space-y-5"
>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Company Name
            </label>

            <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="ABC Technologies"
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Admin Name
            </label>

            <input
              type="text"
              name="admin"
              value={formData.admin}
              onChange={handleChange}
              placeholder="Bibisha Kharel"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="bibisha@gmail.com"
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="********"
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

           <input
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="********"
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
          </div>

          <button
  type="submit"
  className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
>
            Create Workspace
          </button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default RegisterForm;