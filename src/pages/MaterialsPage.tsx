
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MaterialsPage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  // مكان إضافة الملفات - يمكنك إضافة ملفاتك هنا
  const materials = [
    { id: 1, name: "ملزمة الفصل الأول", fileUrl: "/path/to/file1.pdf" },
    { id: 2, name: "ملزمة الفصل الثاني", fileUrl: "/path/to/file2.pdf" },
    { id: 3, name: "ملزمة الفصل الثالث", fileUrl: "/path/to/file3.pdf" },
    // أضف المزيد من الملفات هنا
  ];

  const handleDownload = (fileUrl: string) => {
    // كود تحميل الملف
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            ملازم المدرس
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4">
          {materials.map((material) => (
            <Card key={material.id} className="dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-900 dark:text-white font-medium">
                    {material.name}
                  </span>
                </div>
                <Button
                  onClick={() => handleDownload(material.fileUrl)}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  تحميل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MaterialsPage;
