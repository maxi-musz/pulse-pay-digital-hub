
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    const openSignInBtn = document.getElementById('open-signin');
    if (openSignInBtn) openSignInBtn.click();
    setIsOpen(false);
  };

  const handleRegister = () => {
    const openRegisterBtn = document.getElementById('open-register');
    if (openRegisterBtn) openRegisterBtn.click();
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Virtual Cards', href: '#cards' },
    { name: 'Gift Cards', href: '#giftcards' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="text-2xl font-bold gradient-text">PulsePay</div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-fintech-purple font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-fintech-purple text-fintech-purple hover:bg-fintech-purple/10"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button 
              className="bg-fintech-purple hover:bg-fintech-deep-purple text-white"
              onClick={handleRegister}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute w-full shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex flex-col">
          <div className="flex flex-col space-y-4 mb-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-fintech-purple font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <Button 
              variant="outline" 
              className="border-fintech-purple text-fintech-purple hover:bg-fintech-purple/10 w-full"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button 
              className="bg-fintech-purple hover:bg-fintech-deep-purple text-white w-full"
              onClick={handleRegister}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
