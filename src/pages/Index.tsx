
import React, { useState } from 'react';
import { Book, Calculator, Globe, Atom, FileText, Users, Clock, Star, ChevronRight, Menu, Search, Bell, User, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // دالة لتشغيل/إيقاف المؤقت
  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  // دالة إعادة تعيين المؤقت
  const resetTimer = () => {
    setTimerMinutes(25);
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* الهيدر */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold text-gray-900 mr-4">منصة التعلم</h1>
            </div>
            
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="ابحث عن المواد والدروس..."
                  className="pr-10 w-full"
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
          </div>
        </div>
      </header>

      <div className="flex">
        {/* الشريط الجانبي */}
        <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}>
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">القائمة الرئيسية</h2>
            </div>
            
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-blue-50 rounded-lg">
                  <Book className="h-5 w-5 ml-3" />
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
              </div>
            </nav>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex-1 md:mr-64">
          <main className="p-6">
            {/* ترحيب */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">مرحباً بك في منصة التعلم</h2>
              <p className="text-gray-600">ابدأ رحلتك التعليمية اليوم</p>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">المواد</p>
                      <p className="text-2xl font-bold">6</p>
                    </div>
                    <Book className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">الدروس</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <FileText className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">الساعات</p>
                      <p className="text-2xl font-bold">127</p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">النقاط</p>
                      <p className="text-2xl font-bold">850</p>
                    </div>
                    <Star className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* المواد الدراسية */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>المواد الدراسية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <Calculator className="h-5 w-5 text-blue-600 ml-3" />
                        <span className="font-medium">الرياضيات</span>
                      </div>
                      <Button variant="outline" size="sm">
                        دراسة
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Atom className="h-5 w-5 text-green-600 ml-3" />
                        <span className="font-medium">الفيزياء</span>
                      </div>
                      <Button variant="outline" size="sm">
                        دراسة
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-purple-600 ml-3" />
                        <span className="font-medium">الكيمياء</span>
                      </div>
                      <Button variant="outline" size="sm">
                        دراسة
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center">
                        <Book className="h-5 w-5 text-orange-600 ml-3" />
                        <span className="font-medium">اللغة العربية</span>
                      </div>
                      <Button variant="outline" size="sm">
                        دراسة
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* مؤقت الدراسة */}
              <Card>
                <CardHeader>
                  <CardTitle>مؤقت الدراسة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
                    </div>
                    
                    <div className="flex justify-center space-x-reverse space-x-2 mb-4">
                      <Button
                        onClick={toggleTimer}
                        variant={isTimerRunning ? "destructive" : "default"}
                        size="sm"
                      >
                        {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        {isTimerRunning ? 'إيقاف' : 'بدء'}
                      </Button>
                      
                      <Button onClick={resetTimer} variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4" />
                        إعادة تعيين
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600">تقنية البومودورو للدراسة المركزة</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* النشاط الأخير */}
            <Card>
              <CardHeader>
                <CardTitle>النشاط الأخير</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Book className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">أكملت درس الجبر</p>
                      <p className="text-xs text-gray-500">منذ ساعتين</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">حصلت على 95% في اختبار الفيزياء</p>
                      <p className="text-xs text-gray-500">أمس</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">دراسة لمدة 90 دقيقة</p>
                      <p className="text-xs text-gray-500">منذ 3 أيام</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      {/* طبقة تراكب للجوال */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Index;
