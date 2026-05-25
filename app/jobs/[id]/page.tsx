'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  DollarSign,
  Heart,
  Share2,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { t } from '@/lib/i18n';

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [saved, setSaved] = useState(false);

  // Mock job data - will be replaced with API call
  const job = {
    id: jobId,
    title: 'Senior React Developer',
    company: 'Tech Startup',
    location: 'Remote',
    salary: '$80k - $120k',
    description:
      'We are looking for an experienced React developer to join our growing team.',
    fullDescription: `We are looking for a Senior React Developer to lead our frontend team and help shape the future of our platform.

### Responsibilities:
- Lead the development of our React-based frontend applications
- Mentor junior developers and review code
- Collaborate with product and design teams
- Implement best practices and improve performance
- Participate in system design and architecture decisions

### Requirements:
- 5+ years of experience with React
- Strong JavaScript/TypeScript skills
- Experience with state management (Redux, Zustand, etc.)
- Knowledge of modern frontend tooling and practices
- Excellent communication skills
- Experience working in agile teams

### Nice to have:
- Experience with Next.js
- Contributions to open source projects
- Knowledge of Web3 technologies
- Experience with testing frameworks`,
    category: 'Engineering',
    postedDate: '2024-05-20',
    applicants: 24,
    views: 156,
  };

  const handleSave = () => {
    setSaved(!saved);
    toast.success(saved ? t('jobDetail.removeSaved') : t('jobDetail.save'));
  };

  const handleShare = () => {
    toast.success(t('jobDetail.share'));
  };

  const handleApply = () => {
    toast.success(t('jobDetail.applyNow'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
            <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('jobDetail.backToJobs')}
          </Link>

          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {job.title}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                {job.company}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <DollarSign className="w-5 h-5" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Briefcase className="w-5 h-5" />
                  <span>{job.category}</span>
                </div>
              </div>
            </div>

            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium rounded-full">
              {t('jobDetail.active')}
            </span>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleApply}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Apply Now
            </Button>
            <Button
              onClick={handleSave}
              variant="outline"
              className={`flex items-center gap-2 ${
                saved ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700' : ''
              }`}
            >
              <Heart className={`w-4 h-4 ${saved ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button onClick={handleShare} variant="outline">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {t('jobDetail.aboutRole')}
              </h2>
              <div className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {job.fullDescription}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Company Info Card */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                {t('jobDetail.companyInfo')}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {t('jobDetail.companyName')}
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {job.company}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {t('jobDetail.postedDate')}
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {new Date(job.postedDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {t('jobDetail.applicants')}
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {job.applicants} {t('jobDetail.applicants')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                {t('jobDetail.contactRecruiter')}
              </h3>
              <Button className="w-full mb-3 bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                {t('jobDetail.sendMessage')}
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {t('jobDetail.callRecruiter')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
