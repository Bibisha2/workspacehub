import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SearchBar from "./SearchBar";
import DepartmentFilter from "./DepartmentFilter";
import EmployeeModal from "./EmployeeModal";
import { employees as employeeData } from "../../data/dashboard";
import DeleteModal from "./DeleteModal";
import toast from "react-hot-toast";

function EmployeeTable() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
const [employeeList, setEmployeeList] = useState(employeeData);
const [editingId, setEditingId] = useState(null);
const [isEditing, setIsEditing] = useState(false);
const [isDeleteOpen, setIsDeleteOpen] = useState(false);
const [selectedEmployee, setSelectedEmployee] = useState(null);

const [employee, setEmployee] = useState({
  name: "",
  department: "",
  role: "",
});

const handleDeleteClick = (emp) => {
  setSelectedEmployee(emp.id);
  setIsDeleteOpen(true);
};
const handleDelete = () => {
  setEmployeeList((prev) =>
    prev.filter((emp) => emp.id !== selectedEmployee)
  );

  toast.success("Employee deleted successfully!");

  setIsDeleteOpen(false);
};

 const filteredEmployees = employeeList.filter((emp) => {
    const matchesSearch = emp.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || emp.department === department;

    return matchesSearch && matchesDepartment;
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
const handleSave = () => {
  if (isEditing) {
    setEmployeeList((prev) =>
      prev.map((emp) =>
        emp.id === editingId
          ? { ...emp, ...employee }
          : emp
      )
    );

    toast.success("Employee updated successfully!");
  } else {
    const newEmployee = {
      id: employeeList.length + 1,
      ...employee,
      status: "Active",
    };

    setEmployeeList((prev) => [...prev, newEmployee]);

    toast.success("Employee added successfully!");
  }

  setEmployee({
    name: "",
    department: "",
    role: "",
  });

  setEditingId(null);
  setIsEditing(false);
  setIsModalOpen(false);
};
const handleEdit = (emp) => {
  setEmployee({
    name: emp.name,
    department: emp.department,
    role: emp.role,
  });

  setEditingId(emp.id);
  setIsEditing(true);
  setIsModalOpen(true);
};

  return (
    <>
      <Card>
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Employees
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your organization employees.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={() => {
  setEmployee({
    name: "",
    department: "",
    role: "",
  });

  setEditingId(null);
  setIsEditing(false);
  setIsModalOpen(true);
}}
            className="w-fit rounded-lg px-5 py-2 text-sm font-medium shadow-md transition hover:scale-105"
          >
            + Add Employee
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-2/3">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <DepartmentFilter
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Department
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-t transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {emp.name}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {emp.department}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {emp.role}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-2">
    <Button
        variant="primary"
        className="w-fit px-4 py-2 text-sm"
        onClick={() => handleEdit(emp)}
    >
        Edit
    </Button>

    <Button
        variant="danger"
        className="w-fit px-4 py-2 text-sm"
        onClick={() => handleDeleteClick(emp)}
    >
        Delete
    </Button>
</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? "Edit Employee" : "Add Employee"}
        employee={employee}
        onChange={handleChange}
        onSave={handleSave}
      />
      <DeleteModal
    isOpen={isDeleteOpen}
    onClose={() => setIsDeleteOpen(false)}
    onDelete={handleDelete}
/>
    </>
  );
}

export default EmployeeTable;