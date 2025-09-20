# 🚀 Futuristic Todo App

A modern, full-stack todo application built with Next.js, featuring a futuristic dark theme, secure authentication, and real-time todo management.

## ✨ Features

- **🔐 Secure Authentication**: JWT-based login/signup with bcrypt password hashing
- **🌙 Dark Mode**: Beautiful futuristic UI with neon colors and glassmorphism effects
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Real-time Updates**: Server Actions for instant todo management
- **🗄️ Database**: PostgreSQL with Prisma ORM
- **🐳 Docker**: Easy database setup with Docker
- **🎨 Modern UI**: Tailwind CSS with custom gradients and animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: JWT with HttpOnly cookies, bcrypt
- **Styling**: Tailwind CSS v4 with custom dark theme
- **Development**: ESLint, TypeScript, Hot reload

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker (for database)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd todo_webinar
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   ```bash
   # Start PostgreSQL with Docker
   docker run --name todo-postgres -e POSTGRES_DB=todo_webinar -e POSTGRES_USER=todo_user -e POSTGRES_PASSWORD=todo_password -p 5432:5432 -d postgres:15
   ```

4. **Create environment file**

   ```bash
   # Create .env file with:
   DATABASE_URL="postgresql://todo_user:todo_password@localhost:5432/todo_webinar?schema=public"
   JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
   ```

5. **Run database migrations**

   ```bash
   npm run db:migrate
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Protected dashboard page
│   ├── globals.css        # Global styles with dark mode
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── AuthTabs.tsx       # Login/Signup tabs
│   ├── LoginForm.tsx      # Login form
│   ├── SignupForm.tsx     # Signup form
│   ├── TodoTable.tsx      # Todo management table
│   └── AddTodoForm.tsx    # Add new todo form
└── lib/                   # Utility functions
    ├── actions.ts         # Server Actions
    ├── auth.ts           # Authentication helpers
    └── prisma.ts         # Database client
```

## 🎨 UI Features

- **Futuristic Design**: Neon cyan, purple, and pink gradients
- **Glassmorphism**: Backdrop blur effects with transparent elements
- **Dark Mode**: Beautiful dark theme with toggle support
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design that works on all devices

## 🔐 Authentication

- **Secure Login/Signup**: Separate forms with validation
- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Sessions**: HttpOnly cookies for security
- **Protected Routes**: Automatic redirects for unauthorized access

## 🗄️ Database

- **PostgreSQL**: Robust relational database
- **Prisma ORM**: Type-safe database operations
- **Migrations**: Version-controlled schema changes
- **Relations**: User-Todo relationships with cascade delete

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:migrate   # Run database migrations
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open Prisma Studio
```

## 🐳 Docker Database

The app includes Docker setup for easy database management:

```bash
# Start database
docker start todo-postgres

# Stop database
docker stop todo-postgres

# View database
docker exec -it todo-postgres psql -U todo_user -d todo_webinar
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `JWT_SECRET`
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean
- AWS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Prisma for the excellent ORM
- The open-source community for inspiration

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
