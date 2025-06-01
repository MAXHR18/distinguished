
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoPlayerPage = () => {
  const { teacherId, videoId } = useParams();
  const navigate = useNavigate();

  // مكان إضافة رابط الفيديو - يمكنك تغييره هنا
  const VIDEO_URL = "/path/to/your/video.mp4";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(`/teacher/${teacherId}/lectures`)}
            className="mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            العودة للمحاضرات
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            المحاضرة {videoId}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-black rounded-lg overflow-hidden">
          <video
            controls
            className="w-full h-96"
            src={VIDEO_URL}
          >
            المتصفح الخاص بك لا يدعم تشغيل الفيديو.
          </video>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayerPage;
