'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { t } from '@/lib/i18n';

export default function CallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        toast.error(error.message || t('common.error'));
        router.replace('/login');
        return;
      }

      if (data?.session) {
        toast.success(t('auth.loggedIn'));
        router.replace('/chat');
      } else {
        router.replace('/login');
      }
    };

    handleCallback().finally(() => setLoading(false));
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-800 shadow-xl p-8 text-center">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
          {t('auth.callbackProcessingTitle')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {t('auth.callbackProcessingDescription')}
        </p>
        {loading && (
          <div className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-3 text-blue-600 dark:text-blue-200">
            {t('auth.callbackProcessingLoading')}
          </div>
        )}
      </div>
    </div>
  );
}
