# Fairway CRM Frontend

# FAIRWAY CRM — FRONTEND-ONLY DEVELOPMENT PROMPT

## 1. PROJECT OVERVIEW

Build a professional, production-quality CRM web application called **Fairway CRM**.

The product should feel like a modern SaaS CRM similar in usability and information architecture to **Zoho CRM**, but it must be designed specifically around Fairway's CRM requirements.

This phase is **FRONTEND ONLY**.

Do NOT build the backend, database, authentication API, Express server, PostgreSQL connection, or real API integrations in this phase.

The frontend must be architected so that a real Node.js + Express + PostgreSQL backend can be connected later without restructuring the application.

The UI must be fully functional using realistic mock data and local frontend state.

---

# 2. REQUIRED TECHNOLOGY STACK

## Frontend

* React
* TypeScript
* Tailwind CSS
* Vite
* React Router
* Modern reusable React components
* Lucide React for icons
* Use a clean component architecture
* Use TypeScript interfaces/types for all CRM entities

## Future Backend

The frontend will later connect to:

* Node.js
* Express.js
* JavaScript
* REST APIs

## Future Database

* PostgreSQL

Do not implement these backend technologies now.

Create frontend service/API abstraction layers so they can be connected later.

---

# 3. ARCHITECTURE REQUIREMENT

Use:

**Modular / Feature-Based Architecture**

Do NOT create one huge components folder containing everything.

Organize the frontend by business feature.

Recommended structure:

src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── forms/
│   ├── tables/
│   ├── charts/
│   └── feedback/
│
├── modules/
│   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── dashboard/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── companies/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── forms/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── types/
│   │
│   ├── facilities/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── contacts/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── pipeline/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── tasks/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── activities/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── notes/
│   │   ├── components/
│   │   └── types/
│   │
│   ├── map/
│   │   ├── pages/
│   │   ├── components/
│   │   └── types/
│   │
│   └── admin/
│       ├── pages/
│       ├── components/
│       ├── services/
│       └── types/
│
├── layouts/
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
│
├── services/
│   ├── api/
│   └── mock/
│
├── hooks/
│
├── lib/
│
├── types/
│
├── data/
│   └── mock/
│
├── utils/
│
├── constants/
│
├── index.css
└── main.tsx

Keep business logic inside feature modules.

Avoid tightly coupled components.

---

# 4. DESIGN DIRECTION

Create a premium B2B SaaS CRM interface.

The interface should feel:

* Professional
* Clean
* Modern
* Data-focused
* Enterprise-ready
* Fast
* Minimal
* Highly organized
* Easy to scan
* Similar in usability quality to Zoho CRM / HubSpot-style dashboards

Do NOT copy Zoho's exact visual design.

Create an original Fairway CRM design language.

---

# 5. VISUAL DESIGN SYSTEM

## Overall

Use a light professional SaaS interface.

Primary background:

* #F8FAFC

Main surfaces:

* #FFFFFF

Primary text:

* #0F172A

Secondary text:

* #64748B

Borders:

* #E2E8F0

Use subtle shadows.

Avoid excessive gradients.

Avoid oversized decorative elements.

The CRM should prioritize information density and usability.

---

# 6. TYPOGRAPHY

Use a modern SaaS font such as:

* Inter

Typography hierarchy:

Page title:

* 24–30px
* font-semibold

Section title:

* 18–20px
* font-semibold

Card title:

* 15–17px
* font-semibold

Body:

* 14px

Secondary information:

* 12–13px

Maintain excellent readability.

---

# 7. MAIN APPLICATION LAYOUT

After login, use a persistent CRM application shell.

Desktop layout:

LEFT SIDEBAR
+
TOP HEADER
+
MAIN CONTENT

Example:

┌──────────────────────────────────────────────────────────┐
│ Sidebar │ Top Header                                    │
│         ├───────────────────────────────────────────────┤
│         │                                               │
│         │              Main Content                     │
│         │                                               │
│         │                                               │
└─────────┴───────────────────────────────────────────────┘

---

# 8. SIDEBAR

Create a collapsible left sidebar.

Brand:

Fairway CRM

Navigation:

## Main

* Dashboard
* Companies
* Pipeline
* Contacts
* Tasks
* Activities
* Map

## Administration

