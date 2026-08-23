/**
 * In-memory mock database.
 * Swap-out point: when the Express + PostgreSQL backend lands, the *.api.ts
 * modules stop reading this file and issue fetch() calls instead.
 */
import { mockActivities } from "@/modules/core/data/mock/activities.mock";
import { mockAuditLogs } from "@/modules/core/data/mock/audit.mock";
import { mockCompanies } from "@/modules/core/data/mock/companies.mock";
import { mockContacts } from "@/modules/core/data/mock/contacts.mock";
import { mockFacilities } from "@/modules/core/data/mock/facilities.mock";
import { mockNotes } from "@/modules/core/data/mock/notes.mock";
import { mockNotifications } from "@/modules/core/data/mock/notifications.mock";
import { mockStages } from "@/modules/core/data/mock/stages.mock";
import { mockTasks } from "@/modules/core/data/mock/tasks.mock";
import { mockUsers } from "@/modules/core/data/mock/users.mock";
import type {
  Activity,
  AuditLog,
  Company,
  Contact,
  CrmSettings,
  CrmStage,
  Facility,
  Note,
  Notification,
  Task,
  User,
} from "@/modules/core/types/crm";

export interface MockDb {
  users: User[];
  companies: Company[];
  contacts: Contact[];
  facilities: Facility[];
  tasks: Task[];
  activities: Activity[];
  notes: Note[];
  stages: CrmStage[];
  notifications: Notification[];
  auditLogs: AuditLog[];
  settings: CrmSettings;
}

export const defaultSettings: CrmSettings = {
  defaultStageId: "stage-new",
  defaultPriority: "Medium",
  defaultCompanyStatus: "Prospect",
  timezone: "Asia/Kolkata",
  dateFormat: "dd MMM yyyy",
  compactMode: false,
  sidebarCollapsed: false,
};

export function createDb(): MockDb {
  return {
    users: [...mockUsers],
    companies: [...mockCompanies],
    contacts: [...mockContacts],
    facilities: [...mockFacilities],
    tasks: [...mockTasks],
    activities: [...mockActivities],
    notes: [...mockNotes],
    stages: [...mockStages],
    notifications: [...mockNotifications],
    auditLogs: [...mockAuditLogs],
    settings: { ...defaultSettings },
  };
}

export const db: MockDb = createDb();

let sequence = 1000;
export function nextId(prefix: string): string {
  sequence += 1;
  return `${prefix}-${sequence}`;
}

/** Simulates network latency so loading states are exercised. */
export function delay<T>(value: T, ms = 220): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
