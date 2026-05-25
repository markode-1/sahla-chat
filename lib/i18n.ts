export type Lang = 'en' | 'ar';

export type I18nKey =
  | 'app.name'
  | 'nav.login'
  | 'nav.register'
  | 'auth.back'
  | 'auth.welcomeBack'
  | 'auth.signInSubtitle'
  | 'auth.email'
  | 'auth.password'
  | 'auth.forgotPassword'
  | 'auth.forgotPasswordTitle'
  | 'auth.forgotPasswordDescription'
  | 'auth.forgotPasswordSent'
  | 'auth.signIn'
  | 'auth.orContinueWith'
  | 'auth.continueWithGoogle'
  | 'auth.noAccount'
  | 'auth.signUp'
  | 'auth.signUpSubtitle'
  | 'auth.creatingAccount'
  | 'auth.passwordMismatch'
  | 'auth.passwordTooShort'
  | 'auth.accountCreated'
  | 'auth.registrationFailed'
  | 'auth.googleSignupFailed'

  | 'auth.createAccount'
  | 'auth.createAccountSubtitle'
  | 'auth.confirmPassword'
  | 'auth.createAccountButton'
  | 'auth.orSignUpWith'
  | 'auth.signUpWithGoogle'
  | 'auth.alreadyHaveAccount'
  | 'auth.signInAlt'
  | 'auth.getStarted'
  | 'auth.getStartedFree'
  | 'auth.haveAccount'
  | 'auth.loggedIn'
  | 'auth.loginFailed'
  | 'auth.googleLoginFailed'
  | 'auth.verifyEmailTitle'
  | 'auth.verifyEmailDescription'
  | 'auth.callbackProcessingTitle'
  | 'auth.callbackProcessingDescription'
  | 'auth.callbackProcessingLoading'
  | 'auth.emailPlaceholder'
  | 'auth.passwordPlaceholder'

  | 'dashboard.title'
  | 'dashboard.subtitle'
  | 'dashboard.quickActions.lookingForWorkTitle'
  | 'dashboard.quickActions.lookingForWorkSubtitle'
  | 'dashboard.quickActions.browseJobs'
  | 'dashboard.quickActions.chatTitle'
  | 'dashboard.quickActions.chatSubtitle'
  | 'dashboard.quickActions.startChat'
  | 'home.hero.title'
  | 'home.hero.highlight'
  | 'home.hero.subtitle'
  | 'home.hero.ctaPrimary'
  | 'home.hero.ctaSecondary'
  | 'home.features.title'
  | 'home.features.subtitle'
  | 'home.features.aiChatTitle'
  | 'home.features.aiChatDesc'
  | 'home.features.smartMatchTitle'
  | 'home.features.smartMatchDesc'
  | 'home.features.communityTitle'
  | 'home.features.communityDesc'
  | 'home.features.fastTitle'
  | 'home.features.fastDesc'
  | 'home.cta.title'
  | 'home.cta.subtitle'
  | 'home.cta.button'

  | 'dashboard.stats.activeJobs'
  | 'dashboard.stats.profileViews'
  | 'dashboard.stats.messages'
  | 'dashboard.stats.matchScore'

  | 'sidebar.dashboard'
  | 'sidebar.chat'
  | 'sidebar.jobs'
  | 'sidebar.settings'
  | 'sidebar.logout'

  | 'chat.inputPlaceholder'
  | 'chat.send'
  | 'chat.loading'
  | 'chat.welcome'
  | 'chat.sendFailed'

  | 'settings.title'
  | 'settings.subtitle'
  | 'settings.profileSettings'
  | 'settings.email'
  | 'settings.username'
  | 'settings.phone'
  | 'settings.whatsapp'
  | 'settings.saveProfile'
  | 'settings.changePassword'
  | 'settings.newPassword'
  | 'settings.confirmPassword'
  | 'settings.updatePassword'
  | 'settings.profileSaved'
  | 'settings.profileSaveFailed'
  | 'settings.passwordMismatch'
  | 'settings.passwordUpdated'
  | 'settings.passwordUpdateFailed'

  | 'jobs.title'
  | 'jobs.subtitle'
  | 'jobs.postJob'
  | 'jobs.searchPlaceholder'
  | 'jobs.filter'
  | 'jobs.noJobsFound'
  | 'jobs.viewDetails'

  | 'jobDetail.backToJobs'
  | 'jobDetail.applyNow'
  | 'jobDetail.removeSaved'
  | 'jobDetail.save'
  | 'jobDetail.share'
  | 'jobDetail.aboutRole'
  | 'jobDetail.companyInfo'
  | 'jobDetail.companyName'
  | 'jobDetail.postedDate'
  | 'jobDetail.applicants'
  | 'jobDetail.contactRecruiter'
  | 'jobDetail.sendMessage'
  | 'jobDetail.callRecruiter'
  | 'jobDetail.active'

  | 'postJob.backToJobs'
  | 'postJob.title'
  | 'postJob.subtitle'
  | 'postJob.jobTitle'
  | 'postJob.category'
  | 'postJob.location'
  | 'postJob.jobType'
  | 'postJob.minimumSalary'
  | 'postJob.maximumSalary'
  | 'postJob.jobDescription'
  | 'postJob.postJob'
  | 'postJob.cancel'

  | 'admin.title'
  | 'admin.subtitle'
  | 'admin.userManagement'
  | 'admin.jobsManagement'
  | 'admin.analytics'
  | 'admin.reports'
  | 'admin.viewUsers'
  | 'admin.manageJobs'
  | 'admin.viewAnalytics'
  | 'admin.viewReports'
  | 'admin.stats.totalUsers'
  | 'admin.stats.totalJobs'
  | 'admin.stats.activeJobs'
  | 'admin.stats.reports'
  | 'admin.section.userManagementDescription'
  | 'admin.section.jobsManagementDescription'
  | 'admin.section.analyticsDescription'
  | 'admin.section.reportsDescription'

  | 'common.privacy'
  | 'common.terms'
  | 'common.contact'
  | 'common.unauthorized'
  | 'common.error'
  | 'common.getStarted'
  | 'common.signIn';