Only visible to Super Admin:

* Users
* Pipeline Stages
* Settings

Sidebar should support:

* Expanded state
* Collapsed icon-only state
* Active navigation indicator
* Tooltips in collapsed mode
* Smooth transition

Use Lucide icons.

Suggested icons:

Dashboard → LayoutDashboard
Companies → Building2
Pipeline → Kanban
Contacts → Users
Tasks → CheckSquare
Activities → Activity
Map → Map
Users → UserCog
Stages → GitBranch
Settings → Settings

---

# 9. TOP HEADER

Create a clean top navigation bar.

Left:

* Breadcrumb
* Current page title

Right:

* Global search
* Notifications
* Help icon
* User avatar
* User name
* Role
* Dropdown menu

User dropdown:

* My Profile
* Account Settings
* Logout

---

# 10. ROLE-BASED FRONTEND

There are exactly TWO application roles:

## SUPER ADMIN

Super Admin has full access.

Can access:

* Dashboard
* Companies
* Pipeline
* Contacts
* Tasks
* Activities
* Map
* Users
* Pipeline Stages
* Settings

Can:

* Create users
* Edit users
* Disable users
* Assign users
* Create/edit/delete companies
* Assign company owners
* Change pipeline stages
* Manage CRM configuration
* View all CRM records
* View all activities
* View all tasks
* View audit/history information

## ADMIN

Admin has CRM operational access.

Can access:

* Dashboard
* Companies
* Pipeline
* Contacts
* Tasks
* Activities
* Map

Can:

* Create companies
* Edit companies
* View companies
* Manage contacts
* Add notes
* Add activities
* Create tasks
* Update task status
* Change pipeline stage
* Assign/manage CRM records according to frontend permissions

Admin should NOT see:

* User management
* System administration settings
* High-level role management

Create reusable:

* ProtectedRoute
* RoleGuard
* PermissionGuard

The UI should hide restricted navigation items, but the architecture must also be ready for backend authorization later.

---

# 11. AUTHENTICATION UI

Create:

/login

/login should have a premium split-screen SaaS design.

Left:

* Fairway CRM branding
* Short headline
* Supporting text
* Abstract CRM visual / dashboard preview

Right:

Login card

Fields:

* Email
* Password

Options:

* Remember me
* Forgot password

Button:

Sign In

Also show:

* Demo login option

Use mock authentication.

Create demo users:

Super Admin:
email: [superadmin@fairwaycrm.com](mailto:superadmin@fairwaycrm.com)

Admin:
email: [admin@fairwaycrm.com](mailto:admin@fairwaycrm.com)

For demo purposes, allow role selection or demo account login.

Do NOT connect to a real authentication service.

Store mock session state locally.

---

# 12. DASHBOARD

Route:

/dashboard

The dashboard should be the primary CRM overview.

The original scope specifically defines this as the sales/operations CRM dashboard, separate from the AI/data dashboard.

## Header

Title:

Good morning, [User Name]

Subtitle:

Here's what's happening with your CRM today.

Actions:

* Add Company
* Add Task

---

# 13. DASHBOARD KPI CARDS

Create six KPI cards:

1. Total Companies
2. New Leads
3. Contacted
4. Qualified
5. Negotiation
6. Won

Example mock values:

Total Companies:
1,245

New Leads:
86

Contacted:
54

Qualified:
32

Negotiation:
12

Won:
8

Each card should include:

* Icon
* Value
* Label
* Percentage trend
* Trend direction

---

# 14. DASHBOARD CONTENT

Create:

## Sales Pipeline Chart

Display pipeline distribution.

Stages:

New
Contacted
Qualified
Proposal
Negotiation
Won
Lost

Use a clean chart.

---

## My Leads

Table:

Company
Industry
Owner
Stage
Priority
Last Activity

---

## Today's Follow-ups

Table:

Company
Task
Owner
Due
Priority
Status

Example:

ABC Ltd
Call
User 1
Today

XYZ Pvt Ltd
Meeting
User 2
Tomorrow

The source scope explicitly calls for today's follow-ups and overdue follow-ups.

---

## Overdue Follow-ups

Show overdue tasks with clear warning states.

---

## Recently Contacted

Show recent company interactions.

---

## Recently Added Companies

Show newly created companies.

---

