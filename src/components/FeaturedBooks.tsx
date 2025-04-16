
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookCard, { BookType } from "./BookCard";

const FEATURED_BOOKS: BookType[] = [
  {
    id: "1",
    title: "Fundamentals of Engineering Mathematics",
    author: "H.K. Dass",
    coverImage: "https://m.media-amazon.com/images/I/61iWmK-SprL._AC_UF1000,1000_QL80_.jpg",
    price: 450,
    originalPrice: 850,
    condition: "Good",
    university: "IIT Delhi",
    course: "B.Tech Year 1"
  },
  {
    id: "2",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    coverImage: "https://m.media-amazon.com/images/I/41T5-SxDML._SX260_.jpg",
    price: 580,
    originalPrice: 1200,
    condition: "Like New",
    university: "BITS Pilani",
    course: "CS-F211"
  },
  {
    id: "3",
    title: "Basic Electrical Engineering",
    author: "D.P. Kothari & I.J. Nagrath",
    coverImage: "https://m.media-amazon.com/images/I/51oroW7c-SL._SX383_BO1,204,203,200_.jpg",
    price: 325,
    originalPrice: 550,
    condition: "Good",
    university: "VIT",
    course: "EEE101"
  },
  {
    id: "4",
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    coverImage: "https://m.media-amazon.com/images/I/51+8iDmxnUL._SX258_BO1,204,203,200_.jpg",
    price: 620,
    originalPrice: 899,
    condition: "New",
    university: "Delhi University",
    course: "Economics Honours"
  },
  {
    id: "5",
    title: "Concept of Physics Vol 1",
    author: "H.C. Verma",
    coverImage: "https://m.media-amazon.com/images/I/51vNFVS+jWL._SX342_BO1,204,203,200_.jpg",
    price: 280,
    originalPrice: 450,
    condition: "Good",
    university: "CBSE",
    course: "Class 11-12"
  },
  {
    id: "6",
    title: "Organic Chemistry",
    author: "Morrison & Boyd",
    coverImage: "https://m.media-amazon.com/images/I/914KxT1sQnL._AC_UY327_FMwebp_QL65_.jpg",
    price: 750,
    originalPrice: 1050,
    condition: "Fair",
    university: "NEET",
    course: "Medical Entrance"
  },
  {
    id: "7",
    title: "Quantitative Aptitude",
    author: "R.S. Aggarwal",
    coverImage: "https://m.media-amazon.com/images/I/71pwM3h08aL._AC_UY327_FMwebp_QL65_.jpg",
    price: 430,
    originalPrice: 699,
    condition: "Like New",
    university: "CAT Preparation",
    course: "MBA Entrance"
  },
  {
    id: "8",
    title: "Operating System Concepts",
    author: "Silberschatz, Galvin & Gagne",
    coverImage: "https://m.media-amazon.com/images/I/51Qy2upM+aL._SY344_BO1,204,203,200_.jpg",
    price: 820,
    originalPrice: 1250,
    condition: "Like New",
    university: "IIT Bombay",
    course: "CS302"
  },
];

const ENGINEERING_BOOKS = FEATURED_BOOKS.filter((_, index) => [0, 1, 2, 7].includes(index));
const MEDICAL_BOOKS = FEATURED_BOOKS.filter((_, index) => [5, 4].includes(index));
const COMMERCE_BOOKS = FEATURED_BOOKS.filter((_, index) => [3, 6].includes(index));

const FeaturedBooks = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our carefully curated collection of textbooks from various universities and courses across India.
          </p>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Books</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="commerce">Commerce</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {FEATURED_BOOKS.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="engineering">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {ENGINEERING_BOOKS.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="medical">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {MEDICAL_BOOKS.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="commerce">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {COMMERCE_BOOKS.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-bookbridge-purple text-bookbridge-darkpurple hover:bg-bookbridge-purple/10 px-8 py-6 h-auto">
            View All Books
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
