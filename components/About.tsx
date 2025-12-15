import React from 'react';
import { Clock, DollarSign, Home, Laptop } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Online Writing Jobs?</h2>
          <p className="text-slate-600 text-lg">
            Unlock the freedom of working on your own terms. Whether you're a student, stay-at-home parent, or looking for a side hustle, our platform connects you with opportunities suited for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Home className="w-8 h-8 text-blue-600" />,
              title: "Work From Home",
              desc: "No commuting. Work from the comfort of your living room or anywhere with internet."
            },
            {
              icon: <Clock className="w-8 h-8 text-green-600" />,
              title: "Flexible Schedule",
              desc: "Be your own boss. Choose hours that fit your lifestyle, day or night."
            },
            {
              icon: <DollarSign className="w-8 h-8 text-blue-600" />,
              title: "Reliable Payments",
              desc: "Get paid securely for every completed task. Multiple payment methods available."
            },
            {
              icon: <Laptop className="w-8 h-8 text-green-600" />,
              title: "Simple Tasks",
              desc: "From data entry to article writing, find tasks that match your skill level."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 bg-slate-50 rounded-xl w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;