import DarkModeToggle from '@/components/DarkModeToggle';
import AuthTabs from '@/components/AuthTabs';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <DarkModeToggle />
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Futuristic Todo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Organize your tasks in a futuristic interface
          </p>
        </div>

        {/* Authentication Forms */}
        <AuthTabs />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold">Fast</h3>
            <p className="text-gray-400 text-sm">Lightning fast performance</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="text-white font-semibold">Secure</h3>
            <p className="text-gray-400 text-sm">JWT-based authentication</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-pink-500/20 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🌙</div>
            <h3 className="text-white font-semibold">Dark Mode</h3>
            <p className="text-gray-400 text-sm">Beautiful dark interface</p>
          </div>
        </div>
      </div>
    </div>
  );
}
