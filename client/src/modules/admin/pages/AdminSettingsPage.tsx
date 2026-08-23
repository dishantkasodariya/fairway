import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";
import { RoleGuard } from "@/modules/auth/components/guards";

export function AdminSettingsPage() {
  return (
    <DashboardLayout title="Settings" breadcrumbs={[{ label: "Administration" }, { label: "Settings" }]}>
      <RoleGuard roles={["SUPER_ADMIN"]}>
        <ModulePlaceholder title="Workspace settings" description="Settings forms come next." />
      </RoleGuard>
    </DashboardLayout>
  );
}
export default AdminSettingsPage;
