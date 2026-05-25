'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, MessageSquare, Users, TrendingUp } from 'lucide-react';
import { t } from '@/lib/i18n';

export default function DashboardPage() {
  const stats = [
    {
      icon: Briefcase,
      label: t('dashboard.stats.activeJobs'),
      value: '24',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      label: t('dashboard.stats.profileViews'),
      value: '156',
      color: 'text-purple-600',
    },
    {
      icon: MessageSquare,
      label: t('dashboard.stats.messages'),
      value: '8',
      color: 'text-green-600',
    },
    {
      icon: TrendingUp,
      label: t('dashboard.stats.matchScore'),
      value: '92%',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('dashboard.title')}</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">{t('dashboard.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</h3>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700"
        >
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4">{t('dashboard.quickActions.lookingForWorkTitle')}</h2>
          <p className="text-blue-800 dark:text-blue-300 mb-4">{t('dashboard.quickActions.lookingForWorkSubtitle')}</p>
          <Link
            href="/jobs"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t('dashboard.quickActions.browseJobs')}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-8 border border-purple-200 dark:border-purple-700"
        >
          <h2 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-4">{t('dashboard.quickActions.chatTitle')}</h2>
          <p className="text-purple-800 dark:text-purple-300 mb-4">{t('dashboard.quickActions.chatSubtitle')}</p>
          <Link
            href="/dashboard/chat"
            className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            {t('dashboard.quickActions.startChat')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