## Recent Activities

Show a compact chronological feed.

---

# 15. COMPANY MANAGEMENT

Route:

/crm/companies

This is one of the most important screens.

Create a professional CRM data table.

Header:

Companies

Subtitle:

Manage companies, accounts and prospects.

Actions:

* Add Company
* Import
* Export

---

# 16. COMPANY TABLE

Columns:

* Company
* Industry
* Contact
* Location
* Owner
* Stage
* Priority
* Status
* Next Follow-up
* Last Activity
* Actions

Company row should include:

Company logo/avatar
Company name
Legal name

Example:

ABC Industries
ABC Industries Pvt Ltd

---

# 17. COMPANY SEARCH

Create global company search.

Search by:

* Company name
* Contact name
* Phone
* Email
* City

These search fields are defined in the source document.

Search should support:

* Instant filtering
* Clear search
* Keyboard-friendly interaction

---

# 18. COMPANY FILTERS

Create filter drawer/popover.

Filters:

* Industry
* Prospect Stage
* Owner
* Priority
* Status
* Facility Type
* Created Date
* Last Activity
* Next Follow-up

Also support:

* Clear filters
* Apply filters
* Save filter UI

The source scope specifically identifies these CRM filters.

---

# 19. COMPANY STATUS

Use badges:

Active
Inactive
Prospect
Customer
Lost

Keep badge styling subtle.

---

# 20. PRIORITY

Use:

Low
Medium
High
Urgent

Use visual indicators.

---

# 21. PIPELINE STAGE

Pipeline stages must be configurable.

Default stages:

New
Contacted
Qualified
Proposal
Negotiation
Won
Lost

The source document explicitly requires configurable stages rather than hardcoded stages.

---

# 22. ADD COMPANY

Create an Add Company modal or dedicated form.

Fields:

## Company Information

* Company Name
* Legal Name
* Website
* Industry
* Company Status
* Phone
* Email

## Address

* Address
* City
* Pincode

## CRM Information

* Owner
* Prospect Stage
* Priority
* Expected Value
* Next Follow-up

Buttons:

Cancel
Create Company

Validation:

* Required fields
* Email validation
* Website validation
* Proper error messages

After creation:

Show success toast.

---

# 23. COMPANY DETAIL PAGE

Route:

/crm/companies/:id

This is the most important detail page.

The source document specifies that company detail should contain the company header, contact information, facilities, CRM activity, tasks, and history rather than being a static information page.

---

# 24. COMPANY DETAIL HEADER

Display:

Company logo/avatar

Company Name

Industry

Status

Owner

Prospect Stage

Priority

Actions:

* Call
* Email
* Add Note
* Add Task
* View Map
* Edit Company
* More

Example:

ABC Industries

Chemicals

Qualified

Owner: Bhavya

Priority: High

---

# 25. COMPANY DETAIL TABS

Create tabs:

Overview
Contacts
Facilities
Activities
Tasks
Notes
History

Use sticky tabs/header where appropriate.

---

# 26. OVERVIEW TAB

Create two-column layout.

Left:

Company Information

* Company name
* Legal name
* Industry
* Website
* Phone
* Email
* Address
* City
* Pincode
* Status
* Owner
* Stage
* Priority

Right:

CRM Summary

* Current stage
* Expected value
* Next follow-up
* Last activity
* Assigned owner

---

# 27. CONTACTS SECTION

A company can have multiple contacts.

Do NOT design the system as one company = one contact.

Create:

Contacts table

Columns:

* Name
* Designation
* Department
* Phone
* Email
* Primary
* Actions

Example:

Rahul Shah
Plant Manager

Amit Patel
Purchase Manager

Neha Mehta
Operations Head

The source scope recommends individual contact records linked to companies.

---

# 28. ADD CONTACT

Create modal:

* Full Name
* Designation
* Department
* Phone
* Email
* LinkedIn URL
* Primary Contact toggle
* Notes

Buttons:

Cancel
Add Contact

---

# 29. CONTACT DETAIL

Route:

/crm/contacts/:id

Display:

Contact header

* Name
* Designation
* Company
* Department
* Phone
* Email
* LinkedIn

Actions:

* Call
* Email
* Add Activity
* Add Task

Below:

Activity timeline related to this contact.

---

# 30. FACILITIES

