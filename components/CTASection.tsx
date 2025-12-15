import React from 'react';
import Button from './Button';
import { LINKS } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Earning?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Don't wait. Thousands of writing and data entry jobs are waiting for you. 
          Join our community of freelancers today.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Button href={LINKS.JOIN_NOW} variant="green" size="lg">
            Join Now
          </Button>
          <Button href={LINKS.READ_MORE} variant="secondary" size="lg">
            Read More
          </Button>
          <Button href={LINKS.SIGN_UP} variant="green" size="lg">
            Sign Up
          </Button>
          <Button href={LINKS.APPLY_NOW} variant="primary" size="lg" className="border-2 border-white border-opacity-20">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;