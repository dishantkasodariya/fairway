import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";
import { RoleGuard } from "@/modules/auth/components/guards";

export function AdminStagesPage() {
  return (
    <DashboardLayout
      title="Pipeline stages"
      breadcrumbs={[{ label: "Administration" }, { label: "Pipeline stages" }]}
    >
      <RoleGuard roles={["SUPER_ADMIN"]}>
        <ModulePlaceholder title="Stage configuration" description="Stage CRUD and reordering come next." />
      </RoleGuard>
    </DashboardLayout>
  );
}
export default AdminStagesPage;
