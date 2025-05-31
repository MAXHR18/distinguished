
import React, { useState } from 'react';
import { Calculator, BookOpen, Globe, Atom, FileText, Users, Clock, Star, ChevronRight, Menu, Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const subjects = [
    {
      id: 1,
      title: 'الرياضيات',
      description: 'الجبر والهندسة والإحصاء',
      progress: 75,
      lessons: 24,
      color: 'bg-blue-500',
      icon: Calculator
    },
    {
      id: 2,
      title: 'الفيزياء',
      description: 'الميكانيكا والكهرباء والضوء',
      progress: 60,
      lessons: 18,
      color: 'bg-green-500',
      icon: Atom
    },
    {
      id: 3,
      title: 'الكيمياء',
      description: 'الكيمياء العامة والعضوية',
      progress: 80,
      lessons: 22,
      color: 'bg-purple-500',
      icon: Globe
    },
    {
      id: 4,
      title: 'اللغة العربية',
      description: 'النحو والصرف والأدب',
      progress: 90,
      lessons: 30,
      color: 'bg-orange-500',
      icon: BookOpen
    },
    {
      id: 5,
      title: 'التاريخ',
      description: 'التاريخ الإسلامي والحديث',
      progress: 45,
      lessons: 16,
      color: 'bg-red-500',
      icon: FileText
    },
    {
      id: 6,
      title: 'الجغرافيا',
      description: 'الجغرافيا الطبيعية والبشرية',
      progress: 70,
      lessons: 20,
      color: 'bg-indigo-500',
      icon: Globe
    }
  ];

  const stats = [
    { title: 'إجمالي المواد', value: '6', icon: BookOpen, color: 'text-blue-600' },
    { title: 'الدروس المكتملة', value: '45', icon: Star, color: 'text-green-600' },
    { title: 'ساعات الدراسة', value: '127', icon: Clock, color: 'text-purple-600' },
    { title: 'الطلاب النشطون', value: '1,234', icon: Users, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">منصة التعلم</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="mt-6 px-4">
          <div className="space-y-2">
            <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-blue-50 rounded-lg">
              <BookOpen className="h-5 w-5 ml-3" />
              الصفحة الرئيسية
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Calculator className="h-5 w-5 ml-3" />
              المواد الدراسية
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Star className="h-5 w-5 ml-3" />
              التقييمات
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Users className="h-5 w-5 ml-3" />
              المجتمع
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <FileText className="h-5 w-5 ml-3" />
              التقارير
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:mr-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <div className="flex items-center space-x-reverse space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="ابحث عن المواد والدروس..."
                className="pr-10 w-80"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -left-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">مرحباً بعودتك!</h2>
            <p className="text-gray-600">تابع رحلتك التعليمية واستكشف المواد الجديدة</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gray-100`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subjects Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">موادك الدراسية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg ${subject.color} text-white`}>
                        <subject.icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm text-gray-500">{subject.progress}%</span>
                    </div>
                    <CardTitle className="text-lg font-semibold">{subject.title}</CardTitle>
                    <p className="text-sm text-gray-600">{subject.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${subject.color}`}
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{subject.lessons} درس</span>
                        <Button variant="outline" size="sm">
                          متابعة الدراسة
                          <ChevronRight className="h-4 w-4 mr-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>النشاط الأخير</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">أكملت درس "المعادلات التربيعية"</p>
                      <p className="text-xs text-gray-500">منذ ساعتين</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">حصلت على درجة ممتازة في اختبار الفيزياء</p>
                      <p className="text-xs text-gray-500">أمس</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">انضممت إلى مجموعة دراسة الكيمياء</p>
                      <p className="text-xs text-gray-500">منذ 3 أيام</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تقدمك الأسبوعي</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                    <p className="text-sm text-gray-600">معدل إنجازك هذا الأسبوع</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">الدروس المكتملة</span>
                      <span className="text-sm font-medium">12/15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ساعات الدراسة</span>
                      <span className="text-sm font-medium">18 ساعة</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">الاختبارات</span>
                      <span className="text-sm font-medium">4/5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Index;
