import { getTodos, deleteTodo } from '@/lib/actions';
import { format } from 'date-fns';

export default async function TodoTable() {
  const todos = await getTodos();

  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">No todos yet</h3>
        <p className="text-gray-400">Create your first todo above to get started!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">#</th>
            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Title</th>
            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Created</th>
            <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: any, index: any) => (
            <tr key={todo.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-mono">
                {String(index + 1).padStart(2, '0')}
              </td>
              <td className="py-4 px-4 text-white font-medium">
                {todo.title}
              </td>
              <td className="py-4 px-4 text-gray-400 text-sm">
                {format(new Date(todo.createdAt), 'MMM dd, yyyy HH:mm')}
              </td>
              <td className="py-4 px-4">
                <form action={async () => {
                  'use server';
                  await deleteTodo(todo.id);
                }} className="inline">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-1 px-3 rounded text-sm transition-all duration-200 transform hover:scale-105"
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}