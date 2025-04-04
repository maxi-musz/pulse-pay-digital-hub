
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, color, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "fintech-card card-gradient card-hover group",
        className
      )}
    >
      <div 
        className={cn(
          "inline-flex items-center justify-center p-3 rounded-xl mb-4",
          `bg-${color}/10`
        )}
      >
        <Icon className={cn("h-6 w-6", `text-${color}`)} />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center text-fintech-purple font-medium">
        <span>Learn more</span>
        <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