Facilities must remain separate from companies.

A company can own multiple:

* Plants
* Offices
* Warehouses

Each facility has its own:

* Location
* Latitude
* Longitude
* Status

This separation is an explicit requirement in the source document.

Display facility cards/table:

Facility Name
Facility Type
Address
Status
Location
Actions

Example:

ABC Industries

* Surat Plant
* Vapi Warehouse

---

# 31. ADD FACILITY

Fields:

* Facility Name
* Facility Type
* Address
* Latitude
* Longitude
* Facility Status
* Contact Information

Buttons:

Cancel
Add Facility

---

# 32. CRM PIPELINE

Route:

/crm/pipeline

Create a full Kanban CRM pipeline.

Desktop:

┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ New      │ Contacted│ Qualified│ Proposal │Negotiation│
│          │          │          │          │           │
│ Card     │ Card     │ Card     │ Card     │ Card      │
│ Card     │ Card     │ Card     │ Card     │ Card      │
└──────────┴──────────┴──────────┴──────────┴───────────┘

Additional:

Won
Lost

---

# 33. PIPELINE CARD

Each company card:

Company logo/avatar
Company name
Industry
Owner
Expected Value
Priority
Next Follow-up

Actions:

* Open company
* Change owner
* Change stage
* Add task

Use drag-and-drop UI.

Dragging a card between stages should update mock state.

Show toast:

"Company moved to Qualified"

---

# 34. PIPELINE FILTERS

Top toolbar:

* Search
* Owner
* Priority
* Industry
* Value
* Date
* Clear filters

Also include:

Board / List toggle.

---

# 35. PIPELINE STAGE MANAGEMENT

Super Admin only.

Route:

/admin/stages

Display:

Stage Name
Order
Color
Active
Companies
Actions

Actions:

* Add Stage
* Edit Stage
* Reorder
* Activate/Deactivate

Default stages:

New
Contacted
Qualified
Proposal
Negotiation
Won
Lost

Do not hardcode the UI around only these stages.

Stages must come from mock configuration.

---

# 36. TASK MANAGEMENT

Routes:

/crm/tasks

Create a professional task management screen.

Header:

Tasks

Actions:

* Add Task

Filters:

* All
* Today
* Upcoming
* Overdue
* Completed

---

# 37. TASK TABLE

Columns:

* Task
* Company
* Contact
* Type
* Assigned To
* Due Date
* Priority
* Status
* Actions

Task types:

Call
Meeting
Email
Follow-up
Other

Task statuses:

Pending
Completed
Cancelled

These task fields and statuses are specified in the source scope.

---

# 38. ADD TASK

Fields:

* Company
* Facility optional
* Contact optional
* Assigned User
* Task Type
* Description
* Due Date
* Priority
* Status

Create mock task after submission.

---

# 39. ACTIVITY MANAGEMENT

Route:

/crm/activities

Create activity timeline/list.

Activity types:

* Call
* Email
* Meeting
* Note
* Follow-up
* Stage Change

Each activity displays:

Date
Type
Description
Company
Contact
User

---

# 40. ACTIVITY TIMELINE

Inside company detail:

Display a chronological vertical timeline.

Example:

23 Aug
CALL
Called Rahul Shah

"Discussed warehouse requirement"

21 Aug
NOTE
Note added

"Company expanding production"

18 Aug
EMAIL
Email sent

15 Aug
STAGE
Stage changed

Contacted → Qualified

This chronological company activity model is explicitly defined in the source document.

---

# 41. NOTES

Notes are internal CRM notes.

Display notes:

* Note content
* Created by
* Created date
* Updated date

Create:

Add Note

Edit Note

Delete Note

Use a clean note card design.

Notes must visually appear private/internal.

The backend will later enforce authorization.

The source specifically states notes are private to authorized CRM users.

---

# 42. HISTORY / AUDIT UI

Inside company detail:

History tab.

Show:

Who changed what
When it changed

Examples:

Bhavya changed stage
Contacted → Qualified

Admin changed owner
Rahul → Bhavya

Admin updated priority
Medium → High

Use timeline style.

---

# 43. MAP PAGE

Route:

/map

Create a CRM map experience.

For frontend prototype, use a map placeholder or mock map component if a real map API is not configured.

