
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Star, Clock, MapPin, Bookmark, Bell } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { books } from "@/data/mockData";
import ContactSellerDialog from "@/components/ContactSellerDialog";
import UserRating from "@/components/UserRating";

const BookDetail = () => {
  const { bookId } = useParams();
  const { toast } = useToast();
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Find the book with the given ID from our mock data
  const book = books.find(b => b.id === bookId) || books[0];
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? 
        "This book has been removed from your wishlist." : 
        "You'll be notified when this book becomes available.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
              {/* Book Image Section */}
              <div>
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div className="aspect-square bg-gray-100 rounded cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src={book.coverImage} 
                      alt="Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded"></div>
                  <div className="aspect-square bg-gray-100 rounded"></div>
                  <div className="aspect-square bg-gray-100 rounded"></div>
                </div>
              </div>
              
              {/* Book Details Section */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold font-display text-gray-800 mb-2">{book.title}</h1>
                    <p className="text-lg text-gray-600">{book.author}</p>
                  </div>
                  <button 
                    onClick={handleWishlist}
                    className={`p-2 rounded-full ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'} hover:bg-gray-200 transition-colors`}
                  >
                    {isWishlisted ? <Bell className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                  </button>
                </div>
                
                <div className="flex items-center mt-4 space-x-2">
                  <Badge className={`${
                    book.condition === "New"
                      ? "bg-green-500"
                      : book.condition === "Like New"
                      ? "bg-blue-500"
                      : book.condition === "Good"
                      ? "bg-yellow-500"
                      : "bg-orange-500"
                  }`}>
                    {book.condition}
                  </Badge>
                  {book.university && (
                    <Badge variant="outline" className="text-gray-700">
                      {book.university}
                    </Badge>
                  )}
                  {book.course && (
                    <Badge variant="outline" className="text-gray-700">
                      {book.course}
                    </Badge>
                  )}
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-bookbridge-darkpurple">₹{book.price}</span>
                    {book.originalPrice > book.price && (
                      <>
                        <span className="ml-2 text-lg text-gray-400 line-through">₹{book.originalPrice}</span>
                        <Badge className="ml-2 bg-bookbridge-purple">
                          {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                        </Badge>
                      </>
                    )}
                  </div>
                  {book.originalPrice > book.price && (
                    <p className="text-sm text-green-600 mt-1">You save ₹{book.originalPrice - book.price}</p>
                  )}
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Listed 5 days ago</p>
                      <p className="text-sm text-gray-500">Last updated yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">{book.university || "Delhi University"}</p>
                      <p className="text-sm text-gray-500">North Campus, Delhi</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-bookbridge-purple/20 flex items-center justify-center text-bookbridge-purple font-semibold">
                      RS
                    </div>
                    <div>
                      <p className="font-medium">Rahul Sharma</p>
                      <div className="flex items-center mt-1">
                        <UserRating rating={4.5} />
                        <span className="text-sm text-gray-500 ml-2">4.5 (23 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setShowContactDialog(true)} 
                    className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple flex-1"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Seller
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-bookbridge-purple text-bookbridge-darkpurple hover:bg-bookbridge-purple/10 flex-1"
                    onClick={handleWishlist}
                  >
                    {isWishlisted ? (
                      <>
                        <Bell className="h-4 w-4 mr-2" />
                        Wishlisted
                      </>
                    ) : (
                      <>
                        <Bookmark className="h-4 w-4 mr-2" />
                        Add to Wishlist
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-700">
                  {book.description || "This is a comprehensive textbook ideal for university students. It's in excellent condition with minimal highlighting and no damage to the spine or cover. I used it for only one semester and it contains all the essential material for the course. Perfect for anyone looking to save money on their course materials."}
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-2">Details</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="font-medium w-32">Edition:</span>
                    <span>3rd Edition, 2021</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">ISBN:</span>
                    <span>9781234567890</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">Language:</span>
                    <span>English</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium w-32">Publisher:</span>
                    <span>McGraw Hill</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ContactSellerDialog 
        open={showContactDialog} 
        onOpenChange={setShowContactDialog} 
        sellerName="Rahul Sharma"
        bookTitle={book.title}
      />
      
      <Footer />
    </div>
  );
};

export default BookDetail;
