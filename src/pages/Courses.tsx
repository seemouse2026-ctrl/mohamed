import { useState } from 'react';
import { COURSES, CATEGORIES } from '@/constants';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background-soft min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight">
              Explore Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-lg text-text-muted">
              Choose from over 1,200 online video courses with new additions published every month.
            </p>
            
            <div className="relative max-w-2xl mx-auto mt-8">
              <Input
                type="text"
                placeholder="Search for anything..."
                className="w-full h-14 pl-12 pr-4 rounded-[12px] border-none bg-background-alt soft-shadow focus-visible:ring-2 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                <Filter size={18} /> Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-4 py-2 rounded-[8px] text-sm font-medium transition-all ${
                    selectedCategory === 'All' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-text-muted hover:bg-white hover:text-primary'
                  }`}
                >
                  All Categories
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-[8px] text-sm font-medium transition-all ${
                      selectedCategory === cat 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-text-muted hover:bg-white hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-[20px] text-white shadow-lg">
              <h4 className="font-bold mb-2">Special Offer!</h4>
              <p className="text-sm text-white/80 mb-4">Get 50% off on all premium courses this week.</p>
              <Button variant="secondary" className="w-full rounded-[8px] bg-white text-primary hover:bg-white/90">
                Claim Offer
              </Button>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8">
              <p className="text-text-muted">
                Showing <span className="font-bold text-text-main">{filteredCourses.length}</span> courses
              </p>
              <Button variant="outline" className="rounded-[8px] flex items-center gap-2">
                <SlidersHorizontal size={16} /> Sort by: Popularity
              </Button>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[20px] p-20 text-center space-y-4 soft-shadow">
                <div className="h-20 w-20 bg-background-alt rounded-full flex items-center justify-center mx-auto text-text-muted">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-bold text-text-main">No courses found</h3>
                <p className="text-text-muted">Try adjusting your search or filters to find what you're looking for.</p>
                <Button 
                  variant="link" 
                  className="text-primary font-bold"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
