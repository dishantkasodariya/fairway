import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";
import { RoleGuard } from "@/modules/auth/components/guards";

export function AdminUsersPage() {
  return (
    <DashboardLayout title="Users" breadcrumbs={[{ label: "Administration" }, { label: "Users" }]}>
      <RoleGuard roles={["SUPER_ADMIN"]}>
        <ModulePlaceholder title="User management" description="User table and role editing come next." />
      </RoleGuard>
    </DashboardLayout>
  );
}
export default AdminUsersPage;
