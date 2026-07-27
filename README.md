# -FlowDesk-Workspace
```
flowdesk-workspace/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   └── layout.tsx
│   │
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── analytics/
│   │   ├── projects/
│   │   ├── tasks/
│   │   ├── approvals/
│   │   ├── clients/
│   │   ├── invoices/
│   │   ├── team/
│   │   ├── calendar/
│   │   ├── files/
│   │   ├── messages/
│   │   ├── settings/
│   │   └── layout.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   ├── projects/
│   │   ├── tasks/
│   │   ├── approvals/
│   │   ├── clients/
│   │   ├── team/
│   │   ├── files/
│   │   └── notifications/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── ActivityFeed.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── TaskOverview.tsx
│   │   └── ProjectStatus.tsx
│   │
│   ├── projects/
│   ├── tasks/
│   ├── approvals/
│   ├── clients/
│   ├── team/
│   ├── files/
│   └── common/
│
├── hooks/
│   ├── useAuth.ts
│   ├── useProjects.ts
│   ├── useTasks.ts
│   ├── useNotifications.ts
│   └── useTheme.ts
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── utils.ts
│   ├── validators.ts
│   ├── constants.ts
│   └── permissions.ts
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── services/
│   ├── project.service.ts
│   ├── task.service.ts
│   ├── approval.service.ts
│   ├── client.service.ts
│   ├── notification.service.ts
│   └── auth.service.ts
│
├── store/
│   ├── authStore.ts
│   ├── projectStore.ts
│   ├── taskStore.ts
│   ├── uiStore.ts
│   └── notificationStore.ts
│
├── types/
│   ├── project.ts
│   ├── task.ts
│   ├── client.ts
│   ├── approval.ts
│   ├── user.ts
│   └── api.ts
│
├── middleware.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── logo.svg
│
├── .env
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```
```
FlowDesk Workspace

├── Authentication
│   ├── Login
│   ├── Register
│   ├── Forgot Password
│   └── Role Management
│
├── Dashboard
│   ├── Statistics
│   ├── Activity Feed
│   ├── Revenue
│   ├── Team Performance
│   └── Project Summary
│
├── Projects
│   ├── Create
│   ├── Edit
│   ├── Delete
│   ├── Kanban Board
│   ├── Timeline
│   └── Status Tracking
│
├── Tasks
│   ├── Assign
│   ├── Priority
│   ├── Deadline
│   ├── Comments
│   └── Attachments
│
├── Approvals
│   ├── Pending
│   ├── Approved
│   ├── Rejected
│   └── History
│
├── Clients
│   ├── CRM
│   ├── Contacts
│   ├── Projects
│   └── Billing
│
├── Team
│   ├── Members
│   ├── Roles
│   ├── Permissions
│   └── Attendance
│
├── Files
│   ├── Upload
│   ├── Share
│   ├── Preview
│   └── Version History
│
├── Calendar
│   ├── Meetings
│   ├── Deadlines
│   └── Events
│
├── Chat
│   ├── Team Chat
│   ├── Project Chat
│   └── Notifications
│
└── Settings
    ├── Profile
    ├── Workspace
    ├── Billing
    ├── API Keys
    └── Integrations
```
