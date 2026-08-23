import { NavLink as RouterNavLink } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

import { ADMIN_NAV, MAIN_NAV, type NavItem } from "@/modules/core/constants/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/modules/core/components/ui/tooltip";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { cn } from "@/modules/core/lib/utils";

function NavLinkItem({ item, collapsed, onNavigate }: { item: NavItem; collapsed: boolean; onNavigate?: (() => void) | undefined }) {
  const link = (
    <RouterNavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground",
          isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
          collapsed && "justify-center px-0",
        )
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={cn(
              "absolute top-1.5 bottom-1.5 left-0 w-0.5 rounded-full bg-sidebar-primary opacity-0 transition-opacity",
              isActive && "opacity-100",
            )}
            aria-hidden
          />
          <item.icon className="h-4.5 w-4.5 shrink-0" aria-hidden />
          {collapsed ? <span className="sr-only">{item.label}</span> : <span className="truncate">{item.label}</span>}
        </>
      )}
    </RouterNavLink>
  );

  if (!collapsed) return link;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{link}</TooltipTrigger>
      <TooltipContent side="right">{item.label}</TooltipContent>
    </Tooltip>
  );
}

export function SidebarNav({
  collapsed,
  onToggle,
  onNavigate,
  showToggle = true,
}: {
  collapsed: boolean;
  onToggle?: (() => void) | undefined;
  onNavigate?: (() => void) | undefined;
  showToggle?: boolean | undefined;
}) {
  const { isSuperAdmin } = useAuth();

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div
        className={cn(
          "flex h-14 items-center gap-2.5 border-b border-sidebar-border px-4",
          collapsed && "justify-center px-0",
        )}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-card">
          <img src="/images/logo.png" alt="Fairway AI" className="h-14 w-14 object-contain" />
        </span>
        {!collapsed ? (
          <div className="min-w-0">
            <p className="truncate text-[14px] leading-tight font-semibold text-sidebar-accent-foreground">
              Fairway AI
            </p>
            <p className="truncate text-[11px] text-sidebar-foreground/60">Sales operations</p>
          </div>
        ) : null}
      </div>

      <nav className="crm-scroll flex-1 space-y-6 overflow-y-auto px-2 py-4" aria-label="Main">
        <div className="space-y-1">
          {!collapsed ? (
            <p className="px-3 pb-1 text-[11px] font-semibold tracking-wider text-sidebar-foreground/50 uppercase">
              Main
            </p>
          ) : null}
          {MAIN_NAV.map((item) => (
            <NavLinkItem key={item.to} item={item} collapsed={collapsed} onNavigate={onNavigate} />
          ))}
        </div>

        {isSuperAdmin ? (
          <div className="space-y-1">
            {!collapsed ? (
              <p className="px-3 pb-1 text-[11px] font-semibold tracking-wider text-sidebar-foreground/50 uppercase">
                Administration
              </p>
            ) : null}
            {ADMIN_NAV.map((item) => (
              <NavLinkItem key={item.to} item={item} collapsed={collapsed} onNavigate={onNavigate} />
            ))}
          </div>
        ) : null}
      </nav>

      {showToggle && onToggle ? (
        <div className="border-t border-sidebar-border p-2">
          <button
            type="button"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={cn(
              "flex w-full items-center gap-2 rounded-md px-3 py-2 text-[13px] text-sidebar-foreground/70 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground",
              collapsed && "justify-center px-0",
            )}
          >
            {collapsed ? (
              <ChevronsRight className="h-4 w-4" aria-hidden />
            ) : (
              <>
                <ChevronsLeft className="h-4 w-4" aria-hidden />
                Collapse
              </>
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
}
