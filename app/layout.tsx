import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { I18nProvider } from '@/components/providers/i18n-provider';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sahla Chat | سهلة شات',
  description:
    'AI-powered chat and marketplace connecting job seekers, service providers, clients, and professionals',
  keywords: [
    'chat',
    'jobs',
    'services',
    'marketplace',
    'AI',
    'professionals',
    'hiring',
  ],
  openGraph: {
    title: 'Sahla Chat | سهلة شات',
    description:
      'AI-powered chat and marketplace connecting job seekers, service providers, clients, and professionals',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <ThemeProvider>
          <I18nProvider>
            {children}
            <Toaster position="top-right" />
          </I18nProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
