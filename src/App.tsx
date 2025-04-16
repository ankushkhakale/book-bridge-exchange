
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrowseBooks from "./pages/BrowseBooks";
import HowItWorksPage from "./pages/HowItWorksPage";
import SellBooks from "./pages/SellBooks";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import BookDetail from "./pages/BookDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-books" element={<BrowseBooks />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/sell-books" element={<SellBooks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
