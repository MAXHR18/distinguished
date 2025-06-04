
import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TelegramModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // رابط قناة التليجرام - يمكنك تغييره هنا
  const TELEGRAM_CHANNEL_URL = "https://t.me/sad6ths";

  useEffect(() => {
    const hasVisited = localStorage.getItem('telegram-modal-shown');
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  const handleSkip = () => {
    setIsOpen(false);
    localStorage.setItem('telegram-modal-shown', 'true');
  };

  const handleSubscribed = () => {
    setIsSubscribed(true);
    setIsOpen(false);
    localStorage.setItem('telegram-modal-shown', 'true');
  };

  const openTelegramChannel = () => {
    window.open(TELEGRAM_CHANNEL_URL, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            اشتراك في قناة التليجرام لفتح الموقع
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            للوصول الكامل إلى محتوى الموقع، يرجى الاشتراك في قناة التليجرام الخاصة بنا
          </p>

          <div className="space-y-3">
            <Button
              onClick={openTelegramChannel}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              اضغط هنا للاشتراك
            </Button>

            <Button
              onClick={handleSubscribed}
              variant="outline"
              className="w-full"
            >
              لقد اشتركت في القناة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramModal;
