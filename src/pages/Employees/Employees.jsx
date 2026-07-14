import DashboardLayout from "../../layouts/DashboardLayout";
import EmployeeTable from "../../components/dashboard/EmployeeTable";

function Employees() {
  return (
    <DashboardLayout>
      <EmployeeTable />
    </DashboardLayout>
  );
}

export default Employees;