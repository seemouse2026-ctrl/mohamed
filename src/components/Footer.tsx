import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <BookOpen size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-text-main">
                Cajaaib<span className="text-primary">Gude</span>
              </span>
            </Link>
            <p className="text-text-muted leading-relaxed">
              Empowering learners worldwide with high-quality, accessible education. Join our community of over 100,000 students today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-text-muted hover:text-primary transition-colors">Browse Courses</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-text-muted hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Become an Instructor</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Contact Support</Link></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main mb-6">Stay Updated</h4>
            <p className="text-text-muted mb-4">Subscribe to our newsletter for the latest courses and updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-background-soft border rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <button className="w-full gradient-btn rounded-xl py-3 font-semibold shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-text-muted">
            © {currentYear} CajaaibGude. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1">
              <Github size={16} /> Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
