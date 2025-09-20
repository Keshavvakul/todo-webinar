# 🚀 Futuristic Todo — Full-Stack Project

A futuristic, dark-themed **Todo WebApp** built with:

- **Next.js (App Router + Server Actions)**
- **Prisma ORM**
- **PostgreSQL**
- **Tailwind CSS**
- **JWT Auth with HttpOnly cookies**

---

## 🌌 Features

- Landing page with product description + Login CTA.
- Email-only login (dev-friendly) with JWT-based session cookies.
- Protected dashboard that lists todos in a futuristic table.
- CRUD functionality: Create and Delete todos.
- Neon dark theme styling (futuristic vibes).
- Secure server actions (authorized by session).
- Ready for deployment on **Vercel**.

---

## 📌 Development Plan

### Phase 0 — Project Setup

- Initialize repo `futuristic-todo`.
- Create TypeScript Next.js app (App Router).
- Install & configure Tailwind (dark mode = `class`).
- Install Prisma + dependencies.
- Install helper libraries: `jsonwebtoken`, `cookie`, `date-fns`.

### Phase 1 — Database

- Prisma schema with:
  - `User` model (id, email unique, createdAt).
  - `Todo` model (id, title, createdAt, userId).
- Run migrations with `prisma migrate dev --name init`.
- Create a seed script with demo user + todos.

### Phase 2 — Auth

- Minimal login via email.
- `signToken`, `verifyToken` with JWT.
- HttpOnly cookie `todo_session` for sessions.
- Token contains only `userId`.

### Phase 3 — Server Actions

- `signIn(email)` → find/create user, set cookie, redirect to dashboard.
- `signOut()` → clear cookie, redirect to login.
- `getTodos()` → fetch user’s todos.
- `createTodo(title)` → add todo for user.
- `deleteTodo(id)` → delete if owned by user.

### Phase 4 — App Structure

### Phase 5 — Styling

- Dark mode: neon cyan + neon purple accents.
- Futuristic glow effects and hover highlights.
- Minimal todo table with neon borders.
- Accessible modals and forms.

### Phase 6 — UX Flow

- Landing → CTA Login.
- Login → email form → `signIn`.
- Dashboard:
  - Protected route.
  - Todo table with serial #, title, created time, delete button.
  - Add Todo button → modal or inline form.
  - Logout button → `signOut`.

### Phase 7 — Scripts

- `dev`, `build`, `start`
- `db:migrate`, `db:seed`

### Phase 8 — QA Checklist

- [ ] Login redirects correctly.
- [ ] Creating todo shows it at top.
- [ ] Deleting todo removes it.
- [ ] Sign out clears session.
- [ ] Unauthorized access redirects to login.
- [ ] Cross-user delete blocked.
- [ ] Accessibility (labels, ARIA, keyboard navigation).

### Phase 9 — Commit History

1. `chore: init next app (typescript, app router)`
2. `chore: add tailwind and global styles`
3. `chore: add prisma schema and prisma client`
4. `feat: add auth helpers and server actions (signIn/signOut)`
5. `feat: add todo server actions (get/create/delete)`
6. `feat: landing, login and dashboard pages`
7. `feat: add TodoTable and AddTodoForm components`
8. `chore: add seed script and README`
9. `perf: minor style tweaks and accessibility improvements`

### Phase 10 — Deployment

- Deploy to Vercel.
- Add env vars: `DATABASE_URL`, `JWT_SECRET`.
- Run `prisma migrate deploy` during deploy.
- For production: set up connection pooling (PgBouncer).
- Recommend NextAuth/Clerk for real-world auth.

---
