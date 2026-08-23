import { useParams } from "react-router-dom";

import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function CompanyDetailPage() {
  const { id = "" } = useParams<{ id: string }>();
  return (
    <DashboardLayout
      title="Company detail"
      breadcrumbs={[{ label: "CRM" }, { label: "Companies", to: "/crm/companies" }, { label: id }]}
    >
      <ModulePlaceholder
        title="Company detail"
        description={`Detail tabs for company ${id} are being wired up next.`}
      />
    </DashboardLayout>
  );
}
export default CompanyDetailPage;
