'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { t } from '@/lib/i18n';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/login`,
    });

    if (error) {
      toast.error(error.message || t('common.error'));
    } else {
      toast.success(t('auth.forgotPasswordSent'));
      setEmail('');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t('auth.forgotPasswordTitle')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {t('auth.forgotPasswordDescription')}
            </p>
          </div>

          <form onSubmit={handleReset} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('auth.email')}
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('auth.emailPlaceholder')}
                required
                disabled={loading}
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
              {loading ? `${t('auth.forgotPassword')}...` : t('auth.forgotPassword')}
            </Button>
          </form>

          <div className="text-center">
            <Link href="/login" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              {t('auth.back')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
