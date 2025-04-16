
import { Book, Mail, Phone, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Book className="text-bookbridge-purple h-6 w-6" />
              <div>
                <h3 className="text-lg font-bold font-display text-bookbridge-darkpurple">Book Bridge</h3>
                <p className="text-xs text-gray-500">Knowledge passes on. So should your textbooks.</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              India's premier platform for students to buy, sell, and exchange textbooks, saving up to 70% on course materials.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Youtube size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="Browse Books" href="#" />
              <FooterLink text="Sell Books" href="#" />
              <FooterLink text="How It Works" href="#" />
              <FooterLink text="Universities" href="#" />
              <FooterLink text="Blog & Resources" href="#" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink text="Contact Us" href="#" />
              <FooterLink text="FAQs" href="#" />
              <FooterLink text="Safety Tips" href="#" />
              <FooterLink text="Terms of Service" href="#" />
              <FooterLink text="Privacy Policy" href="#" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-bookbridge-purple mr-2 mt-0.5" />
                <span className="text-gray-600">support@bookbridge.in</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-bookbridge-purple mr-2 mt-0.5" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-bold text-sm mb-3">Download Our App</h3>
              <div className="flex space-x-3">
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
                </a>
                <a href="#" className="block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Book Bridge. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <a href="#" className="hover:text-bookbridge-purple">Terms</a>
              <a href="#" className="hover:text-bookbridge-purple">Privacy</a>
              <a href="#" className="hover:text-bookbridge-purple">Cookies</a>
              <a href="#" className="hover:text-bookbridge-purple">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-bookbridge-purple hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ text, href }: { text: string; href: string }) => (
  <li>
    <a href={href} className="text-gray-600 hover:text-bookbridge-purple">
      {text}
    </a>
  </li>
);

export default Footer;
