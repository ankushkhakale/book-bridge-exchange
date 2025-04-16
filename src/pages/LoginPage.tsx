
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Lock, Eye, EyeOff, Book } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
          <div className="p-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Book className="text-bookbridge-purple h-8 w-8" />
                <div>
                  <h1 className="text-xl font-bold font-display text-bookbridge-darkpurple">Book Bridge</h1>
                  <p className="text-xs text-gray-500">Knowledge passes on. So should your textbooks.</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="email" placeholder="your@email.com" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="********" 
                      className="pl-10 pr-10" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-bookbridge-purple focus:ring-bookbridge-purple" />
                    <span className="ml-2">Remember me</span>
                  </label>
                  <a href="#" className="text-bookbridge-darkpurple hover:underline">Forgot password?</a>
                </div>
                
                <Button className="w-full bg-bookbridge-purple hover:bg-bookbridge-darkpurple">
                  Login
                </Button>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="text" placeholder="Your name" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="email" placeholder="your@email.com" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="********" 
                      className="pl-10 pr-10" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">University/College</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your institution" />
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
                
                <div className="flex items-center text-sm">
                  <input type="checkbox" id="terms" className="rounded text-bookbridge-purple focus:ring-bookbridge-purple" />
                  <label htmlFor="terms" className="ml-2">
                    I agree to the <a href="#" className="text-bookbridge-darkpurple hover:underline">Terms of Service</a> and <a href="#" className="text-bookbridge-darkpurple hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <Button className="w-full bg-bookbridge-purple hover:bg-bookbridge-darkpurple">
                  Register
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
