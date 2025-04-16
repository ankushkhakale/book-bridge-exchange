
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Camera, PlusCircle } from "lucide-react";

const SellBooks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-bookbridge-purple/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-bookbridge-darkpurple mb-4">Sell Your Books</h1>
            <p className="text-gray-600 max-w-2xl">
              Turn your unused textbooks into cash. Create a listing and connect with students 
              who need your books for their courses.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6">Book Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
                <Input type="text" placeholder="Enter the complete title of the book" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <Input type="text" placeholder="Author name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Edition</label>
                <Input type="text" placeholder="e.g. 3rd Edition" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ISBN (if available)</label>
                <Input type="text" placeholder="13 or 10 digit ISBN" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject/Course</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="commerce">Commerce</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Book Condition</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New (never used)</SelectItem>
                    <SelectItem value="like-new">Like New (minimal signs of use)</SelectItem>
                    <SelectItem value="good">Good (minor wear)</SelectItem>
                    <SelectItem value="fair">Fair (noticeable wear)</SelectItem>
                    <SelectItem value="poor">Poor (significant wear)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                <Input type="number" placeholder="Enter your asking price" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">University/College</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select university" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="du">Delhi University</SelectItem>
                    <SelectItem value="iit-delhi">IIT Delhi</SelectItem>
                    <SelectItem value="iit-bombay">IIT Bombay</SelectItem>
                    <SelectItem value="iit-madras">IIT Madras</SelectItem>
                    <SelectItem value="bits-pilani">BITS Pilani</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <Textarea placeholder="Add any additional details about the book, such as highlights, notes, etc." rows={4} />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload size={24} className="mb-2" />
                    <span className="text-xs">Cover Photo</span>
                  </div>
                  <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                    <Camera size={24} className="mb-2" />
                    <span className="text-xs">Back Cover</span>
                  </div>
                  <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                    <PlusCircle size={24} />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Upload clear images showing the condition of the book</p>
              </div>
              
              <div className="md:col-span-2 flex justify-center mt-4">
                <Button className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple w-full max-w-sm">
                  Create Listing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SellBooks;
