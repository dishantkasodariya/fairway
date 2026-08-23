import {
  Activity,
  Building2,
  CheckSquare,
  GitBranch,
  Kanban,
  LayoutDashboard,
  Map,
  Settings,
  UserCog,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  to:
    | "/dashboard"
    | "/crm/companies"
    | "/crm/pipeline"
    | "/crm/contacts"
    | "/crm/tasks"
    | "/crm/activities"
    | "/map"
    | "/admin/users"
    | "/admin/stages"
    | "/admin/settings";
  icon: LucideIcon;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Companies", to: "/crm/companies", icon: Building2 },
  { label: "Pipeline", to: "/crm/pipeline", icon: Kanban },
  { label: "Contacts", to: "/crm/contacts", icon: Users },
  { label: "Tasks", to: "/crm/tasks", icon: CheckSquare },
  { label: "Activities", to: "/crm/activities", icon: Activity },
  { label: "Map", to: "/map", icon: Map },
];

export const ADMIN_NAV: NavItem[] = [
  { label: "Users", to: "/admin/users", icon: UserCog },
  { label: "Pipeline Stages", to: "/admin/stages", icon: GitBranch },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];
