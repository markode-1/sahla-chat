'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/store';
import { Menu, X, LogOut, Home, MessageSquare, Briefcase, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';
import { User } from '@/types';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setUser, setProfile } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push('/login');
        return;
      }

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (data) {
        setProfile(data);
        setUser({
          id: data.id,
          email: session.user.email || '',
          username: data?.username || '',
          auth_user_id: session.user.id,
          role: 'user',
          created_at: data.created_at,
          updated_at: data.updated_at,
        } as User);
      }

      setLoading(false);
    };

    checkAuth();
  }, [router, setProfile, setUser]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    router.push('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  const navItems = [
    { icon: Home, label: t('sidebar.dashboard'), href: '/dashboard' },
    { icon: MessageSquare, label: t('sidebar.chat'), href: '/dashboard/chat' },
    { icon: Briefcase, label: t('sidebar.jobs'), href: '/jobs' },
    { icon: Settings, label: t('sidebar.settings'), href: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">{t('app.name')}</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800">
          <Button onClick={handleLogout} variant="ghost" className="w-full justify-start">
            <LogOut className="w-5 h-5 mr-2" />
            {t('sidebar.logout')}
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-white dark:bg-slate-900">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="text-sm text-slate-500 dark:text-slate-400">{t('dashboard.subtitle')}</div>
          <div />
        </div>

        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-6">{children}</main>
      </div>
    </div>
  );
}
