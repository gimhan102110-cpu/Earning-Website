import React from 'react';
import Button from './Button';
import { LINKS } from '../constants';
import { PenTool, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-green-50 opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now Hiring: Content Writers & Typists
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
            Earn Online with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Content Writing
            </span> & 
            <span className="text-slate-800"> Typesetting Jobs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Work from home • Flexible hours • No experience required
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={LINKS.JOIN_NOW} size="lg" variant="primary" showIcon>
              Join Now
            </Button>
            <Button href={LINKS.READ_MORE} size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Verified Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Remote Work</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Daily Tasks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;