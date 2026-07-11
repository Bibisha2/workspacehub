import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsSection from "../../components/dashboard/StatsSection";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <DashboardHeader />

      <StatsSection />

    </div>
  );
}

export default Dashboard;