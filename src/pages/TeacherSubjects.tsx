import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Calculator, Globe, Atom, FileText, Users, Clock, Star, ChevronLeft, ArrowRight } from 'lucide-react';

const TeacherSubjects = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  // تحويل teacherId إلى رقم
  const teacherIdNum = parseInt(teacherId || '1');

  const teachers = [
    {
      id: 1,
      name: "ساجد العكيلي",
      year: "2025",
      subject: "مدرس مادة الاسلامية",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-red-500 to-orange-500",
      subjects: [
        { id: 1, name: "التربية الإسلامية - الفصل الأول", chapters: 8, color: "from-red-500 to-orange-500" },
        { id: 2, name: "التربية الإسلامية - الفصل الثاني", chapters: 10, color: "from-orange-500 to-yellow-500" }
      ]
    },
    {
      id: 2,
      name: "مؤيد سليم",
      year: "2025",
      subject: "مدرس مادة الفيزياء",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-blue-500 to-purple-500",
      subjects: [
        { id: 1, name: "الميكانيكا", chapters: 12, color: "from-blue-500 to-purple-500" },
        { id: 2, name: "الكهربائية والمغناطيسية", chapters: 15, color: "from-purple-500 to-pink-500" },
        { id: 3, name: "البصريات", chapters: 8, color: "from-indigo-500 to-blue-500" }
      ]
    }
  ];

  const getTeacherById = (id: number) => {
    return teachers.find(teacher => teacher.id === id);
  };

  const teacher = getTeacherById(teacherIdNum);

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">المدرس غير موجود</h2>
          <Button onClick={() => navigate('/teachers')}>
            العودة للمدرسين
          </Button>
        </Card>
      </div>
    );
  }

  const handleSubjectClick = (subjectId: number) => {
    navigate(`/teacher/${teacherId}/subject/${subjectId}/chapters`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/teachers')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-5 w-5 ml-2" />
                العودة للمدرسين
              </Button>
            </div>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                تسجيل الدخول
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                ابحث عن مدرس...
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Teacher Info */}
        <div className="text-center mb-12">
          <div className={`inline-block p-6 bg-gradient-to-r ${teacher.gradient} rounded-2xl mb-6`}>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto">
              <Users className="h-16 w-16 text-gray-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {teacher.name} {teacher.year}
          </h1>
          <p className="text-xl text-gray-600">
            {teacher.subject}
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teacher.subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
              onClick={() => handleSubjectClick(subject.id)}
            >
              <div className={`h-32 bg-gradient-to-r ${subject.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="relative z-10">
                  <Book className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {subject.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {subject.chapters} فصل متاح
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline ml-1" />
                    محدث حديثاً
                  </span>
                  
                  <Button 
                    size="sm"
                    className="group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    عرض الفصول
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeacherSubjects;
