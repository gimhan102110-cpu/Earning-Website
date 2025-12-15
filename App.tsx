import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import JobTypes from './components/JobTypes';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Button from './components/Button';
import { LINKS } from './constants';
import { PenTool } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <PenTool size={20} />
            </div>
            ContentJobs
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#jobs" className="hover:text-blue-600 transition-colors">Jobs</a>
            <a href="#" className="hover:text-blue-600 transition-colors">How it Works</a>
          </div>
          <Button href={LINKS.JOIN_NOW} size="sm">
            Join Now
          </Button>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <About />
        <JobTypes />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;