
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart } from "lucide-react";

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
};

const BookCard = ({ book }: { book: BookType }) => {
  const discountPercentage = Math.round(
    ((book.originalPrice - book.price) / book.originalPrice) * 100
  );

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col">
      <div className="relative pt-[100%] bg-gray-100">
        <img
          src={book.coverImage}
          alt={book.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="h-8 w-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
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
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-medium text-base line-clamp-2 mb-1 text-gray-800">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
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
      </CardFooter>
    </Card>
  );
};

export default BookCard;
