import { useState, type ReactNode } from "react";

import { SidebarNav } from "@/modules/core/components/layout/sidebar";
import { Topbar } from "@/modules/core/components/layout/topbar";
import { TooltipProvider } from "@/modules/core/components/ui/tooltip";
import { ProtectedRoute } from "@/modules/auth/components/guards";
import type { Crumb } from "@/modules/core/components/shared/page-header";
import { cn } from "@/modules/core/lib/utils";

export function DashboardLayout({
  title,
  breadcrumbs,
  children,
}: {
  title: string;
  breadcrumbs: Crumb[];
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProtectedRoute>
      <TooltipProvider delayDuration={200}>
        <div className="min-h-screen bg-background">
          <aside
            className={cn(
              "fixed inset-y-0 left-0 z-40 hidden border-r border-sidebar-border lg:block",
              collapsed ? "w-16" : "w-60",
            )}
          >
            <SidebarNav collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />
          </aside>

          <div className={cn("flex min-h-screen flex-col", collapsed ? "lg:pl-16" : "lg:pl-60")}>
            <Topbar
              title={title}
              breadcrumbs={breadcrumbs}
              sidebarCollapsed={collapsed}
              onToggleSidebar={() => setCollapsed((prev) => !prev)}
            />
            <main className="flex-1 px-4 py-5 md:px-6 md:py-6">{children}</main>
          </div>
        </div>
      </TooltipProvider>
    </ProtectedRoute>
  );
}
