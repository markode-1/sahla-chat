# Sahla AI - Setup & Deployment Guide

## 🎯 What's Been Built (MVP Phase 1)

### ✅ Completed Components

#### Frontend Pages
- **Landing Page** (`/`) - Modern animated SaaS-style homepage with Framer Motion
- **Auth Pages** - Login, Register with Google OAuth + Email/Password
- **Dashboard** - Protected layout with sidebar navigation
- **Chat Page** (`/dashboard/chat`) - AI Chat interface for conversations
- **Jobs Module** - List, Details, and Post job pages
- **Admin Dashboard** (`/admin`) - Restricted to ca.markode@gmail.com
- **Settings Page** - User profile and password management

#### Features
- ✅ TypeScript type safety
- ✅ Zustand state management
- ✅ Dark/Light mode support
- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations
- ✅ Shadcn UI components
- ✅ TailwindCSS styling
- ✅ Toast notifications (Sonner)
- ✅ Protected routes

#### Backend Foundation
- ✅ Supabase client setup
- ✅ TypeScript types for all entities
- ✅ API helper functions
- ✅ Authentication structure
- ✅ Theme provider

---

## 🔧 Setup Instructions

### Step 1: Environment Configuration

1. Create Supabase project at https://supabase.com
2. Get your credentials:
   - `NEXT_PUBLIC_SUPABASE_URL` - Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Service role key

3. Set up Google OAuth:
   - Go to Google Cloud Console
   - Create OAuth 2.0 credentials
   - Get `NEXT_PUBLIC_GOOGLE_CLIENT_ID`

4. Create OpenAI API key:
   - Visit https://platform.openai.com/api-keys
   - Generate new API key

5. Update `.env.local`:
   ```bash
   cp .env.example .env.local
   # Then edit .env.local with your actual values
   ```

### Step 2: Database Setup

1. Create tables in Supabase:

```sql
-- users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id),
  email TEXT NOT NULL UNIQUE,
  username TEXT,
  role TEXT DEFAULT 'user', -- 'user', 'admin', 'moderator'
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  avatar TEXT,
  bio TEXT,
  phone TEXT,
  whatsapp TEXT,
  city TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- jobs table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  salary_range TEXT,
  location TEXT NOT NULL,
  status TEXT DEFAULT 'draft', -- 'draft', 'published', 'closed', 'rejected'
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ai_conversations table
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  conversation_type TEXT NOT NULL, -- 'job_seeking', 'service_offering', etc.
  messages JSONB DEFAULT '[]',
  user_data JSONB,
  status TEXT DEFAULT 'active', -- 'active', 'completed', 'archived'
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- messages table
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID NOT NULL REFERENCES users(id),
  recipient_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now()
);

-- admin_logs table
CREATE TABLE admin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES users(id),
  action TEXT NOT NULL,
  target TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMP DEFAULT now()
);
```

2. Enable Row Level Security (RLS):
```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;
```

3. Create RLS policies (examples):
```sql
-- Users can view their own data
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = auth_user_id);

-- Public can view published jobs
CREATE POLICY "Anyone can view published jobs" ON jobs
  FOR SELECT USING (status = 'published');

-- Admin policy
CREATE POLICY "Admin access" ON users
  FOR ALL USING (email = 'ca.markode@gmail.com');
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📋 What to Test

- [ ] Landing page loads and animations work
- [ ] Sign up with email
- [ ] Login with email
- [ ] Google OAuth login
- [ ] Access dashboard after login
- [ ] Chat interface works (will show dummy response)
- [ ] Jobs listing displays
- [ ] Dark mode toggle works
- [ ] Admin panel shows error if not ca.markode@gmail.com
- [ ] Responsive design on mobile

---

## 🚀 Deployment (Vercel)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial Sahla AI MVP Phase 1"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Import your GitHub repository
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## 📝 Next Steps (Phase 2)

### Priority 1: OpenAI Integration
- Create Supabase Edge Function for OpenAI API calls
- Implement actual chat responses
- Store conversation history

### Priority 2: Services Module
- Create services listing (similar to jobs)
- Service provider profile pages
- Service filtering and search

### Priority 3: Voice Features
- Implement Speech-to-Text
- Implement Text-to-Speech
- Voice message support in chat

### Priority 4: Advanced Features
- Messaging system
- Real-time notifications
- Payment integration
- Admin analytics

---

## 🔐 Security Checklist

- [ ] All environment variables are in .env.local (not git)
- [ ] RLS policies are properly configured
- [ ] Admin email verification works
- [ ] API keys are never exposed to client
- [ ] HTTPS enforced in production
- [ ] CORS properly configured

---

## 📚 Useful Links

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [OpenAI API Docs](https://platform.openai.com/docs)

---

## 🐛 Troubleshooting

### Can't connect to Supabase
- Check `.env.local` has correct URL and keys
- Verify Supabase project is active
- Check network connectivity

### Dark mode not working
- Clear browser localStorage
- Check browser DevTools for errors
- Verify TailwindCSS dark mode is enabled

### Admin panel shows 401
- Confirm you're logged in as ca.markode@gmail.com
- Check Supabase Auth configuration
- Verify email matches exactly

---

## 📞 Support

For issues or questions: ca.markode@gmail.com

---

**Ready to launch! 🚀**
