import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import CurrentSeason from "./pages/CurrentSeason";
import Categories from "./pages/Categories";
import Klamotten from "./pages/Klamotten";
import Accessoires from "./pages/Accessoires";
import Figuren from "./pages/Figuren";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="anime-shop-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/current-season" element={<CurrentSeason />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/klamotten" element={<Klamotten />} />
            <Route path="/categories/accessoires" element={<Accessoires />} />
            <Route path="/categories/figuren" element={<Figuren />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
