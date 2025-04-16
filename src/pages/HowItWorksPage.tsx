
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-bookbridge-purple/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-bookbridge-darkpurple mb-4">How Book Bridge Works</h1>
            <p className="text-gray-600 max-w-2xl">
              Our platform connects students who want to buy affordable textbooks with those 
              looking to sell books they no longer need. Learn how to make the most of Book Bridge.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4 text-bookbridge-darkpurple">For Buyers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Search for textbooks</p>
                    <p className="text-gray-600">Find books by title, author, ISBN, or university-specific courses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Contact the seller</p>
                    <p className="text-gray-600">Connect directly with sellers through our secure messaging system</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Arrange pickup or delivery</p>
                    <p className="text-gray-600">Meet on campus or choose a delivery option that works for you</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Pay securely</p>
                    <p className="text-gray-600">Use our secure payment system or pay at the time of exchange</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="perspective-book mx-auto">
                <div className="book">
                  <div className="front-cover">
                    <h2 className="text-xl font-bold">Buying Process</h2>
                    <p className="text-sm mt-4">Save up to 70% on textbooks</p>
                  </div>
                  <div className="book-shadow"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="perspective-book mx-auto">
                <div className="book">
                  <div className="front-cover">
                    <h2 className="text-xl font-bold">Selling Process</h2>
                    <p className="text-sm mt-4">Turn unused books into cash</p>
                  </div>
                  <div className="book-shadow"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-bookbridge-darkpurple">For Sellers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">List your books</p>
                    <p className="text-gray-600">Create listings with photos, condition details, and your preferred price</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Respond to inquiries</p>
                    <p className="text-gray-600">Chat with potential buyers through our messaging system</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Meet the buyer or ship the book</p>
                    <p className="text-gray-600">Exchange on campus or use our integrated shipping options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Get paid</p>
                    <p className="text-gray-600">Receive payment through our secure system with rapid transfers</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
