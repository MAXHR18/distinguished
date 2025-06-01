
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, 
  ChevronLeft, 
  Play, 
  FileText, 
  Download, 
  Eye, 
  Calendar,
  Clock,
  Users,
  Star,
  BookOpen
} from 'lucide-react';

const ChapterDetails = () => {
  const { teacherId, subjectId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lectures");

  const chapterData = {
    1: {
      name: "القرآن الكريم",
      description: "دراسة شاملة للقرآن الكريم وتفسيره",
      lectures: [
        {
          id: 1,
          title: "مقدمة في علوم القرآن",
          duration: "45 دقيقة",
          date: "2024-01-15",
          views: 1250,
          rating: 4.8,
          thumbnail: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png"
        },
        {
          id: 2,
          title: "سورة الفاتحة - التفسير والتجويد",
          duration: "60 دقيقة",
          date: "2024-01-20",
          views: 980,
          rating: 4.9,
          thumbnail: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png"
        },
        {
          id: 3,
          title: "أحكام التلاوة والتجويد",
          duration: "55 دقيقة",
          date: "2024-01-25",
          views: 1100,
          rating: 4.7,
          thumbnail: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png"
        }
      ],
      materials: [
        {
          id: 1,
          title: "ملزمة علوم القرآن الكريم",
          type: "PDF",
          size: "2.5 MB",
          downloads: 450,
          date: "2024-01-10"
        },
        {
          id: 2,
          title: "مخططات أحكام التجويد",
          type: "PDF",
          size: "1.8 MB",
          downloads: 320,
          date: "2024-01-12"
        },
        {
          id: 3,
          title: "تدريبات عملية على التلاوة",
          type: "Audio",
          size: "15 MB",
          downloads: 280,
          date: "2024-01-15"
        }
      ]
    }
  };

  const currentChapter = chapterData[subjectId as keyof typeof chapterData] || chapterData[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate(`/teacher/${teacherId}/subjects`)}
              className="flex items-center space-x-reverse space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>العودة للفصول</span>
            </Button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {currentChapter.name}
              </h1>
              <p className="text-gray-600">{currentChapter.description}</p>
            </div>
            
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chapter Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">{currentChapter.lectures.length}</p>
              <p className="text-sm opacity-90">محاضرات</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">{currentChapter.materials.length}</p>
              <p className="text-sm opacity-90">ملازم</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">1.2k</p>
              <p className="text-sm opacity-90">طالب</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2" />
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-sm opacity-90">التقييم</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1">
            <TabsTrigger 
              value="lectures" 
              className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm"
            >
              المحاضرات
            </TabsTrigger>
            <TabsTrigger 
              value="materials"
              className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm"
            >
              الملازم والمواد
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lectures" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentChapter.lectures.map((lecture) => (
                <Card key={lecture.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {lecture.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {lecture.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{lecture.date}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{lecture.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{lecture.rating}</span>
                      </div>
                      
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        مشاهدة
                        <Play className="h-4 w-4 mr-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentChapter.materials.map((material) => (
                <Card key={material.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                            {material.title}
                          </h3>
                          <p className="text-sm text-gray-600">{material.type} • {material.size}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{material.date}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{material.downloads} تحميل</span>
                      </div>
                    </div>

                    <div className="flex space-x-reverse space-x-2">
                      <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        تحميل
                        <Download className="h-4 w-4 mr-1" />
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        معاينة
                        <Eye className="h-4 w-4 mr-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ChapterDetails;
