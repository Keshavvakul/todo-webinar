import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import { signOut } from '@/lib/actions';
import TodoTable from '@/components/TodoTable';
import AddTodoForm from '@/components/AddTodoForm';

export default async function Dashboard() {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                🚀 Futuristic Todo
              </h1>
              <p className="text-gray-300 mt-1">Welcome to your dashboard</p>
            </div>
            
            <form action={signOut}>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Add Todo Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Add New Todo</h2>
            <AddTodoForm />
          </div>

          {/* Todo Table */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Your Todos</h2>
            <TodoTable />
          </div>
        </div>
      </main>
    </div>
  );
}
