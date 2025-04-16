
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import FeaturedBooks from "@/components/FeaturedBooks";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <SearchBar />
        </div>
        
        <FeaturedBooks />
        
        <HowItWorks />
        
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
