# اختبار المسارات - دليل المطورين

## اختبر التطبيق الآن

```bash
cd d:\sahla-ai
npm run dev
```

ثم افتح في المتصفح:
- http://localhost:3000/
- http://localhost:3000/(auth)/login
- http://localhost:3000/(auth)/register
- http://localhost:3000/auth/login (يجب أن يعيد التوجيه)

## الملفات التي تم تعديلها

### المسارات والصفحات:
1. ✅ `app/(auth)/login/page.tsx` - صفحة تسجيل الدخول
2. ✅ `app/(auth)/register/page.tsx` - صفحة التسجيل
3. ✅ `app/(auth)/layout.tsx` - تخطيط المجموعة
4. ✅ `app/(dashboard)/layout.tsx` - تخطيط لوحة التحكم
5. ✅ `app/admin/page.tsx` - صفحة المسؤول
6. ✅ `app/page.tsx` - الصفحة الرئيسية

### الإعدادات:
1. ✅ `next.config.ts` - إعادة التوجيهات
2. ✅ `middleware.ts` - معالج الطلبات
3. ✅ `lib/i18n.ts` - نظام الترجمة

## الخطوات التالية الاختيارية

### إنشاء صفحات إضافية:

#### 1. صفحة استرجاع كلمة المرور:
```bash
mkdir -p app/\(auth\)/forgot-password
cat > app/\(auth\)/forgot-password/page.tsx << 'EOF'
# انسخ محتوى من:
# ~/.copilot/session-state/*/files/forgot_password_page.tsx
EOF
```

#### 2. صفحة التحقق من البريد:
```bash
mkdir -p app/\(auth\)/verify-email
cat > app/\(auth\)/verify-email/page.tsx << 'EOF'
# انسخ محتوى من:
# ~/.copilot/session-state/*/files/verify_email_page.tsx
EOF
```

#### 3. صفحة OAuth Callback:
```bash
mkdir -p app/\(auth\)/callback
cat > app/\(auth\)/callback/page.tsx << 'EOF'
# انسخ محتوى من:
# ~/.copilot/session-state/*/files/callback_page.tsx
EOF
```

## حذف الملفات المؤقتة

```bash
# حذف ملفات مؤقتة:
rm app/auth_callback_temp.txt
rm app/verify_email_temp.tsx
rm create-dirs.js
rm create-dirs.sh
rm DELETE_ME_auth_callback_temp.txt
rm test-build.js
```

## اختبار شامل

```bash
# 1. اختبر المسارات الجديدة:
curl http://localhost:3000/\(auth\)/login

# 2. اختبر المسارات القديمة (يجب أن تعيد التوجيه):
curl -L http://localhost:3000/auth/login

# 3. اختبر dashboard:
curl http://localhost:3000/\(dashboard\)/chat

# 4. اختبر OAuth الكامل:
# افتح متصفحك واضغط على "Sign in with Google"
# يجب أن يعيد التوجيه إلى /(auth)/callback
```

## الملاحظات المهمة

1. **المسارات ذات الأقواس**: بدل الكتابة بـ backslashes، يمكنك كتابة `/(auth)/login` في الكود
2. **التوافق الكامل**: جميع المسارات القديمة تعمل بدون تغيير
3. **الترجمات**: تأكد من تحديث `lib/i18n.ts` عند إضافة صفحات جديدة

## استكشاف الأخطاء

إذا واجهت مشاكل:

1. **المسار غير موجود**:
   ```bash
   # تأكد من وجود الملف:
   ls -la app/\(auth\)/login/page.tsx
   ```

2. **الترجمات ناقصة**:
   - تحقق من `lib/i18n.ts`
   - تأكد من إضافة المفتاح في كلا اللغتين

3. **OAuth غير يعمل**:
   - تحقق من `NEXT_PUBLIC_APP_URL` في `.env.local`
   - تأكد من أن رابط callback في Supabase صحيح

## مراجع مفيدة

- [Next.js Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
