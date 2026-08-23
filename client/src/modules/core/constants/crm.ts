import type { CompanyStatus, FacilityStatus, FacilityType, Priority, TaskStatus, TaskType, UserRole } from "@/modules/core/types/crm";

export const INDUSTRIES = [
  "Chemicals",
  "Manufacturing",
  "Textiles",
  "Pharmaceuticals",
  "Logistics",
  "Engineering",
  "Food Processing",
  "Automotive",
] as const;

export const CITIES = ["Surat", "Vapi", "Ahmedabad", "Vadodara", "Rajkot", "Mumbai", "Pune"] as const;

export const COMPANY_STATUSES: CompanyStatus[] = ["Active", "Inactive", "Prospect", "Customer", "Lost"];
export const PRIORITIES: Priority[] = ["Low", "Medium", "High", "Urgent"];
export const FACILITY_TYPES: FacilityType[] = ["Plant", "Office", "Warehouse", "Depot", "R&D Center"];
export const FACILITY_STATUSES: FacilityStatus[] = ["Operational", "Under Construction", "Closed"];
export const TASK_TYPES: TaskType[] = ["Call", "Meeting", "Email", "Follow-up", "Other"];
export const TASK_STATUSES: TaskStatus[] = ["Pending", "Completed", "Cancelled"];
export const USER_ROLES: UserRole[] = ["SUPER_ADMIN", "ADMIN"];

export const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
};

export const TIMEZONES = ["Asia/Kolkata", "Asia/Dubai", "Europe/London", "America/New_York"] as const;
export const DATE_FORMATS = ["dd MMM yyyy", "dd/MM/yyyy", "MM/dd/yyyy", "yyyy-MM-dd"] as const;

export const PAGE_SIZE = 10;
