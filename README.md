# Sahla Chat 🚀

> **AI-Powered Chat & Marketplace Platform** - Connecting job seekers, service providers, clients, and professionals

## 📋 Overview

Sahla Chat is a sophisticated marketplace platform that leverages artificial intelligence to connect job seekers, service providers, clients, and professionals through intelligent matching and conversational AI.

## ✨ Key Features (MVP Phase 1)

✅ Modern Landing Page with animations  
✅ Authentication (Google OAuth + Email/Password)  
✅ AI Chat Interface (conversational, no traditional forms)  
✅ Job Listings & Management  
✅ Admin Dashboard (restricted to ca.markode@gmail.com)  
✅ Dark/Light Mode  
✅ Responsive Design  

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Realtime)
- **AI**: OpenAI API via Edge Functions
- **Deployment**: Vercel + Supabase Cloud

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
# Fill in .env.local with your Supabase and OpenAI keys

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
app/
├── (auth)/          # Authentication pages
├── (dashboard)/     # Protected dashboard with chat
├── jobs/            # Job listings and management
├── admin/           # Admin panel
└── page.tsx         # Landing page
```

## 🔐 Admin Access

Admin dashboard is restricted to: **ca.markode@gmail.com**

## 📚 Documentation

- [Setup Guide](docs/setup.md) - Environment configuration
- [Database Schema](docs/schema.md) - Database tables and relationships
- [API Documentation](docs/api.md) - Coming soon

## 🎯 Next Phases

- Phase 2: Services module & Voice features
- Phase 3: Messaging system & Notifications
- Phase 4: Advanced analytics & Admin features
- Phase 5: Mobile app (React Native)

## 📄 License

Private & Proprietary

---

**Built with ❤️ using Next.js & Supabase**

---

**Sahla Chat** | سهلة شات
