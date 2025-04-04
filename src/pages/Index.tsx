
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <div id="cards" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-fintech-purple/20 bg-fintech-purple/10 px-4 py-1 mb-4">
              <div className="h-2 w-2 rounded-full bg-fintech-purple"></div>
              <span className="ml-2 text-sm font-medium text-fintech-purple">Virtual Cards</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop Globally with Virtual Cards</h2>
            <p className="text-gray-600 text-lg">
              Create virtual naira and dollar cards for seamless online shopping, subscriptions, and international payments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-fintech-purple/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-fintech-purple">01</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multiple Currencies</h3>
                    <p className="text-gray-600">Create both Naira and Dollar virtual cards to suit your needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-fintech-purple/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-fintech-purple">02</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Creation</h3>
                    <p className="text-gray-600">Get your virtual card in seconds and start using it immediately.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-fintech-purple/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-fintech-purple">03</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-gray-600">Advanced security features to keep your funds and data safe.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-fintech-purple/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-fintech-purple">04</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Acceptance</h3>
                    <p className="text-gray-600">Use your virtual card on any platform that accepts Visa or Mastercard.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-fintech-teal/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl"></div>

              <div className="relative animate-float">
                {/* Main Card */}
                <div className="bg-gradient-to-r from-fintech-purple to-fintech-deep-purple rounded-2xl aspect-[16/9] w-full max-w-md mx-auto shadow-xl p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="h-6 w-10 bg-white/20 rounded"></div>
                      <div className="h-4 w-32 bg-white/10 rounded"></div>
                    </div>
                    <div className="text-xs opacity-80">VIRTUAL</div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex space-x-4">
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-70">CARD HOLDER</div>
                      <div className="text-sm font-medium mt-1">JOHN DOE</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-yellow-400/80 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-yellow-500/80"></div>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Card */}
                <div className="absolute top-10 -right-10 bg-gradient-to-r from-fintech-teal to-fintech-deep-teal rounded-2xl aspect-[16/9] w-64 shadow-lg opacity-70 transform rotate-12 p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                    </div>
                    <div className="text-xs opacity-80">DOLLAR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="giftcards" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-fintech-teal/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {['Amazon', 'iTunes', 'Google Play', 'Steam'].map((card, i) => (
                    <div key={i} className={`bg-gradient-to-br ${i % 2 ? 'from-fintech-teal to-fintech-deep-teal' : 'from-fintech-purple to-fintech-deep-purple'} rounded-xl p-6 text-white ${i % 3 === 0 ? 'col-span-2' : ''}`}>
                      <div className="h-8 w-16 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 w-24 bg-white/10 rounded"></div>
                      <div className="mt-4 text-lg font-semibold">{card}</div>
                      <div className="text-sm opacity-80">Gift Card</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center rounded-full border border-fintech-purple/20 bg-fintech-purple/10 px-4 py-1 mb-4">
                <div className="h-2 w-2 rounded-full bg-fintech-purple"></div>
                <span className="ml-2 text-sm font-medium text-fintech-purple">Gift Cards</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Convert Gift Cards to Cash</h2>
              <p className="text-gray-600 text-lg mb-8">
                Redeem your gift cards for instant cash at competitive rates. We support all major gift card brands with fast processing times.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <div className="h-10 w-10 rounded-full bg-fintech-purple/10 text-fintech-purple flex items-center justify-center mr-4">
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Select Card Type</h3>
                    <p className="text-gray-600">Choose from our wide range of supported gift cards.</p>
                  </div>
                </div>
                
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <div className="h-10 w-10 rounded-full bg-fintech-purple/10 text-fintech-purple flex items-center justify-center mr-4">
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Upload Card Details</h3>
                    <p className="text-gray-600">Submit the required information securely.</p>
                  </div>
                </div>
                
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <div className="h-10 w-10 rounded-full bg-fintech-purple/10 text-fintech-purple flex items-center justify-center mr-4">
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Get Instant Payment</h3>
                    <p className="text-gray-600">Receive cash directly into your PulsePay wallet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
