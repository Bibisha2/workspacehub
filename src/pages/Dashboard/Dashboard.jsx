import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsSection from "../../components/dashboard/StatsSection";
import RecentProjects from "../../components/dashboard/RecentProjects";
import RecentTasks from "../../components/dashboard/RecentTasks";
import EmployeeTable from "../../components/dashboard/EmployeeTable";
function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />

      <StatsSection />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentProjects />
        <RecentTasks />
      </div>
      <div className="mt-8">
    <EmployeeTable />
  </div>
    </DashboardLayout>
  );
}

export default Dashboard;