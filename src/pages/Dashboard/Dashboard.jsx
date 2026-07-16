import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsSection from "../../components/dashboard/StatsSection";
import RecentProjects from "../../components/dashboard/RecentProjects";
import RecentTasks from "../../components/dashboard/RecentTasks";
import RecentActivity from "../../components/dashboard/RecentActivity";

import EmployeeChart from "../../components/dashboard/charts/EmployeeChart";
import ProjectStatusChart from "../../components/dashboard/charts/ProjectStatusChart";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />

      <StatsSection />

      {/* Charts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <EmployeeChart />
        <ProjectStatusChart />
      </div>

      {/* Recent Data */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentProjects />
        <RecentTasks />
      </div>
      <div className="mt-8">
  <RecentActivity />
</div>
    </DashboardLayout>
  );
}

export default Dashboard;