'use client';

import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-2xl">
      {/* Tab Headers */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'login'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === 'signup'
              ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTab === 'login' ? (
          <div>
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              Welcome Back
            </h2>
            <LoginForm />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => setActiveTab('signup')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              Create Account
            </h2>
            <SignupForm />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={() => setActiveTab('login')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
