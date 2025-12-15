import React from 'react';
import { UserPlus, BookOpenCheck, Laptop2, Wallet } from 'lucide-react';
import Button from './Button';
import { LINKS } from '../constants';

const Step: React.FC<{
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}> = ({ number, title, description, icon, isLast }) => (
  <div className="relative flex flex-col items-center text-center p-6 z-10">
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10" style={{ left: '50%' }}></div>
    )}
    <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
      {icon}
    </div>
    <span className="text-sm font-bold text-slate-400 mb-2">STEP {number}</span>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 max-w-xs">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="text-slate-600 mt-4 text-lg">Start your journey in 4 simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <Step 
            number="01" 
            title="Sign Up" 
            description="Create your free account to access the job portal." 
            icon={<UserPlus className="w-8 h-8" />}
          />
          <Step 
            number="02" 
            title="Read Instructions" 
            description="Review the guidelines for your chosen job type." 
            icon={<BookOpenCheck className="w-8 h-8" />}
          />
          <Step 
            number="03" 
            title="Start Working" 
            description="Complete tasks at your own pace and submit them." 
            icon={<Laptop2 className="w-8 h-8" />}
          />
          <Step 
            number="04" 
            title="Get Paid" 
            description="Receive your earnings directly to your preferred account." 
            icon={<Wallet className="w-8 h-8" />}
            isLast
          />
        </div>

        <div className="text-center">
          <Button href={LINKS.SIGN_UP} size="lg" variant="primary">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;