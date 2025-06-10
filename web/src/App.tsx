
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import January from "./pages/January";
import February from "./pages/February";
import March from "./pages/March";
import April from "./pages/April";
import May from "./pages/May";
import June from "./pages/June";
import July from "./pages/July";
import August from "./pages/August";
import September from "./pages/September";
import October from "./pages/October";
import November from "./pages/November";
import December from "./pages/December";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/january" element={<January />} />
          <Route path="/february" element={<February />} />
          <Route path="/march" element={<March />} />
          <Route path="/april" element={<April />} />
          <Route path="/may" element={<May />} />
          <Route path="/june" element={<June />} />
          <Route path="/july" element={<July />} />
          <Route path="/august" element={<August />} />
          <Route path="/september" element={<September />} />
          <Route path="/october" element={<October />} />
          <Route path="/november" element={<November />} />
          <Route path="/december" element={<December />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
