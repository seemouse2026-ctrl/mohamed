import { Course, BlogPost, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Modern Web Development with React',
    instructor: 'Sarah Johnson',
    price: 49.99,
    category: 'Development',
    image: 'https://picsum.photos/seed/webdev/800/600',
    rating: 4.8,
    students: 1240,
    description: 'Master modern web development using React, Tailwind CSS, and TypeScript.'
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Michael Chen',
    price: 'Free',
    category: 'Design',
    image: 'https://picsum.photos/seed/design/800/600',
    rating: 4.9,
    students: 850,
    description: 'Learn the principles of great user interface and experience design.'
  },
  {
    id: '3',
    title: 'Data Science & Machine Learning',
    instructor: 'Dr. Emily White',
    price: 79.99,
    category: 'Data Science',
    image: 'https://picsum.photos/seed/data/800/600',
    rating: 4.7,
    students: 2100,
    description: 'A comprehensive guide to data analysis and machine learning models.'
  },
  {
    id: '4',
    title: 'Digital Marketing Masterclass',
    instructor: 'Alex Rivera',
    price: 29.99,
    category: 'Marketing',
    image: 'https://picsum.photos/seed/marketing/800/600',
    rating: 4.6,
    students: 3200,
    description: 'Grow your business with advanced digital marketing strategies.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of E-Learning in 2026',
    excerpt: 'How AI and immersive technologies are changing the way we learn online.',
    category: 'Technology',
    date: 'Oct 12, 2025',
    image: 'https://picsum.photos/seed/tech/800/600',
    author: 'CajaaibGude Team'
  },
  {
    id: '2',
    title: '10 Tips for Staying Productive While Learning',
    excerpt: 'Practical advice for online students to maintain focus and achieve goals.',
    category: 'Education',
    date: 'Oct 10, 2025',
    image: 'https://picsum.photos/seed/study/800/600',
    author: 'Sarah Johnson'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Wilson',
    role: 'Software Engineer',
    content: 'CajaaibGude transformed my career. The courses are practical and the instructors are top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    role: 'Graphic Designer',
    content: 'The UI/UX course was exactly what I needed to level up my design skills. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const CATEGORIES = [
  'Development',
  'Design',
  'Marketing',
  'Business',
  'Data Science',
  'Personal Growth'
];
