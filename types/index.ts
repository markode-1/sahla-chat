export type UserRole = 'user' | 'admin' | 'moderator';

export interface User {
  id: string;
  email: string;
  username?: string;
  auth_user_id: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  avatar?: string;
  bio?: string;
  phone?: string;
  whatsapp?: string;
  city?: string;
  verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Job {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  salary_range?: string;
  location: string;
  status: 'draft' | 'published' | 'closed' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface AIConversation {
  id: string;
  user_id: string;
  conversation_type: 'job_seeking' | 'service_offering' | 'service_finding';
  messages: Message[];
  user_data?: Record<string, any>;
  status: 'active' | 'completed' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Message {
  id?: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface JobApplication {
  id: string;
  user_id: string;
  job_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  applied_at: string;
}

export interface AdminLog {
  id: string;
  admin_id: string;
  action: string;
  target: string;
  details?: Record<string, any>;
  created_at: string;
}

export interface AuthState {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  error: string | null;
}
