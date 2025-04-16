
import { Book, IndianRupee, Users, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">How Book Bridge Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy for students across India to buy, sell, and exchange textbooks, saving money and building a community of knowledge sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <StepCard
            number={1}
            icon={<Book className="h-10 w-10 text-white" />}
            title="List Your Books"
            description="Take a few photos, add details about the condition and set your price. It only takes minutes to list."
          />
          
          <StepCard
            number={2}
            icon={<Users className="h-10 w-10 text-white" />}
            title="Connect with Buyers"
            description="Students from your college or nearby will message you through our secure chat system."
          />
          
          <StepCard
            number={3}
            icon={<IndianRupee className="h-10 w-10 text-white" />}
            title="Exchange Safely"
            description="Meet on campus or use our integrated payment and delivery system for remote transactions."
          />
          
          <StepCard
            number={4}
            icon={<TrendingUp className="h-10 w-10 text-white" />}
            title="Save & Earn"
            description="Save up to 70% buying used books and earn by selling textbooks you no longer need."
          />
        </div>

        <div className="mt-12 bg-gradient-to-r from-bookbridge-purple/10 to-bookbridge-blue/5 p-6 md:p-10 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold font-display mb-3">Ready to start saving?</h3>
              <p className="text-gray-600">
                Join thousands of students across India who are already saving money by exchanging textbooks through Book Bridge.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-bookbridge-purple hover:bg-bookbridge-darkpurple text-white px-6 py-3 rounded-md font-medium text-center">
                Sell Your Books
              </a>
              <a href="#" className="border border-bookbridge-purple text-bookbridge-darkpurple hover:bg-bookbridge-purple/10 px-6 py-3 rounded-md font-medium text-center">
                Browse Books
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ number, icon, title, description }: { number: number; icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-bookbridge-purple to-bookbridge-darkpurple flex items-center justify-center mb-5 shadow-md">
          {icon}
        </div>
        <div className="absolute top-0 right-0 bg-white rounded-full h-7 w-7 flex items-center justify-center border-2 border-bookbridge-purple shadow-sm">
          <span className="text-sm font-bold text-bookbridge-darkpurple">{number}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorks;
