'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Users, Briefcase, TrendingUp, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          router.push('/auth/login');
          return;
        }

        // Check if user is admin email
        if (session.user.email !== 'ca.markode@gmail.com') {
          toast.error('Unauthorized access');
          router.push('/');
          return;
        }

        setAuthorized(true);
      } catch (error) {
        toast.error('Error checking access');
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  const stats = [
    { icon: Users, label: 'Total Users', value: '1,234', color: 'text-blue-600' },
    { icon: Briefcase, label: 'Total Jobs', value: '456', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Active Jobs', value: '234', color: 'text-green-600' },
    { icon: AlertCircle, label: 'Reports', value: '12', color: 'text-red-600' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage platform content and users
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </h3>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Admin Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Users Management */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              User Management
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              View, verify, and manage user accounts
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Users
            </button>
          </div>

          {/* Jobs Management */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Job Management
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Approve, reject, and moderate job listings
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Manage Jobs
            </button>
          </div>

          {/* Analytics */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Analytics
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              View platform statistics and metrics
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Analytics
            </button>
          </div>

          {/* Reports */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Reported Content
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Review and take action on reported content
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
