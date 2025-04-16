
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Book, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Book className="text-bookbridge-purple h-7 w-7 group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-xl font-bold font-display text-bookbridge-darkpurple group-hover:text-bookbridge-purple transition-colors">Book Bridge</h1>
              <p className="text-xs text-gray-500 hidden md:block">Knowledge passes on. So should your textbooks.</p>
            </div>
          </Link>

          {!isMobile && (
            <div className="hidden md:flex w-1/3 mx-4 relative">
              <Input 
                type="text" 
                placeholder="Search for textbooks, authors, or subjects..." 
                className="w-full pl-10 pr-4 py-1.5 border-bookbridge-purple/30 focus:border-bookbridge-purple focus:ring-bookbridge-purple transition-all hover:shadow-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/browse-books">
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-bookbridge-darkpurple relative ${
                  isActive('/browse-books') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bookbridge-purple' : ''
                } hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-bookbridge-purple/50 transition-all`}
              >
                Browse Books
              </Button>
            </Link>
            
            <Link to="/how-it-works">
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-bookbridge-darkpurple relative ${
                  isActive('/how-it-works') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bookbridge-purple' : ''
                } hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-bookbridge-purple/50 transition-all`}
              >
                How It Works
              </Button>
            </Link>
            
            <Link to="/sell-books">
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-bookbridge-darkpurple relative ${
                  isActive('/sell-books') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bookbridge-purple' : ''
                } hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-bookbridge-purple/50 transition-all`}
              >
                Sell Books
              </Button>
            </Link>
            
            <Link to="/login">
              <Button 
                variant="outline" 
                className="border-bookbridge-purple text-bookbridge-darkpurple hover:bg-bookbridge-purple/10 transition-all hover:shadow-sm"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button 
                className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple transition-all transform hover:scale-105 hover:shadow-md"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobile && isOpen && (
          <div className="mt-4 pb-3 space-y-3 animate-fade-in">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search textbooks..." 
                className="w-full pl-10 pr-4 py-1.5 border-bookbridge-purple/30"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/browse-books" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="text-gray-600 justify-start w-full">Browse Books</Button>
              </Link>
              <Link to="/how-it-works" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="text-gray-600 justify-start w-full">How It Works</Button>
              </Link>
              <Link to="/sell-books" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="text-gray-600 justify-start w-full">Sell Books</Button>
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="border-bookbridge-purple text-bookbridge-darkpurple w-full">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <Button className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
