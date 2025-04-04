
import React from 'react';
import { ArrowRight, Shield, Clock, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security protocols to ensure your data and money are always protected."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Designed for the modern user, our platform works seamlessly on all devices."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fintech-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-fintech-purple to-fintech-teal rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Experience?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of users who have simplified their financial life with our comprehensive platform.
              </p>
              <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90 font-bold group">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-0 bg-gradient-to-br from-black/20 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Mobile Banking" 
                  className="object-cover w-full h-full opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-fintech-purple/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-card p-8 card-hover">
                <div className="inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-fintech-purple/10">
                  <feature.icon className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
