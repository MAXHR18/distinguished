
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  progress: number;
  lessons: number;
  students: number;
  duration: string;
  color: string;
  icon: React.ReactNode;
}

const SubjectCard = ({ title, description, progress, lessons, students, duration, color, icon }: SubjectCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg ${color}`}>
            {icon}
          </div>
          <span className="text-sm text-gray-500">{progress}%</span>
        </div>
        <CardTitle className="text-lg font-semibold mt-3">{title}</CardTitle>
        <p className="text-sm text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={progress} className="h-2" />
          
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-reverse space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{lessons} درس</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-1">
              <Users className="h-4 w-4" />
              <span>{students}</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
          
          <Button className="w-full mt-4" variant="outline">
            متابعة الدراسة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
