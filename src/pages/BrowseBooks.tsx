
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

const BrowseBooks = () => {
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
          <SearchBar />
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Available Textbooks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Placeholder for book listings */}
              <div className="animate-fade-in">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-medium">Computer Science Fundamentals</h3>
                    <p className="text-gray-600 text-sm">By R.S. Agarwal</p>
                    <p className="text-bookbridge-darkpurple font-bold mt-2">₹450</p>
                  </div>
                </div>
              </div>
              
              {/* More book placeholders with staggered animations */}
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ 
                    animation: `fade-in 0.3s ease-out ${0.1 * index}s both` 
                  }}
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-medium">Sample Textbook Title</h3>
                    <p className="text-gray-600 text-sm">By Author Name</p>
                    <p className="text-bookbridge-darkpurple font-bold mt-2">₹{300 + (index * 75)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseBooks;
