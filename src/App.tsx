
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import TelegramModal from "./components/TelegramModal";
import HomePage from "./pages/HomePage";
import TeacherPage from "./pages/TeacherPage";
import MaterialsPage from "./pages/MaterialsPage";
import LecturesPage from "./pages/LecturesPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <TelegramModal />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teacher/:teacherId" element={<TeacherPage />} />
            <Route path="/teacher/:teacherId/materials" element={<MaterialsPage />} />
            <Route path="/teacher/:teacherId/lectures" element={<LecturesPage />} />
            <Route path="/teacher/:teacherId/video/:videoId" element={<VideoPlayerPage />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
