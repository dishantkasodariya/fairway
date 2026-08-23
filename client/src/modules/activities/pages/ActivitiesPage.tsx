import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function ActivitiesPage() {
  return (
    <DashboardLayout title="Activities" breadcrumbs={[{ label: "CRM" }, { label: "Activities" }]}>
      <ModulePlaceholder title="Activity log" description="The filterable activity timeline comes next." />
    </DashboardLayout>
  );
}
export default ActivitiesPage;
