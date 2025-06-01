
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LecturesPage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState<number | null>(null);

  // الفصول (10 فصول لكل مدرس)
  const chapters = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `الفصل ${i + 1}: عنوان الفصل ${i + 1}`,
    lectures: Array.from({ length: 40 }, (_, j) => ({
      id: j + 1,
      title: `المحاضرة ${j + 1}`,
      videoUrl: `/path/to/video${j + 1}.mp4` // مكان إضافة رابط الفيديو
    }))
  }));

  const toggleChapter = (chapterId: number) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(`/teacher/${teacherId}`)}
            className="mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            العودة
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            محاضرات المدرس
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-4 text-right flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {chapter.title}
                  </span>
                  {openChapter === chapter.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {openChapter === chapter.id && (
                  <div className="border-t dark:border-gray-700 p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {chapter.lectures.map((lecture) => (
                        <button
                          key={lecture.id}
                          onClick={() => navigate(`/teacher/${teacherId}/video/${lecture.id}`)}
                          className="flex items-center p-3 text-right hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                        >
                          <Play className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-3" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {lecture.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LecturesPage;
