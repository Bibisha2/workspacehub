import Card from "../ui/Card";
import Button from "../ui/Button";
import { employees } from "../../data/dashboard";

function EmployeeTable() {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-semibold">
        Employees
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{employee.name}</td>
                <td className="p-3">{employee.department}</td>
                <td className="p-3">{employee.role}</td>

                <td className="p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      employee.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>

                <td className="p-3">
                  <Button
                    variant="primary"
                    className="w-auto px-4 py-2"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default EmployeeTable;