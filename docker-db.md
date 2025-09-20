# 🐳 Docker PostgreSQL Database

## Database Connection Details

- **Host**: localhost
- **Port**: 5432
- **Database**: todo_webinar
- **Username**: todo_user
- **Password**: todo_password

## Connection URL

```
DATABASE_URL="postgresql://todo_user:todo_password@localhost:5432/todo_webinar?schema=public"
```

## Docker Commands

### Start the database

```bash
docker start todo-postgres
```

### Stop the database

```bash
docker stop todo-postgres
```

### Remove the database (⚠️ This will delete all data)

```bash
docker rm -f todo-postgres
```

### View database logs

```bash
docker logs todo-postgres
```

### Connect to database directly

```bash
docker exec -it todo-postgres psql -U todo_user -d todo_webinar
```

## Next Steps

1. Add the DATABASE_URL to your `.env` file
2. Run `npm run db:generate` to generate Prisma client
3. Run `npm run db:migrate` to create the database tables
4. Start developing your futuristic todo app! 🚀

