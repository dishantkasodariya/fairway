import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import { useEffect, type ReactNode } from "react";

import type { Permission } from "@/modules/core/constants/permissions";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import { Button } from "@/modules/core/components/ui/button";
import { Skeleton } from "@/modules/core/components/ui/skeleton";
import type { UserRole } from "@/modules/core/types/crm";

function AppBootSkeleton() {
  return (
    <div className="flex min-h-screen flex-col gap-4 p-8">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

/** Requires an authenticated mock session; redirects to /login otherwise. */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading || !isAuthenticated) return <AppBootSkeleton />;
  return <>{children}</>;
}

function AccessDenied({ message }: { message: string }) {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-sm rounded-lg border border-border bg-card p-8 text-center shadow-card">
        <ShieldAlert className="mx-auto h-10 w-10 text-destructive" aria-hidden />
        <h1 className="mt-4 text-lg font-semibold">Access restricted</h1>
        <p className="mt-2 text-[13px] text-muted-foreground">{message}</p>
        <Button className="mt-6" onClick={() => navigate("/dashboard")}>
          Back to dashboard
        </Button>
      </div>
    </div>
  );
}

/** Restricts a subtree to specific application roles. */
export function RoleGuard({ roles, children }: { roles: UserRole[]; children: ReactNode }) {
  const { role, isLoading } = useAuth();
  if (isLoading) return <AppBootSkeleton />;
  if (!role || !roles.includes(role)) {
    return <AccessDenied message="You do not have the required role to view this section." />;
  }
  return <>{children}</>;
}

/** Restricts a subtree to a specific permission. */
export function PermissionGuard({
  permission,
  children,
  fallback = null,
}: {
  permission: Permission;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const { hasPermission } = useAuth();
  if (!hasPermission(permission)) return <>{fallback}</>;
  return <>{children}</>;
}
