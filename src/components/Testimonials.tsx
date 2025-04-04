
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      text: "PulsePay has transformed how I manage my business finances. The virtual cards are perfect for online subscriptions, and the bill payment feature saves me so much time!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Digital Nomad",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      text: "As someone who travels frequently, the ability to create dollar virtual cards has been invaluable. The app is intuitive, and customer support is exceptional.",
      rating: 5,
    },
    {
      name: "Tomi Adeyemi",
      role: "Student",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      text: "I love how easy it is to buy data bundles and pay for my subscriptions. The student discount on transaction fees is also a huge bonus!",
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        fill={index < rating ? "#F59E0B" : "none"} 
        stroke={index < rating ? "#F59E0B" : "#CBD5E1"} 
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-fintech-purple/20 bg-fintech-purple/10 px-4 py-1 mb-4">
            <div className="h-2 w-2 rounded-full bg-fintech-purple"></div>
            <span className="ml-2 text-sm font-medium text-fintech-purple">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied customers who have transformed their financial experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-card p-8 relative flex flex-col h-full card-hover"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-fintech-purple to-fintech-teal rounded-full p-2 text-white">
                <Quote size={20} />
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.text}</p>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-6 gap-4 items-center opacity-70">
            {['Flutterwave', 'Paystack', 'Stripe', 'Visa', 'Mastercard', 'Interswitch'].map((partner, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="h-8 bg-gray-300/50 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