Do not require a paid map API.

Show:

* Facility pins
* Company markers
* Search
* Filters
* Selected facility/company panel

Important relationship:

Map → Company Marker → Company Detail → CRM Actions

CRM → View on Map

The source document explicitly requires CRM and map to behave as one connected product.

---

# 44. MAP SIDE PANEL

When clicking a marker:

Show:

Company Name
Facility Name
Industry
Status
Owner
Stage

Buttons:

View Company
View Facility
Add Note
Add Follow-up

---

# 45. USERS MANAGEMENT

Super Admin only.

Route:

/admin/users

Create table:

Name
Email
Role
Status
Last Active
Created Date
Actions

Actions:

* Add User
* Edit User
* Disable User
* Activate User
* Reset Password UI

Roles:

Super Admin
Admin

Do not create Sales / Analyst / Viewer roles.

---

# 46. ADD USER

Modal:

Full Name
Email
Role
Status

Role options:

Super Admin
Admin

Buttons:

Cancel
Create User

Use frontend mock data.

---

# 47. SETTINGS

Route:

/admin/settings

Super Admin only.

Create settings sections:

## CRM Settings

* Default pipeline
* Default priority
* Default company status

## User Preferences

* Timezone
* Date format

## Interface

* Compact mode
* Sidebar collapsed

Settings should be visually structured with cards and switches.

---

# 48. GLOBAL SEARCH

Create a global search experience in the top header.

Search across:

Companies
Contacts
Tasks
Activities

When user types:

Show categorized results.

Example:

COMPANIES
ABC Industries

CONTACTS
Rahul Shah

TASKS
Call ABC Industries

ACTIVITIES
Called Rahul Shah

Clicking a result should navigate to the appropriate detail page.

---

# 49. NOTIFICATIONS

Create notification dropdown.

Example:

3 notifications

* Follow-up due today
* Company assigned to you
* Task overdue

Each notification:

Icon
Title
Description
Time
Read/unread state

Use mock notifications.

---

# 50. RESPONSIVE DESIGN

The entire CRM must be responsive.

## Desktop

Full sidebar
Multi-column dashboards
Full Kanban
Full tables

## Tablet

Collapsible sidebar
Responsive tables
Horizontal scrolling where necessary
Two-column layouts where appropriate

## Mobile

Sidebar becomes mobile drawer.

Dashboard cards:

1 column

Tables:

Use responsive card/list layout where appropriate.

Pipeline:

Horizontal scroll Kanban.

Company detail:

Stack all sections vertically.

Do NOT simply shrink desktop UI.

Create proper responsive UX.

---

# 51. COMPONENT SYSTEM

Create reusable components:

Button
Input
Textarea
Select
MultiSelect
DatePicker
Modal
Drawer
Dropdown
Tabs
Badge
Avatar
Tooltip
Toast
ConfirmDialog
DataTable
Pagination
EmptyState
LoadingState
Skeleton
SearchInput
FilterBar
StatCard
ChartCard
Timeline
KanbanColumn
KanbanCard
PageHeader
Breadcrumb
UserAvatar
StatusBadge
PriorityBadge

Do not duplicate these components inside every feature.

---

# 52. TABLE UX

All major tables should support:

* Search
* Filters
* Sorting
* Pagination
* Row actions
* Empty state
* Loading state
* Responsive behavior

Use realistic mock data.

---

# 53. EMPTY STATES

Every list page must have a professional empty state.

Example:

No companies found.

Try changing your filters or add a new company.

Button:

Add Company

---

# 54. LOADING STATES

Use skeleton loaders for:

Dashboard
Tables
Company detail
Pipeline
Activities

Do not use blank screens.

---

# 55. ERROR STATES

Create reusable error UI.

Example:

Something went wrong.

Please try again.

Button:

Retry

---

# 56. MOCK DATA

Create realistic CRM mock data.

Minimum:

20 companies
30 contacts
20 facilities
30 tasks
40 activities
20 notes
7 pipeline stages
5 users
10 notifications

Companies should have realistic Indian business data.

Example industries:

Chemicals
Manufacturing
Textiles
Pharmaceuticals
Logistics
Engineering
Food Processing
Automotive

Cities:

Surat
Vapi
Ahmedabad
Vadodara
Rajkot
Mumbai
Pune

