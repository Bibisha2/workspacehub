import DashboardLayout from "../../layouts/DashboardLayout";
import TaskTable from "../../components/tasks/TaskTable";

function Tasks() {
  return (
    <DashboardLayout>
      <TaskTable />
    </DashboardLayout>
  );
}

export default Tasks;