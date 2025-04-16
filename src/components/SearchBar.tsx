
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [university, setUniversity] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build the search query string
    const params = new URLSearchParams();
    if (searchQuery) params.append("q", searchQuery);
    if (university) params.append("university", university);
    if (category) params.append("category", category);
    
    // Navigate to browse page with search params
    navigate(`/browse-books?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="relative md:col-span-6">
            <Input
              type="text"
              placeholder="Search by title, author, ISBN..."
              className="pl-10 pr-4 py-6 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="md:col-span-2">
            <Select value={university} onValueChange={setUniversity}>
              <SelectTrigger className="w-full py-6">
                <SelectValue placeholder="University" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="du">Delhi University</SelectItem>
                  <SelectItem value="iit-delhi">IIT Delhi</SelectItem>
                  <SelectItem value="iit-bombay">IIT Bombay</SelectItem>
                  <SelectItem value="iit-madras">IIT Madras</SelectItem>
                  <SelectItem value="bits-pilani">BITS Pilani</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full py-6">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="arts">Arts</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Button 
              type="submit"
              className="w-full py-6 bg-bookbridge-purple hover:bg-bookbridge-darkpurple"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
