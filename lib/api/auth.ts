import { supabase } from '@/lib/supabase';
import { User, Profile } from '@/types';

export async function getCurrentUser(): Promise<User | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) return null;

  const { data } = await supabase
    .from('users')
    .select('*')
    .eq('auth_user_id', session.user.id)
    .single();

  return data;
}

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  return data;
}

export async function updateUserProfile(
  userId: string,
  updates: Partial<Profile>
) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function isAdmin(userId: string): Promise<boolean> {
  const { data } = await supabase
    .from('users')
    .select('role')
    .eq('id', userId)
    .single();

  return data?.role === 'admin';
}
