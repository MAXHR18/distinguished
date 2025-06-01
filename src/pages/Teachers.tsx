
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Teachers = () => {
  const navigate = useNavigate();

  const teachers = [
    {
      id: 1,
      name: "ساجد العكيلي",
      year: "2025",
      subject: "مدرس مادة الاسلامية",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      name: "مؤيد سليم",
      year: "2025",
      subject: "مدرس مادة الفيزياء",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      name: "حسين الهاشمي",
      year: "2025",
      subject: "مدرس مادة الكيمياء",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "حيدر عبدالائمة",
      year: "2025",
      subject: "مدرس مادة الرياضيات",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      name: "أحمد محمد",
      year: "2025",
      subject: "مدرس مادة الاحياء",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-emerald-500 to-lime-500"
    },
    {
      id: 6,
      name: "علي حسن",
      year: "2025",
      subject: "مدرس مادة التاريخ",
      image: "/lovable-uploads/4762df8b-01c8-4087-b14d-2015bb6fa52e.png",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  const handleTeacherClick = (teacherId: number) => {
    navigate(`/teacher/${teacherId}/subjects`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-4">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                منصة Sads Help التعليمية
              </h1>
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
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            اختر مدرسك المفضل
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نخبة من أفضل المدرسين في العراق لمساعدتك في رحلتك التعليمية
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teachers.map((teacher) => (
            <Card 
              key={teacher.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
              onClick={() => handleTeacherClick(teacher.id)}
            >
              <div className={`h-32 bg-gradient-to-r ${teacher.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-12 w-12 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 text-center bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {teacher.name} {teacher.year}
                </h3>
                <p className="text-gray-600 mb-4">
                  {teacher.subject}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                >
                  عرض المواد
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center space-x-reverse space-x-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex space-x-reverse space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Teachers;
