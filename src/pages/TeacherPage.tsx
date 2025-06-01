
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TeacherPage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            العودة للرئيسية
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            صفحة المدرس
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
            onClick={() => navigate(`/teacher/${teacherId}/materials`)}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ملازم المدرس
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                تصفح وتحميل ملازم المدرس
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
            onClick={() => navigate(`/teacher/${teacherId}/lectures`)}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Video className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                محاضرات المدرس
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                مشاهدة المحاضرات المرئية
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TeacherPage;
