'use client';

import { useState } from 'react';
import { createTodo } from '@/lib/actions';

export default function AddTodoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const title = formData.get('title') as string;
    
    if (title.trim()) {
      await createTodo(title.trim());
    }
    
    setIsSubmitting(false);
  }

  return (
    <form action={handleSubmit} className="flex gap-4">
      <input
        name="title"
        type="text"
        required
        placeholder="Enter your todo..."
        className="flex-1 px-4 py-3 bg-gray-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}