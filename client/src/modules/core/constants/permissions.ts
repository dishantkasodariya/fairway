import type { UserRole } from "@/modules/core/types/crm";

export const PERMISSIONS = [
  "crm:view",
  "companies:create",
  "companies:edit",
  "companies:delete",
  "companies:assign",
  "contacts:manage",
  "facilities:manage",
  "notes:manage",
  "tasks:manage",
  "activities:manage",
  "pipeline:move",
  "users:manage",
  "stages:manage",
  "settings:manage",
  "audit:view",
] as const;

export type Permission = (typeof PERMISSIONS)[number];

const ADMIN_PERMISSIONS: Permission[] = [
  "crm:view",
  "companies:create",
  "companies:edit",
  "companies:assign",
  "contacts:manage",
  "facilities:manage",
  "notes:manage",
  "tasks:manage",
  "activities:manage",
  "pipeline:move",
];

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [...PERMISSIONS],
  ADMIN: ADMIN_PERMISSIONS,
};

export function roleHasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}
