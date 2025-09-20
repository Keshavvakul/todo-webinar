# 🔧 Environment Variables Setup

Create a `.env` file in your project root with the following variables:

```bash
# Database Configuration
DATABASE_URL="postgresql://todo_user:todo_password@localhost:5432/todo_webinar?schema=public"

# JWT Secret for Authentication
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production-make-it-long-and-random"

# Next.js Configuration
NODE_ENV="development"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-for-production"

# Application Settings
APP_NAME="Futuristic Todo"
APP_URL="http://localhost:3000"
APP_DESCRIPTION="A futuristic todo app with dark mode support"

# Security Settings
COOKIE_SECURE="false"
COOKIE_SAME_SITE="lax"
COOKIE_MAX_AGE="604800"

# Development Settings
DEBUG="false"
LOG_LEVEL="info"
```

## 🚀 Quick Setup Commands

1. **Create the .env file:**

   ```bash
   cp env-setup.md .env
   # Then edit .env and remove the markdown formatting
   ```

2. **Or create manually:**
   ```bash
   touch .env
   # Then copy the content above into the file
   ```

## 🔐 Security Notes

- **JWT_SECRET**: Generate a strong random string for production
- **DATABASE_URL**: Update with your actual database credentials
- **COOKIE_SECURE**: Set to `"true"` in production (HTTPS required)

## 🐳 Docker Database Connection

The DATABASE_URL is configured for the Docker PostgreSQL container:

- **Host**: localhost:5432
- **Database**: todo_webinar
- **Username**: todo_user
- **Password**: todo_password

## ✅ Verification

After creating the .env file, restart your development server:

```bash
npm run dev
```

The application should now run perfectly with all environment variables configured!
