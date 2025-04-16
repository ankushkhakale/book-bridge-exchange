
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const placeholderImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1728&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1738&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-bookbridge-purple/10 to-bookbridge-blue/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h4 className="text-bookbridge-darkpurple font-medium mb-2">For College Students Across India</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                Exchange Textbooks. <br />
                <span className="text-bookbridge-purple">Save Money.</span> Spread Knowledge.
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700">
              India's premier platform for students to buy, sell, and exchange course books with ease, saving up to 70% on textbook costs.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => navigate("/browse-books")}
                className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple text-white px-6 py-6 h-auto"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Browse Textbooks
              </Button>
              <Button 
                onClick={() => navigate("/sell-books")}
                variant="outline" 
                className="border-bookbridge-purple text-bookbridge-darkpurple hover:bg-bookbridge-purple/10 px-6 py-6 h-auto"
              >
                <Search className="h-4 w-4 mr-2" />
                Sell Your Books
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(index => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold"
                  >
                    {index}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold">10,000+</span> students using Book Bridge in <span className="font-bold">52</span> colleges across India
              </div>
            </div>
          </div>
          
          <div className="relative h-80 md:h-auto">
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-bookbridge-purple/20 rounded-lg transform rotate-3"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white shadow-lg rounded-lg transform -rotate-3 overflow-hidden">
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-100 p-8">
                <div className="relative max-w-md mx-auto w-full">
                  <div className="grid grid-cols-3 gap-4">
                    {placeholderImages.map((image, index) => (
                      <div 
                        key={index} 
                        className="perspective-book transform hover:scale-105 transition-transform duration-300 ease-in-out"
                      >
                        <img 
                          src={image} 
                          alt={`Book placeholder ${index + 1}`} 
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatsCard number="70%" text="Average Savings" />
          <StatsCard number="15K+" text="Books Exchanged" />
          <StatsCard number="8K+" text="Active Students" />
          <StatsCard number="52" text="Colleges" />
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-white rounded-lg p-5 shadow-md text-center">
    <p className="text-2xl md:text-3xl font-bold text-bookbridge-purple">{number}</p>
    <p className="text-sm md:text-base text-gray-600">{text}</p>
  </div>
);

export default HeroSection;

