import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function TasksPage() {
  return (
    <DashboardLayout title="Tasks" breadcrumbs={[{ label: "CRM" }, { label: "Tasks" }]}>
      <ModulePlaceholder title="Tasks module" description="Task lists, due filters and status updates come next." />
    </DashboardLayout>
  );
}
export default TasksPage;
