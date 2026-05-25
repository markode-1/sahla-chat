'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';

interface JobCard {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  category: string;
}

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock jobs data - will be replaced with API call
  const jobs: JobCard[] = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'Tech Startup',
      location: 'Remote',
      salary: '$80k - $120k',
      description: 'Looking for an experienced React developer to lead our frontend team.',
      category: 'Engineering',
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'Growth Company',
      location: 'Dubai, UAE',
      salary: '$60k - $100k',
      description: 'We need a PM to drive product strategy and roadmap.',
      category: 'Product',
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'Design Agency',
      location: 'Remote',
      salary: '$50k - $80k',
      description: 'Create beautiful and intuitive user experiences.',
      category: 'Design',
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      company: 'E-commerce Platform',
      location: 'Cairo, Egypt',
      salary: '$40k - $70k',
      description: 'Build scalable web applications with modern technologies.',
      category: 'Engineering',
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('jobs.title')}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {t('jobs.subtitle')}
              </p>
            </div>
            <Link href="/jobs/post" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {t('jobs.postJob')}
            </Link>
          </div>

          {/* Search */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder={t('jobs.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">{t('jobs.filter')}</Button>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-400">
              {t('jobs.noJobsFound')}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/jobs/${job.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                          {job.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {job.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full whitespace-nowrap">
                        {job.category}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                      {job.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      {t('jobs.viewDetails')}
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
