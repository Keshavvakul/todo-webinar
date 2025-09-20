const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash('password123', 12);
    
    // Create test user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: hashedPassword,
      },
    });
    
    console.log('✅ Test user created successfully!');
    console.log('Email: test@example.com');
    console.log('Password: password123');
    console.log('User ID:', user.id);
    
  } catch (error) {
    if (error.code === 'P2002') {
      console.log('ℹ️  User already exists');
    } else {
      console.error('❌ Error creating user:', error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
