import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "@/modules/auth/pages/LoginPage";
import { SignupPage } from "@/modules/auth/pages/SignupPage";
import { DashboardPage } from "@/modules/dashboard/pages/DashboardPage";
import { PipelinePage } from "@/modules/pipeline/pages/PipelinePage";
import { CompaniesPage } from "@/modules/companies/pages/CompaniesPage";
import { CompanyDetailPage } from "@/modules/companies/pages/CompanyDetailPage";
import { ContactsPage } from "@/modules/contacts/pages/ContactsPage";
import { ContactDetailPage } from "@/modules/contacts/pages/ContactDetailPage";
import { ActivitiesPage } from "@/modules/activities/pages/ActivitiesPage";
import { TasksPage } from "@/modules/tasks/pages/TasksPage";
import { MapPage } from "@/modules/map/pages/MapPage";
import { AdminUsersPage } from "@/modules/admin/pages/AdminUsersPage";
import { AdminStagesPage } from "@/modules/admin/pages/AdminStagesPage";
import { AdminSettingsPage } from "@/modules/admin/pages/AdminSettingsPage";
import { NotFoundPage } from "@/modules/core/pages/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/crm/pipeline" element={<PipelinePage />} />
      <Route path="/crm/companies" element={<CompaniesPage />} />
      <Route path="/crm/companies/:id" element={<CompanyDetailPage />} />
      <Route path="/crm/contacts" element={<ContactsPage />} />
      <Route path="/crm/contacts/:id" element={<ContactDetailPage />} />
      <Route path="/crm/activities" element={<ActivitiesPage />} />
      <Route path="/crm/tasks" element={<TasksPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/stages" element={<AdminStagesPage />} />
      <Route path="/admin/settings" element={<AdminSettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