---

# 57. TYPESCRIPT TYPES

Create strong types.

Example conceptual types:

User
Company
Facility
Contact
CRMLead
CRMStage
Activity
Note
Task
Notification
AuditLog
CompanyAssignment

Do not use `any` for CRM business entities.

---

# 58. MOCK API ARCHITECTURE

Even though this phase has no backend, create service abstractions.

Example:

services/
├── api/
│   ├── companies.api.ts
│   ├── contacts.api.ts
│   ├── tasks.api.ts
│   ├── activities.api.ts
│   ├── pipeline.api.ts
│   └── users.api.ts
│
└── mock/
├── companies.mock.ts
├── contacts.mock.ts
├── tasks.mock.ts
├── activities.mock.ts
└── users.mock.ts

The UI should call service functions rather than directly manipulating hardcoded arrays everywhere.

Later these services can call:

Node.js + Express REST APIs.

---

# 59. FUTURE API CONTRACT

Prepare frontend services around endpoints similar to:

POST /companies
GET /companies
GET /companies/:id
PUT /companies/:id
DELETE /companies/:id

POST /companies/:id/contacts
GET /companies/:id/contacts

POST /companies/:id/notes
GET /companies/:id/notes

POST /companies/:id/activities
GET /companies/:id/activities

POST /companies/:id/tasks
GET /companies/:id/tasks

PUT /companies/:id/stage
PUT /companies/:id/owner

GET /crm/pipeline
GET /crm/dashboard
GET /crm/followups
GET /crm/activities
GET /crm/search
GET /crm/filters

These endpoint concepts come from the uploaded CRM scope.

Do not implement the actual Express APIs yet.

---

# 60. ROUTING

Implement routes:

/login

/dashboard

/crm
/crm/companies
/crm/companies/:id
/crm/contacts
/crm/contacts/:id
/crm/pipeline
/crm/tasks
/crm/activities

/map

/admin/users
/admin/stages
/admin/settings

Protect routes using role-aware frontend guards.

---

# 61. URL STRUCTURE

Use clean REST-style frontend URLs.

Examples:

/crm/companies
/crm/companies/company-001
/crm/contacts/contact-001
/crm/tasks
/crm/activities

Do not use query-heavy URLs for basic navigation.

---

# 62. DATA RELATIONSHIP

Important CRM hierarchy:

Company
│
├── Facilities
│
├── Contacts
│
├── Notes
│
├── Activities
│
├── Tasks
│
└── Stage History

Users are responsible for ownership and assignments.

This relationship is the core of the Fairway CRM model.

---

# 63. IMPORTANT COMPANY/FACILITY RULE

Never merge company and facility into one entity.

Company:

Business/account-level record.

Facility:

Physical location belonging to a company.

A company can have multiple facilities.

Each facility has independent:

* Address
* Latitude
* Longitude
* Status
* Type

This must be reflected in the UI architecture.

---

# 64. COMPANY DETAIL UX

The company detail page should feel like a real CRM workspace.

Top:

Company header + actions

Middle:

Overview / Contacts / Facilities

Bottom:

Timeline / Tasks / Notes / History

Users should be able to perform CRM actions without leaving the company page.

Example:

Open company
→ Add Note
→ Add Task
→ Change Stage
→ Assign Owner
→ View Map

---

# 65. MODALS VS PAGES

Use modals for small actions:

* Add Contact
* Add Note
* Add Task
* Add Facility
* Edit Company
* Add User
* Add Pipeline Stage

Use dedicated pages for:

* Dashboard
* Company list
* Company detail
* Contacts
* Tasks
* Activities
* Pipeline
* Map
* Admin Users
* Admin Stages
* Settings

---

# 66. TOAST NOTIFICATIONS

Use toast feedback for actions.

Examples:

"Company created successfully."

"Company updated successfully."

"Contact added successfully."

"Task created successfully."

"Stage updated successfully."

"Owner assigned successfully."

"Note added successfully."

---

# 67. CONFIRMATION DIALOGS

Before destructive actions:

Delete company
Delete contact
Delete note
Delete task
Disable user
Delete pipeline stage

Show confirmation dialog.

Example:

Delete Company?

This action cannot be undone.

Buttons:

Cancel
Delete

---

# 68. ACCESSIBILITY

