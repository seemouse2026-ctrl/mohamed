import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { COURSES, CATEGORIES, TESTIMONIALS } from '@/constants';
import CourseCard from '@/components/CourseCard';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Users, 
  Award, 
  Globe,
  Star,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white hero-gradient pt-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-[56px] lg:text-[72px] font-[800] tracking-tight text-text-main leading-[1.1]">
                Unlock Your Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">Premium Content.</span>
              </h1>
              
              <p className="text-[18px] text-text-muted leading-[1.6] max-w-[480px]">
                Experience the next generation of online learning. Interactive courses, elite mentors, and a community dedicated to your growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/courses">
                  <Button size="lg" className="gradient-btn rounded-[8px] px-10 py-7 text-lg shadow-xl hover:scale-105 transition-transform">
                    Explore Courses &rarr;
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-white p-[12px_20px] rounded-[12px] soft-shadow flex items-center gap-[10px]">
                  <div className="w-6 h-6 bg-[#EFF6FF] rounded-[6px] flex items-center justify-center text-primary font-bold text-xs">A</div>
                  <div>
                    <div className="font-bold text-[14px] text-text-main">4.9/5 Rating</div>
                    <div className="text-[11px] text-text-muted">Trusted by 50k+ students</div>
                  </div>
                </div>
                <div className="bg-white p-[12px_20px] rounded-[12px] soft-shadow flex items-center gap-[10px]">
                  <div className="w-6 h-6 bg-[#EFF6FF] rounded-[6px] flex items-center justify-center text-primary font-bold text-xs">B</div>
                  <div>
                    <div className="font-bold text-[14px] text-text-main">Certified</div>
                    <div className="text-[11px] text-text-muted">Global Recognition</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[20px] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/learning/1200/1000" 
                  alt="Learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Bottom Strip) */}
      <section className="h-[120px] bg-[#111827] text-white flex items-center justify-around px-4 lg:px-12">
        {[
          { label: 'Premium Courses', value: '15k+' },
          { label: 'Expert Mentors', value: '450' },
          { label: 'Success Rate', value: '98%' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <span className="text-[28px] font-bold block">{stat.value}</span>
            <span className="text-[12px] opacity-60 uppercase tracking-[1px]">{stat.label}</span>
          </div>
        ))}
        <div className="hidden md:flex items-center gap-3 bg-white/5 p-[12px_20px] rounded-[12px] border border-white/10">
          <div className="w-2 h-2 bg-[#10B981] rounded-full shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" />
          <div>
            <div className="text-[13px] font-semibold">Active Now</div>
            <div className="text-[11px] opacity-70">2,412 students learning right now</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main">Explore Top Categories</h2>
              <p className="text-text-muted max-w-xl">
                Discover courses in various fields and start your learning journey today.
              </p>
            </div>
            <Link to="/courses">
              <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5">
                View All Categories <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl soft-shadow text-center cursor-pointer hover:bg-primary hover:text-white transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-background-alt flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <BookOpen size={24} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-sm tracking-tight">{cat}</h3>
                <p className="text-xs text-text-muted mt-1 group-hover:text-white/80">120+ Courses</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">Most Popular Courses</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Choose from our most popular courses and start learning from the best instructors in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                Browse All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background-alt relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">What Our Students Say</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Don't just take our word for it. Hear from thousands of happy students around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl soft-shadow relative"
              >
                <div className="absolute -top-4 -left-4 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-text-muted italic leading-relaxed mb-8">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="h-12 w-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-text-main">{t.name}</h4>
                    <p className="text-sm text-text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Ready to Start Your <br className="hidden md:block" /> Learning Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join thousands of students and start learning today. Get unlimited access to all courses for a special price.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold shadow-xl">
                    Get Started Now
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-bold">
                    View Courses
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
