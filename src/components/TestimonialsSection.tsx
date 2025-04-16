
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    content: "Book Bridge helped me save over ₹7,000 on my engineering textbooks this semester. The platform is super easy to use and I found all my required books at almost half the price!",
    author: "Raj Patel",
    role: "B.Tech Student, IIT Delhi",
    avatar: "https://i.pravatar.cc/150?img=11",
    initials: "RP",
  },
  {
    id: 2,
    content: "I was spending a fortune on medical textbooks every year. Thanks to Book Bridge, I now buy used books in great condition and sell mine when I'm done. It's sustainable and economical!",
    author: "Priya Sharma",
    role: "MBBS Student, AIIMS Delhi",
    avatar: "https://i.pravatar.cc/150?img=5",
    initials: "PS",
  },
  {
    id: 3,
    content: "The local pickup option is what makes Book Bridge perfect. I can meet sellers on campus and check books before buying. Made some friends through the platform too!",
    author: "Arjun Mehta",
    role: "B.Com Student, Delhi University",
    avatar: "https://i.pravatar.cc/150?img=12",
    initials: "AM",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-bookbridge-purple/10 to-bookbridge-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of students across India who are already saving money and building connections through Book Bridge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.585l-6.327 3.323 1.209-7.035L.373 7.383l7.033-1.022L10 0l2.594 6.361 7.033 1.022-4.509 4.49 1.209 7.035L10 15.585z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-bookbridge-purple text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
