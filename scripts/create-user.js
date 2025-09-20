const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    console.log('Creating test user...');
    
    // Hash password
    const hashedPassword = await bcrypt.hash('password123', 12);
    console.log('Password hashed successfully');
    
    // Create test user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: hashedPassword,
      },
    });
    
    console.log('✅ Test user created successfully!');
    console.log('📧 Email: test@example.com');
    console.log('🔑 Password: password123');
    console.log('🆔 User ID:', user.id);
    
  } catch (error) {
    if (error.code === 'P2002') {
      console.log('ℹ️  User already exists with this email');
      
      // Try to update existing user with password
      try {
        const hashedPassword = await bcrypt.hash('password123', 12);
        const updatedUser = await prisma.user.update({
          where: { email: 'test@example.com' },
          data: { password: hashedPassword },
        });
        console.log('✅ Updated existing user with password');
        console.log('📧 Email: test@example.com');
        console.log('🔑 Password: password123');
      } catch (updateError) {
        console.error('❌ Error updating user:', updateError);
      }
    } else {
      console.error('❌ Error creating user:', error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
