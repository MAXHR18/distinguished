import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, FileText, Users, Clock, Star, ChevronLeft, Play, Download, Eye } from 'lucide-react';

const ChapterDetails = () => {
  const { teacherId, subjectId } = useParams();
  const navigate = useNavigate();

  // تحويل المعاملات إلى أرقام
  const teacherIdNum = parseInt(teacherId || '1');
  const subjectIdNum = parseInt(subjectId || '1');

  const teachers = [
    {
      id: 1,
      name: "ساجد العكيلي",
      subjects: [
        {
          id: 1,
          name: "التربية الإسلامية - الفصل الأول",
          chapters: [
            {
              id: 1,
              title: "الإيمان بالله",
              lectures: [
                { id: 1, title: "محاضرة 1: أسماء الله الحسنى", duration: "45 دقيقة", type: "video" },
                { id: 2, title: "محاضرة 2: صفات الله تعالى", duration: "50 دقيقة", type: "video" }
              ],
              materials: [
                { id: 1, title: "ملزمة الإيمان بالله", pages: 25, type: "pdf" },
                { id: 2, title: "تمارين وأسئلة", pages: 10, type: "pdf" }
              ]
            },
            {
              id: 2,
              title: "الصلاة وأحكامها",
              lectures: [
                { id: 3, title: "محاضرة 1: أركان الصلاة", duration: "40 دقيقة", type: "video" },
                { id: 4, title: "محاضرة 2: سنن الصلاة", duration: "35 دقيقة", type: "video" }
              ],
              materials: [
                { id: 3, title: "ملزمة الصلاة", pages: 30, type: "pdf" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "مؤيد سليم",
      subjects: [
        {
          id: 1,
          name: "الميكانيكا",
          chapters: [
            {
              id: 1,
              title: "الحركة في خط مستقيم",
              lectures: [
                { id: 1, title: "محاضرة 1: السرعة والتسارع", duration: "60 دقيقة", type: "video" },
                { id: 2, title: "محاضرة 2: معادلات الحركة", duration: "55 دقيقة", type: "video" }
              ],
              materials: [
                { id: 1, title: "ملزمة الحركة المستقيمة", pages: 40, type: "pdf" },
                { id: 2, title: "أمثلة محلولة", pages: 15, type: "pdf" }
              ]
            }
          ]
        }
      ]
    }
  ];

  const getTeacherById = (id: number) => {
    return teachers.find(teacher => teacher.id === id);
  };

  const getSubjectById = (teacher: any, subjectId: number) => {
    return teacher?.subjects.find((subject: any) => subject.id === subjectId);
  };

  const teacher = getTeacherById(teacherIdNum);
  const subject = teacher ? getSubjectById(teacher, subjectIdNum) : null;

  if (!teacher || !subject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">المادة غير موجودة</h2>
          <Button onClick={() => navigate('/teachers')}>
            العودة للمدرسين
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate(`/teacher/${teacherId}/subjects`)}
                className="text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-5 w-5 ml-2" />
                العودة للمواد
              </Button>
            </div>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                تسجيل الدخول
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subject Info */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {subject.name}
          </h1>
          <p className="text-xl text-gray-600">
            مع الأستاذ {teacher.name}
          </p>
        </div>

        {/* Chapters */}
        <div className="space-y-8">
          {subject.chapters.map((chapter: any, index: number) => (
            <Card key={chapter.id} className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="text-2xl">
                  الفصل {index + 1}: {chapter.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* المحاضرات */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Play className="h-6 w-6 ml-2 text-blue-500" />
                      المحاضرات
                    </h3>
                    <div className="space-y-3">
                      {chapter.lectures.map((lecture: any) => (
                        <div key={lecture.id} className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{lecture.title}</h4>
                              <p className="text-sm text-gray-600 flex items-center mt-1">
                                <Clock className="h-4 w-4 ml-1" />
                                {lecture.duration}
                              </p>
                            </div>
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                              <Play className="h-4 w-4 ml-1" />
                              مشاهدة
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* الملازم */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-6 w-6 ml-2 text-green-500" />
                      الملازم والمواد
                    </h3>
                    <div className="space-y-3">
                      {chapter.materials.map((material: any) => (
                        <div key={material.id} className="p-4 bg-green-50 rounded-lg border border-green-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{material.title}</h4>
                              <p className="text-sm text-gray-600 flex items-center mt-1">
                                <FileText className="h-4 w-4 ml-1" />
                                {material.pages} صفحة - PDF
                              </p>
                            </div>
                            <div className="flex space-x-reverse space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 ml-1" />
                                عرض
                              </Button>
                              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                <Download className="h-4 w-4 ml-1" />
                                تحميل
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChapterDetails;
