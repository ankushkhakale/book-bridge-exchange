
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, CreditCard, Truck } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      title: "Introduction to Computer Science", 
      author: "Dr. S. Sharma", 
      price: 450, 
      quantity: 1, 
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=200" 
    },
    { 
      id: 2, 
      title: "Fundamentals of Physics", 
      author: "H.C. Verma", 
      price: 580, 
      quantity: 1, 
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=200" 
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-bookbridge-purple/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-display text-bookbridge-darkpurple mb-4">Your Cart</h1>
            <p className="text-gray-600 max-w-2xl">
              Review your selected books before completing your purchase.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-6">Cart Items</h2>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row border-b pb-6">
                          <div className="w-full sm:w-24 h-24 bg-gray-200 rounded-md overflow-hidden mb-4 sm:mb-0">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 sm:ml-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between">
                              <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-gray-600 text-sm">By {item.author}</p>
                              </div>
                              <p className="font-bold text-bookbridge-darkpurple mt-2 sm:mt-0">₹{item.price}</p>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="bg-gray-100 p-1 rounded"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="bg-gray-100 p-1 rounded"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-600 flex items-center"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>₹{shipping}</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-bookbridge-darkpurple">₹{total}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-bookbridge-purple hover:bg-bookbridge-darkpurple flex items-center justify-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                      <Truck className="mr-2 h-4 w-4" />
                      <span>Free shipping for orders above ₹1000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
              <p className="text-gray-500 mt-2">Looks like you haven't added any books to your cart yet.</p>
              <Button className="mt-6 bg-bookbridge-purple hover:bg-bookbridge-darkpurple">
                Browse Books
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
