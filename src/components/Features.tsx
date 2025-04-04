
import React from 'react';
import ServiceCard from './ServiceCard';
import { Smartphone, CreditCard, Receipt, Tv, Lightbulb, Gift, ArrowDownToLine } from 'lucide-react';
import { cn } from "@/lib/utils";

const Features = () => {
  const services = [
    {
      title: "Airtime & Data",
      description: "Purchase airtime and data bundles for all networks instantly with the best rates.",
      icon: Smartphone,
      color: "fintech-purple",
    },
    {
      title: "Virtual Cards",
      description: "Create virtual naira and dollar cards for your local and international transactions.",
      icon: CreditCard,
      color: "fintech-teal",
    },
    {
      title: "Bills Payment",
      description: "Pay your electricity, water, and other utility bills conveniently from one place.",
      icon: Receipt,
      color: "fintech-purple",
    },
    {
      title: "Cable Subscription",
      description: "Renew your DSTV, GOTV, and Startimes subscriptions in seconds.",
      icon: Tv,
      color: "fintech-teal",
    },
    {
      title: "Value Added Services",
      description: "Access additional financial services designed to maximize your banking experience.",
      icon: Lightbulb,
      color: "fintech-purple",
    },
    {
      title: "Gift Card Redemption",
      description: "Convert your gift cards to cash at competitive rates with fast processing.",
      icon: Gift,
      color: "fintech-teal",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-fintech-purple/20 bg-fintech-purple/10 px-4 py-1 mb-4">
            <div className="h-2 w-2 rounded-full bg-fintech-purple"></div>
            <span className="ml-2 text-sm font-medium text-fintech-purple">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All Your Financial Needs In One Place</h2>
          <p className="text-gray-600 text-lg">
            Access a comprehensive range of digital financial services designed to make your life easier and finances smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "transform transition-all duration-500",
                index % 2 === 0 ? "hover:-translate-y-2" : "hover:-translate-y-2 hover:translate-x-1"
              )}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-fintech-purple to-fintech-teal rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 text-white">
              <h3 className="text-3xl font-bold mb-4">Download Our Mobile App</h3>
              <p className="mb-8 text-white/90">
                Get the full experience with our mobile app. Available for iOS and Android devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-6 py-3 flex items-center">
                  <ArrowDownToLine className="mr-2" />
                  <span>App Store</span>
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-6 py-3 flex items-center">
                  <ArrowDownToLine className="mr-2" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-40 h-80 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-12 border border-white/20"></div>
                <div className="w-40 h-80 bg-white/30 backdrop-blur-sm rounded-3xl absolute transform -rotate-6 border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
