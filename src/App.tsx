import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThreeScene from "./components/ThreeScene";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/Cursor"; // Import komponen baru

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        {/* 0. CUSTOM CURSOR */}
        {/* Diletakkan di luar <main> agar tidak terkena efek opacity/pointer-events */}
        <CustomCursor />

        {/* 1. LOADING SCREEN */}
        {loading && (
          <LoadingScreen onFinish={() => setLoading(false)} />
        )}

        
        {/* 3. MAIN UI CONTENT */}
        <main
          className={`
            relative z-10 transition-opacity duration-700
            ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </main>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;