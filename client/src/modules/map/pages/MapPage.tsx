import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { ModulePlaceholder } from "@/modules/core/components/shared/module-placeholder";

export function MapPage() {
  return (
    <DashboardLayout title="Facility map" breadcrumbs={[{ label: "Map" }]}>
      <ModulePlaceholder title="Facility map" description="The facility map view is being wired up next." />
    </DashboardLayout>
  );
}
export default MapPage;
