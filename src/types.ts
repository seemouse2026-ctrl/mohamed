export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number | 'Free';
  category: string;
  image: string;
  rating: number;
  students: number;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
