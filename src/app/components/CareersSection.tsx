import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

const jobOpenings = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full-Time',
    location: 'Remote',
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-Time',
    location: 'New York, NY',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-Time',
    location: 'San Francisco, CA',
  },
  {
    title: 'Data Science Intern',
    type: 'Internship',
    location: 'Remote',
  },
  {
    title: 'Cloud Solutions Architect',
    type: 'Full-Time',
    location: 'Remote',
  },
  {
    title: 'Marketing Intern',
    type: 'Internship',
    location: 'Boston, MA',
  },
];

export function CareersSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [fileName, setFileName] = useState('');

  const filters = ['All', 'Full-Time', 'Internship', 'Remote'];

  const filteredJobs = selectedFilter === 'All'
    ? jobOpenings
    : jobOpenings.filter(
        (job) => job.type === selectedFilter || job.location === selectedFilter
      );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', message: '' });
    setFileName('');
  };

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-[#0a1a2f]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Grow with Us
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Join our innovative team and build the future of technology. We offer competitive benefits, 
            flexible working arrangements, and endless opportunities for growth.
          </p>
        </motion.div>

        {/* Team Photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1666790676906-0295230c121d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3JrcGxhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzY2OTg4MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team at Work"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Job Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedFilter === filter
                  ? 'bg-[#007bff] text-white'
                  : 'bg-white text-[#0a1a2f] hover:bg-gray-100 border border-gray-200'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3
                className="mb-2 text-[#0a1a2f]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#007bff]/10 text-[#007bff] rounded-full text-sm">
                  {job.type}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {job.location}
                </span>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const element = document.getElementById('application-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div
          id="application-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <h3
            className="text-center mb-6 text-[#0a1a2f]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Submit Your Resume
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="resume">Upload Resume</Label>
              <div className="mt-1 relative">
                <Input
                  id="resume"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center gap-2 w-full p-4 border-2 border-dashed border-gray-300 rounded-md hover:border-[#007bff] cursor-pointer transition-colors"
                >
                  <Upload className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">
                    {fileName || 'Click to upload resume (PDF, DOC)'}
                  </span>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Cover Letter / Message</Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="mt-1"
                placeholder="Tell us why you'd be a great fit..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white"
            >
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