const dict: Record<Lang, Record<I18nKey, string>> = {
  en: {
    'app.name': 'Sahla Chat',
    'nav.login': 'Login',
    'nav.register': 'Sign Up',
    'auth.back': 'Back',
    'auth.welcomeBack': 'Welcome Back',
    'auth.signInSubtitle': 'Sign in to your Sahla AI account',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.forgotPassword': 'Forgot password?',
    'auth.forgotPasswordTitle': 'Reset your password',
    'auth.forgotPasswordDescription': 'Enter your email and we will send you a reset link.',
    'auth.forgotPasswordSent': 'Password reset email sent. Check your inbox.',
    'auth.signIn': 'Sign In',
    'auth.orContinueWith': 'Or continue with',
    'auth.continueWithGoogle': 'Continue with Google',
    'auth.noAccount': "Don't have an account?",
    'auth.signUp': 'Sign up',
    'auth.signUpSubtitle': 'Join Sahla AI and start connecting',
    'auth.creatingAccount': 'Creating account...',

    'auth.createAccount': 'Create Account',
    'auth.createAccountSubtitle': 'Join Sahla AI and start connecting',
    'auth.confirmPassword': 'Confirm Password',
    'auth.createAccountButton': 'Create Account',
    'auth.passwordMismatch': 'Passwords do not match',
    'auth.passwordTooShort': 'Password must be at least 6 characters',
    'auth.accountCreated': 'Account created! Please check your email to verify.',
    'auth.registrationFailed': 'Registration failed',
    'auth.googleSignupFailed': 'Google signup failed',
    'auth.orSignUpWith': 'Or sign up with',
    'auth.signUpWithGoogle': 'Sign up with Google',
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.signInAlt': 'Sign in',
    'auth.getStarted': 'Get Started',
    'auth.getStartedFree': 'Get Started Free',
    'auth.haveAccount': 'Already have an account?',
    'auth.loggedIn': 'Logged in successfully!',
    'auth.loginFailed': 'Login failed',
    'auth.googleLoginFailed': 'Google login failed',
    'auth.verifyEmailTitle': 'Check Your Email',
    'auth.verifyEmailDescription': "We've sent you a confirmation link. Please check your inbox to verify your email address.",
    'auth.callbackProcessingTitle': 'Processing Sign-In',
    'auth.callbackProcessingDescription': 'Finalizing your sign-in. You will be redirected once authentication is complete.',
    'auth.callbackProcessingLoading': 'Processing...',
    'auth.emailPlaceholder': 'you@example.com',
    'auth.passwordPlaceholder': '••••••••',

    'dashboard.title': 'Dashboard',
    'dashboard.subtitle': "Welcome back! Here's what's happening with your account.",
    'dashboard.quickActions.lookingForWorkTitle': 'Looking for Work?',
    'dashboard.quickActions.lookingForWorkSubtitle': 'Browse thousands of job opportunities matched to your skills.',
    'dashboard.quickActions.browseJobs': 'Browse Jobs',
    'dashboard.quickActions.chatTitle': 'Chat with AI Assistant',
    'dashboard.quickActions.chatSubtitle': 'Let our AI help you find the perfect match with conversational AI.',
    'dashboard.quickActions.startChat': 'Start Chat',
    'home.hero.title': 'Connect Through Chat',
    'home.hero.highlight': 'AI-Powered Marketplace',
    'home.hero.subtitle': 'Sahla Chat connects job seekers, service providers, clients, and professionals through intelligent AI-powered conversations and matching',
    'home.hero.ctaPrimary': 'Get Started',
    'home.hero.ctaSecondary': 'Sign In',
    'home.features.title': 'Why Choose Sahla Chat?',
    'home.features.subtitle': 'Our platform combines cutting-edge AI technology with a seamless user experience',
    'home.features.aiChatTitle': 'AI Chat Assistant',
    'home.features.aiChatDesc': 'Intelligent conversations that understand your needs',
    'home.features.smartMatchTitle': 'Smart Matching',
    'home.features.smartMatchDesc': 'AI-powered job and service matching',
    'home.features.communityTitle': 'Community',
    'home.features.communityDesc': 'Connect with verified professionals',
    'home.features.fastTitle': 'Lightning Fast',
    'home.features.fastDesc': 'Real-time updates and notifications',
    'home.cta.title': 'Ready to Transform Your Career?',
    'home.cta.subtitle': 'Join thousands of professionals finding their perfect match with Sahla Chat',
    'home.cta.button': 'Get Started Free',
    'dashboard.stats.activeJobs': 'Active Jobs',
    'dashboard.stats.profileViews': 'Profile Views',
    'dashboard.stats.messages': 'Messages',
    'dashboard.stats.matchScore': 'Match Score',

    'sidebar.dashboard': 'Dashboard',
    'sidebar.chat': 'Chat',
    'sidebar.jobs': 'Jobs',
    'sidebar.settings': 'Settings',
    'sidebar.logout': 'Logout',

    'chat.inputPlaceholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.loading': 'Loading...',
    'chat.welcome': "Hello! Welcome to Sahla AI. I'm here to help you find the perfect opportunity. Are you looking for a job, or do you want to offer a service?",
    'chat.sendFailed': 'Failed to send message',

    'settings.title': 'Settings',
    'settings.subtitle': 'Manage your account and preferences',
    'settings.profileSettings': 'Profile Settings',
    'settings.email': 'Email',
    'settings.username': 'Username',
    'settings.phone': 'Phone',
    'settings.whatsapp': 'WhatsApp',
    'settings.saveProfile': 'Save Profile',
    'settings.changePassword': 'Change Password',
    'settings.newPassword': 'New Password',
    'settings.confirmPassword': 'Confirm Password',
    'settings.updatePassword': 'Update Password',
    'settings.profileSaved': 'Profile updated successfully',
    'settings.profileSaveFailed': 'Failed to update profile',
    'settings.passwordMismatch': 'Passwords do not match',
    'settings.passwordUpdated': 'Password updated successfully',
    'settings.passwordUpdateFailed': 'Failed to update password',

    'jobs.title': 'Job Opportunities',
    'jobs.subtitle': 'Browse and apply to positions matched to your skills',
    'jobs.postJob': 'Post a Job',
    'jobs.searchPlaceholder': 'Search jobs, companies, locations...',
    'jobs.filter': 'Filter',
    'jobs.noJobsFound': 'No jobs found matching your search.',
    'jobs.viewDetails': 'View Details',

    'jobDetail.backToJobs': 'Back to Jobs',
    'jobDetail.applyNow': 'Apply Now',
    'jobDetail.removeSaved': 'Removed from saved',
    'jobDetail.save': 'Saved to your list',
    'jobDetail.share': 'Link copied to clipboard',
    'jobDetail.aboutRole': 'About This Role',
    'jobDetail.companyInfo': 'Company Info',
    'jobDetail.companyName': 'Company Name',
    'jobDetail.postedDate': 'Posted Date',
    'jobDetail.applicants': 'Applicants',
    'jobDetail.contactRecruiter': 'Contact Recruiter',
    'jobDetail.sendMessage': 'Send Message',
    'jobDetail.callRecruiter': 'Call Recruiter',
    'jobDetail.active': 'Active',

    'postJob.backToJobs': 'Back to Jobs',
    'postJob.title': 'Post a New Job',
    'postJob.subtitle': 'Fill in the details below to create a job listing',
    'postJob.jobTitle': 'Job Title',
    'postJob.category': 'Category',
    'postJob.location': 'Location',
    'postJob.jobType': 'Job Type',
    'postJob.minimumSalary': 'Minimum Salary',
    'postJob.maximumSalary': 'Maximum Salary',
    'postJob.jobDescription': 'Job Description',
    'postJob.postJob': 'Post Job',
    'postJob.cancel': 'Cancel',

    'admin.title': 'Admin Dashboard',
    'admin.subtitle': 'Manage platform content and users',
    'admin.userManagement': 'User Management',
    'admin.jobsManagement': 'Job Management',
    'admin.analytics': 'Analytics',
    'admin.reports': 'Reported Content',
    'admin.viewUsers': 'View Users',
    'admin.manageJobs': 'Manage Jobs',
    'admin.viewAnalytics': 'View Analytics',
    'admin.viewReports': 'View Reports',
    'admin.stats.totalUsers': 'Total Users',
    'admin.stats.totalJobs': 'Total Jobs',
    'admin.stats.activeJobs': 'Active Jobs',
    'admin.stats.reports': 'Reports',
    'admin.section.userManagementDescription': 'View, verify, and manage user accounts',
    'admin.section.jobsManagementDescription': 'Approve, reject, and moderate job listings',
    'admin.section.analyticsDescription': 'View platform statistics and metrics',
    'admin.section.reportsDescription': 'Review and take action on reported content',

    'common.privacy': 'Privacy',
    'common.terms': 'Terms',
    'common.unauthorized': 'Unauthorized access',
    'common.error': 'An error occurred',
    'common.contact': 'Contact',
    'common.getStarted': 'Get Started Free',
    'common.signIn': 'Sign In',
  },
  ar: {
    'app.name': 'سهلـة شات',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'إنشاء حساب',
    'auth.back': 'رجوع',
    'auth.welcomeBack': 'مرحباً بعودتك',
    'auth.signInSubtitle': 'سجّل الدخول إلى حساب سهلـة شات',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.forgotPassword': 'هل نسيت كلمة المرور؟',
    'auth.forgotPasswordTitle': 'إعادة تعيين كلمة المرور',
    'auth.forgotPasswordDescription': 'أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين.',
    'auth.forgotPasswordSent': 'تم إرسال بريد إعادة تعيين كلمة المرور. تحقق من صندوق الوارد.',
    'auth.signIn': 'تسجيل الدخول',
    'auth.orContinueWith': 'أو أكمل باستخدام',
    'auth.continueWithGoogle': 'تابع عبر Google',
    'auth.noAccount': 'لا تملك حساباً؟',
     'auth.signUp': 'سجّل',
    'auth.signUpSubtitle': 'انضم إلى سهلـة شات وابدأ بالتواصل',
    'auth.creatingAccount': 'جاري إنشاء الحساب...',

    'auth.createAccount': 'إنشاء حساب',
    'auth.createAccountSubtitle': 'انضم إلى سهلـة شات وابدأ بالتواصل',
    'auth.confirmPassword': 'تأكيد كلمة المرور',
    'auth.createAccountButton': 'إنشاء حساب',
    'auth.passwordMismatch': 'كلمتا المرور غير متطابقتين',
    'auth.passwordTooShort': 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',
    'auth.accountCreated': 'تم إنشاء الحساب! يرجى التحقق من بريدك الإلكتروني.',
    'auth.registrationFailed': 'فشل التسجيل',
    'auth.googleSignupFailed': 'فشل تسجيل الدخول عبر Google',
    'auth.orSignUpWith': 'أو سجّل باستخدام',
    'auth.signUpWithGoogle': 'سجّل عبر Google',
    'auth.alreadyHaveAccount': 'لديك حساب بالفعل؟',
    'auth.signInAlt': 'تسجيل الدخول',
    'auth.getStarted': 'ابدأ الآن',
    'auth.getStartedFree': 'ابدأ مجاناً',
    'auth.haveAccount': 'لديك حساب بالفعل؟',
    'auth.loggedIn': 'تم تسجيل الدخول بنجاح!',
    'auth.loginFailed': 'فشل تسجيل الدخول',
    'auth.googleLoginFailed': 'فشل تسجيل الدخول عبر Google',
    'auth.verifyEmailTitle': 'تحقق من بريدك الإلكتروني',
    'auth.verifyEmailDescription': 'أرسلنا لك رابط تأكيد. يرجى التحقق من صندوق الوارد للتحقق من عنوان بريدك الإلكتروني.',
    'auth.callbackProcessingTitle': 'جاري إنهاء تسجيل الدخول',
    'auth.callbackProcessingDescription': 'يتم الآن إكمال تسجيل الدخول. سيتم إعادة توجيهك بمجرد اكتمال المصادقة.',
    'auth.callbackProcessingLoading': 'جاري المعالجة...',
    'auth.emailPlaceholder': 'you@example.com',
    'auth.passwordPlaceholder': '••••••••',

    'dashboard.title': 'لوحة التحكم',
    'dashboard.subtitle': 'مرحباً بعودتك! إليك ما يحدث في حسابك.',
    'dashboard.quickActions.lookingForWorkTitle': 'تبحث عن عمل؟',
    'dashboard.quickActions.lookingForWorkSubtitle': 'تصفح آلاف الفرص المطابقة لمهاراتك.',
    'dashboard.quickActions.browseJobs': 'تصفح الوظائف',
    'dashboard.quickActions.chatTitle': 'تحدث مع مساعد الذكاء الاصطناعي',
    'dashboard.quickActions.chatSubtitle': 'دع ذكاءنا الاصطناعي يساعدك في العثور على أفضل تطابق عبر محادثة.',
    'dashboard.quickActions.startChat': 'ابدأ المحادثة',
    'home.hero.title': 'تواصل عبر الدردشة',
    'home.hero.highlight': 'سوق مدعوم بالذكاء الاصطناعي',
    'home.hero.subtitle': 'سهلـة شات تربط الباحثين عن عمل ومقدمي الخدمات والعملاء والمحترفين من خلال محادثات ذكية وتطابق فعال',
    'home.hero.ctaPrimary': 'ابدأ الآن',
    'home.hero.ctaSecondary': 'تسجيل الدخول',
    'home.features.title': 'لماذا تختار سهلـة شات؟',
    'home.features.subtitle': 'تجمع منصتنا بين تقنية الذكاء الاصطناعي المتقدمة وتجربة مستخدم سلسة',
    'home.features.aiChatTitle': 'مساعد دردشة بالذكاء الاصطناعي',
    'home.features.aiChatDesc': 'محادثات ذكية تفهم احتياجاتك',
    'home.features.smartMatchTitle': 'مطابقة ذكية',
    'home.features.smartMatchDesc': 'مطابقة الوظائف والخدمات بالذكاء الاصطناعي',
    'home.features.communityTitle': 'المجتمع',
    'home.features.communityDesc': 'تواصل مع محترفين موثوقين',
    'home.features.fastTitle': 'سريع للغاية',
    'home.features.fastDesc': 'تحديثات وإشعارات في الوقت الفعلي',
    'home.cta.title': 'هل أنت جاهز لتحويل مسارك المهني؟',
    'home.cta.subtitle': 'انضم إلى آلاف المحترفين الذين يجدون التطابق المثالي عبر سهلـة شات',
    'home.cta.button': 'ابدأ مجاناً',
    'dashboard.stats.activeJobs': 'الوظائف النشطة',
    'dashboard.stats.profileViews': 'مشاهدات الملف',
    'dashboard.stats.messages': 'الرسائل',
    'dashboard.stats.matchScore': 'نسبة المطابقة',

    'sidebar.dashboard': 'لوحة التحكم',
    'sidebar.chat': 'المحادثات',
    'sidebar.jobs': 'الوظائف',
    'sidebar.settings': 'الإعدادات',
    'sidebar.logout': 'تسجيل الخروج',

    'chat.inputPlaceholder': 'اكتب رسالتك...',
    'chat.send': 'إرسال',
    'chat.loading': 'جارٍ الإرسال...',
    'chat.welcome': 'مرحباً! مرحباً بك في سهلـة شات. أنا هنا لمساعدتك في العثور على الفرصة المناسبة. هل تبحث عن عمل أم تريد تقديم خدمة؟',
    'chat.sendFailed': 'فشل إرسال الرسالة',

    'settings.title': 'الإعدادات',
    'settings.subtitle': 'إدارة حسابك وتفضيلاتك',
    'settings.profileSettings': 'إعدادات الملف الشخصي',
    'settings.email': 'البريد الإلكتروني',
    'settings.username': 'اسم المستخدم',
    'settings.phone': 'رقم الهاتف',
    'settings.whatsapp': 'واتساب',
    'settings.saveProfile': 'حفظ الملف',
    'settings.changePassword': 'تغيير كلمة المرور',
    'settings.newPassword': 'كلمة مرور جديدة',
    'settings.confirmPassword': 'تأكيد كلمة المرور',
    'settings.updatePassword': 'تحديث كلمة المرور',
    'settings.profileSaved': 'تم تحديث الملف الشخصي بنجاح',
    'settings.profileSaveFailed': 'فشل تحديث الملف الشخصي',
    'settings.passwordMismatch': 'كلمتا المرور غير متطابقتين',
    'settings.passwordUpdated': 'تم تحديث كلمة المرور بنجاح',
    'settings.passwordUpdateFailed': 'فشل تحديث كلمة المرور',

    'jobs.title': 'فرص العمل',
    'jobs.subtitle': 'تصفح وتقدم للوظائف المطابقة لمهاراتك',
    'jobs.postJob': 'إضافة وظيفة',
    'jobs.searchPlaceholder': 'ابحث عن وظائف أو شركات أو مواقع...',
    'jobs.filter': 'تصفية',
    'jobs.noJobsFound': 'لا توجد وظائف مطابقة لبحثك.',
    'jobs.viewDetails': 'عرض التفاصيل',

    'jobDetail.backToJobs': 'العودة للوظائف',
    'jobDetail.applyNow': 'قدم الآن',
    'jobDetail.removeSaved': 'تمت الإزالة من المحفوظة',
    'jobDetail.save': 'تمت الإضافة إلى قائمتك',
    'jobDetail.share': 'تم نسخ الرابط إلى الحافظة',
    'jobDetail.aboutRole': 'حول هذا الدور',
    'jobDetail.companyInfo': 'معلومات الشركة',
    'jobDetail.companyName': 'اسم الشركة',
    'jobDetail.postedDate': 'تاريخ النشر',
    'jobDetail.applicants': 'المتقدمون',
    'jobDetail.contactRecruiter': 'تواصل مع مسؤول التوظيف',
    'jobDetail.sendMessage': 'إرسال رسالة',
    'jobDetail.callRecruiter': 'اتصل بمسؤول التوظيف',
    'jobDetail.active': 'نشطة',

    'postJob.backToJobs': 'العودة للوظائف',
    'postJob.title': 'إضافة وظيفة جديدة',
    'postJob.subtitle': 'املأ التفاصيل أدناه لإنشاء إعلان وظيفة',
    'postJob.jobTitle': 'عنوان الوظيفة',
    'postJob.category': 'التصنيف',
    'postJob.location': 'الموقع',
    'postJob.jobType': 'نوع الوظيفة',
    'postJob.minimumSalary': 'الحد الأدنى للراتب',
    'postJob.maximumSalary': 'الحد الأقصى للراتب',
    'postJob.jobDescription': 'وصف الوظيفة',
    'postJob.postJob': 'إضافة وظيفة',
    'postJob.cancel': 'إلغاء',

    'admin.title': 'لوحة تحكم المدير',
    'admin.subtitle': 'إدارة محتوى المنصة والمستخدمين',
    'admin.userManagement': 'إدارة المستخدمين',
    'admin.jobsManagement': 'إدارة الوظائف',
    'admin.analytics': 'التحليلات',
    'admin.reports': 'المحتوى المبلغ عنه',
    'admin.viewUsers': 'عرض المستخدمين',
    'admin.manageJobs': 'إدارة الوظائف',
    'admin.viewAnalytics': 'عرض التحليلات',
    'admin.viewReports': 'عرض التقارير',
    'admin.stats.totalUsers': 'إجمالي المستخدمين',
    'admin.stats.totalJobs': 'إجمالي الوظائف',
    'admin.stats.activeJobs': 'الوظائف النشطة',
    'admin.stats.reports': 'التقارير',
    'admin.section.userManagementDescription': 'عرض، التحقق، وإدارة حسابات المستخدمين',
    'admin.section.jobsManagementDescription': 'الموافقة، الرفض، والإشراف على إعلانات الوظائف',
    'admin.section.analyticsDescription': 'عرض إحصائيات ومؤشرات المنصة',
    'admin.section.reportsDescription': 'مراجعة المحتوى المبلغ عنه واتخاذ الإجراءات',

    'common.privacy': 'الخصوصية',
    'common.terms': 'الشروط',
    'common.unauthorized': 'دخول غير مصرح',
    'common.error': 'حدث خطأ',
    'common.contact': 'تواصل معنا',
    'common.getStarted': 'ابدأ مجاناً',
    'common.signIn': 'تسجيل الدخول',
  },
};

export function getLangFromStorageOrDefault(): Lang {
  if (typeof window === 'undefined') return 'ar';
  const stored = window.localStorage.getItem('sahla-lang');
  // default to Arabic unless user previously selected English
  return stored === 'en' ? 'en' : 'ar';
}

export function getDir(lang: Lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

let currentLang: Lang = 'ar';
export function setCurrentLang(lang: Lang) {
  currentLang = lang;
}

export function t(key: I18nKey): string {
  return dict[currentLang]?.[key] ?? dict.en[key] ?? key;
}

export function createTranslator(lang: Lang) {
  return (key: I18nKey) => dict[lang]?.[key] ?? dict.en[key] ?? key;
}

