/**
 * Fairway AI domain types.
 * These mirror the future PostgreSQL schema / Express REST payloads.
 */

export type UserRole = "SUPER_ADMIN" | "ADMIN";
export type UserStatus = "active" | "disabled";

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActiveAt: string;
  createdAt: string;
  avatarColor?: string;
}

export type CompanyStatus = "Active" | "Inactive" | "Prospect" | "Customer" | "Lost";
export type Priority = "Low" | "Medium" | "High" | "Urgent";

export interface CrmStage {
  id: string;
  name: string;
  order: number;
  color: string;
  isActive: boolean;
  isWon?: boolean;
  isLost?: boolean;
}

export interface Company {
  id: string;
  name: string;
  legalName: string;
  website: string;
  industry: string;
  status: CompanyStatus;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  ownerId: string;
  stageId: string;
  priority: Priority;
  expectedValue: number;
  nextFollowUpAt: string | null;
  lastActivityAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export type FacilityType = "Plant" | "Office" | "Warehouse" | "Depot" | "R&D Center";
export type FacilityStatus = "Operational" | "Under Construction" | "Closed";

export interface Facility {
  id: string;
  companyId: string;
  name: string;
  type: FacilityType;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  status: FacilityStatus;
  contactName: string;
  contactPhone: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  companyId: string;
  fullName: string;
  designation: string;
  department: string;
  phone: string;
  email: string;
  linkedinUrl?: string;
  isPrimary: boolean;
  notes?: string;
  createdAt: string;
}

export type TaskType = "Call" | "Meeting" | "Email" | "Follow-up" | "Other";
export type TaskStatus = "Pending" | "Completed" | "Cancelled";

export interface Task {
  id: string;
  title: string;
  description: string;
  companyId: string;
  facilityId?: string | null;
  contactId?: string | null;
  assignedToId: string;
  type: TaskType;
  dueDate: string;
  priority: Priority;
  status: TaskStatus;
  createdAt: string;
}

export type ActivityType = "Call" | "Email" | "Meeting" | "Note" | "Follow-up" | "Stage Change";

export interface Activity {
  id: string;
  companyId: string;
  contactId?: string | null;
  userId: string;
  type: ActivityType;
  title: string;
  description: string;
  occurredAt: string;
}

export interface Note {
  id: string;
  companyId: string;
  content: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  companyId: string;
  userId: string;
  field: string;
  fromValue: string;
  toValue: string;
  changedAt: string;
}

export type NotificationKind = "followup" | "assignment" | "overdue" | "system";

export interface Notification {
  id: string;
  kind: NotificationKind;
  title: string;
  description: string;
  createdAt: string;
  isRead: boolean;
}

export interface CompanyAssignment {
  companyId: string;
  ownerId: string;
  assignedById: string;
  assignedAt: string;
}

export interface CrmSettings {
  defaultStageId: string;
  defaultPriority: Priority;
  defaultCompanyStatus: CompanyStatus;
  timezone: string;
  dateFormat: string;
  compactMode: boolean;
  sidebarCollapsed: boolean;
}

/** Payloads (match future REST bodies) */
export type CompanyInput = Omit<
  Company,
  "id" | "createdAt" | "updatedAt" | "lastActivityAt"
>;
export type ContactInput = Omit<Contact, "id" | "createdAt">;
export type FacilityInput = Omit<Facility, "id" | "createdAt">;
export type TaskInput = Omit<Task, "id" | "createdAt">;
export type UserInput = Pick<User, "fullName" | "email" | "role" | "status">;

export interface CompanyFilters {
  search?: string;
  industry?: string[];
  stageId?: string[];
  ownerId?: string[];
  priority?: Priority[];
  status?: CompanyStatus[];
  facilityType?: FacilityType[];
  createdFrom?: string;
  lastActivityFrom?: string;
  nextFollowUpTo?: string;
}

export interface DashboardKpis {
  totalCompanies: number;
  newLeads: number;
  contacted: number;
  qualified: number;
  negotiation: number;
  won: number;
}
