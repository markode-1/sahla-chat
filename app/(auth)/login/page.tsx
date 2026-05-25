'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/store';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, ArrowLeft } from 'lucide-react';
import { t } from '@/lib/i18n';
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const setError = useAuthStore((state) => state.setError);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success(t('auth.loggedIn'));
      router.push('/chat');
    } catch (err: any) {
      const message = err.message || 'Login failed';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/callback`,
        },
      });

      if (error) throw error;
    } catch (err: any) {
      const message = err.message || t('auth.googleLoginFailed');
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('auth.back')}
        </Link>

        {/* Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t('auth.welcomeBack')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {t('auth.signInSubtitle')}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('auth.email')}
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('auth.emailPlaceholder')}
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('auth.password')}
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth.passwordPlaceholder')}
                disabled={loading}
                required
              />
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('auth.signIn') + '...'}
                </>
              ) : (
                t('auth.signIn')
              )}
            </Button>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">
                {t('auth.orContinueWith')}
              </span>
            </div>
          </div>

          <Button
            onClick={handleGoogleLogin}
            disabled={loading}
            variant="outline"
            className="w-full"
          >
            {t('auth.continueWithGoogle')}
          </Button>

          <p className="text-center text-slate-600 dark:text-slate-400 mt-6">
            {t('auth.noAccount')}{' '}
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              {t('auth.signUp')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
