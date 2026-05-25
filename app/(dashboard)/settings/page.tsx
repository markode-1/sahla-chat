'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/store';
import { toast } from 'sonner';
import { t } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    phone: '',
    whatsapp: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Update profile in Supabase
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(t('settings.profileSaved'));
    } catch (error) {
      toast.error(t('settings.profileSaveFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formElement = e.currentTarget as HTMLFormElement;
    const newPassword = (formElement.elements.namedItem('newPassword') as HTMLInputElement)?.value;
    const confirmPassword = (formElement.elements.namedItem('confirmPassword') as HTMLInputElement)?.value;

    if (newPassword !== confirmPassword) {
      toast.error(t('settings.passwordMismatch'));
      setLoading(false);
      return;
    }

    try {
      await supabase.auth.updateUser({ password: newPassword });
      toast.success(t('settings.passwordUpdated'));
      formElement.reset();
    } catch (error) {
      toast.error(t('settings.passwordUpdateFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('settings.title')}</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          {t('settings.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            {t('settings.profileSettings')}
          </h2>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('settings.email')}
              </label>
              <Input value={user?.email} disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('settings.username')}
              </label>
              <Input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('settings.phone')}
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('settings.whatsapp')}
              </label>
              <Input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+1 234 567 8900"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('settings.saveProfile')}
                </>
              ) : (
                t('settings.saveProfile')
              )}
            </Button>
          </form>
        </div>

        {/* Password Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            {t('settings.changePassword')}
          </h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('settings.newPassword')}
              </label>
              <Input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {t('settings.confirmPassword')}
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('settings.updatePassword')}
                </>
              ) : (
                t('settings.updatePassword')
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
