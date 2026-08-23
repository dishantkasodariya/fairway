import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function PipelinePage() {
  return (
    <DashboardLayout title="Pipeline" breadcrumbs={[{ label: "CRM" }, { label: "Pipeline" }]}>
      <ModulePlaceholder
        title="Pipeline board"
        description="The stage-based Kanban board is being wired up next."
      />
    </DashboardLayout>
  );
}
export default PipelinePage;
