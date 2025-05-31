import React from 'react';
import Header from '@/components/Header';
import QuickStats from '@/components/QuickStats';
import SubjectCard from '@/components/SubjectCard';
import RecentActivity from '@/components/RecentActivity';
import StudyTimer from '@/components/StudyTimer';
import { Calculator, Atom, Globe, BookOpen, Palette, Music, FileText, Target } from 'lucide-react';

const Index = () => {
  const subjects = [
    {
      title: 'الرياضيات',
      description: 'الجبر والهندسة والإحصاء',
      progress: 75,
      lessons: 24,
      students: 156,
      duration: '45 ساعة',
      color: 'bg-blue-100',
      icon: <Calculator className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'الفيزياء',
      description: 'الميكانيكا والكهرباء والضوء',
      progress: 60,
      lessons: 18,
      students: 142,
      duration: '38 ساعة',
      color: 'bg-green-100',
      icon: <Atom className="h-6 w-6 text-green-600" />
    },
    {
      title: 'الجغرافيا',
      description: 'جغرافيا طبيعية وبشرية',
      progress: 90,
      lessons: 15,
      students: 98,
      duration: '25 ساعة',
      color: 'bg-purple-100',
      icon: <Globe className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'اللغة العربية',
      description: 'النحو والصرف والأدب',
      progress: 85,
      lessons: 20,
      students: 203,
      duration: '35 ساعة',
      color: 'bg-orange-100',
      icon: <BookOpen className="h-6 w-6 text-orange-600" />
    },
    {
      title: 'التربية الفنية',
      description: 'الرسم والتصميم والفنون',
      progress: 70,
      lessons: 12,
      students: 87,
      duration: '20 ساعة',
      color: 'bg-pink-100',
      icon: <Palette className="h-6 w-6 text-pink-600" />
    },
    {
      title: 'التربية الموسيقية',
      description: 'النظريات والآلات الموسيقية',
      progress: 55,
      lessons: 10,
      students: 65,
      duration: '15 ساعة',
      color: 'bg-indigo-100',
      icon: <Music className="h-6 w-6 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              مرحباً بك في منصة الدراسة
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              رحلتك التعليمية تبدأ هنا - تعلم بذكاء واحقق أهدافك
            </p>
            <div className="animate-float">
              <BookOpen className="h-16 w-16 mx-auto text-white opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* إحصائيات سريعة */}
        <QuickStats />

        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المواد الدراسية */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">موادك الدراسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <SubjectCard key={index} {...subject} />
              ))}
            </div>
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-6">
            <StudyTimer />
            <RecentActivity />
          </div>
        </div>

        {/* قسم إضافي للأدوات */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">أدوات مساعدة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover text-center">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">آلة حاسبة علمية</h3>
              <p className="text-gray-600 text-sm">حل مسائل الرياضيات والفيزياء</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">منظم الملاحظات</h3>
              <p className="text-gray-600 text-sm">رتب وانظم ملاحظاتك الدراسية</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">متتبع الأهداف</h3>
              <p className="text-gray-600 text-sm">ضع أهدافك وتابع تقدمك</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
