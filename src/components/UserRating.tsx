
import { Star, StarHalf } from "lucide-react";

interface UserRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

const UserRating = ({ rating, size = "sm" }: UserRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  const getStarSize = () => {
    switch (size) {
      case "sm": return "h-3 w-3";
      case "md": return "h-4 w-4";
      case "lg": return "h-5 w-5";
      default: return "h-3 w-3";
    }
  };

  return (
    <div className="flex">
      {Array(fullStars).fill(0).map((_, i) => (
        <Star key={`full-${i}`} className={`${getStarSize()} fill-yellow-400 text-yellow-400`} />
      ))}
      {hasHalfStar && <StarHalf className={`${getStarSize()} fill-yellow-400 text-yellow-400`} />}
      {Array(emptyStars).fill(0).map((_, i) => (
        <Star key={`empty-${i}`} className={`${getStarSize()} text-gray-300`} />
      ))}
    </div>
  );
};

export default UserRating;
