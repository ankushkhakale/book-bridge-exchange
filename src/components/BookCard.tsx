
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, Bell, Check, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import UserRating from "@/components/UserRating";

export type BookType = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  originalPrice: number;
  condition: "New" | "Like New" | "Good" | "Fair";
  university?: string;
  course?: string;
  description?: string;
  status?: "available" | "sold" | "pending";
};

interface BookCardProps {
  book: BookType;
  wishlistView?: boolean;
}

const BookCard = ({ book, wishlistView = false }: BookCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(wishlistView);
  const [status, setStatus] = useState(book.status || "available");
  const { toast } = useToast();

  const discountPercentage = Math.round(
    ((book.originalPrice - book.price) / book.originalPrice) * 100
  );

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? 
        "This book has been removed from your wishlist." : 
        "You'll be notified when there are updates on this book.",
    });
  };

  const getStatusColor = () => {
    switch (status) {
      case "sold": return "bg-red-500";
      case "pending": return "bg-amber-500";
      default: return "bg-green-500";
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case "sold": return "Sold";
      case "pending": return "Reserved";
      default: return "Available";
    }
  };

  return (
    <Link to={`/book/${book.id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col">
        <div className="relative pt-[100%] bg-gray-100">
          <img
            src={book.coverImage}
            alt={book.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <button 
              className={`h-8 w-8 rounded-full ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white/80 text-gray-600'} hover:bg-white flex items-center justify-center shadow-sm transition-all`}
              onClick={handleWishlist}
            >
              {isWishlisted ? <Bell className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
            </button>
          </div>
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 left-2 bg-bookbridge-purple">
              {discountPercentage}% OFF
            </Badge>
          )}
          <Badge
            className={`absolute bottom-2 left-2 ${
              book.condition === "New"
                ? "bg-green-500"
                : book.condition === "Like New"
                ? "bg-blue-500"
                : book.condition === "Good"
                ? "bg-yellow-500"
                : "bg-orange-500"
            }`}
          >
            {book.condition}
          </Badge>
          
          <Badge className={`absolute bottom-2 right-2 ${getStatusColor()}`}>
            {getStatusText()}
          </Badge>
        </div>
        <CardContent className="pt-4 flex-grow">
          <h3 className="font-medium text-base line-clamp-2 mb-1 text-gray-800">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
          
          <div className="flex items-center text-xs text-gray-500 mt-1 space-x-1">
            <UserRating rating={4.2} size="sm" />
            <span>(4.2)</span>
          </div>
          
          {(book.university || book.course) && (
            <p className="text-xs text-gray-500 mt-1">
              {book.university} {book.course && `• ${book.course}`}
            </p>
          )}
        </CardContent>
        <CardFooter className="pt-0 pb-4 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-bookbridge-darkpurple">
              ₹{book.price}
            </span>
            {book.originalPrice > book.price && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                ₹{book.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex items-center text-xs">
            <BookOpen className="h-3 w-3 text-gray-400 mr-1" />
            <span className="text-gray-500">5 views</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;
