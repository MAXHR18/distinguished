
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Clock, Star, ChevronLeft } from 'lucide-react';

const TeacherSubjects = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const teacherData = {
    1: {
      name: "ساجد العكيلي",
      subject: "التربية الاسلامية",
      subjects: [
        { id: 1, name: "القرآن الكريم", chapters: 12, students: 245, hours: "24 ساعة", progress: 85, color: "from-emerald-500 to-teal-500" },
        { id: 2, name: "الحديث النبوي", chapters: 8, students: 189, hours: "16 ساعة", progress: 72, color: "from-blue-500 to-indigo-500" },
        { id: 3, name: "الفقه الاسلامي", chapters: 10, students: 201, hours: "20 ساعة", progress: 68, color: "from-purple-500 to-pink-500" },
        { id: 4, name: "التاريخ الاسلامي", chapters: 15, students: 167, hours: "30 ساعة", progress: 91, color: "from-orange-500 to-red-500" }
      ]
    },
    2: {
      name: "مؤيد سليم",
      subject: "الفيزياء",
      subjects: [
        { id: 1, name: "الميكانيك", chapters: 14, students: 198, hours: "28 ساعة", progress: 76, color: "from-blue-500 to-cyan-500" },
        { id: 2, name: "الكهرباء", chapters: 16, students: 234, hours: "32 ساعة", progress: 82, color: "from-yellow-500 to-orange-500" },
        { id: 3, name: "الضوء والبصريات", chapters: 10, students: 156, hours: "20 ساعة", progress: 69, color: "from-indigo-500 to-purple-500" },
        { id: 4, name: "الفيزياء الحديثة", chapters: 12, students: 143, hours: "24 ساعة", progress: 88, color: "from-emerald-500 to-green-500" }
      ]
    }
  };

  const currentTeacher = teacherData[teacherId as keyof typeof teacherData] || teacherData[1];

  const handleSubjectClick = (subjectId: number) => {
    navigate(`/teacher/${teacherId}/subject/${subjectId}/chapters`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/teachers')}
              className="flex items-center space-x-reverse space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>العودة للمدرسين</span>
            </Button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentTeacher.name}
              </h1>
              <p className="text-gray-600">مدرس {currentTeacher.subject}</p>
            </div>
            
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            اختر الفصل الدراسي
          </h2>
          <p className="text-xl text-gray-600">
            جميع فصول مادة {currentTeacher.subject}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentTeacher.subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
              onClick={() => handleSubjectClick(subject.id)}
            >
              <div className={`h-32 bg-gradient-to-r ${subject.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="relative z-10 h-full flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="text-lg font-semibold">{subject.progress}%</span>
                    </div>
                  </div>
                  <BookOpen className="h-16 w-16 opacity-20" />
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-600">الفصول</p>
                    <p className="text-xl font-bold text-gray-900">{subject.chapters}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600">الطلاب</p>
                    <p className="text-xl font-bold text-gray-900">{subject.students}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-purple-500" />
                    </div>
                    <p className="text-sm text-gray-600">المدة</p>
                    <p className="text-xl font-bold text-gray-900">{subject.hours}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>التقدم</span>
                    <span>{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${subject.color}`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>

                <Button 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"
                  variant="outline"
                >
                  ادخل للفصل
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeacherSubjects;
