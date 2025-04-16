
import { BookType } from "@/components/BookCard";

export const books: BookType[] = [
  {
    id: "1",
    title: "Engineering Mathematics",
    author: "B.S. Grewal",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop",
    price: 450,
    originalPrice: 899,
    condition: "Good",
    university: "Delhi University",
    course: "B.Tech"
  },
  {
    id: "2",
    title: "Data Structures Using C",
    author: "Reema Thareja",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop",
    price: 320,
    originalPrice: 599,
    condition: "Like New",
    university: "IIT Delhi",
    course: "CSE"
  },
  {
    id: "3",
    title: "Physics for Engineers",
    author: "Giasuddin Ahmad",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop",
    price: 375,
    originalPrice: 750,
    condition: "Good",
    university: "IIT Bombay",
    course: "Physics"
  },
  {
    id: "4",
    title: "Organic Chemistry",
    author: "Paula Bruice",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop",
    price: 540,
    originalPrice: 900,
    condition: "New",
    university: "BITS Pilani",
    course: "Chemistry"
  },
  {
    id: "5",
    title: "Financial Accounting",
    author: "Belverd E. Needles",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop",
    price: 290,
    originalPrice: 580,
    condition: "Fair",
    university: "Shri Ram College of Commerce",
    course: "B.Com"
  },
  {
    id: "6",
    title: "Statistics for Management",
    author: "Richard I. Levin",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop",
    price: 410,
    originalPrice: 699,
    condition: "Like New",
    university: "Delhi University",
    course: "BBA"
  }
];

export const universities = [
  { value: "du", label: "Delhi University" },
  { value: "iit-delhi", label: "IIT Delhi" },
  { value: "iit-bombay", label: "IIT Bombay" },
  { value: "iit-madras", label: "IIT Madras" },
  { value: "bits-pilani", label: "BITS Pilani" },
  { value: "srcc", label: "Shri Ram College of Commerce" },
  { value: "stephens", label: "St. Stephen's College" },
  { value: "jadavpur", label: "Jadavpur University" },
  { value: "jnu", label: "Jawaharlal Nehru University" },
  { value: "jamia", label: "Jamia Millia Islamia" }
];

export const courses = [
  { value: "btech", label: "B.Tech" },
  { value: "bcom", label: "B.Com" },
  { value: "ba", label: "BA" },
  { value: "bba", label: "BBA" },
  { value: "bsc", label: "B.Sc" },
  { value: "mtech", label: "M.Tech" },
  { value: "mcom", label: "M.Com" },
  { value: "ma", label: "MA" },
  { value: "mba", label: "MBA" },
  { value: "msc", label: "M.Sc" }
];
