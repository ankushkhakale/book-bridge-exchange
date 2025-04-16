
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { books, universities, courses } from "@/data/mockData";
import { BookType } from "@/components/BookCard";
import { 
  Filter, 
  SlidersHorizontal, 
  X, 
  ChevronDown, 
  Bell,
  BookOpenCheck
} from "lucide-react";

const BrowseBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<'all' | 'wishlist'>('all');

  // Simulate loading state with animation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = [...books];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    result = result.filter(book => 
      book.price >= priceRange[0] && book.price <= priceRange[1]
    );
    
    // Filter by universities
    if (selectedUniversities.length > 0) {
      result = result.filter(book => 
        book.university && selectedUniversities.includes(book.university)
      );
    }
    
    // Filter by courses
    if (selectedCourses.length > 0) {
      result = result.filter(book => 
        book.course && selectedCourses.includes(book.course)
      );
    }
    
    // Filter by conditions
    if (selectedConditions.length > 0) {
      result = result.filter(book => 
        selectedConditions.includes(book.condition)
      );
    }
    
    setFilteredBooks(result);
  }, [searchTerm, priceRange, selectedUniversities, selectedCourses, selectedConditions]);

  const toggleUniversity = (university: string) => {
    setSelectedUniversities(prev => 
      prev.includes(university) 
        ? prev.filter(u => u !== university)
        : [...prev, university]
    );
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev => 
      prev.includes(course) 
        ? prev.filter(c => c !== course)
        : [...prev, course]
    );
  };

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 1000]);
    setSelectedUniversities([]);
    setSelectedCourses([]);
    setSelectedConditions([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-bookbridge-purple/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-bookbridge-darkpurple mb-4">Browse Books</h1>
            <p className="text-gray-600 max-w-2xl">
              Find affordable textbooks from students across India. Filter by university, subject, 
              or search for specific titles to find exactly what you need.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            <div className="flex">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search by title, author, ISBN..."
                  className="pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2" 
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
              <Button 
                variant="outline" 
                className="ml-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            
            {showFilters && (
              <div className="absolute mt-2 w-full bg-white rounded-md shadow-lg z-10 p-4 border animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold flex items-center">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </h3>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={clearFilters} 
                    className="text-xs h-8"
                  >
                    Clear All
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={priceRange}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Condition</h4>
                    <div className="space-y-2">
                      {["New", "Like New", "Good", "Fair"].map(condition => (
                        <div key={condition} className="flex items-center">
                          <Checkbox 
                            id={`condition-${condition}`} 
                            checked={selectedConditions.includes(condition)}
                            onCheckedChange={() => toggleCondition(condition)}
                          />
                          <label 
                            htmlFor={`condition-${condition}`}
                            className="ml-2 text-sm"
                          >
                            {condition}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium">Universities</h4>
                    <button className="text-xs text-bookbridge-purple flex items-center">
                      Show All <ChevronDown className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {universities.slice(0, 5).map(university => (
                      <Badge 
                        key={university.value}
                        variant={selectedUniversities.includes(university.label) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedUniversities.includes(university.label) 
                            ? "bg-bookbridge-purple" 
                            : "hover:bg-bookbridge-purple/10"
                        }`}
                        onClick={() => toggleUniversity(university.label)}
                      >
                        {university.label}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium">Courses</h4>
                    <button className="text-xs text-bookbridge-purple flex items-center">
                      Show All <ChevronDown className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {courses.slice(0, 5).map(course => (
                      <Badge 
                        key={course.value}
                        variant={selectedCourses.includes(course.label) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedCourses.includes(course.label) 
                            ? "bg-bookbridge-purple" 
                            : "hover:bg-bookbridge-purple/10"
                        }`}
                        onClick={() => toggleCourse(course.label)}
                      >
                        {course.label}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button 
                    size="sm" 
                    onClick={() => setShowFilters(false)}
                    className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <Button 
                variant={activeView === 'all' ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveView('all')}
                className={activeView === 'all' ? "bg-bookbridge-purple hover:bg-bookbridge-darkpurple" : ""}
              >
                <BookOpenCheck className="h-4 w-4 mr-2" />
                All Books
              </Button>
              <Button 
                variant={activeView === 'wishlist' ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveView('wishlist')}
                className={activeView === 'wishlist' ? "bg-bookbridge-purple hover:bg-bookbridge-darkpurple" : ""}
              >
                <Bell className="h-4 w-4 mr-2" />
                My Wishlist
              </Button>
            </div>
            
            <div className="text-sm text-gray-500">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'result' : 'results'}
            </div>
          </div>
          
          <div className="mt-6">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(8).fill(0).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 aspect-square rounded-lg"></div>
                    <div className="h-4 bg-gray-200 rounded mt-3 w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded mt-2 w-1/2"></div>
                    <div className="h-5 bg-gray-200 rounded mt-3 w-1/3"></div>
                  </div>
                ))}
              </div>
            ) : filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book, index) => (
                  <div 
                    key={book.id} 
                    className="animate-fade-in" 
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <BookCard 
                      book={book} 
                      wishlistView={activeView === 'wishlist'} 
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <BookOpenCheck className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold">No books found</h3>
                <p className="text-gray-500 mt-1">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={clearFilters} 
                  className="mt-4"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseBooks;