Implement:

* Keyboard navigation
* Visible focus states
* Proper labels
* Accessible buttons
* ARIA labels where required
* Good color contrast
* Tooltips for icon-only buttons

---

# 69. PERFORMANCE

Keep the frontend fast.

Avoid unnecessary re-renders.

Use reusable components.

Lazy-load larger routes where appropriate.

Do not install unnecessary libraries.

Keep the application maintainable.

---

# 70. OUT OF SCOPE

Do NOT implement these in this frontend phase:

* WhatsApp integration
* Email automation
* Calling integration
* Marketing automation
* Advanced sales forecasting
* Full ERP
* Salesforce integration
* HubSpot integration
* Complex workflow automation
* AI chatbot
* AI agent
* AI lead scoring

These are explicitly listed as later-phase functionality in the source scope.

Do not add these features simply because they are common CRM features.

---

# 71. IMPORTANT FRONTEND-ONLY RULE

This is a FRONTEND DESIGN + FRONTEND FUNCTIONAL PROTOTYPE.

Use:

* Mock authentication
* Mock data
* Local state
* Mock service functions
* Frontend routing

Do NOT create:

* Express server
* PostgreSQL database
* Backend controllers
* Backend models
* Backend middleware
* Real JWT authentication
* Real API calls
* Database migrations

However, structure the frontend so those can be connected later.

---

# 72. FINAL UI QUALITY REQUIREMENT

The finished application should look like a real commercial CRM product, not a demo template.

Prioritize:

1. Clean visual hierarchy
2. Excellent spacing
3. Professional tables
4. Strong dashboard
5. Excellent company detail page
6. Smooth Kanban experience
7. Clear status/priority badges
8. Excellent search and filters
9. Responsive layouts
10. Consistent design system
11. Role-aware navigation
12. Reusable components
13. Realistic mock data
14. Empty/loading/error states
15. Production-quality UX

Avoid:

* Excessive rounded cards
* Excessive shadows
* Huge headings
* Random colors
* Unnecessary gradients
* Generic dashboard templates
* Inconsistent spacing
* Duplicated components
* Hardcoded business logic scattered throughout the application

---

# 73. IMPLEMENTATION ORDER

Build the frontend in this order:

### Phase 1 — Foundation

* Vite
* React
* TypeScript
* Tailwind
* Router
* Global styles
* Design system
* Layout
* Sidebar
* Header

### Phase 2 — Authentication

* Login
* Mock authentication
* Role state
* Protected routes
* Role guards

### Phase 3 — Dashboard

* KPI cards
* Pipeline chart
* My leads
* Follow-ups
* Recent companies
* Recent activities

### Phase 4 — Companies

* Company list
* Search
* Filters
* Pagination
* Add company
* Edit company
* Company detail

### Phase 5 — CRM Relationships

* Contacts
* Facilities
* Notes
* Activities
* Tasks
* History

### Phase 6 — Pipeline

* Kanban
* Drag/drop
* Stage filters
* Stage management UI

### Phase 7 — Map

* Mock map
* Facility markers
* Company detail integration
* View on Map

### Phase 8 — Administration

* Users
* Roles
* Pipeline stages
* Settings

### Phase 9 — Polish

* Responsive design
* Loading states
* Empty states
* Error states
* Toasts
* Confirmation dialogs
* Accessibility
* Final UI consistency

---

# 74. FINAL REQUIREMENT

Before considering the frontend complete, verify that:

* Login works with mock users
* Super Admin sees all navigation
* Admin does not see administration navigation
* Dashboard works
* Company CRUD UI works with mock state
* Company detail works
* Contacts work
* Facilities work
* Notes work
* Activities work
* Tasks work
* Pipeline Kanban works
* Stage movement works
* Search works
* Filters work
* Map interaction works with mock data
* User management works for Super Admin
* Stage management works for Super Admin
* Settings page works
* Responsive layout works
* No page is visually incomplete
* No placeholder "Lorem ipsum" content exists
* No unnecessary features are added
* No backend implementation is created

The final result should be a polished **Fairway CRM frontend prototype** that can later connect directly to a Node.js + Express + PostgreSQL backend without redesigning the frontend architecture.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ad03dfa0-df8d-4f99-a4c6-a44c87d1937b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
