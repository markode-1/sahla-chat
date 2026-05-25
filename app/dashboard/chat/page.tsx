'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'assistant'; text: string }[]>([
    { sender: 'assistant', text: t('chat.welcome') },
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: message.trim() }]);
    setMessage('');

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'assistant', text: t('chat.loading') }]);
    }, 250);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('sidebar.chat')}</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">{t('chat.welcome')}</p>
      </div>

      <div className="space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`rounded-2xl p-4 ${
              msg.sender === 'user'
                ? 'bg-blue-600 text-white self-end'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-3 items-center">
        <Input
          type="text"
          placeholder={t('chat.inputPlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" className="px-4 py-2 bg-blue-600 text-white">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
