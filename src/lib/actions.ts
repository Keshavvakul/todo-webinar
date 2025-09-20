'use server';

import { prisma } from './prisma';
import { getCurrentUser, setSessionCookie, clearSessionCookie } from './auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';

export async function signUp(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Set session cookie
    await setSessionCookie(user.id);

    // Redirect to dashboard
    redirect('/dashboard');
  } catch (error) {
    // Don't catch redirect errors
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    console.error('Sign up error:', error);
    throw new Error('Failed to sign up');
  }
}

export async function signIn(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Set session cookie
    await setSessionCookie(user.id);

    // Redirect to dashboard
    redirect('/dashboard');
  } catch (error) {
    // Don't catch redirect errors
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    console.error('Sign in error:', error);
    throw new Error('Failed to sign in');
  }
}

export async function signOut() {
  await clearSessionCookie();
  redirect('/');
}

export async function getTodos() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/');
  }

  return await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
  });
}

export async function createTodo(title: string) {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Unauthorized');
  }

  const todo = await prisma.todo.create({
    data: {
      title,
      userId: user.id,
    },
  });

  revalidatePath('/dashboard');
  return todo;
}

export async function deleteTodo(id: string) {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Unauthorized');
  }

  // Ensure user owns the todo
  const todo = await prisma.todo.findFirst({
    where: { id, userId: user.id },
  });

  if (!todo) {
    throw new Error('Todo not found or not owned by user');
  }

  await prisma.todo.delete({
    where: { id },
  });

  revalidatePath('/dashboard');
}
