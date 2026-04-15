import { motion } from 'motion/react';
import { Award, Target, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-background-alt py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-text-main tracking-tight"
            >
              Our Mission is to <span className="text-primary">Empower</span> Every Learner
            </motion.h1>
            <p className="text-xl text-text-muted leading-relaxed">
              CajaaibGude was founded on the belief that high-quality education should be accessible to everyone, regardless of their location or background.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/team/1000/800" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main">The CajaaibGude Story</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Started in 2015 as a small project to help local students, CajaaibGude has grown into a global platform serving millions of learners worldwide. Our name, derived from words meaning "Wonderful Guide," reflects our commitment to being the best companion in your learning journey.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                We partner with top industry experts and institutions to bring you the most relevant and up-to-date content in technology, business, design, and more.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-primary">120K+</h4>
                  <p className="text-sm text-text-muted font-bold uppercase">Active Students</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold text-secondary">1.2K+</h4>
                  <p className="text-sm text-text-muted font-bold uppercase">Expert Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Student First', desc: 'Every decision we make starts with how it benefits our learners.' },
              { icon: Target, title: 'Quality Content', desc: 'We maintain high standards for every course on our platform.' },
              { icon: Users, title: 'Community', desc: 'Learning is better together. We foster a supportive global community.' },
              { icon: Award, title: 'Excellence', desc: 'We strive for excellence in everything we do, from tech to teaching.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl soft-shadow text-center space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-background-alt text-primary flex items-center justify-center mx-auto">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-text-main">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
