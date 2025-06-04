
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // يمكنك تغيير اسم المنصة هنا
  const PLATFORM_NAME = "مـنـصـة الـمـتـمـيـزيـن";

  // بيانات المدرسين - يمكنك تعديل الأسماء والمواد هنا
  const teachers = [
    { id: 1, name: "حـسـيـن الهاشمي", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 2, name: "حـيدر ولـيد", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 3, name: "قـصـي العـمـيري", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 4, name: "قـصـي النـداوي", subject: "اسم المادة", <img src="/sticker.webp" alt="Sticker" /> },
    { id: 5, name: "أ. عمر خالد", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 6, name: "أ. نور الدين", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 7, name: "أ. ليلى سعد", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 8, name: "أ. يوسف عبدالله", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 9, name: "أ. هدى إبراهيم", subject: "اسم المادة", image: "/teacher-placeholder.jpg" },
    { id: 10, name: "أ. كريم وليد", subject: "اسم المادة", image: "/teacher-placeholder.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* الهيدر */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {PLATFORM_NAME}
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <Card 
              key={teacher.id}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
              onClick={() => navigate(`/teacher/${teacher.id}`)}
            >
              <CardContent className="p-6 text-center">
                {/* مكان صورة المدرس */}
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">صورة المدرس</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {teacher.name}
                </h3>
                
                {/* مكان اسم المادة */}
                <p className="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md p-2">
                  {teacher.subject}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
