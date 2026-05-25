'use client';

import { t } from '@/lib/i18n';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t('auth.verifyEmailTitle')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {t('auth.verifyEmailDescription')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
