
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Coffee } from 'lucide-react';

const StudyTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      setIsBreak(!isBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60); // Switch between work and break
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, isBreak]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTime(25 * 60);
    setIsActive(false);
    setIsBreak(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center space-x-reverse space-x-2">
          {isBreak ? <Coffee className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span>{isBreak ? 'وقت الاستراحة' : 'مؤقت بومودورو'}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 mb-6">
            {formatTime(time)}
          </div>
          <div className="flex justify-center space-x-reverse space-x-2">
            <Button
              onClick={() => setIsActive(!isActive)}
              variant={isActive ? "secondary" : "default"}
              size="sm"
            >
              {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button onClick={resetTimer} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            {isBreak ? 'استرح قليلاً!' : 'ركز على دراستك'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyTimer;
