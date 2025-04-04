
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Company": ["About Us", "Careers", "Blog", "Press"],
    "Services": ["Virtual Top-Up", "Bill Payments", "Virtual Cards", "Gift Cards"],
    "Support": ["Contact Us", "Help Center", "FAQ", "Security"],
    "Legal": ["Terms of Service", "Privacy Policy", "Compliance", "Cookies"]
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-2xl font-bold gradient-text">PulsePay</div>
            <p className="text-gray-600 max-w-md">
              Transforming the way people manage their finances with innovative digital solutions for everyday financial needs.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-100 hover:bg-fintech-purple/10 flex items-center justify-center text-gray-600 hover:text-fintech-purple transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-fintech-purple transition-colors flex items-center"
                    >
                      <ChevronRight size={14} className="mr-1 text-fintech-purple/70" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="mb-8 rounded-xl bg-gradient-to-r from-fintech-purple/10 to-fintech-teal/10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold mb-2">Stay updated with our newsletter</h4>
                <p className="text-gray-600">Get the latest news, updates, and special offers delivered directly to your inbox.</p>
              </div>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} PulsePay. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-fintech-purple text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-fintech-purple text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-fintech-purple text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
