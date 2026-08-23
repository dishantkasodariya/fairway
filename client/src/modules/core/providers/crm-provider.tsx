import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import * as activitiesApi from "@/modules/activities/services/activities.api";
import * as companiesApi from "@/modules/companies/services/companies.api";
import * as contactsApi from "@/modules/contacts/services/contacts.api";
import * as facilitiesApi from "@/modules/companies/services/facilities.api";
import * as pipelineApi from "@/modules/pipeline/services/pipeline.api";
import * as tasksApi from "@/modules/tasks/services/tasks.api";
import * as usersApi from "@/modules/admin/services/users.api";
import type {
  Activity,
  AuditLog,
  Company,
  CompanyInput,
  Contact,
  ContactInput,
  CrmSettings,
  CrmStage,
  Facility,
  FacilityInput,
  Note,
  Notification,
  Task,
  TaskInput,
  User,
  UserInput,
} from "@/modules/core/types/crm";

interface CrmContextValue {
  isLoading: boolean;
  error: string | null;
  reload: () => void;
  companies: Company[];
  contacts: Contact[];
  facilities: Facility[];
  tasks: Task[];
  activities: Activity[];
  notes: Note[];
  stages: CrmStage[];
  users: User[];
  notifications: Notification[];
  auditLogs: AuditLog[];
  settings: CrmSettings;
  userById: (id: string) => User | undefined;
  stageById: (id: string) => CrmStage | undefined;
  companyById: (id: string) => Company | undefined;
  contactById: (id: string) => Contact | undefined;
  createCompany: (input: CompanyInput) => Promise<Company>;
  updateCompany: (id: string, patch: Partial<CompanyInput>, actorId: string) => Promise<Company>;
  deleteCompany: (id: string) => Promise<void>;
  moveCompanyStage: (id: string, stageId: string, actorId: string) => Promise<void>;
  assignCompanyOwner: (id: string, ownerId: string, actorId: string) => Promise<void>;
  createContact: (input: ContactInput) => Promise<Contact>;
  deleteContact: (id: string) => Promise<void>;
  createFacility: (input: FacilityInput) => Promise<Facility>;
  deleteFacility: (id: string) => Promise<void>;
  createTask: (input: TaskInput) => Promise<Task>;
  updateTask: (id: string, patch: Partial<TaskInput>) => Promise<Task>;
  deleteTask: (id: string) => Promise<void>;
  logActivity: (input: Omit<Activity, "id">) => Promise<Activity>;
  createNote: (companyId: string, content: string, userId: string) => Promise<Note>;
  updateNote: (id: string, content: string) => Promise<Note>;
  deleteNote: (id: string) => Promise<void>;
  createStage: (input: Omit<CrmStage, "id">) => Promise<CrmStage>;
  updateStage: (id: string, patch: Partial<CrmStage>) => Promise<CrmStage>;
  deleteStage: (id: string) => Promise<void>;
  reorderStage: (id: string, direction: "up" | "down") => Promise<void>;
  createUser: (input: UserInput) => Promise<User>;
  updateUser: (id: string, patch: Partial<UserInput>) => Promise<User>;
  markNotificationsRead: () => Promise<void>;
  updateSettings: (patch: Partial<CrmSettings>) => Promise<void>;
}

const CrmContext = createContext<CrmContextValue | null>(null);

