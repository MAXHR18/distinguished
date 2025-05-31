
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BookOpen, Clock, FileText } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      icon: CheckCircle,
      text: 'أكملت درس "المتتاليات العددية" في الرياضيات',
      time: 'منذ ساعتين',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: BookOpen,
      text: 'بدأت مراجعة وحدة "الكيمياء العضوية"',
      time: 'منذ 4 ساعات',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: FileText,
      text: 'رفعت ملاحظات درس "الأدب العربي"',
      time: 'أمس',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      text: 'أنجزت جلسة دراسة لمدة 90 دقيقة',
      time: 'أمس',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">النشاط الأخير</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-reverse space-x-3">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.text}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
