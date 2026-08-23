import { useNavigate } from "react-router-dom";
import { AlertTriangle, Bell, CalendarClock, CircleHelp, LogOut, Menu, Settings, UserRound } from "lucide-react";
import { useState } from "react";

import { GlobalSearch } from "@/modules/core/components/layout/global-search";
import { SidebarNav } from "@/modules/core/components/layout/sidebar";
import { UserAvatar } from "@/modules/core/components/shared/avatars";
import { Breadcrumbs, type Crumb } from "@/modules/core/components/shared/page-header";
import { Button } from "@/modules/core/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/core/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/modules/core/components/ui/popover";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/modules/core/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/modules/core/components/ui/tooltip";
import { useCrm } from "@/modules/core/providers/crm-provider";
import { ROLE_LABELS } from "@/modules/core/constants/crm";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { cn } from "@/modules/core/lib/utils";
import { formatDateTime } from "@/modules/core/utils/date";
import type { NotificationKind } from "@/modules/core/types/crm";

const notificationIcons: Record<NotificationKind, typeof Bell> = {
  followup: CalendarClock,
  assignment: UserRound,
  overdue: AlertTriangle,
  system: Settings,
};

function NotificationsMenu() {
  const { notifications, markNotificationsRead } = useCrm();
  const unread = notifications.filter((item) => !item.isRead).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label={`Notifications (${unread} unread)`}>
          <Bell className="h-4.5 w-4.5" aria-hidden />
          {unread > 0 ? (
            <span className="absolute top-1.5 right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">
              {unread}
            </span>
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[340px] p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <p className="text-[13px] font-semibold">{unread} unread notifications</p>
          <Button variant="ghost" size="sm" className="h-7 text-[12px]" onClick={() => void markNotificationsRead()}>
            Mark all read
          </Button>
        </div>
        <ul className="crm-scroll max-h-80 divide-y divide-border overflow-y-auto">
          {notifications.map((item) => {
            const Icon = notificationIcons[item.kind];
            return (
              <li key={item.id} className={cn("flex gap-3 px-4 py-3", !item.isRead && "bg-accent/40")}>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium">{item.title}</p>
                  <p className="text-[12px] text-muted-foreground">{item.description}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{formatDateTime(item.createdAt)}</p>
                </div>
                {!item.isRead ? (
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-label="Unread" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export function Topbar({
  title,
  breadcrumbs,
  sidebarCollapsed,
  onToggleSidebar,
}: {
  title: string;
  breadcrumbs: Crumb[];
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card/95 px-4 backdrop-blur">
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
            <Menu className="h-5 w-5" aria-hidden />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 border-sidebar-border bg-sidebar p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarNav collapsed={false} showToggle={false} onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      <Button
        variant="ghost"
        size="icon"
        className="hidden lg:inline-flex"
        onClick={onToggleSidebar}
        aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <Menu className="h-4.5 w-4.5" aria-hidden />
      </Button>

      <div className="min-w-0 flex-1">
        <Breadcrumbs items={breadcrumbs} />
        <p className="truncate text-[14px] font-semibold">{title}</p>
      </div>

      <div className="hidden md:block">
        <GlobalSearch />
      </div>

      <NotificationsMenu />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Help and documentation">
            <CircleHelp className="h-4.5 w-4.5" aria-hidden />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Help</TooltipContent>
      </Tooltip>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-2 rounded-md px-1.5 py-1 hover:bg-accent"
            aria-label="Account menu"
          >
            <UserAvatar name={user?.fullName ?? "User"} size="sm" />
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-[13px] font-medium">{user?.fullName}</span>
              <span className="block text-[11px] text-muted-foreground">
                {user ? ROLE_LABELS[user.role] : ""}
              </span>
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuLabel>
            <span className="block text-[13px]">{user?.fullName}</span>
            <span className="block text-[12px] font-normal text-muted-foreground">{user?.email}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => navigate("/dashboard")}>
            <UserRound className="h-4 w-4" aria-hidden /> My Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() =>
              navigate(user?.role === "SUPER_ADMIN" ? "/admin/settings" : "/dashboard")
            }
          >
            <Settings className="h-4 w-4" aria-hidden /> Account Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
              logout();
              navigate("/login", { replace: true });
            }}
          >
            <LogOut className="h-4 w-4" aria-hidden /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