export function CrmProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [stages, setStages] = useState<CrmStage[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [settings, setSettings] = useState<CrmSettings>({
    defaultStageId: "stage-new",
    defaultPriority: "Medium",
    defaultCompanyStatus: "Prospect",
    timezone: "Asia/Kolkata",
    dateFormat: "dd MMM yyyy",
    compactMode: false,
    sidebarCollapsed: false,
  });
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);
    Promise.all([
      companiesApi.listCompanies(),
      contactsApi.listContacts(),
      facilitiesApi.listFacilities(),
      tasksApi.listTasks(),
      activitiesApi.listActivities(),
      activitiesApi.listNotes(),
      activitiesApi.listAuditLogs(),
      pipelineApi.listStages(),
      pipelineApi.getSettings(),
      usersApi.listUsers(),
      usersApi.listNotifications(),
    ])
      .then((result) => {
        if (cancelled) return;
        const [c, ct, f, t, a, n, al, st, se, u, no] = result;
        setCompanies(c);
        setContacts(ct);
        setFacilities(f);
        setTasks(t);
        setActivities(a);
        setNotes(n);
        setAuditLogs(al);
        setStages(st);
        setSettings(se);
        setUsers(u);
        setNotifications(no);
      })
      .catch((cause: unknown) => {
        if (!cancelled) setError(cause instanceof Error ? cause.message : "Failed to load CRM data.");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  const reload = useCallback(() => setReloadToken((token) => token + 1), []);

  const value = useMemo<CrmContextValue>(() => {
    const upsertCompany = (company: Company) =>
      setCompanies((prev) => prev.map((item) => (item.id === company.id ? company : item)));

    const recordAudit = async (input: Omit<AuditLog, "id">) => {
      const log = await activitiesApi.createAuditLog(input);
      setAuditLogs((prev) => [log, ...prev]);
    };

    return {
      isLoading,
      error,
      reload,
      companies,
      contacts,
      facilities,
      tasks,
      activities,
      notes,
      stages,
      users,
      notifications,
      auditLogs,
      settings,
      userById: (id) => users.find((user) => user.id === id),
      stageById: (id) => stages.find((stage) => stage.id === id),
      companyById: (id) => companies.find((company) => company.id === id),
      contactById: (id) => contacts.find((contact) => contact.id === id),

      createCompany: async (input) => {
        const company = await companiesApi.createCompany(input);
        setCompanies((prev) => [company, ...prev]);
        return company;
      },
      updateCompany: async (id, patch, actorId) => {
        const before = companies.find((company) => company.id === id);
        const company = await companiesApi.updateCompany(id, patch);
        upsertCompany(company);
        if (before && patch.priority && patch.priority !== before.priority) {
          await recordAudit({
            companyId: id,
            userId: actorId,
            field: "Priority",
            fromValue: before.priority,
            toValue: patch.priority,
            changedAt: new Date().toISOString(),
          });
        }
        return company;
      },
      deleteCompany: async (id) => {
        await companiesApi.deleteCompany(id);
        setCompanies((prev) => prev.filter((company) => company.id !== id));
      },
      moveCompanyStage: async (id, stageId, actorId) => {
        const before = companies.find((company) => company.id === id);
        const company = await companiesApi.updateCompanyStage(id, stageId);
        upsertCompany(company);
        const fromName = stages.find((stage) => stage.id === before?.stageId)?.name ?? "—";
        const toName = stages.find((stage) => stage.id === stageId)?.name ?? "—";
        const now = new Date().toISOString();
        const activity = await activitiesApi.createActivity({
          companyId: id,
          contactId: null,
          userId: actorId,
          type: "Stage Change",
          title: "Stage changed",
          description: `${fromName} → ${toName}`,
          occurredAt: now,
        });
        setActivities((prev) => [activity, ...prev]);
        await recordAudit({
          companyId: id,
          userId: actorId,
          field: "Prospect Stage",
          fromValue: fromName,
          toValue: toName,
          changedAt: now,
        });
      },
      assignCompanyOwner: async (id, ownerId, actorId) => {
        const before = companies.find((company) => company.id === id);
        const company = await companiesApi.updateCompanyOwner(id, ownerId);
        upsertCompany(company);
        await recordAudit({
          companyId: id,
          userId: actorId,
          field: "Owner",
          fromValue: users.find((user) => user.id === before?.ownerId)?.fullName ?? "—",
          toValue: users.find((user) => user.id === ownerId)?.fullName ?? "—",
          changedAt: new Date().toISOString(),
        });
      },

      createContact: async (input) => {
        const contact = await contactsApi.createContact(input);
        setContacts((prev) => [
          contact,
          ...prev.map((item) =>
            contact.isPrimary && item.companyId === contact.companyId
              ? { ...item, isPrimary: false }
              : item,
          ),
        ]);
        return contact;
      },
      deleteContact: async (id) => {
        await contactsApi.deleteContact(id);
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
      },

      createFacility: async (input) => {
        const facility = await facilitiesApi.createFacility(input);
        setFacilities((prev) => [facility, ...prev]);
        return facility;
      },
      deleteFacility: async (id) => {
        await facilitiesApi.deleteFacility(id);
        setFacilities((prev) => prev.filter((facility) => facility.id !== id));
      },

      createTask: async (input) => {
        const task = await tasksApi.createTask(input);
        setTasks((prev) => [task, ...prev]);
        return task;
      },
      updateTask: async (id, patch) => {
        const task = await tasksApi.updateTask(id, patch);
        setTasks((prev) => prev.map((item) => (item.id === id ? task : item)));
        return task;
      },
      deleteTask: async (id) => {
        await tasksApi.deleteTask(id);
        setTasks((prev) => prev.filter((task) => task.id !== id));
      },

      logActivity: async (input) => {
        const activity = await activitiesApi.createActivity(input);
        setActivities((prev) => [activity, ...prev]);
        return activity;
      },

      createNote: async (companyId, content, userId) => {
        const note = await activitiesApi.createNote({ companyId, content, createdById: userId });
        setNotes((prev) => [note, ...prev]);
        return note;
      },
      updateNote: async (id, content) => {
        const note = await activitiesApi.updateNote(id, content);
        setNotes((prev) => prev.map((item) => (item.id === id ? note : item)));
        return note;
      },
      deleteNote: async (id) => {
        await activitiesApi.deleteNote(id);
        setNotes((prev) => prev.filter((note) => note.id !== id));
      },

      createStage: async (input) => {
        const stage = await pipelineApi.createStage(input);
        setStages((prev) => [...prev, stage].sort((a, b) => a.order - b.order));
        return stage;
      },
      updateStage: async (id, patch) => {
        const stage = await pipelineApi.updateStage(id, patch);
        setStages((prev) =>
          prev.map((item) => (item.id === id ? stage : item)).sort((a, b) => a.order - b.order),
        );
        return stage;
      },
      deleteStage: async (id) => {
        await pipelineApi.deleteStage(id);
        setStages((prev) => prev.filter((stage) => stage.id !== id));
      },
      reorderStage: async (id, direction) => {
        const ordered = [...stages].sort((a, b) => a.order - b.order);
        const index = ordered.findIndex((stage) => stage.id === id);
        const swapWith = direction === "up" ? index - 1 : index + 1;
        if (index < 0 || swapWith < 0 || swapWith >= ordered.length) return;
        const current = ordered[index];
        const other = ordered[swapWith];
        if (!current || !other) return;
        await pipelineApi.updateStage(current.id, { order: other.order });
        await pipelineApi.updateStage(other.id, { order: current.order });
        setStages(
          ordered
            .map((stage) => {
              if (stage.id === current.id) return { ...stage, order: other.order };
              if (stage.id === other.id) return { ...stage, order: current.order };
              return stage;
            })
            .sort((a, b) => a.order - b.order),
        );
      },

      createUser: async (input) => {
        const user = await usersApi.createUser(input);
        setUsers((prev) => [user, ...prev]);
        return user;
      },
      updateUser: async (id, patch) => {
        const user = await usersApi.updateUser(id, patch);
        setUsers((prev) => prev.map((item) => (item.id === id ? user : item)));
        return user;
      },

      markNotificationsRead: async () => {
        const next = await usersApi.markNotificationsRead();
        setNotifications(next);
      },
      updateSettings: async (patch) => {
        const next = await pipelineApi.updateSettings(patch);
        setSettings(next);
      },
    };
  }, [
    isLoading,
    error,
    reload,
    companies,
    contacts,
    facilities,
    tasks,
    activities,
    notes,
    stages,
    users,
    notifications,
    auditLogs,
    settings,
  ]);

  return <CrmContext.Provider value={value}>{children}</CrmContext.Provider>;
}

export function useCrm(): CrmContextValue {
  const context = useContext(CrmContext);
  if (!context) throw new Error("useCrm must be used inside <CrmProvider>");
  return context;
}
