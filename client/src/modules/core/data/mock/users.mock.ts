import type { User } from "@/modules/core/types/crm";
import { daysAgo, hoursAgo } from "@/modules/core/utils/date";

export const mockUsers: User[] = [
  {
    id: "user-001",
    fullName: "Bhavya Sheth",
    email: "superadmin@fairwaycrm.com",
    role: "SUPER_ADMIN",
    status: "active",
    lastActiveAt: hoursAgo(1),
    createdAt: daysAgo(420),
    avatarColor: "primary",
  },
  {
    id: "user-002",
    fullName: "Rahul Shah",
    email: "admin@fairwaycrm.com",
    role: "ADMIN",
    status: "active",
    lastActiveAt: hoursAgo(3),
    createdAt: daysAgo(310),
    avatarColor: "info",
  },
  {
    id: "user-003",
    fullName: "Neha Mehta",
    email: "neha.mehta@fairwaycrm.com",
    role: "ADMIN",
    status: "active",
    lastActiveAt: hoursAgo(26),
    createdAt: daysAgo(240),
    avatarColor: "warning",
  },
  {
    id: "user-004",
    fullName: "Amit Patel",
    email: "amit.patel@fairwaycrm.com",
    role: "ADMIN",
    status: "active",
    lastActiveAt: hoursAgo(52),
    createdAt: daysAgo(180),
    avatarColor: "success",
  },
  {
    id: "user-005",
    fullName: "Priya Desai",
    email: "priya.desai@fairwaycrm.com",
    role: "ADMIN",
    status: "disabled",
    lastActiveAt: daysAgo(38),
    createdAt: daysAgo(150),
    avatarColor: "destructive",
  },
];

export const DEMO_ACCOUNTS = [
  { email: "superadmin@fairwaycrm.com", label: "Super Admin", role: "SUPER_ADMIN" as const },
  { email: "admin@fairwaycrm.com", label: "Admin", role: "ADMIN" as const },
];
