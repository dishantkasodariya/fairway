import { Building2, CheckSquare, Factory, Users } from "lucide-react";

import { CardsSkeleton } from "@/modules/core/components/feedback/states";
import { DashboardLayout } from "@/modules/core/components/layout/DashboardLayout";
import { StatCard } from "@/modules/core/components/shared/stat-card";
import { Timeline } from "@/modules/core/components/shared/timeline";
import { useCrm } from "@/modules/core/providers/crm-provider";

export function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard" breadcrumbs={[{ label: "Dashboard" }]}>
      <DashboardContent />
    </DashboardLayout>
  );
}

function DashboardContent() {
  const { isLoading, companies, contacts, facilities, tasks, activities, userById } = useCrm();

  if (isLoading) return <CardsSkeleton count={4} />;

  const openTasks = tasks.filter((task) => task.status === "Pending");

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Companies" value={companies.length} icon={Building2} />
        <StatCard label="Contacts" value={contacts.length} icon={Users} />
        <StatCard label="Facilities" value={facilities.length} icon={Factory} />
        <StatCard label="Open tasks" value={openTasks.length} icon={CheckSquare} />
      </div>

      <section className="rounded-lg border border-border bg-card p-5 shadow-card">
        <h2 className="text-[15px] font-semibold">Recent activity</h2>
        <div className="mt-4">
          <Timeline
            items={activities.slice(0, 8).map((item) => ({
              id: item.id,
              type: item.type,
              title: item.title,
              description: item.description,
              occurredAt: item.occurredAt,
              meta: userById(item.userId)?.fullName ?? "",
            }))}
          />
        </div>
      </section>
    </div>
  );
}
export default DashboardPage;
