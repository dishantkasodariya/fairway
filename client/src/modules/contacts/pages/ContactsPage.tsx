import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function ContactsPage() {
  return (
    <DashboardLayout title="Contacts" breadcrumbs={[{ label: "CRM" }, { label: "Contacts" }]}>
      <ModulePlaceholder
        title="Contacts module"
        description="The contact list, search and detail tabs are being wired up next."
      />
    </DashboardLayout>
  );
}
export default ContactsPage;
