import { useParams } from "react-router-dom";

import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function ContactDetailPage() {
  const { id = "" } = useParams<{ id: string }>();
  return (
    <DashboardLayout
      title="Contact detail"
      breadcrumbs={[{ label: "CRM" }, { label: "Contacts", to: "/crm/contacts" }, { label: id }]}
    >
      <ModulePlaceholder title="Contact detail" description={`Profile for contact ${id} is being wired up next.`} />
    </DashboardLayout>
  );
}
export default ContactDetailPage;
