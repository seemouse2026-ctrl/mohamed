import React from 'react';
import { Course } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border border-black/5 soft-shadow bg-white rounded-[20px] group">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-accent text-text-main hover:bg-accent border-none shadow-sm text-[10px] font-bold uppercase py-1 px-2.5 rounded-[4px]">
              {course.category}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="p-5 pb-2">
          <div className="flex items-center space-x-1 text-yellow-400 mb-2">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-bold text-text-main">{course.rating}</span>
            <span className="text-xs text-text-muted">({course.students} students)</span>
          </div>
          <h3 className="text-lg font-bold text-text-main leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-text-muted mt-2">By {course.instructor}</p>
        </CardHeader>

        <CardContent className="p-5 pt-2">
          <div className="flex items-center space-x-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Clock size={14} /> 12h 30m
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} /> {course.students}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {typeof course.price === 'number' ? `$${course.price}` : course.price}
          </span>
          <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
            Enroll Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
