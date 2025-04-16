
import { useState } from 'react';
import { Menu, X, Search, Book, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Book className="text-bookbridge-purple h-7 w-7" />
            <div>
              <h1 className="text-xl font-bold font-display text-bookbridge-darkpurple">Book Bridge</h1>
              <p className="text-xs text-gray-500 hidden md:block">Knowledge passes on. So should your textbooks.</p>
            </div>
          </div>

          {!isMobile && (
            <div className="hidden md:flex w-1/3 mx-4 relative">
              <Input 
                type="text" 
                placeholder="Search for textbooks, authors, or subjects..." 
                className="w-full pl-10 pr-4 py-1.5 border-bookbridge-purple/30 focus:border-bookbridge-purple focus:ring-bookbridge-purple"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-bookbridge-darkpurple">Browse Books</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-bookbridge-darkpurple">How It Works</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-bookbridge-darkpurple">Sell Books</Button>
            <Button variant="outline" className="border-bookbridge-purple text-bookbridge-darkpurple hover:bg-bookbridge-purple/10">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobile && isOpen && (
          <div className="mt-4 pb-3 space-y-3">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search textbooks..." 
                className="w-full pl-10 pr-4 py-1.5 border-bookbridge-purple/30"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="text-gray-600 justify-start">Browse Books</Button>
              <Button variant="ghost" className="text-gray-600 justify-start">How It Works</Button>
              <Button variant="ghost" className="text-gray-600 justify-start">Sell Books</Button>
              <Button variant="outline" className="border-bookbridge-purple text-bookbridge-darkpurple">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
