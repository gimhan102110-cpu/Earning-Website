import React from 'react';
import { FileText, Keyboard, BookOpen, Database } from 'lucide-react';
import Button from './Button';
import { LINKS } from '../constants';

const JobCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: 'blue' | 'green';
}> = ({ icon, title, description, tags, link, color }) => (
  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
    <div className={`h-2 w-full ${color === 'blue' ? 'bg-blue-600' : 'bg-green-500'}`}></div>
    <div className="p-8 flex-1 flex flex-col">
      <div className="mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
          color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
        }`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Button href={link} variant={color === 'blue' ? 'secondary' : 'green'} className="w-full justify-between group">
          Apply Now
          <span className="text-lg">→</span>
        </Button>
      </div>
    </div>
  </div>
);

const JobTypes: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="jobs">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Opportunities Available</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Choose Your Path</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <JobCard 
            icon={<FileText className="w-8 h-8" />}
            title="Content Writing"
            description="Create engaging blog posts, web content, and social media captions. Perfect for creative minds."
            tags={['Blogs', 'Social Media', 'Creative']}
            link={LINKS.APPLY_NOW}
            color="blue"
          />
          <JobCard 
            icon={<Keyboard className="w-8 h-8" />}
            title="Typing / Typesetting"
            description="Convert handwritten or scanned documents into digital formats. Accuracy and speed are key."
            tags={['Data Entry', 'Transcription', 'Typing']}
            link={LINKS.START_EARNING}
            color="green"
          />
          <JobCard 
            icon={<BookOpen className="w-8 h-8" />}
            title="Article Writing"
            description="Research and write informative articles on various topics ranging from health to technology."
            tags={['Research', 'Education', 'Reporting']}
            link={LINKS.READ_MORE}
            color="green"
          />
          <JobCard 
            icon={<Database className="w-8 h-8" />}
            title="Data Entry"
            description="Input data into computer systems accurately. A great entry-level option for beginners."
            tags={['Excel', 'Organization', 'Entry Level']}
            link={LINKS.SIGN_UP}
            color="blue"
          />
        </div>
      </div>
    </section>
  );
};

export default JobTypes;