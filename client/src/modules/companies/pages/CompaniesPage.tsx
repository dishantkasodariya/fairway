import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function CompaniesPage() {
  return (
    <DashboardLayout title="Companies" breadcrumbs={[{ label: "CRM" }, { label: "Companies" }]}>
      <ModulePlaceholder
        title="Companies module"
        description="The company table, filters and detail tabs are being wired up next."
      />
    </DashboardLayout>
  );
}
export default CompaniesPage;
